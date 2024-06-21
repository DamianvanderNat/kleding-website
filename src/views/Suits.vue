<template>
    <div class="img-content-box">
      <div class="box" @click="clickMethodSuits1">
       <img class="img-content-pr" src="@/assets/images/suits1.png" alt="" />
       <p>Product beschrijving</p>
       <p>17,99</p>
      </div> 
      <div class="box" @click="clickMethodSuits1">
       <img class="img-content-pr" src="@/assets/images/suits2.png" alt="" />
       <p>Product beschrijving</p>
       <p>17,99</p>
      </div>
      <div class="box" @click="clickMethodSuits1">
       <img class="img-content-pr" src="@/assets/images/suits3.png" alt="" />
       <p>Product beschrijving</p>
       <p>17,99</p>
      </div>
      <div class="box" @click="clickMethodSuits1">
       <img class="img-content-pr" src="@/assets/images/suits4.png" alt="" />
       <p>Product beschrijving</p>
       <p>17,99</p>
      </div>
      <div class="box" @click="clickMethodSuits1">
       <img class="img-content-pr" src="@/assets/images/suits5.png" alt="" />
       <p>Product beschrijving</p>
       <p>17,99</p>
      </div>
      <div class="box" @click="clickMethodSuits1">
       <img class="img-content-pr" src="@/assets/images/suits6.png" alt="" />
       <p>Product beschrijving</p>
       <p>17,99</p>
      </div>
      <div class="box" @click="clickMethodSuits1">
       <img class="img-content-pr" src="@/assets/images/suits7.png" alt="" />
       <p>Product beschrijving</p>
       <p>17,99</p>
      </div>
      <div class="box" @click="clickMethodSuits1">
       <img class="img-content-pr" src="@/assets/images/suits8.png" alt="" />
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
   clickMethodSuits1() {
     this.$router.push({name:"Home"});
   },
   clickMethodSuits2() {
     this.$router.push({name:"Home"});
   },
   clickMethodSuits3() {
     this.$router.push({name:"Home"});
   },
   clickMethodSuits4() {
     this.$router.push({name:"Home"});
   },
   clickMethodSuits5() {
     this.$router.push({name:"Home"});
   },
   clickMethodSuits6() {
     this.$router.push({name:"Home"});
   },
   clickMethodSuits7() {
     this.$router.push({name:"Home"});
   },
   clickMethodSuits8() {
     this.$router.push({name:"Home"});
   },
 },
};

</script>