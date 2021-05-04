<template>
    <div :class="[s.root, { [s[`root_noShadow`]]: noShadow }]">
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'UICard',
        props: {
            noShadow: { type: Boolean, default: false },
        },
    };
</script>

<style lang="scss" module="s">
    .root {
        background-color: $app-color-white;
        border-radius: 4px;
        box-shadow: 0 0 5px $app-color-grey--10;
    }

    .root_noShadow {
        box-shadow: none;
    }
</style>
