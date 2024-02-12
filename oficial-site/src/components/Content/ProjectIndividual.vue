/* eslint-disable */

<template>


    <div class="content-dom" @wheel="handleScroll">
      <div class="content-page">

        <a v-on:click="goToList" href="#" class="btn btn-light mr-2"><i class="fa fa-list-ul"></i></a>
        <a v-on:click="goToGrid" href="#" class="btn btn-light mr-2"><i class="fa fa-th-large"></i></a>

        <button v-if="prevId" v-on:click="gotoProject(prevId)" class="btn btn-light mr-2"><i class="fa fa-chevron-left"></i></button>
        <button v-if="nextId" v-on:click="gotoProject(nextId)" class="btn btn-light mr-2"><i class="fa fa-chevron-right"></i></button>





        <div class="project__wrap">
          <h2>{{this.name}}
            <a v-if="this.url" class="external-url" :href="this.url" target="_blank">
              <i class="fa fa-external-link-square" aria-hidden="true"></i>
            </a>
          </h2>
          <span class="arrows">
            <a v-on:click="prevThumb" href="#" class="left"><i class="fa fa-chevron-left fa-1x"></i></a> <small>{{this.currentThumbId}} / {{this.numThumbs}} </small>
            <a v-on:click="nextThumb" href="#" class="right"><i class="fa fa-chevron-right fa-1x"></i></a>
          </span>
          
          <div class="project__img">
              <div class="img_holder">
                  



                  <div v-on:click="nextThumb" class="all-thumbs-holder">
                      <img v-for="(thumbInfo,index) in thumbsURLArray" :src="thumbInfo.url" width="100%" :style="thumbInfo.style"></img>  
                  </div>




              </div>
          </div>

          <div class="project__footer">
              <span class="client">Client: {{this.client}}</span>
              <div class="skills">
                <span v-for="skill in this.skillsArray" :class="toSmallLetter(skill)">{{skill}}</span>
              </div>
              <div style="clear:both;"></div>
          </div>

          <p v-html="description" class="mt-2">
            
          </p>
        </div>






      </div>
    </div>
  

</template>







<script>

  import masterConfig from '../../statics/elinfante_masterConfig.json';

  export default {
        name: 'ProjectIndividual',
        components: {

        },
        data() {
            return {
              projectMO : null,
              id : null,
              name : null,
              description : null,
              currentThumbId : 1,
              numThumbs : null,
              url : null,
              client : null,   
              prevId: null,
              nextId: null,
              thumbWidth : null,
              thumbsURLArray : null,
            };
        },
        created() {
          var self = this;
          var allProjects = masterConfig.elInfanteApp.projects;
          allProjects.forEach(function(project,index){
            if (project.id == self.$route.params.id){
              self.projectMO = project;
              

              self.id = project.id;
              self.name = project.name;
              self.description = project.description;
              self.numThumbs = project.num_thumbs;
              self.url = project.url;
              self.client = project.client;


              //Previous Project
              if (index-1 >=0 ) self.prevId = allProjects[index-1].id;
              //Next Project
              if (index+1 < allProjects.length ) self.nextId = allProjects[index+1].id;

            }
          });

          window.addEventListener('resize', this.updateThumbDimensions );
        },
        destroy() {
          window.removeEventListener('resize', this.updateThumbDimensions );
        },
        computed : {
          skillsArray : function() {
            var arraySkills = this.projectMO.tags.split(',');
            return arraySkills;
          },
        },
        mounted(){
          this.updateThumbDimensions();
          this.thumbWidth = $('.all-thumbs-holder').width();
          this.updateArrayThumbs();
        },
        updated() {

        },
        watch: {
          $route(to, from) {
            console.log(to.path,from.path);
          },
          thumbWidth: function (val) {
            $('.all-thumbs-holder').css({
              left: -(this.currentThumbId-1)*(this.thumbWidth+15),
            });
          },
        },
        methods: {
          goback : function() {
            this.$router.go(-1);
            // this.$router.push({ path: '/projects/grid' });
          },
          goToList : function(e) {
            e.preventDefault();
            this.$router.push({ path: '/projects/list' });
          },
          goToGrid : function(e) {
            e.preventDefault();
            this.$router.push({ path: '/projects/grid' });
          },
          gotoProject : function(id) {
            window.location.href = `/projects/${id}`;
          },
          nextThumb : function(e) {
              e.preventDefault();
              this.currentThumbId++;
              if (this.currentThumbId > this.numThumbs) {
                  this.currentThumbId = 1;
              }
              this.animateThumbs();

          },
          prevThumb : function(e) {
              e.preventDefault();
              this.currentThumbId--;
              if (this.currentThumbId == 0) {
                  this.currentThumbId = this.numThumbs;
              }
              this.animateThumbs();
          },
          toSmallLetter : function(txt){
            return txt.toLowerCase();
          },
          animateThumbs : function() {
            var self = this;

            this.updateArrayThumbs();
            
            $('.all-thumbs-holder').animate({
              left: -(this.currentThumbId-1)*(this.thumbWidth+15),
            }, 500);

          },
          updateArrayThumbs : function () {
            var allProjects = masterConfig.elInfanteApp.projects;
            var urlArrays = [];
            for (var i = 0; i < this.projectMO.num_thumbs; i++) {
              var imgObj = {
                url : ('/assets/img/projects/'+this.projectMO.id+'_'+(i+1)+'.jpg'),
                style : "top:0px;left:"+( i*(this.thumbWidth+15) )+"px;",
              };
              urlArrays.push(imgObj);

              //Animate Opacity of each Thumb depending on the position 
              if (this.currentThumbId == i+1) {
                $('.all-thumbs-holder').find('img:nth-child('+(i+1)+')').animate({
                  opacity: 1,
                }, 500);
              }else{
                $('.all-thumbs-holder').find('img:nth-child('+(i+1)+')').animate({
                  opacity: 0.2,
                }, 500);
              }

              // console.log(urlArrays, this.thumbWidth);
            }
            this.thumbsURLArray = urlArrays;
          },
          updateThumbDimensions :  function() {
            this.thumbWidth = $('.all-thumbs-holder').width();
            var ratio = 0.625;
            $('.all-thumbs-holder').css({'height' : (this.thumbWidth * ratio) });
            this.updateArrayThumbs();
          },
          handleScroll : function(event) {
            // console.log("This handle scroll......", event);
            // var deltaX = event.deltaX;
            // var deltaY = event.deltaY;
            // console.log(deltaY);            
            // if (deltaY > -150) this.nextThumb(event);
            
          } 
        }
  }

