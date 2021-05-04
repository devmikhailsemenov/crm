<template>
    <slot 
        :data="{
            lampClass: s.lampContainer
        }" 
    />
</template>

<script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'HoverLamp',
        setup() {
            return {};
        },
        mounted() {
            console.log(this.$slots.default()[0].el);
        },
    });
</script>

<style lang="scss" module="s">
    .lampContainer {
        position: relative;
        overflow: hidden;
        z-index: 2;
        cursor: pointer;

        &::before {
            pointer-events: none;
            position: absolute;
            display: block;
            transform: translate(-50%, -50%);
            background: radial-gradient(circle at center, #fff 0%, transparent 60%);
            mix-blend-mode: screen;
            z-index: -1;
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
            &::after {
                opacity: 0.75;
                transition-delay: 0s;
            }
        }
    }
</style>
