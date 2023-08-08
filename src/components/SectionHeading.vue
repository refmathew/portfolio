<template>
	<h2 class="custom-section__heading">{{ sectionHeading }}</h2>
</template>

<script>
export default {
	name: "SectionHeading",
	props: ["sectionHeading"],
};
</script>

<style lang="scss" scoped>
@use "~/assets/styles/abstracts/mixins" as *;

.custom-section__heading {
	font-size: 1.6rem;
	@include for-size(tablet) {
		font-size: 2rem;
	}
	@include for-size(desktop) {
		font-size: 2.4rem;
	}
}
</style>
