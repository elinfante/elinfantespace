/* eslint-disable */

<template>

    <div class="content-dom">
      <div class="content-page">

      	<div class="about_me">

              <p><span class="firstcharacter">H</span>ey there! I'm Juan Infante, originally from the vibrant city of Barcelona. I kickstarted my journey into the world of Computer Science at <a href="http://www.urv.cat/es/estudios/grados/oferta/graudenginyeriainformatica/" target="_blank">Rovira i Virgili University</a>, but soon felt the itch to spread my wings beyond the classroom. That's when I packed my bags and set off for London, where I soaked up the bustling city vibes for 16 years. You could say I'm halfway to earning my honorary Londoner badge by now!</p>

              <p>When I landed in London, I was on a quest to find my career path amidst the sea of possibilities. I knew I wanted something that would allow me to flex my creative muscles, and that's when I stumbled upon Web Development. My journey kicked off at <a href="http://www.theppc.com/" target="_blank">PPC</a> (Picture Production Company), where I dabbled in crafting websites for movies and video games. Fast forward through seven exhilarating years, and it was time for this bird to spread its wings. I embarked on a freelancing adventure for four years, until <a href="http://www.buzzradar.com/" target="_blank">Buzz Radar</a> swooped in with an irresistible professional opportunity that I couldn't resist. I've been proudly serving as a Senior Front End Developer with them ever since.</p>

              <p>Now, I've come full circle and found myself back in Barcelona, where I've planted my roots and embraced the sunny lifestyle. If you're curious to see what I've been up to, feel free to explore my projects. And if you're in need of a helping hand with an upcoming project, drop me an email - I'll be sure to get back to you in a jiffy!</p>

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
                <!-- <li class="icons-list__item">
                  <a href="https://www.facebook.com/jacob.lon.1979?ref=bookmarks" rel="nofollow" target="_blank" title="Follow me!">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                    Facebook
                  </a>
                </li> -->
                <li class="icons-list__item">
                  <a href="https://www.instagram.com/lainfanta_/" rel="nofollow" target="_blank" title="See some of my pictures">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                    Instagram
                  </a>
                </li>
                <!-- <li class="icons-list__item">
                  <a href="https://trello.com/theinfant" rel="nofollow" target="_blank" title="Find me on Trello">
                    <i class="fa fa-trello" aria-hidden="true"></i>
                    Trello
                  </a>
                </li> -->
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

@import "@/scss/mixins.scss";


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
































