/* eslint-disable */

<template>

    <div>

            
        <span class="num">{{this.numProject}}</span> 
        <h2>{{this.motionItemMO.name}}
          <a href="../icon/external-link-square">
            <!-- <i class="fa fa-external-link-square" aria-hidden="true"></i> -->
          </a>
        </h2>

        <div class="project__img">
            <div class="video_holder">
              <iframe width="100%" :height="getIframeHeight()" :src="this.motionItemMO.url" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>

    </div>

</template>







<script>


  import masterConfig from '../../statics/elinfante_masterConfig.json';

	export default {
        name: 'MotionItem',
        props: {
          numProject : {
            type : Number
          },
          motionItemMO: {
            type : Object
          }
        },
        data() {
            return {
                name : this.motionItemMO.name,
                description : this.motionItemMO.description,
                url : this.motionItemMO.url,
                videoWidth : 250,
            };
        },
        computed:{

        },
        mounted(){
          var self = this;
          $( document ).ready(function() {
              self.videoWidth = $('.content-page').width();
          });

          $(window).resize(function() {
              var iframeWidth = $('div.video_holder').width();
              var iframeHeight = iframeWidth / 1.77;

              $('div.video_holder').find('iframe').attr({
                  'width' : iframeWidth,
                  'height' : iframeHeight,
              });
          });

        },
        updated() {

        },
        methods: {
            getIframeWidth: function() {
              return this.videoWidth;
            },
            getIframeHeight: function() {
              console.log( Math.round(this.videoWidth / 1.77) );
              return Math.round(this.videoWidth / 1.77);
            }
        }
	}

</script>








<style lang="scss" scoped>

@import "@/scss/mixins.scss";


    .project__wrap {

      h2{
        margin:15px 0;
        display:inline-block;
        font-weight: 800;
        font-style: italic;
        font-size:1.3vw;

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

      .ext-url {

      }

      .num{
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
          line-height:20px;
          color:#777777;
          font-size: 0.8rem;
          font-weight:bold;
        }

        .skills{
          padding:0;
          float:right;

          span {
            padding:3px 10px;
            font-size:0.8rem;
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
    

        .video_holder {
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
          font-size:13px;
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







    }

</style>
































