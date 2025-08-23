<template>
    <div class="custom-toast">
        <div v-if="getIsToastVisible && getMessage!.detail" class="custom-toast-item">
            <div :class="'custom-toast-message ' + (getMessage!.type == 'info' ? 'custom-toast-message--info' : 'custom-toast-message--success') ">
                <div class="custom-toast-message-content">
                    
                    <img class="custom-toast-icon" src="/src/assets/icons/info.svg" alt="Image of Info icon" />   
                    
                    <div class="custom-toast-message-text">
                        <span class="custom-toast-summary">{{ getMessage!.summary }}</span>
                        <span class="custom-toast-detail">{{ getMessage!.detail }}</span>
                        <div v-if="getMessage!.actions">
                          <button @click="() => action.handler(action.to ?? null)" :class="'btn me-2 ' +(action.classNames ?? 'btn-primary')" v-for="action in getMessage!.actions">{{action.content}}</button>
                        </div>
                    </div>

                    <div class="custom-toast-btn-wrapper">
                        <button class="custom-toast-button" @click="hideToastNow">
                        <img src="/src/assets/icons/close-icon.svg" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>
import { onMounted, watch } from 'vue';
import { gsap } from "gsap"
import { storeToRefs } from 'pinia'
import { useMessagesStore } from '../stores/messages-store'
const messagesStore = useMessagesStore()
const { hideToastNow } = messagesStore
const { getIsToastVisible , getMessage } = storeToRefs(messagesStore)


onMounted(() => {
   console.log("[Toast] mounted")
})


</script>

<style lang="css">

.custom-toast { 
  border-width: 1px;
  white-space: pre-line;
  word-break: break-word;
  position: fixed;
  width: 25rem;
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 1104;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb;


  .custom-toast-message {

    border-width: 1px;
    border-style: solid;
    backdrop-filter: blur(10px);
    border-radius: 6px;
    margin: 0 0 1rem 0;
    transform: translateY(0px);
    opacity: 1;

  }
   .custom-toast-message--success {
    background: color-mix(in srgb, #22c55e,transparent 84%);
    border-color: color-mix(in srgb, #15803d,transparent 64%);
    color: #22c55e;
    box-shadow: 0px 4px 8px 0px color-mix(in srgb, #22c55e,transparent 96%);
   }

  .custom-toast-message--info {
    background: color-mix(in srgb, #3b82f6,transparent 84%);
    border-color: color-mix(in srgb, #1d4ed8,transparent 64%);
    color: #3b82f6;
    box-shadow: 0px 4px 8px 0px color-mix(in srgb, #3b82f6,transparent 96%);
  
  }


  .custom-toast-message-content {
    display: flex;
    align-items: flex-start;
    padding: 0.75rem;
    gap: 0.5rem;
  }

  .custom-toast-item  {
    border-width: 0;
    border-style: solid;
    border-color: #e5e7eb;
  }

  .custom-toast-summary {
    font-weight: 500;
    font-size: 1rem;
  }

  .custom-toast-detail {
    color: #000000;
    font-weight: 500;
    font-size: 0.875rem;
  }

  .custom-toast-icon {

    display: inline-block;
    vertical-align: baseline;
    font-size: 1.125rem;
    font-size: 1.125rem;
    width: 1.125rem;

  }

  .custom-toast-message-text {

    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }


  .custom-toast-button {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    background: transparent;
    transition: background 0.2s, color 0.2s , outline-color 0.2s, box-shadow 0.2s;
    outline-color: transparent;
    color: inherit;
    width: 1.75rem;
    height:  1.75rem;
    border-radius: 50%;
    margin: -25% 0 0 0;
    font-family: inherit;
    font-feature-settings: inherit;
    right: -25%;
    text-transform: none;
    padding: 0;
    border: none;
    user-select: none;
  }

}


</style>