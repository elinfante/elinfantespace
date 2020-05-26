/* eslint-disable */

<template>

    <div class="content-dom">
      <div class="content-page">

      	<div class="skills_holder">

            <p style="margin-bottom:40px;"><span class="firstcharacter">Y</span>ou know what they say, only getting your hands dirty is when you truly learn to master. After 12 years experience in the business I managed to learn few things.<br><br>

            Web Developer and Creative Digital Designer with thorough knowledge of strategic market oriented design and development for online marketing campaigns. Excellent programming skills combined with a comprehensive grasp of production techniques over 12 years. Ability to quickly research and learn new programming tools and techniques when the situation is needed. <br><br>

            Here is a list of all my professional skills:
            </p>

            <div class="row breakdown">

              <div class="col-md-12">
                <h5><span> <i class="fa fa-arrow-right"></i> Web Development</span></h5>
              </div>
              
              <div class="col-md-4">

                <ul>
                  <li>Vue.js</li>
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS3</li>
                  <li>Compass</li>
                </ul>

              </div>

              <div class="col-md-4">

                <ul>
                  <li>Node.js</li>
                  <li>Gulp</li>
                  <li>NPM</li>
                  <li>Bootstrap</li>
                  <li>D3</li>
                </ul>

              </div>

              <div class="col-md-4">

                <ul>
                  <li>PHP</li>
                  <li>mySQL</li>
                  <li>Smart Git</li>
                  <li>Twig & Handlebars</li>
                  <li>MVC Frameworks</li>
                </ul>

              </div>

            </div>


            <div class="row breakdown">
              
              <div class="col-md-4">

                <h5><span> <i class="fa fa-arrow-right"></i> Design & Print</span></h5>

                <ul>
                  <li>Photoshop</li>
                  <li>InDesign</li>
                  <li>Lightroom</li>
                </ul>

              </div>


              <div class="col-md-4">

                <h5><span> <i class="fa fa-arrow-right"></i> Video Editing</span></h5>

                <ul>
                  <li>Final Cut Pro</li>
                </ul>

              </div>

            </div>


          </div>

    </div>

  </div>

</template>







<script>

	export default {
        name: 'Skills',
        data() {
            return {
              
            }
        },
        components: {

        },
        mounted(){

        },
        updated() {

        }
	}

</script>








<style lang="scss" scoped>

	@import "compass";

    .skills_holder {
      position: relative;
      font-size: 1.2rem;
      margin-top:50px;

      h5{
        font-weight:500;
        margin-bottom:20px;

        span{
          background:#5bcf1c;
          color:white;
          @include border-radius(5px);
          padding:5px 10px;
        }

      }

      .breakdown {
        margin-top:30px;
      }

    }

    .firstcharacter {
      color: #5bcf1c;
      float: left;
      font-family: Georgia;
      font-size: 5rem;
      line-height: 60px;
      padding-top: 4px;
      padding-right: 8px;
      padding-left: 3px;
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

      .skills_holder {
        margin-top:15px;
      }

      .content-dom{
        padding: 10px 20px 20px 20px;
      }

      .content-page {
        width: 100%;
      }
    }

</style>
































