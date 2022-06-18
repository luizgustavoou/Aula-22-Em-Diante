<template>
    {{ this.$route.params.id }}
    <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="aluno.img" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ aluno.name }}</h5>
                    <p class="card-text">Informações</p>
                    <p class="card-text"><small class="text-muted">...</small></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
var mixin = {
    methods: {
        getAluno(id) {
            axios.get(`http://localhost:3000/alunos/${id}`)
            .then(
                (res) => {
                    this.aluno = res.data;
                },
                (error) => {

                }
            ).finally(() => {});
        }
    }
};
export default {
    mixins: [mixin],
    name: 'AlunosDetalhe',
    data() {
        return {
            aluno: {}
        }
    },
    methods: {

    },
    created() {
        this.getAluno( this.$route.params.id)
        console.log('Recebi do parametro o id: ', this.$route.params.id);
    }
}
</script>

<style>

</style>