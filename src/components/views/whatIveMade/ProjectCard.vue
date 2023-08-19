<script>
import { useGlobalStore } from "../../../stores/global-store";

export default {
	setup() {
		const global = useGlobalStore();
		return {
			global,
		};
	},
	methods: {
		handleCardClick: function() {
			this.global.$patch({
				carouselProjectName: this.projectName,
				carouselProjectLink: this.projectLink,
				carouselImageNames: this.imageNames,
				isOverlayCarouselShown: true,
			});
		},
	},
	props: {
		projectName: { type: String },
		projectLink: { type: String },
		imageNames: { type: Array },
		responsibilities: { type: String },
		techStack: { type: String },
		description: { type: String },
		shouldShowDesc: { type: Boolean, default: false },
	},
};
</script>

<template>
	<div class="card" @click="handleCardClick">
		<div class="card__main">
			<div class="card__image">
				<g-image :src="require(`~/assets/img/${imageNames[0]}.jpg`)" />
			</div>
			<div class="card__text">
				<div class="card__text-heading">
					<div class="card__text-heading-title">
						{{ projectName }}
					</div>
					<div class="card__text-subheading">
						<div class="card__text-subheading-responsibilities">
							{{ responsibilities }}
						</div>
						<div class="card__text-subheading-techstack">{{ techStack }}</div>
					</div>
				</div>
				<div class="card__text-description" v-if="shouldShowDesc">
					{{ description }}
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use "~/assets/styles/abstracts/mixins" as *;

.card {
	background-color: #c7c9d1;

	&__main {
		display: flex;
		flex-direction: column;
		gap: 1.6rem;
		position: relative;
		z-index: 1;
		width: 100%;
		height: 100%;
		transform: translate(-0.8rem, -0.8rem);
		background-color: #e9eaed;
		border: 0.2rem solid #c7c9d1;
		cursor: pointer;
		transition: 0.8s all ease;
		@include for-size(desktop) {
			border-width: 0.4rem;
			transform: translate(-1.6rem, -1.6rem);
		}

		&:hover {
			transform: translate(0, 0);
		}
	}

	&__image {
		width: 100%;
		height: 32vw;
		min-height: 20rem;
		max-height: 36rem;
		overflow: hidden;
		@include for-size(tablet) {
			height: 32vw;
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			transition: transform 0.3s ease-in-out;
		}
	}
	&__text {
		display: flex;
		flex-direction: column;
		gap: 1.6rem;
		padding: 0 1.6rem 3.2rem;
	}
	&__text-heading {
		display: flex;
		flex-direction: column;
		gap: 1.6rem;
	}
	&__text-heading-title {
		display: flex;
		font-size: 1.8rem;
		font-weight: 700;

		span {
			display: grid;
			place-items: center;
			margin-left: 0.4rem;
		}
	}
	&__text-heading-link {
	}
	&__text-subheading {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}
	&__text-subheading-responsibilities {
		font-size: 1.4rem;
		font-weight: 400;
	}
	&__text-subheading-techstack {
		font-size: 1.4rem;
		font-weight: 700;
	}
	&__text-description {
		font-size: 1.4rem;
		font-weight: 400;
	}
}
</style>
