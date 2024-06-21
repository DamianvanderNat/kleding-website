<template>
    <div class="img-content-box">
      <div class="box">
        <img class="img-content-pr" @click="clickMethodDress1" src="../assets/images/dress1.png">
        <p>Product beschrijving</p>
      </div>    
      <div class="box">
        <img class="img-content-pr" @click="clickMethodDress2" src="../assets/images/dress2.png">
        <p>Product beschrijving</p>
      </div>  
      <div class="box">
        <img class="img-content-pr" @click="clickMethodDress3" src="../assets/images/dress3.png">
        <p>Product beschrijving</p>
      </div>  
      <div class="box">
        <img class="img-content-pr" @click="clickMethodDress4" src="../assets/images/dress4.png">
        <p>Product beschrijving</p>
      </div>  
      <div class="box">
        <img class="img-content-pr" @click="clickMethodDress5" src="../assets/images/dress5.png">
        <p>Product beschrijving</p>
      </div>  
      <div class="box">
        <img class="img-content-pr" @click="clickMethodDress6" src="../assets/images/dress6.png">
        <p>Product beschrijving</p>
      </div>  
      <div class="box">
        <img class="img-content-pr" @click="clickMethodDress7" src="../assets/images/dress7.png">
        <p>Product beschrijving</p>
      </div>  
      <div class="box">
        <img class="img-content-pr" @click="clickMethodDress8" src="../assets/images/dress8.png">
        <p>Product beschrijving</p>
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
    clickMethodDress1() {
      this.$router.push({name:"Home"});
    },
    clickMethodDress2() {
      this.$router.push({name:"Home"});
    },
    clickMethodDress3() {
      this.$router.push({name:"Home"});
    },
    clickMethodDress4() {
      this.$router.push({name:"Home"});
    },
    clickMethodDress5() {
      this.$router.push({name:"Home"});
    },
    clickMethodDress6() {
      this.$router.push({name:"Home"});
    },
    clickMethodDress7() {
      this.$router.push({name:"Home"});
    },
    clickMethodDress8() {
      this.$router.push({name:"Home"});
    },
  },
};
</script>