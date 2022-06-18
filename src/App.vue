<template>
<div>
    <!-- <first-component></first-component>
    <second-component></second-component> -->
    <br><br><br><br>
    <h1>{{ title }}</h1>

    <nav>
      <ul>
        <li><router-link :to="{ name: 'gameOfThrones'}">Game Of Thrones</router-link></li>
        <li><router-link :to="{name: 'transformers'}">Transformers</router-link></li>
        <li><router-link :to="{name: 'alunos'}">Alunos</router-link></li>
        <li><router-link to="/arrow">Arrow</router-link></li>
      </ul>
    </nav>

    <router-view/>
</div>
</template>

<script>
import FirstComponent from './components/FirstComponent.vue';
import SecondComponent from './components/SecondComponent.vue';

export default {
  name: 'App',
  components: {
    FirstComponent, 
    SecondComponent
  },
  data() {
    return {
      title: 'Vuejs do jeito ninja!'
    }
  },
  created() {
    /* console.log(this.$router);
    console.log(this.$route); */
    /* this.$router.push({ name: 'transformersContent', params: {name: 'bumble-bee'}}); */
  }
}
</script>

<style>

</style>
