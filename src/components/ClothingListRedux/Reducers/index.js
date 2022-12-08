import { combineReducers } from "redux";

const itemsReducer = () => {
  return [
    {
      type: "Tops",
      product: "Simple Dalily T-Shirt",
      price: "12.00",
      category: "Ladies",
      query: "short, T-shirt",
    },

    {
      type: "Accessories",
      product: "belt",
      price: "12.00",
      category: "Ladies",
      query: "belt",
    },
    {
      type: "Tops",
      product: "Crew-Neck Long Sleeve T-shirt",
      price: "20.00",
      category: "Ladies",
      query: "Crew-neck, long sleeve, T-shirt",
    },
    {
      type: "Bottom",
      product: "Wide Leg Trouser",
      price: "25.00",
      category: "Ladies",
      query: "wide-leg, trouser ",
    },
    {
      type: "Bottom",
      product: "Skinny Jeans",
      price: "20.00",
      category: "Ladies",
      query: "skinny, jeans",
    },
    {
      type: "Shoes",
      product: "Court Shoes",
      price: "30.00",
      category: "Ladies",
      query: "black, chunky-heels, sholes",
    },
    {
      type: "Shoes",
      product: "Comfortable Trainer",
      price: "30.00",
      category: "Ladies",
      query: "trainers",
    },
    {
      type: "Bags",
      product: "Daily Backpack",
      price: "30.00",
      category: "Ladies",
      query: "backpack",
    },
    {
      type: "Accesories",
      product: "Warm Gloves",
      price: "30.00",
      category: "Ladies",
      query: "gloves",
    },

    {
      type: "Tops",
      product: "Daily T-Shirt",
      price: "12.00",
      category: "Men",
      query: "short-sleeve, t-shirt",
    },
    {
      type: "Tops",
      product: "Going-out Shirt",
      price: "20.00",
      category: "Men",
      query: "long-sleeve, shirts",
    },
    {
      type: "Bottoms",
      product: "Simple Dalily Trouser",
      price: "12.00",
      category: "Men",
      query: "trousers",
    },
    {
      type: "Bottoms",
      product: "Wide Pants",
      price: "12.00",
      category: "Men",
      query: "wide,  jeans",
    },
    {
      type: "Bottoms",
      product: "Stretchy Jeans",
      price: "12.00",
      category: "Men",
      query: "skinny,  jeans",
    },
    {
      type: "Shoes",
      product: "Runner's Trainers",
      price: "12.00",
      category: "Men",
      query: "trainers",
    },
    {
      type: "Shoes",
      product: "Casual Shoes",
      price: "12.00",
      category: "Men",
      query: "casual, shoes",
    },
    {
      type: "Bags",
      product: "Large Backpack",
      price: "12.00",
      category: "Men",
      query: "backpack",
    },
    {
      type: "Tops",
      product: "Dino T-shirt",
      price: "10.00",
      category: "Children",
      query: "T-shirt, dinosaurs",
    },
    {
      type: "Tops",
      product: "comphy Swet-shirt",
      price: "15.00",
      category: "Children",
      query: "children, daily, swet-shirt",
    },
    {
      type: "Bottom",
      product: "Daily Jogger Pants",
      price: "12.00",
      category: "Children",
      query: "jogger, pants",
    },
  ];
};

const selectedCategoryReducer = (state = null, action) => {
  console.log("🚀 ~ selectedClothesByTypeReducer ~ action", action);
  if (action.type === "SET_CATEGORY") {
    return action.payload;
  }
  return state;
};
const selectedTypeReducer = (state = null, action) => {
  console.log("🚀 ~ selectedClothesByTypeReducer ~ action", action);
  if (action.type === "SET_TYPE") {
    return action.payload;
  }
  return state;
};

export default combineReducers({
  items: itemsReducer,
  selectedCategory: selectedCategoryReducer,
  selectedType: selectedTypeReducer,
});
