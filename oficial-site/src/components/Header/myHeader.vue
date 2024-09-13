/* eslint-disable */

<template>

	<div>
	 	
	 	<header>
	 	
	 		<div class="logo">
	          <div>
	            <a href="/">
	              <div class="avatar__holder">
	              	<svg width="80" height="80"></svg>
	              </div>
	            </a>
	          </div>
	          <div class="logo__text">
	            <a href="/" ref="logoText" class="logo-link">
	              <transition-group name="slide-up" tag="span">
	                <span v-for="(letter, index) in logoLetters" :key="index" class="logo-letter" v-html="letter">
	                </span>
	              </transition-group>
	            </a>
	            <h2 class="logo__subtitle">
	              <span v-for="(char, index) in subtitleText" :key="index" 
	                    :class="['char', { 'visible': index < visibleChars }]">
	                {{ char }}
	              </span>
	            </h2>
	          </div>
	        </div>

	        <div class="menu-trigger closed" title="Toggle the sidebar navigation menu">
	          <!-- <span>MENU</span> -->
	          <button v-on:click="clickMenu" type="button">
	            <img class="menu-trigger-open" src="/assets/img/menu-icon.svg" width="30" height="30" alt="Open Menu">
	            <img class="menu-trigger-close" src="/assets/img/close.svg" width="30" height="30"  alt="Close Menu">
	          </button>
	        </div>

	 	</header>

	</div>

</template>







<script>

