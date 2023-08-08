<template>
	<custom-section
		class="custom-section"
		:is-last-custom-section="isLastCustomSection"
		:section-name="sectionName"
		:section-heading="sectionHeading"
	>
		<div class="custom-section__logos">
			<img
				v-for="logo in sectionLogos"
				:src="require(`~/assets/img/${sectionName}-${logo}.svg`)"
				:alt="logo"
				:title="logo[0].toUpperCase() + logo.slice(1)"
			/>
		</div>
	</custom-section>
</template>

<script>
import CustomSection from "~/components/CustomSection";

export default {
	components: { CustomSection },
	props: [
		"isLastCustomSection",
		"sectionHeading",
		"sectionLogos",
		"sectionName",
	],
};
</script>

<style lang="scss" scoped>
@use "~/assets/styles/abstracts/mixins" as *;

.custom-section {
	margin-bottom: 3.2rem;
	@include for-size(tablet) {
		margin-bottom: 4rem;
	}
	@include for-size(desktop) {
		margin-bottom: 8rem;
	}

	&__logos {
		margin-top: 1.6rem;
		@include for-size(tablet) {
			margin-top: 2rem;
		}
		@include for-size(desktop) {
			margin-top: 2.4rem;
		}
	}
}
</style>
