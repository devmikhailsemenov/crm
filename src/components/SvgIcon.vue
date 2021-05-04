<template>
	<svg :class="className" xmlns="http://www.w3.org/2000/svg">
		<title v-if="title">{{ title }}</title>
		<use :xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink" />
	</svg>
</template>

<script lang="ts">
	export default {
		name: "SvgIcon",
		props: {
			name: {
				type: String,
				required: true,
			},

			title: {
				type: String,
				default: null,
			},
		},
		computed: {
			iconPath(): string {
				return `#icon-${this.name}`;
			},
			className(): string {
				return "svg-icon svg-icon--" + this.name;
			},
		},
	};
</script>

<style>
	.svg-icon {
		fill: currentColor;
		height: 24px;
		width: 24px;
	}
</style>