<template>
    <div class="img-content-box">
      <div class="box">
        <img class="img-content-pr"  src="../assets/images/dress1.png">
        <p>Product beschrijving</p>
        <p>17,99</p>
      </div>    
      <div class="box">
        <img class="img-content-pr"  src="../assets/images/dress2.png">
        <p>Product beschrijving</p>
        <p>17,99</p>
      </div>  
      <div class="box">
        <img class="img-content-pr"  src="../assets/images/dress3.png">
        <p>Product beschrijving</p>
        <p>17,99</p>
      </div>  
      <div class="box" @click="clickMethod">
        <img class="img-content-pr"  src="../assets/images/dress4.png">
        <p>Product beschrijving</p>
        <p>17,99</p>
      </div>  
      <div class="box">
        <img class="img-content-pr"  src="../assets/images/dress5.png">
        <p>Product beschrijving</p>
        <p>17,99</p>
      </div>  
      <div class="box">
        <img class="img-content-pr"  src="../assets/images/dress6.png">
        <p>Product beschrijving</p>
        <p>17,99</p>
      </div>  
      <div class="box">
        <img class="img-content-pr"  src="../assets/images/dress7.png">
        <p>Product beschrijving</p>
        <p>17,99</p>
      </div>  
      <div class="box">
        <img class="img-content-pr"  src="../assets/images/dress8.png">
        <p>Product beschrijving</p>
        <p>17,99</p>
      </div>   
    </div>
</template>

<script>
export default {
  name: 'headers',
  data() {
    return {

    };
  },
  methods: {
    clickMethod() {
      this.$router.push({name:"Home"});
    },
  },
};
</script>