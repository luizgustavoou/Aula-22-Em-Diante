<template>
    <div class="container">
        <div class="row">
            <div class="col-3">
                <ul class="list-group">
                    <li class="list-group-item list-group-item-dark" v-for="(item, index) in alunos" :key="index">
                        <router-link :to="{ name: 'alunoDetalhe', params:{id: item.id}}">
                            {{ item.name }}
                        </router-link>
                        
                    </li>
                </ul>
            </div>
            <div class="col">
                <router-view></router-view>
            </div>
        </div>

    </div>

</template>

<script>
import axios from "axios";
var mixin = {
    methods: {
        getAlunos() {
            axios.get('http://localhost:3000/alunos')
            .then(
                (res) => {
                    this.alunos = res.data;
                },
                (error) => {

                }
            ).finally(() => {});
        }
    }
};

export default {
    mixins: [mixin],
    name: 'Alunos',
    data() {
        return {
            alunos: []
        }
    },
    filters: {
      toUpperCase(str) {
          return str
      }
    },
    created() {
        this.getAlunos();
    }
}
</script>

<style>

</style>