import * as d3 from 'd3';
import $ from 'jquery';

	export default {
	  name: 'myHeader',
	  data : function() {
	  	return {
	  		svgContainer : null,
	  		progressColor : '#5bcf1c',
	  		currentAvatar : 0,
	  		numAvatars : 5,
	  		circleMask : null,
	  		avatar : null,
			ring : null,
	  		progressInterrupted: false,
	  		delayTimer: null,
	  		preloadedImages: [],
	  		logoLetters: [],
	  		subtitleText: "Innovative Front-End Engineer | Web Specialist | AI Prompt Engineer",
	  		visibleChars: 0,
	  	}
	  },
	  watch: {

	  },
	  mounted: function(){
	  	console.log('Component mounted');
	  	this.$router.beforeEach((to, from, next) => {
	  		this.closeMenu();
	  		next();
		});
	  	if (!this.svgContainer) {
			this.createAvatar();
	  	}
	  	this.onWindowScroll();
	  	this.preloadAvatars();
	  	this.animateLogoText();
	  	this.animateSubtitle();
	  },
	  beforeUnmount: function() {
	    // Clean up any ongoing animations or timers
	    this.progressInterrupted = true;
	    if (this.delayTimer) {
	      clearTimeout(this.delayTimer);
	    }
	  },
	  methods : {
	  	createAvatar : function() {
	  		const svg = d3.select('svg');
	  		this.loadAvatarImage(svg);
	  	}, 
	  	loadAvatarImage : function (d3SVG) {
			this.currentAvatar = (this.currentAvatar % this.numAvatars) + 1;
			var urlImage = `/assets/img/avatars/avatar${this.currentAvatar}.jpg`;

			// Use the preloaded image if available
			const preloadedImage = this.preloadedImages[this.currentAvatar - 1];
			if (preloadedImage && preloadedImage.complete) {
				urlImage = preloadedImage.src;
			}

			if (!this.circleMask) {
				this.circleMask = d3SVG.append("clipPath")
					.attr("id", "mask-circle")
					.append("circle")
					.attr("cx", 40)
					.attr("cy", 40)
					.attr("r", 37.5)  // (80 - 5) / 2
					.style("fill", "#ff0000");
			}

			if (!this.avatar) {
				this.avatar = d3SVG.append("image")
					.attr("xlink:href", urlImage)
					.attr("width", 80)
					.attr("height", 80)
					.attr("clip-path", "url(#mask-circle)")

				if (!this.ring) {
					this.ring = d3SVG.append("circle")
						.attr("cx", 40)
						.attr("cy", 40)
						.attr("r", 37.5)  // (80 - 5) / 2
						.style("fill", "none")
						.style("stroke", this.progressColor)
						.style("stroke-width", 5)  // Updated to 5px
						.style("stroke-dasharray", "0 235.62")  // 2 * PI * 37.5
				}
			} else {
				// Fade out current avatar
				this.avatar.transition()
					.duration(500)
					.style("opacity", 0)
					.on("end", () => {
						// Update image and fade in
						this.avatar.attr("xlink:href", urlImage)
							.transition()
							.duration(500)
							.style("opacity", 1);
					});
			}

			// Interrupt any ongoing animation or delay
			this.progressInterrupted = true;
			if (this.delayTimer) {
				clearTimeout(this.delayTimer);
			}

			// Start the progress animation
			this.startProgressAnimation();
	  	},
	  	loadProgress : function (d3SVG) {
	  		// This method is now empty as we've moved the progress logic to startProgressAnimation
	  	},
	  	startProgressAnimation: function() {
	  		// Reset the interrupted flag
	  		this.progressInterrupted = false;

	  		const animationDuration = 1000; // 1 second
	  		const startTime = Date.now();

	  		const animate = () => {
	  			if (this.progressInterrupted) return;

	  			const elapsedTime = Date.now() - startTime;
	  			const progress = Math.min(elapsedTime / animationDuration, 1);
	  			
	  			const dashArray = progress * 235.62;  // 2 * PI * 37.5
	  			this.ring.style("stroke-dasharray", `${dashArray} 235.62`);

	  			if (progress < 1) {
	  				requestAnimationFrame(animate);
	  			} else {
	  				// Animation completed, wait for 3 seconds before loading next avatar
	  				this.delayTimer = setTimeout(() => {
	  					if (!this.progressInterrupted) {
	  						this.loadAvatarImage(d3.select('svg'));
	  					}
	  				}, 3000);
	  			}
	  		};

	  		requestAnimationFrame(animate);
	  	},
	  	clickMenu : function() {
	  		let page = $('.page');
			let menu = $('.menu');
			let menuTrigger = $('.menu-trigger');
			let header = $('header');
			let headerSticky = $('.header--sticky');
			
			if (menuTrigger.hasClass('opened')) {
				menuTrigger.removeClass('opened').addClass('closed');
				page.animate({left: "0px"}, 300);
				headerSticky.animate({left: "0px"}, 300);
				menu.animate({right: "-200px"}, 300);
				menuTrigger.find('span').html('MENU');
				self.menuOpened = false;
			}else{
				menuTrigger.removeClass('closed').addClass('opened');
				page.animate({left: "-200px"}, 300);
				headerSticky.animate({left: "-200px"}, 300);
				menu.animate({right: "0px"}, 300);
				menuTrigger.find('span').html('CLOSE MENU');
				self.menuOpened = true;
			}

			$('img.menu-trigger-open').toggle();
			$('img.menu-trigger-close').toggle();

	  	},
	  	closeMenu: function() {
	  		let page = $('.page');
			let menu = $('.menu');
			let menuTrigger = $('.menu-trigger');
			let header = $('header');
			let headerSticky = $('.header--sticky');

	  		menuTrigger.removeClass('opened').addClass('closed');
			page.animate({left: "0px"}, 300);
			headerSticky.animate({left: "0px"}, 300);
			menu.animate({right: "-200px"}, 300);
			menuTrigger.find('span').html('MENU');
			self.menuOpened = false;

			$('img.menu-trigger-open').show();
			$('img.menu-trigger-close').hide();
	  	},
	  	onWindowScroll : function() {
	  		let page = $('.page');
			let menu = $('.menu');
			let header = $('header');
			let navBtn = $('.menu-trigger button');
			let self = this;

			//To show/hide fixed header when scrolling
			let navOffsetWhenScroll = 130;
			$(window).on("scroll", function(e) {
				let pageOffset = page.offset().left;
				let headerSticky = $('.header--sticky');

				if ($(this).scrollTop() > navOffsetWhenScroll) {
					header.addClass("header--sticky");
					setTimeout(function() {
						header.addClass("animIn");
					}, 0);
				} else {
					header.removeClass("header--sticky animIn");
				}
				headerSticky.animate({left: pageOffset}, 0);

			});
	  	},
	  	preloadAvatars: function() {
	  		for (let i = 1; i <= this.numAvatars; i++) {
	  			const img = new Image();
	  			img.src = `/assets/img/avatars/avatar${i}.jpg`;
	  			this.preloadedImages.push(img);
	  		}
	  	},
	  	animateLogoText: function() {
	  		console.log('Animating logo text');
	  		const text = "El\u00A0Infante"; // Using non-breaking space
	  		const letters = text.split('');
	  		letters.forEach((letter, index) => {
	  			setTimeout(() => {
	  				this.logoLetters.push(letter === '\u00A0' ? '&nbsp;' : letter);
	  			}, index * 75); // 150ms delay between each character, including space
	  		});
	  	},
	  	animateSubtitle: function() {
	  		const typeNextChar = () => {
	  			if (this.visibleChars < this.subtitleText.length) {
	  				this.visibleChars++;
	  				setTimeout(typeNextChar, 50); // Adjust typing speed here
	  			}
	  		};

	  		typeNextChar();
	  	}
	  }
	}

