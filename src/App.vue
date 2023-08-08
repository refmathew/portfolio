<template>
	<Layout>
		<OverlaidCarousel />
		<router-view />
	</Layout>
</template>

<script>
import OverlaidCarousel from "./components/views/whatIveMade/OverlaidCarousel.vue";
export default {
	components: { OverlaidCarousel },
};
</script>
