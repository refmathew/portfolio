<static-query>
query{ 
  works: allWork(order: ASC){
    edges {
      node{ 
        name
				link
				imgNames
				responsibilities
				techStack
				description
      }
    } 
  }
  projects: allProject(order: ASC){
    edges {
      node{ 
        name
				link
				imgNames
				responsibilities
				techStack
				description
      }
    } 
  }
}
</static-query>

<script>
import CustomSection from "../components/views/whatIveMade/CustomSection.vue";
import Projects from "../components/views/whatIveMade/Projects.vue";

export default {
	components: { CustomSection, Projects },
	props: ["pageTitle"],
};
</script>

<template>
	<div
		class="page page--what-ive-made"
		v-show="pageTitle === 'What I\'ve Made'"
		v-if="this.$route.path === '/what-ive-made'"
	>
		<Projects heading="Work" :projects="this.$static.works.edges" />
		<Projects
			class="projects-section"
			heading="Projects"
			:projects="this.$static.projects.edges"
		/>
	</div>
</template>

<style lang="scss" scoped>
@use "~/assets/styles/abstracts/mixins" as *;

.projects-section {
	@include for-size(desktop) {
		margin-top: -25.6rem;
	}
}
</style>
