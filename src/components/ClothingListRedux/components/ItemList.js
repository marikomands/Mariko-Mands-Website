import React from "react";
import { connect } from "react-redux";
import ClothesItem from "./Item";

const ClothesItems = ({ items, selectedCategory, selectedType }) => {
  const filteredItems = items.filter(
    (item) => item.category === selectedCategory && item.type === selectedType
  );

  return filteredItems
    ? filteredItems.map((item) => {
        return <ClothesItem key={item.product} item={item} />;
      })
    : null;
};

const mapStateToProps = (state) => {
  return {
    items: state.items,
    selectedCategory: state.selectedCategory,
    selectedType: state.selectedType,
  };
};
export default connect(mapStateToProps)(ClothesItems);
