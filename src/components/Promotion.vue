<template>
    <div class="container">
        <button type="button" 
        :style="{backgroundColor: color}"
        class="btn"
        >
            <div class="wrapper">
                <span class="text">{{ text }}</span>
                <Button @click="shopNow(text)"></Button>
            </div>
            <img :src="picture" alt="item picture" class="item-picture" />
        </button>
    </div>
  </template>
  
  <script>
    import Button from './Button.vue';
  
    export default {
        components: {
            Button,
        },
        name:"promotion",
        props: ["color","picture","text","buttonColor"],
        
  
        methods:{
            shopNow(text) {
             alert("Let's shop: "+this.text);
            }
        }
    };
  </script>
  
  <style scoped>
    .btn{
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: 1fr;
  
        height: 190px;
        width: 380px;
        border: solid 1px;
        border-radius: 7px;
        padding-left: 15px;
    }
  
    .wrapper{
        display: grid;
        grid-template-rows: 70% 30%;
        gap: 10px;
        justify-content: center;
        align-self:center;
        padding-left: 10px;
    }
  
    .text{
        color: #253D4E;
        font-family:Quicksand;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        padding-right: 10px;
    }
  
    .item-picture {
        display: flex;
        align-self: self-end;
        max-width: 300px;
        max-height: 130px;
        padding-right: 50px;
    }
  </style>