<template>
    <div class="img-content-box">
       <div class="box">  
        <img class="img-content-pr" @click="clickMethodBikini1" src="../assets/images/bikini1.png">
        <p>Product beschrijving</p>
        <p>17,99</p>
       </div>  
       <div class="box">  
        <img class="img-content-pr" @click="clickMethodBikini2" src="../assets/images/bikini2.png">
        <p>Product beschrijving</p>
        <p>17,99</p>
       </div>  
       <div class="box">  
        <img class="img-content-pr" @click="clickMethodBikini3" src="../assets/images/bikini3.png">
        <p>Product beschrijving</p>
        <p>17,99</p>
       </div>  
       <div class="box">  
        <img class="img-content-pr" @click="clickMethodBikini4" src="../assets/images/bikini4.png">
        <p>Product beschrijving</p>
        <p>17,99</p>
       </div>  
       <div class="box">  
        <img class="img-content-pr" @click="clickMethodBikini5" src="../assets/images/bikini5.png">
        <p>Product beschrijving</p>
        <p>17,99</p>
       </div>  
       <div class="box">  
        <img class="img-content-pr" @click="clickMethodBikini6" src="../assets/images/bikini6.png">
        <p>Product beschrijving</p>
        <p>17,99</p>
       </div>  
       <div class="box">  
        <img class="img-content-pr" @click="clickMethodBikini7" src="../assets/images/bikini7.png">
        <p>Product beschrijving</p>
        <p>17,99</p>
       </div>  
       <div class="box">  
        <img class="img-content-pr" @click="clickMethodBikini8" src="../assets/images/bikini8.png">
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
    clickMethodBikini1() {
      this.$router.push({name:"Bikini1"});
    },
    clickMethodBikini2() {
      this.$router.push({name:"Home"});
    },
    clickMethodBikini3() {
      this.$router.push({name:"Home"});
    },
    clickMethodBikini4() {
      this.$router.push({name:"Home"});
    },
    clickMethodBikini5() {
      this.$router.push({name:"Home"});
    },
    clickMethodBikini6() {
      this.$router.push({name:"Home"});
    },
    clickMethodBikini7() {
      this.$router.push({name:"Home"});
    },
    clickMethodBikini8() {
      this.$router.push({name:"Home"});
    },
  },
};

</script>