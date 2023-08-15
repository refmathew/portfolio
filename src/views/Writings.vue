<template>
	<div
		class="page page--writings"
		v-show="pageTitle === 'Writings...'"
		v-if="this.$route.path === '/who-i-am'"
	>
		<main class="hero">
			Coming Soon...
		</main>
	</div>
</template>

<script>
export default {
	props: ["pageTitle"],
};
</script>
