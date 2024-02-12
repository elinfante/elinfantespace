/* eslint-disable */

<template>

    <div>

      <div class="content-dom">
        <div class="content-page">

			<div class="not-found text-center">

				<img class="mt-4" src="/assets/img/404.jpg" width="100%" alt="Page not found" />

				<h1 class="mt-4">Page Not Found</h1>
				<p>
					Sorry It seems you are trying to access<br>
					a page that does not exist.
				</p>
			</div>

        </div>
      </div>
  
    </div>

</template>







<script>

	export default {
        name: 'not-found',
        data() {
            return {

            };
        },
        created() {

        },
        mounted(){
        
        },
        updated() {

        },
        methods: {

        }
	}

</script>








<style lang="scss" scoped>

  .content-dom{
    padding:30px;
  }

  .content-page {
    margin:0 auto;
    height:100%;
    width: 30%;
  }




  @media only screen and (max-width : 850px) {

    .content-dom{
      padding: 10px 20px 20px 20px;
    }

    .content-page {
      width: 70%;
    }

  }

   
</style>
































