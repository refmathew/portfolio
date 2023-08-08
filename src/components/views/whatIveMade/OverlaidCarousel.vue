<script>
import { useGlobalStore } from "../../../stores/global-store";
import { Carousel, Slide } from "vue-carousel";
export default {
	setup() {
		const global = useGlobalStore();

		return {
			global,
		};
	},
	methods: {
		handleExitClick: function() {
			this.global.isOverlayCarouselShown = false;
		},
	},
	components: {
		Carousel,
		Slide,
	},
};
</script>

<template>
	<div
		class="overlay"
		:class="{
			'overlay--shown': global.isOverlayCarouselShown,
			'overlay--hidden': !global.isOverlayCarouselShown,
		}"
		@click.self="handleExitClick"
	>
		<a
			class="overlay__project-name"
			v-if="global.carouselProjectLink"
			:href="global.carouselProjectLink"
			target="_blank"
		>
			{{ global.carouselProjectName }}
			<span
				><img :src="require(`~/assets/img/icon-external-link.svg`)" alt=""
			/></span>
		</a>
		<div class="overlay__project-name" v-else>
			{{ global.carouselProjectName }}
		</div>
		<Carousel
			class="overlay__carousel"
			per-page="1"
			pagination-color="#000000"
			pagination-active-color="#e9eaed"
			pagination-padding="4"
		>
			<Slide
				class="overlay__carousel-item"
				v-for="imageName in global.carouselImageNames"
			>
				<g-image
					class="overlay__carousel-item-img"
					:src="require(`~/assets/img/${imageName}.jpg`)"
				/>
			</Slide>
		</Carousel>
		<button class="overlay__exit-button-wrapper" @click="handleExitClick">
			<div class="overlay__exit-button">
				<div />
				<div />
			</div>
		</button>
	</div>
</template>

<style lang="scss" scoped>
@use '~/assets/styles/abstracts/mixins' as *;
@use '~/assets/styles/abstracts/var' as *;

.overlay {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1.6rem;
	position: fixed;
	z-index: -1;
	width: 100%;
	height: 100vh;
	min-height: 100vh;
	padding-top: 6.4rem;
	background: rgba(0, 0, 0, 0.9);

	&--shown {
		animation: overlay--shown 0.3s ease forwards;
	}
	&--hidden {
		animation: overlay--hidden 0.3s ease forwards;
	}

	&__project-name {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		color: $primary-2;
		font-size: 1.6rem;
		font-weight: 700;
		font-family: "Montserrat", sans-serif;

		span {
			display: flex;
			align-items: center;
		}
	}

	&__carousel {
		@include for-size(desktop) {
			// width: 80%;
		}
	}
	&__carousel::v-deep .VueCarousel-inner {
		max-height: 74vh !important;
	}
	&__carousel::v-deep .VueCarousel-dot {
		margin-top: 0;
	}
	&__carousel-item {
		display: grid;
		place-items: center;
	}
	&__carousel-item-img {
		height: 100%;
	}

	&__exit-button {
		&-wrapper {
			display: grid;
			place-items: center;
			@include clamped(width, 16, 24);
			@include clamped(height, 16, 24);
			position: absolute;
			z-index: 1;
			@include clamped(right, 22, 52);
			@include clamped(top, 26, 50);
			cursor: pointer;
		}
		div {
			@include clamped(width, 16, 24);
			height: 0.4rem;
			background: $primary-0;
			transform-origin: center;
		}
		div:first-child {
			transform: translateY(0.4rem) rotate(45deg);
		}
		div:last-child {
			transform: rotate(-45deg);
		}
	}
}

@keyframes overlay--shown {
	0% {
		opacity: 0;
		z-index: 3;
	}
	100% {
		z-index: 3;
		opacity: 1;
	}
}

@keyframes overlay--hidden {
	0% {
		opacity: 1;
		z-index: 3;
	}
	99% {
		opacity: 0;
		z-index: 3;
	}
	100% {
		opacity: 0;
		z-index: -1;
	}
}
</style>
