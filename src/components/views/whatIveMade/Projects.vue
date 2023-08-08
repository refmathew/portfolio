<script>
import ProjectCard from "./ProjectCard.vue";

export default {
	props: ["heading", "projects"],
	components: { ProjectCard },
};
</script>

<template>
	<div class="projects__wrapper">
		<div class="projects">
			<div class="projects__heading">{{ heading }}:</div>
			<div class="projects__items">
				<ProjectCard
					v-for="project in projects"
					:key="project.node.name"
					:project-name="project.node.name"
					:project-link="project.node.link"
					:image-names="project.node.imgNames"
					:responsibilities="project.node.responsibilities"
					:tech-stack="project.node.techStack"
					:description="project.node.description"
				/>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use "~/assets/styles/abstracts/mixins" as *;

.projects {
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
		gap: 6.4rem;
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
		grid-auto-rows: 1fr;
		justify-content: center;
		gap: 4rem;
		padding: 0 2rem 0;
		transform: translateX(0.4rem);
		@include for-size(tablet) {
			grid-template-columns: repeat(2, 1fr);
			padding: 0 3.2rem 0;
		}
		@include for-size(desktop) {
			gap: 6.4rem;
			padding: 0 6.4rem 0;
		}
	}
}
</style>