</script>








<style lang="scss" scoped>

@import "@/scss/mixins.scss";


  .content-dom{
    padding:30px;
  }

  .content-page {
    margin:0 auto;
    height:100%;
    width: 50%;
  }

  button{
    cursor:pointer;
  }


  .all-thumbs-holder{

      position:relative;
      width:100%;
      height:auto;
      background: transparent;
      cursor: pointer;


      img{
        position:absolute;
        top:0;
        left:0;
        border:1px solid #e8e8e8;
      }



      
    }


    h2{
      margin:15px 0;
      display:inline-block;
      font-weight: 800;
      font-style: italic;
      font-size:1.5vw;

      a{
        color:black;
        font-size:1.2rem;
      }

      a:hover{
        color:#444444;
      }
    }

    p {
      margin-top:0px;
    }

    .arrows {
      display:inline-block;
      float:right;
      padding-top:20px;
      font-size:1.2rem;
      @include align-items(center);
      @include display-flex();

      small{
        font-size:0.8rem;
        margin:0 5px;
      }

      a{
        cursor:pointer;
      }

    }

    span.ext-url {

    }

    span.num{
      display:inline-block;
      border-radius: 50%;
      width: 30px;
      height: 30px; 
      font-size: 1.2rem;
      color: #fff;
      line-height: 30px;
      text-align: center;
      background: #5bcf1c;
      font-weight:normal;
      margin-right:5px;
    }    

    .project__footer{

      .client{
        background:white;
        border: 1px solid #777777;
        padding:3px 10px;
        color:#777777;
        font-size: 0.7rem;
        font-weight:bold;
        vertical-align:top;
      }

      .skills{
        padding:0;
        float:right;

        span {
          padding:3px 10px;
          font-size:0.7rem;
          color:white;
          margin:0;
          margin-left:3px;
          vertical-align:top;
        }

        .html {
          background: #ffa500;
        }

        .css3 {
          background: #ff7f50;
        }

        .scss {
          background: #ff7f50;
        }

        .javascript {
          background: #6dc066;
        }

        .midjourney {
          background: #e6c200;
        }

        .d3 {
          background: #7fbfbf;
        }

        .symphony {
          background: #d63333;
        }

        .php {
          background: #6daccc;
        }

        .node {
          background: #e3cb9d;
        }

        .ai {
          background: #27acd1;
        }

        .flash {
          background: #f44242;
        }

        .facebook {
          background: #2e5c98;
        }

        .bootstrap {
          background: #c48bf9;
        }

        .vue-js {
          background: #7fbfbf;
        }

      }



    }


    .description {
      margin-top: 10px;
    }


    .project__img {

      cursor:pointer;
      position:relative;
      width:100%;
      @include opacity(1);  
      border:5px solid #e8e8e8;
      margin-bottom:10px;

    }


    









    @media only screen and (max-width : 850px) {


        .content-dom{
          padding: 10px 20px 20px 20px;
        }

        .content-page {
          width: 100%;
        }

        h2{
          font-size:15px;
        }

        .num{
          width: 25px;
          height: 25px; 
          font-size: 15px;
          line-height: 25px;
          text-align: center;
          background: #5bcf1c;
        }    

        .client{
          margin-top:18px;
          padding:2px 7px;
          border-radius: 3px;
          font-size: 0.8rem;
          display:none;
        }

        .skills{
          float:left !important;

          span {
            margin-left:0px !important;
            margin-right:3px !important;
          }
        }


        .arrows {
          padding-top:15px;
        }

      


    }

   
</style>
































