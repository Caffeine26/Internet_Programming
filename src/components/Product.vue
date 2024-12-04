<template>
    <div class="productContainer">
        <span class="discount" v-if="promotionAsPercentage>0">-{{ promotionAsPercentage }}%</span>
        <img class="img" :src="image" alt="product Image">
        <div class="description">
            <p class="group">{{ group }}</p>
            <h3 class="title">{{ name }}</h3>
            <p class="rating"> {{ rating }}</p>
            <p class="size">{{ size }}</p>
        </div>
        
        <div class="footer">
            <span>${{ price }}</span>
            <button v-if="!isInvisible" class="addBtn" @click="quantity">Add +</button>
            <input class="input" v-else type="number" placeholder="1">
        </div>

    </div>
</template>

<script>
    export default{
        name: "product",
        props: ["name","image","promotionAsPercentage","rating", "price","categoryId","size","instock","countSold","group"],
        data(){
            return{
                isInvisible: false     
            }
        },
        methods:{
            quantity(){
                this.isInvisible=true;
            }
        }
    }
    
</script>

<style>
.productContainer{
    padding: 20px;
    border-radius: 20px;
    background-color: white;
    border: 1px solid lightgray;
}
.description *{
    margin-top: -10px;
}   
.discount{
    position: absolute;
    margin-left: -20px;
    background-color: rgb(48, 168, 48);
    color: white;
    width: 50px;
    text-align: center; 
    padding: 10px;   
    border-radius: 0px 20px 20px 0px;
}
.img{
    width: 250px;
    height: 250px;
    border-radius: 20px;
    object-fit: cover;
    margin-bottom: 20px;
}
.footer{
    display: flex;
    justify-content: space-between;
    color: #30a830;
    font-size: 25px;
    font-weight: bold;
}
.addBtn{
    padding: 5px;
    width: 70px;
    font-size: 15px;
    height: 30px;
    background-color: #b5e0b5;
    border: none;
    border-radius: 5px;
    color: #30a830;
    font-weight: bold;
    cursor: pointer;
}
.group{
    color:darkgray;
    font-weight: bold;
}
.rating{
    color:darkgray;
    font-weight: bold;
}
.size{
    color:darkgray;
    font-weight: bold;
}
.input{
    padding: 5px;
    width: 70px;
    font-size: 15px;
    height: 15px;
    border: none;
    border-radius: 5px;
    border: 1px solid #30a830;
    font-weight: bold;
    cursor: pointer;
}
</style>