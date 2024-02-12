/* eslint-disable */

<template>

    <div>

      <div v-for="(project,index) in projectsArray" class="project__wrap fadeOut">    
        <listItem :projectMO="project" :numProject="index+1"></listItem>
      </div>  

    </div>

</template>







<script>
  
  import $ from 'jquery';
  import listItem from './ListItem.vue';
  import masterConfig from '../../statics/elinfante_masterConfig.json';

    export default {
        name: 'Projects-List',
        components: {
          listItem,
        },
        data() {
            return {
                currentIndex : 0,
                allProjectsArray : masterConfig.elInfanteApp.projects,
                projectsArray : [],
            };
        },
        created() {
          // var self = this;
          // this.addMoreProjects(10);
          // $(window).scroll(function() {
          //   if($(window).scrollTop() + $(window).height() == $(document).height()) {
          //     console.log("bottom!");
          //     self.addMoreProjects(5);              
          //   }
          // });
          this.addMoreProjects(10);
          window.addEventListener('scroll', this.handleScroll);
        },
        mounted(){
          $("html, body").animate({ scrollTop: 0 }, "slow");
        },
        beforeUnmount() {
          window.removeEventListener('scroll', this.handleScroll);
        },
        updated() {

        },
        methods: {
          handleScroll() {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight) {
              console.log('Reached the bottom of the page!');
              this.addMoreProjects(5);
            }
          },
          addMoreProjects : function(numProjectsToAdd) {  
            
            var i;
            for (i = this.currentIndex; i < this.allProjectsArray.length; i++) {

              if (numProjectsToAdd > 0){
                var project = this.allProjectsArray[i];
                project["currentThumbId"] = 1;
                this.projectsArray.push(project);  
                this.currentIndex++;
                numProjectsToAdd--;
              }else{
                return false;
              }

            }

          },
        }
    }

</script>








<style lang="scss" scoped>

    .project__wrap {

      position:relative;
      margin-top: 2%;
      
    }

    button {
      cursor:pointer;
    }



    @media only screen and (max-width : 850px) {

      .project__wrap {
        margin-top: 0%;
      }

    }

</style>
































