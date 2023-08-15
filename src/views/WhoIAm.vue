<template>
	<div
		:class="['page', 'page--who-i-am', 'page--who-i-am--to']"
		v-show="pageTitle === 'Who I Am'"
		v-if="this.$route.path === '/who-i-am'"
	>
		<hero />
		<custom-section
			class="section--frontend"
			:is-last-custom-section="false"
			section-name="frontend"
			section-heading="Frontend proficiency I've gained"
			:section-logos="frontend"
		/>
		<custom-section
			class="section--backend"
			:is-last-custom-section="false"
			section-name="backend"
			section-heading="Backend technologies I've used"
			:section-logos="backend"
		/>
		<custom-section
			class="section--design"
			:is-last-custom-section="false"
			section-name="design"
			section-heading="Design tools I love"
			:section-logos="design"
		/>
		<custom-section
			class="section--misc"
			:is-last-custom-section="true"
			section-name="misc"
			section-heading="Miscellaneous"
			:section-logos="misc"
		/>
	</div>
</template>

<script>
import Hero from "../components/views/whoIAm/Hero";
import CustomSection from "../components/views/whoIAm/CustomSection";

export default {
	components: {
		Hero,
		CustomSection,
	},
	data() {
		return {
			frontend: [
				"vue",
				"nuxt",
				"pinia",
				"sass",
				"javascript",
				"gridsome",
				"quasar",
				"html",
			],
			backend: ["node", "express", "mongodb", "sqlite"],
			design: ["figma", "penpot"],
			misc: ["linux", "git", "neovim", "vscode", "netlify", "postman"],
		};
	},
	props: ["pageTitle"],
};
</script>

<style lang="scss" scoped>
@use "~/assets/styles/abstracts/mixins" as *;

.section {
	&--frontend {
		margin-top: 6.4rem;
		@include for-size(tablet) {
			margin-top: 8rem;
		}
		@include for-size(desktop) {
			margin-top: 12.8rem;
		}
	}
}
</style>
