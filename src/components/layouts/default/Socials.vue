<static-query>
  query {
    socials: allSocial(order: ASC) {
      edges { 
        node { 
          name
          url
          iconName
        }
      }
    }
  }
</static-query>

<template>
	<div
		:class="[
			'socials-wrapper',
			'socials-animation--intro',
			{ 'socials-animation': hasPreviousRoute === true },
		]"
		ref="socials"
	>
		<nav class="socials">
			<div class="socials__line"></div>
			<div class="socials__links">
				<g-link
					class="socials__links__link"
					:key="social.node.name"
					v-for="social in this.$static.socials.edges"
					target="_blank"
					:to="social.node.url"
				>
					<g-image
						:src="require(`~/assets/img/${social.node.iconName}.svg`)"
						alt=""
					/>
				</g-link>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
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

.socials-animation--intro {
	animation: socials-animation--intro $ani-dur ease forwards;
}
.socials-animation {
	animation: socials-animation $ani-dur ease forwards;
}

@keyframes socials-animation--intro {
	0% {
		transform: translateY($ani-distance);
	}
	50% {
		transform: translateY($ani-distance);
	}
	100% {
		transform: translateY(0);
	}
}
@keyframes socials-animation {
	0% {
		transform: translateY(0);
	}
	50% {
		transform: translateY($ani-distance);
	}
	100% {
		transform: translateY(0);
	}
}
</style>
