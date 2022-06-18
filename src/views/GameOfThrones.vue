<template>
    <div>
      <h1>Game of Thrones</h1>
      <ul>
          <li v-for="(item, index) in characters" :key="index">{{ item.name }}</li>
      </ul>
  </div>
</template>

<script>


export default {
  name: 'HomeView',
  data() {
    return {
      characters: [
        { name: 'Jon Snow'},
        { name: 'Lady Gaga'},
        { name: 'Obama'}
      ]
    }
  }
}
</script>
