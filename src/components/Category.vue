<template>
  <div class="buttonContainer">
      <button type="button" 
      :style="{backgroundColor: color}"
      class="btn"
      >
          <img :src="image" alt="item picture" width="70px" height="70px" />
          <div class="text">
              <span class="ItemName">{{ name }}</span>
              <span class="ItemQuantity">{{ productCount }}</span>
          </div>
      </button>
  </div>
</template>

<script>
  export default {
      props: {
      color: String,
      name: String,
      productCount: String,
      image: String,
      },
  };
</script>

<style scoped>
  .buttonContainer {
      display: flex;
      align-items: center;
  }

  .btn{
      height: 135px;
      width: 108px;
      border: solid black 1px;
      border-radius: 7px;
  }

  .text{
      display: flex;
      flex-direction: column;
      align-items: center;
  }

  .ItemName{
      color: #253D4E;
      font-family:Quicksand;
      font-size: 10px;
      font-weight: bold;
  }

  .ItemQuantity{
      color: #B6B6B6;
      font-size: 8px;
  }
</style>