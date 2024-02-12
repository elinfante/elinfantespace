/* eslint-disable */

<template>

    
    <div class="content-dom">
      <div class="content-page">

        <div v-for="(MotionItem,index) in motionArray" class="project__wrap fadeOut">    

            <MotionItem :motionItemMO="MotionItem" :numProject="index+1"></MotionItem>

        </div>  

      </div>
    </div>

</template>







<script>

  import MotionItem from './MotionItem.vue';
  import masterConfig from '../../statics/elinfante_masterConfig.json';

    export default {
        name: 'Motion',
        components: {
          MotionItem,
        },
        data() {
            return {
                motionArray : masterConfig.elInfanteApp.motion,
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
      width: 40%;
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
































