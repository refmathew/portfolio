<template>
  <div class="layout-default">
    <logo ref="logo"/>
    <page-title :page-title="getPageTitle()"/>
    <burger-menu :page-title="getPageTitle()"/>
    <socials ref="socials"/>
    <index :links="this.$static.links" :page-title="getPageTitle()" :animate="animate" />
    <slot />
    <who-i-am :pageTitle="getPageTitle()" />
    <what-ive-made :pageTitle="getPageTitle()" />
    <writings :pageTitle="getPageTitle()" />
  </div>
</template>

<static-query>
  query {
    metadata {
      siteName
    }

    links: allLink(order: ASC){
      edges{
        node{
          name
          link
        }
      }
    } 
  }
</static-query>

<script>
import Logo from '~/components/layouts/default/Logo'
import PageTitle from '~/components/layouts/default/PageTitle'
import BurgerMenu from '~/components/layouts/default/BurgerMenu'
import Socials from '~/components/layouts/default/Socials'
import Index from '~/views/Index'
import WhoIAm from '~/views/WhoIAm'
import WhatIveMade from '~/views/WhatIveMade'
import Writings from '~/views/Writings'

export default {
  components: {
    Logo,
    PageTitle,
    BurgerMenu,
    Socials,
    Index,
    WhoIAm,
    WhatIveMade,
    Writings,
  },
  methods: {
    animate(){
      this.$refs.logo.$el.classList.remove("logo--intro---animate")
      this.$refs.logo.$el.classList.remove("logo---animate")
      this.$refs.socials.$el.classList.remove("socials--intro---animate")
      this.$refs.socials.$el.classList.remove("socials---animate")

      setTimeout(()=>{
        this.$refs.logo.$el.classList.add("logo---animate")
        this.$refs.socials.$el.classList.add("socials---animate")
      }, .005)
    },
    getPageTitle() {
      const path = this.$route.path

      let pageTitle = this.$static.links.edges.find(
        link => link.node.link === path.slice(1)
      )

      if (!pageTitle) return 'Home'

      pageTitle = pageTitle.node.name
      return pageTitle
    },
  },
  watch: {
    $route(to, from) {
      this.animate()
    }
  }
}
</script>
