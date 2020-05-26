/* eslint-disable */

<template>

    <div class="content-dom">
      <div class="content-page">

      	<div class="about_me">

              <p><span class="firstcharacter">H</span>ello! My name is Juan Infante and I come from Barcelona. I studied Computer Science at <a href="http://www.urv.cat/es/estudios/grados/oferta/graudenginyeriainformatica/" target="_blank">Rovira i Virgili University</a>. Soon after I graduated from college I had the urge to improve my english and explore what is out there so I moved to London where I have been living for the last 14 years. You could say I am a half londonder by now. 
              </p>

              <p>When I first moved to London I was not sure where my career was heading, but I knew I wanted something that could fulfil my creative side as well, that is when I decided that Web Development would fit me perfectly. My first job was at <a href="http://www.theppc.com/" target="_blank">PPC</a> (Picture Production Company) doing websites  for movies and video games. After those amazing 7 years the bird was ready to fly out of the nest. I worked as a freelance for 4 years until <a href="http://www.buzzradar.com/" target="_blank">Buzz Radar</a> came along and tempted me with a great professional oportunity. I have been working for them as a Senior Front End Developer ever since.
              </p>

              <p>If you are still interested do not hesitate to check out my <a href="http://www.elinfantespace.com/projects">projects</a>. Need help with an upcoming project please email me and I will get back to you very shortly.
              </p>

              <ul class="icons-list">
                <li class="icons-list__item">
                  <a href="mailto:j.infante.garcia@gmail.com?subject=Email from the site!" rel="nofollow" target="_blank" title="Send me an email">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    Email
                  </a>
                </li>
                <li class="icons-list__item">
                  <a href="https://www.linkedin.com/in/juaninfante/" rel="nofollow" target="_blank" title="See my LinkedIn profile">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                    LinkedIn
                  </a>
                </li>
                <li class="icons-list__item">
                  <a href="https://www.facebook.com/jacob.lon.1979?ref=bookmarks" rel="nofollow" target="_blank" title="Follow me!">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                    Facebook
                  </a>
                </li>
                <li class="icons-list__item">
                  <a href="https://www.instagram.com/lainfanta_/" rel="nofollow" target="_blank" title="See some of my pictures">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                    Instagram
                  </a>
                </li>
                <li class="icons-list__item">
                  <a href="https://trello.com/theinfant" rel="nofollow" target="_blank" title="Find me on Trello">
                    <i class="fa fa-trello" aria-hidden="true"></i>
                    Trello
                  </a>
                </li>
              </ul>

          </div>

    </div>

  </div>

</template>







<script>

	export default {
        name: 'AboutMe',
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

    .about_me {
        position: relative;
        font-size: 1.2rem;
        margin-top:50px;
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


    .icons-list {
      @include display-flex;
      @include flex-direction(row);
      @include flex-wrap(wrap);
      margin: 0;
      padding: 0; 
    }

    .icons-list__item {
      -webkit-box-flex: 0;
      -moz-box-flex: 0;
      box-flex: 0;
      @include flex(0 0 33.33%);
      list-style: none;
      margin: 0 0 1rem;
      padding: 0; 
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

      .about_me {
          margin-top:15px;
      }

      .icons-list__item {
        -webkit-box-flex: 0;
        -moz-box-flex: 0;
        box-flex: 0;
        @include flex(0 0 66.66%);
        list-style: none;
        margin: 0 0 1rem;
        padding: 0; 
      }

      .content-dom{
        padding: 10px 20px 20px 20px;
      }

      .content-page {
        width: 100%;
      }

    }

</style>
































