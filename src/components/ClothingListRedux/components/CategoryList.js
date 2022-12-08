import React from "react";
import { connect } from "react-redux";
import { setCategory } from "../actions";

const CategoryList = ({ items, setCategory }) => {
  const categoryList = () => {
    const categoryArray = items.reduce((nonDupes, item) => {
      if (!nonDupes.includes(item.category)) {
        return [...nonDupes, item.category];
      } else {
        return nonDupes;
      }
    }, []);

    const categoryArrayJsx = categoryArray.map((category) => {
      return (
        <div
          key={category}
          onClick={() => {
            setCategory(category);
          }}
        >
          <p style={{ fontWeight: "bold" }}> {category}</p>
        </div>
      );
    });

    return categoryArrayJsx;
  };

  return <div>{categoryList()}</div>;
};

const mapStateToProps = (state) => {
  return { items: state.items };
};

export default connect(mapStateToProps, { setCategory })(CategoryList);
