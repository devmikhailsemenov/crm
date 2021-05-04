import { ref, computed, onMounted, onUnmounted } from 'vue';
import { MONTH_NAMES } from '@/constants/date';

export const useCurrentTime = () => {
    const currentTime = ref<Date>(new Date());

    const year = computed<number>(() => currentTime.value.getFullYear());
    const date = computed<string>(() => `${currentTime.value.getDate()} ${MONTH_NAMES[currentTime.value.getMonth()]}`);
    const time = computed<string>(() => currentTime.value.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));

    let interval: number;

    onMounted(() => {
        interval = setInterval(() => (currentTime.value = new Date()), 1000);
    });

    onUnmounted(() => {
        clearInterval(interval);
    });

    return { year, date, time };
};
