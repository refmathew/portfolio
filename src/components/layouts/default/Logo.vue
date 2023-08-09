<template>
	<div
		:class="[
			'logo-wrapper',
			'logo-animation--intro',
			{ 'logo-animation': hasPreviousRoute === true },
		]"
		ref="logo"
	>
		<g-link to="/" class="logo">
			<div class="logo__line"></div>
			<span class="logo__itself"> refmathew</span>
		</g-link>
	</div>
</template>

<script>
export default {
	name: "HeaderLogo",
	data() {
		return {
			hasPreviousRoute: false,
		};
	},
	methods: {
		animate() {
			this.hasPreviousRoute = false;
			setTimeout(() => {
				this.hasPreviousRoute = true;
			}, 0.005);
		},
	},
	watch: {
		$route(to, from) {
			this.animate();
		},
	},
};
</script>

<style lang="scss" scoped>
@use "~/assets/styles/abstracts/var" as *;

.logo-animation--intro {
	animation: logo-animation--intro $ani-dur ease forwards;
}
.logo-animation {
	animation: logo-animation $ani-dur ease forwards;
}

@keyframes logo-animation--intro {
	0% {
		transform: translateX(-#{$ani-distance});
	}
	50% {
		transform: translateX(-#{$ani-distance});
	}
	100% {
		transform: translateX(0);
	}
}

@keyframes logo-animation {
	0% {
		transform: translateX(0);
	}
	50% {
		transform: translateX(-#{$ani-distance});
	}
	100% {
		transform: translateX(0);
	}
}
</style>
