/* eslint-disable */

<template>

	<div>
	 	
	 	<aside class="menu">
	        <nav class="menu__nav">
	          
				<ul class="nav__list">

					
					
					<li v-for="(menuItem,index) in mainMenuOptions">		
						<router-link :to="menuItem.route">{{menuItem.name}}</router-link>
					</li>


					<li class="socials">
						<a v-for="social in socialOptions" class="" :href="social.href" target="_blank">
							<!-- <i :class="social.icon"></i> -->
							<i :class="social.icon"></i>
						</a>


					</li>

				</ul>

	        </nav>
	      </aside>

	</div>

</template>







<script>

	export default {
	  name: 'MainNav',
	  data : function() {
	  	return {
	  		mainMenuOptions : [
	  			{
	  				name : "Projects",
	  				route : "/projects/list",
	  			},
	  			{
	  				name : "Clients",
	  				route : "/clients",
	  			},
	  			{
	  				name : "Skills",
	  				route : "/skills",
	  			},
	  			{
	  				name : "Fun",
	  				route : "/fun",
	  			},
	  			{
	  				name : "About Me",
	  				route : "/aboutme",
	  			},
	  			{
	  				name : "Framing",
	  				route : "/framing",
	  			},
	  		],
	  		socialOptions : [
	  			{
	  				name : "email",
	  				icon : "fa fa-envelope-o fa-lg",
	  				href : "mailto:j.infante.garcia@gmail.com?subject=Hi from elInfanteSpace",
	  			},
	  			{
	  				name : "linkedin",
	  				icon : "fa fa-linkedin fa-lg",
	  				href : "https://www.linkedin.com/in/juaninfante/",
	  			},
	  			{
	  				name : "instagram",
	  				icon : "fa fa-instagram fa-lg",
	  				href : "https://www.instagram.com/lainfanta_/",
	  			},
	  		]
	  	}
	  },
	  mounted: function(){

	  },
	  methods : {
	  	// mouseOver : function(rolloverRoute) {
	  	// 	this.subMenu.showSubMenu = rolloverRoute.hasChildren;

	  	// 	var leftOffset = this.$refs.NavItemsRef[rolloverRoute.index].offsetLeft;
	  	// 	this.subMenu.styleSubMenu.left = leftOffset+'px';

	  	// 	//attach new options to Submenu
	  	// 	this.subMenu.routes = rolloverRoute.children;
	  	// },
	  	// navMouseLeave : function() {
	  	// 	this.subMenu.showSubMenu = false;
	  	// },
	  }
	}

</script>








<style lang="scss" scoped>

	@import "@/scss/mixins.scss";


	.menu {
	  
	  background-color:rgba(0,0,0,1);
	  border-left: 1px solid #f2f2f2;
	  position: fixed;
	  top: 0px;
	  right: -200px;
	  height: 100%;
	  width: 200px; 
	  padding-top:0px;
	  z-index:9999;

	  .menu__nav {

	    font-size: 1rem;
	    margin-top:15px;


	    ul {
	      list-style:none;
	      padding-left:20px;
	      padding-right:20px;

	      a{
	        text-decoration:none;
	        color:#fff;
	        padding:5px 5px;
	        @include border-radius(5px);
	        display:block;
	        font-size:20px;
	      }

	      a:hover {
	        color:#5bcf1c;
	      }

	      .router-link-active{
	        color:#5bcf1c;
	      }

	      .socials {
	        margin-top:50px;

	        a{
	          display:inline-block;
	        }

	      }


	    }

	  }
	}

</style>
































