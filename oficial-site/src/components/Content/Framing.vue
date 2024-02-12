/* eslint-disable */

<template>

    <div class="content-dom">
      <div class="content-page">

      	<div class="framing">



          <form>
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="validationDefault01">Glass Width</label>
                <input type="number" class="form-control" id="glass_w" placeholder="cm" value="0" required>
              </div>
              <div class="col-md-6 mb-3">
                <label for="validationDefault02">Glass Height</label>
                <input type="number" class="form-control" id="glass_h" placeholder="cm" value="0" required>
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="validationDefault01">Live Area Width</label>
                <input type="number" class="form-control" id="live_area_w" placeholder="cm" value="0" required>
              </div>
              <div class="col-md-6 mb-3">
                <label for="validationDefault02">Live Area Height</label>
                <input type="number" class="form-control" id="live_area_h" placeholder="cm" value="0" required>
              </div>
            </div>
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="validationDefault01">Border around photo?</label>
                <input type="number" class="form-control" id="border_photo" placeholder="cm" value="0" required>
              </div>
            </div>
            <div class="form-row result">
              <div class="alert-holder">
                <!-- Javascript -->
              </div>
              <div class="col-md-12 mb-3 copy">
                <!-- Javascript -->
              </div>
            </div>

            <button v-on:click="submitForm" class="btn btn-primary" type="button">Get Matt Board Dimensions</button>

          </form>


              

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

        },
        methods : {
          submitForm : function(e) {
              e.preventDefault();
              
              var glassW = $('#glass_w').val();
              var glassH = $('#glass_h').val();
              var liveAreaW = $('#live_area_w').val();
              var liveAreaH = $('#live_area_h').val();
              var border = Number($('#border_photo').val());
              var safety = (border != 0) ? 0 : 0;

              var top = ((glassH/2 - liveAreaH/2) + safety - border).toFixed(2);
              var bottom = ((glassH/2 - liveAreaH/2) + safety - border).toFixed(2);
              var left = ((glassW/2 - liveAreaW/2) + safety - border).toFixed(2);
              var right = ((glassW/2 - liveAreaW/2) + safety - border).toFixed(2);

              var finalDimensions = "<strong>Border around the whole:</strong><br>";
              finalDimensions += "Top <i class='fa fa-arrow-right'></i> "+top+' cm<br>';
              finalDimensions += "Bottom <i class='fa fa-arrow-right'></i> "+bottom+' cm<br>';
              finalDimensions += "Left <i class='fa fa-arrow-right'></i> "+left+' cm<br>';
              finalDimensions += "Right <i class='fa fa-arrow-right'></i> "+right+' cm<br>';

              $('.result').find('.copy').html(finalDimensions);

              $('.result').find('.alert-holder').empty();
              if (border == 0){
                $('.result').find('.alert-holder').html('<div class="alert alert-success" style="font-size:12px;" role="alert"><strong>Note: </strong>I have added 1m around the hole of the matt board to make sure the image fits perfectly.</div>')
              }

              $('.result').show();
          },
        }
	}

</script>








<style lang="scss" scoped>

    .framing {
        position: relative;
        font-size: 1.2rem;
        margin-top:50px;
    }

    .btn-primary{
      background: #5bcf1c;
      border:0px;
    }

    .content-dom{
      padding:30px;
    }

    .content-page {
      margin:0 auto;
      height:100%;
      width: 30%;
    }

    .result{
      display:none;
    }

    @media only screen and (max-width : 850px) {

      .framing {
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
































