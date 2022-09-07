<template>
  <div :class="['socials-wrapper', 'socials--intro---animate']">
    <nav class="socials">
      <div class="socials__line"></div>
      <div class="socials__links">
        <g-link class="socials__links__link" :key="social.node.name" v-for="social in this.$static.socials.edges"
          target="_blank" :to="social.node.url">
          <g-image :src='require(`~/assets/img/${social.node.iconName}.svg`)' alt="" />
        </g-link>
      </div>
    </nav>
  </div>
</template>


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


<script>
</script>
