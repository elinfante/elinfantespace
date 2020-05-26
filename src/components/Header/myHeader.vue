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
	            <a href="/">La Infanta</a>
	            <h2 class="logo__subtitle mt-1">Front End Developer and Web Designer</h2>
	          </div>
	        </div>

	        <div class="menu-trigger closed" title="Toggle the sidebar navigation menu">
	          <span>MENU</span>
	          <button v-on:click="clickMenu" type="button">
	            <img class="menu-trigger-open" src="@/assets/img/menu-icon.svg" width="30" height="30" alt="Open Menu">
	            <img class="menu-trigger-close" src="@/assets/img/close.svg" width="30" height="30"  alt="Close Menu">
	          </button>
	        </div>

	 	</header>

	</div>

</template>







<script>

	export default {
	  name: 'myHeader',
	  data : function() {
	  	return {
	  		svgContainer : null,
	  		progressColor : '#5bcf1c',
	  		currentAvatar : 0,
	  		numAvatars : 5,
	  		circleMask : null,
	  		pogressG : null,
	  	}
	  },
	  watch: {

	  },
	  mounted: function(){
	  	this.$router.beforeEach((to, from, next) => {
	  		this.closeMenu();
	  		next();
		});
	  	if (!this.svgContainer) {
			this.createAvatar();
	  	}
	  	this.onWindowScroll();
	  },
	  methods : {
	  	createAvatar : function() {
	  		this.loadAvatarImage(d3.select('svg'));
  			this.loadProgress(d3.select('svg'));
	  	}, 
	  	loadAvatarImage : function (d3SVG) {
			this.currentAvatar++;
			this.currentAvatar = (this.currentAvatar > this.numAvatars) ? 1 : this.currentAvatar; 
			var urlImage = require('@/assets/img/avatars/avatar'+this.currentAvatar+'.jpg');

			//load circle mask
			if (!this.circleMask) {
				this.circleMask = d3SVG.append("clipPath")
				.attr("id", "mask-circle")
				.append("circle")
				.attr("cx", 40)
				.attr("cy", 40)
				.attr("r", 39)
				.style("fill", "#ff0000");
			}

			//load the image
			if (!this.avatar) {
				this.avatar = d3SVG.append("image")
				    .on('load', function() {
				         //I remove the listener we do not need it any longer
				         d3.select(this).on('load',null);
				    })
				    .on('error', function() {
				         //I remove the listener we do not need it any longer
				         d3.select(this).on('error',null);
				    })
				    .attr("xlink:href", urlImage)
				    .attr("width", 80)
				    .attr("height", 80)
				    .attr("clip-path", "url(#mask-circle)");
			}else{
				this.avatar.attr("xlink:href", urlImage);
			}
	  	},
	  	loadProgress : function (d3SVG) {

	  		var tau = 2 * Math.PI; // http://tauday.com/tau-manifesto
			var border = 5;
			var background,foreground;
			var progressG = null;

			// An arc function with all values bound except the endAngle. So, to compute an
			// SVG path string for a given angle, we pass an object with an endAngle
			// property to the `arc` function, and it will return the corresponding string.
			var arc = d3.svg.arc()
			  .innerRadius(40 - border)
			  .outerRadius(40)
			  .startAngle(0);

			// Get the SVG container, and apply a transform such that the origin is the
			// center of the canvas. This way, we don’t need to position arcs individually.
			var svg = d3.select("svg"),
			  width = +svg.attr("width"),
			  height = +svg.attr("height");
			progressG = d3SVG.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
			
			// Add the background arc, from 0 to 100% (tau).

			background = progressG.append("path")
			    .datum({endAngle: tau})
			    .style("fill", "#ddd")
			    .attr("d", arc);


			// Add the foreground arc in orange, currently showing 12.7%.
			foreground = progressG.append("path")
			  .datum({endAngle: 0})
			  .style("fill", '#5bcf1c')
			  .attr("d", arc);


			foreground.transition()
			  .duration(5000)
			  .attrTween("d", arcTween(tau));


			setTimeout(function() {
			    background.remove();
			    foreground.remove();
			    progressG.remove();
			    this.createAvatar();
			}.bind(this),5100);


			// Returns a tween for a transition’s "d" attribute, transitioning any selected
			// arcs from their current angle to the specified new angle.
			function arcTween(newAngle) {
				return function(d) {
				  var interpolate = d3.interpolate(d.endAngle, newAngle);
				  return function(t) {
				    d.endAngle = interpolate(t);
				    return arc(d);
				  };
				};
			}

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
	  	}
	  }
	}

</script>








<style lang="scss" scoped>

	@import "compass";

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

        a {
          font-family: 'Open Sans', sans-serif;
          font-size: 1.8rem;
          font-style: normal;
          font-weight: 800;
          line-height: 1.5rem;
          margin:0;

        }

        .logo__subtitle {
          font-family: 'Open Sans', sans-serif;
          font-size: 1rem;
          line-height: 0.5rem;
          font-weight:300;
        }

      }

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
            @include transform(scale(0.625, 0.625));
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
          @include transform(scale(0.625, 0.625));
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
































