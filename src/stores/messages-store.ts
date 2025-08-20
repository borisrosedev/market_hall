import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import { gsap } from 'gsap'

export type MessageType = 'success' | 'info' | 'warn' | 'secondary' | 'contrast' | 'error'

export interface ToastMessage {
  summary: string
  detail: string
  type?: MessageType
  actions?: any
}

export const useMessagesStore = defineStore('messages', () => {
  const isToastVisible = ref<boolean>(false)
  const message = ref<ToastMessage | null>(null)

  const getIsToastVisible = computed(() => isToastVisible.value)
  const getMessage = computed(() => message.value)

  watch(message, (val) => {
    console.log('[Message store] message changed:', val)
  })

  const setMessage = (ms: ToastMessage): void => {
    message.value = ms
    console.debug('[Message store] setMessage', ms)
  }

  const clearMessage = (): void => {
    message.value = null
  }

  const setIsToastVisible = (val: boolean): void => {
    isToastVisible.value = val
  }

  let hideTimeoutId: ReturnType<typeof setTimeout> | null = null

  /**
   * Show a toast and auto-hide it with GSAP.
   * @param ms toast message
   * @param autoHideMs time before hide (default 2000ms)
   */
  const showToast = (ms: ToastMessage,  autoHide: boolean = false, autoHideMs: number = 2000): void => {
    if (hideTimeoutId) {
      clearTimeout(hideTimeoutId)
      hideTimeoutId = null
    }

    setMessage(ms)
    setIsToastVisible(true)


    gsap.set('.custom-toast', { y: -20, autoAlpha: 1})
    gsap.to('.custom-toast', { y: 0, duration: 0.7, ease: 'power1.out'})

    if(autoHide){
        hideTimeoutId = setTimeout(() => {
            gsap.to('.custom-toast', {
                y: -100,
                autoAlpha: 0,
                duration: 0.35,
                ease: 'power1.out',
                onComplete: () => {
                setIsToastVisible(false)
                clearMessage()
                },
            })
            hideTimeoutId = null
        }, autoHideMs)
    }
  }

  /**
   * Manually hide the toast message
   */
  const hideToastNow = (): void => {
    if (hideTimeoutId) {
      clearTimeout(hideTimeoutId)
      hideTimeoutId = null
    }
    gsap.to('.custom-toast', {
      y: -100,
      autoAlpha: 0,
      duration: 0.25,
      ease: 'power1.out',
      onComplete: () => {
        setIsToastVisible(false)
        clearMessage()
      },
    })
  }

  return {
    // state
    isToastVisible,
    message,

    // getters
    getIsToastVisible,
    getMessage,

    // actions
    setMessage,
    clearMessage,
    setIsToastVisible,
    showToast,
    hideToastNow,
  }
})
