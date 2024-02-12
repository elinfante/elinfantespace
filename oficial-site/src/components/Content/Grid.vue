/* eslint-disable */

<template>

    <div>

        <div class="row grid-wrap">
  
          <gridItem v-for="(project,index) in allProjectsArray" :projectMO="project" :numProject="index+1"></gridItem>            
        </div>

    </div>

</template>







<script>

    import gridItem from './GridItem.vue';
    import masterConfig from '../../statics/elinfante_masterConfig.json';

    export default {
        name: 'Projects-List',
        components: {
          gridItem,
        },
        data() {
            return {
                allProjectsArray : masterConfig.elInfanteApp.projects,
            };
        },
        created() {
          
        },
        mounted(){
          $("html, body").animate({ scrollTop: 0 }, "slow");
        },
        updated() {

        },
        methods: {
          
        }
    }

</script>








<style lang="scss" scoped>

    .grid-wrap {

      position:relative;
      margin-top: 20px;

    }

    @media only screen and (max-width : 850px) {

      .grid-wrap {
        margin-top: 20px;
      }

    }

</style>
































