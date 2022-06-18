<template>
  <div class="row">
    <div class="col" v-if="sidebar">
      Sidebar
    </div>
      <div class="col-3">
        <h1>Transformers</h1>
          <ul>
            <li v-for="(item, index) in transformers" :key="index">
              <router-link :to="{ name: 'transformersContent', params: { name: item.slug }}">
                  {{ item.name }}
              </router-link>
            </li>
          </ul>
      </div>
      <div class="col-3">
        <router-view></router-view>
      </div>
  </div>


</template>

<script>
export default {
  name: 'Transformers',
  props: {
    sidebar: Boolean
  },
  data() {
    return {
      transformers: [
        { name: 'Optimus Prime', slug: 'optimus-prime'},
        { name: 'Bumble Bee', slug: 'bumble-bee'},
        { name: 'Pickpup 2.O', slug: 'pickup-2'}
      ]
    }
  },
  created() {
    console.log(this.sidebar)
  },
}
</script>
