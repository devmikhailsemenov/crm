<template>
	<component
		:is="tag"
        v-bind="$attrs"
		:class="[
			$s.button,
			{
				[$s[`button_${kind}`]]: kind,
			},
		]"
        @click="$emit('click', $event)"
	>
		<slot />
	</component>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';

	export default defineComponent({
		name: 'UIButton',
		props: {
			tag: {
				type: String,
				default: 'button',
				validator: (val: string) => ['button', 'router-link', 'a', 'span'].includes(val),
			},
			kind: {
				type: String,
				default: 'green',
				validator: (val: string) => ['green', 'blue', 'red'].includes(val),
			},
			radius: { type: String, default: '25px' },
			height: { type: String, default: '40px' },
		},
	});
</script>

<style lang="scss" module="$s">
    $border-size: 1px;

	.button {
		position: relative;
		display: inline-block;
		border-radius: v-bind(radius);
		height: v-bind(height);
		line-height: v-bind(height) - $border-size;
        color: $app-color-white;
		background-size: 120% 120%;
		cursor: pointer;
	}

	.button_green {
		background: linear-gradient(309deg, #b4ec51 0%, #79bf38 68%, #66af30 100%) center no-repeat;
		box-shadow: 2px 8px 15px -2px rgba(#6db533, 0.4);
        border: $border-size solid #9ed95f;
	}
</style>
