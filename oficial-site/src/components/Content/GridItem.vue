/* eslint-disable */

<template>

  

    <div class="grid-item col-lg-3 col-sm-6">
      <div v-on:click="gotoProject(id)" class="hover mb-2 h-100">
        <img :src="thumbURL" :alt="name" width="100%">
        <div class="overlay">
          <div class="overlay-elems">
            <p>{{description}}</p>
          </div>
        </div>
      </div>
      <p class="project_name">
        {{name}}
        <span class="skills">
          <span v-for="skill in this.skillsArray" :class="toSmallLetter(skill)">{{getFirstLetter(skill)}}</span>
        </span>
      </p>
      <p class="client_name">by {{client}}</p>
    </div>

    

</template>







<script>


  import masterConfig from '../../statics/elinfante_masterConfig.json';

	export default {
        name: 'GridItem',
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
                joder : "que pasaaaaa",
            };
        },
        computed:{
          thumbURL : function() {
            return ('/assets/img/projects/'+this.id+'_'+this.currentThumbId+'.jpg');
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
            gotoProject : function(id) {
              this.$router.push({ path: '/projects/'+id });
            },
            toSmallLetter : function(txt){
              return txt.toLowerCase();
            },
            getFirstLetter : function(str){
              return str.trim().charAt(0).toLowerCase();
            },
        }
	}

</script>








<style lang="scss" scoped>

@import "@/scss/mixins.scss";


  .grid-item {

    position:relative;
    height:100%;
    cursor:pointer;
    margin-bottom:20px;

    .project_name {
      font-weight:bold;
      font-size:0.8rem;
      margin:0;

      .skills{
        float:right;

        span{
          padding:3px 6px;
          font-size:0.5rem;
          color:white;
          margin:0;
          margin-left:3px;
          vertical-align:top;
          @include border-radius(3px);
        }

        .html {
          background: #ffa500;
        }

        .css3 {
          background: #ff7f50;
        }

        .javascript {
          background: #6dc066;
        }

        .compass {
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

        .handlebars {
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

    .client_name {
      font-size:0.7rem;
      margin:0;
    }

    .hover{
      position:relative;
      width:100%;
      overflow:hidden;
      border:1px solid #e8e8e8;   
      @include border-radius(0px);
    }

    img{
      display: block;
      position: relative;     

      -webkit-transition: all 0.3s ease-in-out;
      -moz-transition: all 0.3s ease-in-out;
      -ms-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
    }

    .overlay{
      width:100%;
      height:100%;
      background: transparent;
      color: white;
      position:absolute;
      top:0;
      left:0;


      .overlay-elems{

        position: relative;
        padding: 15px;
        height:100%;
        background: rgba(0,0,0,0.8);
        opacity:0;
        
        -webkit-transition: all 0.5s ease-in-out;
        -moz-transition: all 0.5s ease-in-out;
        -ms-transition: all 0.5s ease-in-out;
        -o-transition: all 0.5s ease-in-out;
        transition: all 0.5s ease-in-out;

        p{
          font-size: 0.8rem;
        }

      }

    }

    .hover:hover{
      .overlay-elems{
        opacity:0;
      }

      img{
        transform: scale(1.05,1.05);
      }
    }

  }
   


  @media only screen and (max-width : 850px) {

  }







    

</style>
































