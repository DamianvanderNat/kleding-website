<template>
    <div class="img-content-box">
       <div class="box"> 
        <img class="img-content-pr" @click="clickMethodPants1" src="../assets/images/pants1.png">
        <p>Product beschrijving</p>
       </div>  
       <div class="box"> 
        <img class="img-content-pr" @click="clickMethodPants2" src="../assets/images/pants2.png">
        <p>Product beschrijving</p>
       </div> 
       <div class="box"> 
        <img class="img-content-pr" @click="clickMethodPants3" src="../assets/images/pants3.png">
        <p>Product beschrijving</p>
       </div> 
       <div class="box"> 
        <img class="img-content-pr" @click="clickMethodPants4" src="../assets/images/pants4.png">
        <p>Product beschrijving</p>
       </div> 
       <div class="box"> 
        <img class="img-content-pr" @click="clickMethodPants5" src="../assets/images/pants5.png">
        <p>Product beschrijving</p>
       </div> 
       <div class="box"> 
        <img class="img-content-pr" @click="clickMethodPants6" src="../assets/images/pants6.png">
        <p>Product beschrijving</p>
       </div> 
       <div class="box"> 
        <img class="img-content-pr" @click="clickMethodPants7" src="../assets/images/pants7.png">
        <p>Product beschrijving</p>
       </div> 
       <div class="box"> 
        <img class="img-content-pr" @click="clickMethodPants8" src="../assets/images/pants8.png">
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
      clickMethodPants1() {
        this.$router.push({name:"Home"});
      },
      clickMethodPants2() {
        this.$router.push({name:"Home"});
      },
      clickMethodPants3() {
        this.$router.push({name:"Home"});
      },
      clickMethodPants4() {
        this.$router.push({name:"Home"});
      },
      clickMethodPants5() {
        this.$router.push({name:"Home"});
      },
      clickMethodPants6() {
        this.$router.push({name:"Home"});
      },
      clickMethodPants7() {
        this.$router.push({name:"Home"});
      },
      clickMethodPants8() {
        this.$router.push({name:"Home"});
      },
    },
  };
  
  </script>