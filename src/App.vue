<template>
  <div class="Wrapper">
    <div class="Container" v-if="!loading && !error">
      <CategoryComponent v-for="category in Categories" :key="category.id"
      :color="category.color"  
      :name="category.name"
      :productCount="category.productCount"
      :image="category.image"
      />
    </div>

    <div class="PromotionContainer" v-if="!loading && !error">
      <PromotionComponent v-for="promotion in Promotions" :key="promotion.id"
      :color="promotion.color"  
      :title="promotion.title"
      :image="promotion.image"
      />
    </div>

    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
  </div>

  <RouterView/>
</template>

<script>
import axios from 'axios';
import CategoryComponent from './components/Category.vue';
import PromotionComponent from './components/Promotion.vue';
import { RouterView } from 'vue-router';

export default {
  components: {
    CategoryComponent,
    PromotionComponent
  },

  data() {
    return {
      Categories: [],
      Promotions: [],
      loading: true,
      error: null
    };
  },

  methods: {
    async fetchCategories() {
      try {
        const response = await axios.get('http://localhost:3000/api/categories');
        this.Categories = response.data;
      } catch (error) {
        this.error = 'Error fetching categories';
      } finally {
        this.loading = false;
      }
    },

    async fetchPromotions() {
      try {
        const response = await axios.get('http://localhost:3000/api/promotions');
        this.Promotions = response.data;
      } catch (error) {
        this.error = 'Error fetching promotions';
      } finally {
        this.loading = false;
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
.Wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding: 0px 20px;
}

.Container {
  width: 83%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 50px;
}

.PromotionContainer {
  width: 85%;
  display: flex;
  justify-content: space-evenly;
}
</style>
