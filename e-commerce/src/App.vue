<template>
  <div class="Wrapper">
    <div class="Container">
      <CategoryComponent v-for="category in Categories" :key="category.id" 
      :color="category.color"  
      :name="category.name"
      :quantity="category.quantity"
      :picture="category.picture"
      />
    </div>

    <div class="PromotionContainer">
      <PromotionComponent v-for="promotion in Promotions" :key="promotion.id" 
      :color="promotion.color"  
      :text="promotion.text"
      :picture="promotion.picture"
      />
    </div>
  </div>

  <RouterView/>
</template>

<script>
import CategoryComponent from './components/Category.vue';
import PromotionComponent from './components/Promotion.vue';
import { RouterView } from 'vue-router';
import axios from 'axios';

export default {
  components: {
    CategoryComponent,
    PromotionComponent
  },
  data() {
    return {
      Categories: [],
      Promotions: []
    };
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await axios.get('http://localhost:3000/api/categories');
        this.Categories = response.data;
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    },
    async fetchPromotions() {
      try {
        const response = await axios.get('http://localhost:3000/api/promotions');
        this.Promotions = response.data;
      } catch (error) {
        console.error('Error fetching promotions:', error);
      }
    }
  },
  mounted() {
    this.fetchCategories();
    this.fetchPromotions();
  }
};
</script>

<style scoped>
.Wrapper{  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding: 0px 20px;
}

.Container{
  width: 83%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 50px;
}

.PromotionContainer{
  width: 85%;
  display: flex;
  justify-content: space-evenly;
}
</style>
