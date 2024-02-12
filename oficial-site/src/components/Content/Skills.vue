/* eslint-disable */

<template>

    <div class="content-dom">
      <div class="content-page">

      	<div class="skills_holder">

            <p style="margin-bottom:40px;"><span class="firstcharacter">E</span>mbarking on a journey of creativity and innovation, I've come to realise that true mastery is achieved by getting your hands dirty. With over 20 years experience in the industry, I've honed my skills and acquired invaluable insights along the way.<br><br>

            As a seasoned Web Developer and Creative Digital Designer, I possess a deep understanding of strategic market-oriented design and development for online marketing campaigns. My journey has equipped me with not just programming skills, but also a comprehensive grasp of production techniques that elevate my work to new heights.<br><br></br>

            What sets me apart is my unwavering curiosity and willingness to embrace new challenges. Whether it's delving into the world of AI or navigating the complexities of LLM, I thrive on pushing boundaries and exploring the cutting edge.<br><br></br>

            Here's a snapshot of my professional skills:
            </p>

            <div class="row breakdown">

              <div class="col-md-12">
                <h5><span> <i class="fa fa-arrow-right"></i> Web Development</span></h5>
              </div>
              
              <div class="col-md-4">

                <ul>
                  <li>Vue2/3</li>
                  <li>JavaScript ES6</li>
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
                  <li>Git</li>
                  <li>Symphony</li>
                  <li>MVC Frameworks</li>
                </ul>

              </div>

            </div>


            <div class="row breakdown">
              
              <div class="col-md-4">

                <h5><span> <i class="fa fa-arrow-right"></i> Design & Print</span></h5>

                <ul>
                  <li>Midjourney</li>
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

    @import "@/scss/mixins.scss";


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
































