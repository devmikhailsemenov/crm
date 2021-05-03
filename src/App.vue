<template>
	<div :class="$s.item">
		<UIButton>fgdfgdfg</UIButton>
	</div>
</template>

<script>
	import { defineComponent } from 'vue';

	export default defineComponent({
		setup() {
			return {};
		},
	});
</script>

<style lang="scss" module="$s">
	.item {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }
</style>
