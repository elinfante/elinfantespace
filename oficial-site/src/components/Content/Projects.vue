/* eslint-disable */

<template>

    <div>

      <div class="content-dom">
        <div :class="this.classObject">

          <div class="d-none d-sm-block">
            <router-link to="/projects/list" class="btn btn-light mr-2"><i class="fa fa-list-ul"></i></router-link>
            <router-link to="/projects/grid" class="btn btn-light mr-2"><i class="fa fa-th-large"></i></router-link>
          </div>

          <router-view/>    

        </div>
      </div>

  
    </div>

</template>







<script>


	export default {
        name: 'Projects',
        components: {
        
        },
        data() {
            return {
              classObject : "content-page list",
            };
        },
        created() {
          this.getContentPageClass(this.$route.path);
        },
        mounted(){
        
        },
        updated() {
          this.getContentPageClass(this.$route.path);
        },
        methods: {
          getContentPageClass : function(currentRoute) {
            if (currentRoute == '/projects/grid') {
              this.classObject = "content-page grid";
            }else{
              this.classObject = "content-page list";
            }
          }
        }
	}

</script>








<style lang="scss" scoped>

  .router-link-active{
    background-color: #e2e6ea;
    background-image: none;
    border-color: #dae0e5;
  }


  .content-dom{
    padding:30px;
  }

  .content-page {
    margin:0 auto;
    height:100%;

    &.grid {
      width: 95%;
    }

    &.list {
      width: 50%;
    }

  }




  @media only screen and (max-width : 850px) {

    .content-dom{
      padding: 10px 20px 20px 20px;
    }

    .content-page {

      &.grid {
        width: 100%;
      }

      &.list {
        width: 100%;
      }

    }

  }

   
</style>
