</script>








<style lang="scss" scoped>

	@mixin align-items($alignment) {
		align-items: $alignment;
	}

	@mixin display-flex() {
		display: flex;
	}

	@mixin justify-content($value) {
		justify-content: $value;
	}

	@mixin transform($value) {
		transform: $value;
	}

	@mixin transform-origin($x, $y) {
		transform-origin: $x $y;
	}

	header {
		background:white;
		border-bottom: 1px solid #e7ebee;
	}

	.menu-trigger {
	      @include align-items(center);
	      @include display-flex();
	      position:absolute;
	      top:33px;
	      right:30px;

	      span{
	        font-size:13px;
	        margin-right:10px;
	      }

	      button {
	          border: 0;
	          background: transparent;
	          padding: 0;
	          cursor: pointer;
	          display: block;
	          outline: 0;  

	          img.menu-trigger-open {
	              display:block;
	          }

	          img.menu-trigger-close {
	              display:none;
	          }

	      }

	  }

	  .header--sticky {

	      background-color:rgba(255,255,255,0.8);
	      border-bottom: 1px solid #e7ebee;
	      right: 0px;
	      max-width: 100%;
	      margin: 0;
	      padding: 0px;
	      position: fixed;
	      top: -200px;
	      width: 100%; 

	      z-index:9999;

	      .menu-trigger {
	          top:33px;
	          right:30px;
	      }

	      .logo {
	    
	        padding:10px;

	        .logo__image {
	          width: 80px;
	          height: 80px;
	        }

	      }

	}

	.animIn {

	    -webkit-transition: top 0.5s ease-out;
	    -moz-transition: top 0.5s ease-out;
	    -o-transition: top 0.5s ease-out;
	    transition: top 0.5s ease-out;

	    top:0px;
	}

	.logo {
      
      @include align-items(center);
      @include display-flex();
      @include justify-content(left);
      padding:10px;

      .logo__image {
        display: block;
        margin: 0;
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }

      .avatar__holder{
        width: 80px;
        height: 80px;
        background:white;
        @include transform(scale(1,1));
      }

      .logo__text{
        margin-left:10px;

        .logo-link {
          display: inline-block;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          white-space: nowrap; // Ensure the text stays on one line
        }

        a {
          font-family: 'Open Sans', sans-serif;
          font-size: 1.8rem;
          font-style: normal;
          font-weight: 800;
          line-height: 1.5rem;
          margin:0;
          display: inline-block;
          overflow: hidden;

          .logo-letter {
            display: inline-block;
            color: #5bcf1c;
            font-size: 24px;
          }

        }

        .logo__subtitle {
          font-family: 'Open Sans', sans-serif;
          font-size: 1rem;
          line-height: 1rem;
          font-weight: 300;
          overflow: hidden;
          white-space: nowrap;
          color: #2d3e51;

          .char {
            opacity: 0;
            transition: opacity 0.1s ease-in-out;

            &.visible {
              opacity: 1;
            }
          }
        }

      }

	}

	.slide-up-enter-active {
	  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); // Bouncy easing
	}

	.slide-up-enter-from {
	  opacity: 0;
	  transform: translateY(20px);
	}

	.slide-up-enter-to {
	  opacity: 1;
	  transform: translateY(0);
	}




	/* Smartphones (portrait and landscape) ----------- */
	@media only screen and (max-width : 480px) {

	  

    .menu-trigger {
        position:absolute;
        top:20px;
        right:20px;

        span {
          display:none;
        }
    }
  
    .header--sticky {
        .menu-trigger {
            top:20px;
            right:20px;
        }

        .logo {
      
          padding:10px;

          .logo__image {
            width: 50px;
            height: 50px;
          }

          .avatar__holder{
            width:50px;
            height:50px;
            @include transform(scale(0.625, 0.625)); // 50/80 = 0.625
            @include transform-origin(0,0);
          }

        }
    }

    .logo {
        
        padding:10px;

        .logo__image {
          width: 50px;
          height: 50px;
        }

        .avatar__holder{
          width:50px;
          height:50px;
          @include transform(scale(0.625, 0.625)); // 50/80 = 0.625
          @include transform-origin(0,0);
        }

        .logo__text {

          .logo__title {
            font-size:20px;
          }

          .logo__subtitle {
            display:none;
          }

        }

    }

	  


	  .icons-list__item {
	    font-size:1rem;
	  }



	}


</style>
































