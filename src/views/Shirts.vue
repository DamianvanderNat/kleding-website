<template>
 <div class="img-content-box">
   <div class="box" @click="clickMethodShirts1">
    <p>Product beschrijving</p>
    <p>17,99</p>
   </div> 
   <div class="box" @click="clickMethodShirts2">
    <p>Product beschrijving</p>
    <p>17,99</p>
   </div> 
   <div class="box" @click="clickMethodShirts3">
    <p>Product beschrijving</p>
    <p>17,99</p>
   </div> 
   <div class="box" @click="clickMethodShirts4">
    <p>Product beschrijving</p>
    <p>17,99</p>
   </div> 
   <div class="box" @click="clickMethodShirts5">
    <p>Product beschrijving</p>
    <p>17,99</p>
   </div> 
   <div class="box" @click="clickMethodShirts6">
    <p>Product beschrijving</p>
    <p>17,99</p>
   </div> 
   <div class="box" @click="clickMethodShirts7">
    <p>Product beschrijving</p>
    <p>17,99</p>
   </div> 
   <div class="box" @click="clickMethodShirts8">
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