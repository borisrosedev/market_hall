// composables/useOrderService.ts
import { ref, computed } from 'vue'


const orderProgress = ref(0)
const userAnswers = ref<Record<string, any>>({})

export const useOrderService = () => {
  const getOrderProgress = computed(() => orderProgress.value)
  const getUserAnswers   = computed(() => userAnswers.value)

  const setUserAnswers = (value: Record<string, any>) => {
    userAnswers.value = value
  }

  const setOrderProgress = (delta: number) => {
    orderProgress.value = Math.max(0, Math.min(100, orderProgress.value + delta))
  }

  return {
    getOrderProgress,
    getUserAnswers,
    setUserAnswers,
    setOrderProgress,
  }
}
