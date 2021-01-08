<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
    <Setup></Setup>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Setup from './components/vue3/Setup.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Setup
  },
  mounted () {
    const a = import.meta.env.VUE_APP_BASE_API
    const b = import.meta.env.VITE_APP_XXX_SERVICE_URL
    console.log('===>', a)
    console.log('===>', b)
    // console.log('===', meta.env.VUE_APP_BASE_API)
    // meta.env.VITE_TOKEN
  }
}
</script>
