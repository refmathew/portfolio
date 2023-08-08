<script>
import ProjectCard from "./ProjectCard.vue";

export default {
	components: { ProjectCard },
};
</script>

<template>
	<div class="work__wrapper">
		<div class="work">
			<div class="work__heading">Work</div>
			<div class="work__items">
				<ProjectCard
					v-for="work in this.$static.works.edges"
					:project-name="work.node.name"
					:project-link="work.node.link"
					:image-names="work.node.imgNames"
					:responsibilities="work.node.responsibilities"
					:tech-stack="work.node.techStack"
					:description="work.node.description"
				/>
			</div>
		</div>
	</div>
</template>

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
  }
</static-query>

<style lang="scss" scoped>
@use "~/assets/styles/abstracts/mixins" as *;

.work {
	&__wrapper {
		display: grid;
		place-items: center;
		width: 100%;
	}

	display: flex;
	flex-direction: column;
	gap: 3.6rem;
	width: 100%;
	max-width: 144rem;
	padding: 12.8rem 4rem 0;
	@include for-size(tablet) {
		padding: 12.8rem 5.9rem 0;
	}
	@include for-size(desktop) {
		padding: 19.2rem 12.8rem;
		gap: 2rem;
	}

	&__heading {
		font-family: "Montserrat", "sans-serif";
		font-weight: 700;
		font-size: 2rem;
		@include for-size(tablet) {
			font-size: 2.4rem;
		}
		@include for-size(desktop) {
			font-size: 3.2rem;
		}
	}

	&__items {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: auto;
		justify-content: center;
		gap: 4rem;
		padding: 0 2rem 0;
		transform: translateX(0.4rem);
		@include for-size(tablet) {
			grid-template-columns: repeat(2, 1fr);
			padding: 0 3.2rem 0;
		}
		@include for-size(desktop) {
			// grid-template-columns: repeat(3, 1fr);
			padding: 0 6.4rem 0;
		}
	}
}
</style>
