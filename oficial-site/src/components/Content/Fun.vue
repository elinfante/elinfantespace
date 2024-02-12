/* eslint-disable */

<template>

    
    <div class="content-dom">
      <div class="content-page">

        <div v-for="(funItem,index) in designVideosArray" class="project__wrap fadeOut">    
            <funItem :funItemMO="funItem" :numProject="index+1"></funItem>
          </div>  

      </div>
    </div>

</template>







<script>

  import funItem from './FunItem.vue';
  import masterConfig from '../../statics/elinfante_masterConfig.json';

    export default {
        name: 'Fun',
        components: {
          funItem,
        },
        data() {
            return {
                designVideosArray : masterConfig.elInfanteApp.designs_videos,
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

@import "@/scss/mixins.scss";


    .project__wrap {

      position:relative;
      margin-top: 5%;


      .project__wrap.fadeOut {
        @include opacity(0);
      }

    }


    .content-dom{
      padding:30px;
    }

    .content-page {
      margin:0 auto;
      height:100%;
      width: 50%;
    }




    @media only screen and (max-width : 850px) {

      .project__wrap {
        margin-top: 0%;
      }

      .content-dom{
        padding: 10px 20px 20px 20px;
      }

      .content-page {
        width: 100%;
      }

    }

</style>
































