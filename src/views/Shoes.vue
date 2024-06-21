<template>
    <div class="img-content-box">
      <div class="box" @click="clickMethodShoes1">
       <img class="img-content-pr" src="@/assets/images/shoes1.png" alt="" />
       <p>Product beschrijving</p>
       <p>17,99</p>
      </div> 
      <div class="box" @click="clickMethodShoes2">
       <img class="img-content-pr" src="@/assets/images/shoes2.png" alt="" />
       <p>Product beschrijving</p>
       <p>17,99</p>
      </div>
      <div class="box" @click="clickMethodShoes3">
       <img class="img-content-pr" src="@/assets/images/shoes3.png" alt="" />
       <p>Product beschrijving</p>
       <p>17,99</p>
      </div>
      <div class="box" @click="clickMethodShoes4">
       <img class="img-content-pr" src="@/assets/images/shoes4.png" alt="" />
       <p>Product beschrijving</p>
       <p>17,99</p>
      </div>
      <div class="box" @click="clickMethodShoes5">
       <img class="img-content-pr" src="@/assets/images/shoes5.png" alt="" />
       <p>Product beschrijving</p>
       <p>17,99</p>
      </div>
      <div class="box" @click="clickMethodShoes6">
       <img class="img-content-pr" src="@/assets/images/shoes6.png" alt="" />
       <p>Product beschrijving</p>
       <p>17,99</p>
      </div>
      <div class="box" @click="clickMethodShoes7"> 
       <img class="img-content-pr" src="@/assets/images/shoes7.png" alt="" />
       <p>Product beschrijving</p>
       <p>17,99</p>
      </div>
      <div class="box" @click="clickMethodShoes8" >
       <img class="img-content-pr" src="@/assets/images/shoes8.png" alt="" />
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
    clickMethodShoes1() {
      this.$router.push({name:"Home"});
    },
    clickMethodShoes2() {
      this.$router.push({name:"Home"});
    },
    clickMethodShoes3() {
      this.$router.push({name:"Home"});
    },
    clickMethodShoes4() {
      this.$router.push({name:"Home"});
    },
    clickMethodShoes5() {
      this.$router.push({name:"Home"});
    },
    clickMethodShoes6() {
      this.$router.push({name:"Home"});
    },
    clickMethodShoes7() {
      this.$router.push({name:"Home"});
    },
    clickMethodShoes8() {
      this.$router.push({name:"Home"});
    },
  },
};

</script>