<template>
    <slot :classes="s.root" :onMouseMove="onMouseMove" />
</template>

<script lang="ts">
    import { defineComponent, ref, reactive } from 'vue';

    interface Lamp {
        size: string;
        x: string;
        y: string;
    }

    export default defineComponent({
        name: 'HoverLamp',
        setup() {
            const lamp = reactive<Lamp>({
                size: '0px',
                x: '0px',
                y: '0px',
            });
            const lampRef = ref<HTMLElement | null>(null);

            const onMouseMove = (event: MouseEvent): void => {
                const elem = event.target as HTMLElement;
                const { width, height, left, top }: DOMRect = elem.getBoundingClientRect();
                const maxSize: number = Math.max(width, height);

                lamp.size = `${maxSize}px`;
                lamp.x = `${event.pageX - (left + pageXOffset)}px`;
                lamp.y = `${event.pageY - (top + pageYOffset)}px`;
            };

            return {
                lamp,
                onMouseMove,
                lampRef,
            };
        },
    });
</script>

<style lang="scss" module="s">
    .root {
        position: relative;
        overflow: hidden;
        z-index: 2;
        cursor: pointer;

        &::before {
            content: '';
            pointer-events: none;
            position: absolute;
            left: v-bind('lamp.x');
            top: v-bind('lamp.y');
            width: v-bind('lamp.size');
            height: v-bind('lamp.size');
            display: block;
            transform: translate(-50%, -50%);
            background: radial-gradient(circle at center, $app-color-white 0%, transparent 60%);
            z-index: -1;
            opacity: 0;
            transition: opacity 0.3s linear;
        }

        &::after {
            content: '';
            display: block;
            position: absolute;
            z-index: -1;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            border-radius: inherit;
            transition: opacity 0.3s ease-out;
            background: inherit;
            margin: 1.6px;
            opacity: 0;
        }

        &:hover {
            transition: opacity 0.3s ease-out;

            &::before {
                opacity: 0.8;
            }

            &::after {
                opacity: 0.5;
                transition-delay: 0s;
            }
        }
    }
</style>
