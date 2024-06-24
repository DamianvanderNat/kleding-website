<template>
    <div class="product-page">
      <div class="product-image">
        <img :src="product.image" :alt="product.name" />
      </div>
      <div class="product-info">
        <h1>{{ product.name }}</h1>
        <p>{{ product.description }}</p>
        <p class="price">{{ product.price }}</p>
        <button @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </template>
  
  <script>
  import DressImg from "@/assets/images/dress4.png"
  export default {
    data() {
      return {
        product: {
          name: "Zusss jurk ecru",
          description: "Deze damesjurk van Zusss is gemaakt van viscose. De jurk zonder mouwen heeft verder een V hals.",
          price: "€17,99",
          image: DressImg
         }
        }
      },
    methods: {
      addToCart() {
        alert("Product added to cart!");
      }
    }
  }
  </script>

<style>
.product-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}

.product-image img {
  max-width: 450px;
  max-height: 450px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.product-info {
  margin-left: 20px;
  max-width: 400px;
}

.product-info h1 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.product-info p {
  margin-bottom: 10px;
}

.product-info .price {
  font-size: 1.5rem;
  color: #b12704;
  margin-bottom: 20px;
}

.product-info button {
  background-color: #ffa41c;
  border: none;
  padding: 10px 20px;
  color: rgb(15, 8, 8);
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
}

.product-info button:hover {
  background-color: #cc8400;
}
</style>