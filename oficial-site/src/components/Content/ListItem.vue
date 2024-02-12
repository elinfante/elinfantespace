/* eslint-disable */

<template>

    <div>
        <span v-if="this.numProject" class="num">{{this.numProject}}</span> 
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
              <img v-on:click="gotoProject(id)" :src="this.thumbURL" width="100%"></img>  
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

</template>







<script>
  
  import masterConfig from '../../statics/elinfante_masterConfig.json';

	export default {
        name: 'ListItem',
        props: {
          numProject : {
            type : Number
          },
          projectMO: {
            type : Object
          }
        },
        data() {
            return {
                id : this.projectMO.id,
                name : this.projectMO.name,
                description : this.projectMO.description,
                currentThumbId : 1,
                numThumbs : this.projectMO.num_thumbs,
                url : this.projectMO.url,
                client : this.projectMO.client,
            };
        },
        computed:{
          thumbURL : function() {
            var thumbURL = ('/assets/img/projects/'+this.id+'_'+this.currentThumbId+'.jpg');
            return thumbURL;
          },
          skillsArray : function() {
            var arraySkills = this.projectMO.tags.split(',');
            return arraySkills;
          },
        },
        mounted(){

        },
        updated() {

        },
        methods: {
            nextThumb : function(e) {
                e.preventDefault();
                this.currentThumbId++;
                if (this.currentThumbId > this.numThumbs) {
                    this.currentThumbId = 1;
                }
            },
            prevThumb : function(e) {
                e.preventDefault();
                this.currentThumbId--;
                if (this.currentThumbId == 0) {
                    this.currentThumbId = this.numThumbs;
                }
            },
            toSmallLetter : function(txt){
              return txt.toLowerCase();
            },
            gotoProject : function(id) {
              this.$router.push({ path: '/projects/'+id });
            }
        }
	}

</script>








<style lang="scss" scoped>

@import "@/scss/mixins.scss";


    .all-thumbs-holder{

      position:relative;
      width:100%;
      height:auto;
      background: orange;


      img{
        position:absolute;
        top:0;
        left:0;
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

      margin-top:10px;

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
      overflow:hidden;
      width:100%;
      @include opacity(1);  
      border:1px solid #e8e8e8;
  

      .project__img.video_holder {
        width:100%;
        background:#ddd;
        padding-bottom: 56.25%;
        overflow:hidden;
        position:relative;

        iframe {
          position:absolute;
        }
      }

    }


    .project__preloader__wrap {
      background:#5bcf1c;
      height:10px;
      width:100%;
      position:absolute;
    }


    









    @media only screen and (max-width : 850px) {




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
































