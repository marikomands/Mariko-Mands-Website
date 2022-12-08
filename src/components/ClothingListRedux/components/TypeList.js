import React from "react";
import { connect } from "react-redux";
import { setType } from "../actions";

const SelectedTypes = ({ items, selectedCategory, setType }) => {
  if (!selectedCategory) {
    return <div>Select a Category</div>;
  }

  const typesArray = items
    .filter((item) => item.category === selectedCategory)
    .reduce((nonDupes, item) => {
      if (!nonDupes.includes(item.type)) {
        return [...nonDupes, item.type];
      } else {
        return nonDupes;
      }
    }, []);

  const typesJSX = typesArray.map((type) => {
    return (
      <div
        key={type}
        onClick={() => {
          setType(type);
        }}
      >
        <div className="type">{type}</div>
      </div>
    );
  });
  return typesJSX;
};

const mapStateToProps = (state) => {
  console.log("🚀 ~ mapStateToProps ~ state", state);
  return { items: state.items, selectedCategory: state.selectedCategory };
};
export default connect(mapStateToProps, { setType })(SelectedTypes);
