<template>
  
  <ToastOverlay />
  <NavBar />
  <RouterView />
  <!--<FooterBar />-->
</template>
<script setup lang="ts">
import NavBar from "./layout/NavBar.vue";
import ToastOverlay from "./layout/ToastOverlay.vue";
import FooterBar from "./layout/FooterBar.vue";
import { onMounted, onBeforeUnmount, ref } from "vue";
import { useMessagesStore } from "./stores/messages-store";


const { showToast } = useMessagesStore();

const sseRef = ref<EventSource | null>(null);
let retryDelay = 1000; // 1s → backoff max 30s
let retryTimer: number | null = null;
let isConnecting = false;

function connectSSE() {
  if (isConnecting || sseRef.value) return; // évite double connexion (HMR / multi-mount)
  isConnecting = true;

  
  const es = new EventSource("/api/v1/notifications/stream", { withCredentials: true });

  es.addEventListener("open", () => {
    // backoff reset when success
    retryDelay = 1000;
    isConnecting = false;
    showToast({ type: "success", summary: "Notifications.", detail: "Testing connection" });
  });

  es.addEventListener("notification.created", (event: MessageEvent) => {
    const notif = JSON.parse(event.data);
    console.log("Nouvelle notification :", notif);
    showToast({ type: "info", detail: `🔔 Notif`, summary: 'Notification' });
  });

  es.addEventListener("error", () => {
    // readyState: 0=CONNECTING, 1=OPEN, 2=CLOSED
    // browser tries auto-reconnection
    // if eventsource turns closed, manual backoff
    if (es.readyState === EventSource.CLOSED) {
      cleanupSSE(); // shut and clean
      scheduleReconnect();
    }
  });

  sseRef.value = es;
}

function scheduleReconnect() {
  if (retryTimer) return;
  retryTimer = window.setTimeout(() => {
    retryTimer = null;
    retryDelay = Math.min(retryDelay * 2, 30000); // backoff max 30s
    connectSSE();
  }, retryDelay) as unknown as number;
}

function cleanupSSE() {
  if (sseRef.value) {
    sseRef.value.close();
    sseRef.value = null;
  }
  if (retryTimer) {
    clearTimeout(retryTimer);
    retryTimer = null;
  }
  isConnecting = false;
}

onMounted(() => {
  console.log("[App] mounted");
  connectSSE();
});

onBeforeUnmount(() => {
  cleanupSSE();
});
</script>

