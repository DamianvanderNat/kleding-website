<template>
  <div class="img-content-box">
    <div class="box" @click="clickMethodShirts1">
     <img class="img-content-pr" src="@/assets/images/shirts1.png" alt="" />
     <p>Product beschrijving</p>
     <p>17,99</p>
    </div> 
    <div class="box" @click="clickMethodShirts2">
     <img class="img-content-pr" src="@/assets/images/shirts2.png" alt="" />
     <p>Product beschrijving</p>
     <p>17,99</p>
    </div> 
    <div class="box" @click="clickMethodShirts3">
     <img class="img-content-pr" src="@/assets/images/shirts3.png" alt="" />
     <p>Product beschrijving</p>
     <p>17,99</p>
    </div> 
    <div class="box" @click="clickMethodShirts4">
     <img class="img-content-pr" src="@/assets/images/shirts4.png" alt="" />
     <p>Product beschrijving</p>
     <p>17,99</p>
    </div> 
    <div class="box" @click="clickMethodShirts5">
     <img class="img-content-pr" src="@/assets/images/shirts5.png" alt="" />
     <p>Product beschrijving</p>
     <p>17,99</p>
    </div> 
    <div class="box" @click="clickMethodShirts6">
     <img class="img-content-pr" src="@/assets/images/shirts6.png" alt="" />
     <p>Product beschrijving</p>
     <p>17,99</p>
    </div> 
    <div class="box" @click="clickMethodShirts7">
     <img class="img-content-pr" src="@/assets/images/shirts7.png" alt="" />
     <p>Product beschrijving</p>
     <p>17,99</p>
    </div> 
    <div class="box" @click="clickMethodShirts8">
     <img class="img-content-pr" src="@/assets/images/shirts8.png" alt="" />
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
    clickMethodShirts1() {
      this.$router.push({name:"Home"});
    },
    clickMethodShirts2() {
      this.$router.push({name:"Home"});
    },
    clickMethodShirts3() {
      this.$router.push({name:"Home"});
    },
    clickMethodShirts4() {
      this.$router.push({name:"Home"});
    },
    clickMethodShirts5() {
      this.$router.push({name:"Home"});
    },
    clickMethodShirts6() {
      this.$router.push({name:"Home"});
    },
    clickMethodShirts7() {
      this.$router.push({name:"Home"});
    },
    clickMethodShirts8() {
      this.$router.push({name:"Home"});
    },
  },
};

</script>