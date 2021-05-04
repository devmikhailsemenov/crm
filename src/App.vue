<template>
	<component :is="layout">
		<router-view />
	</component>
</template>

<script>
	import { defineComponent, computed } from 'vue';
	import { useRoute } from 'vue-router'
	import Login from '@/layouts/Login';
	import Main from '@/layouts/Main';

	export default defineComponent({
		components: { Login, Main },
		setup() {
			const route = useRoute();
			const layout = computed(() => route.meta?.layout ?? 'main');

			return { layout };
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
