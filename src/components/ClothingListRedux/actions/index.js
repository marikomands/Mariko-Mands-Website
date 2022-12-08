export const setCategory = (category) => {
  return {
    type: "SET_CATEGORY",
    payload: category,
  };
};

export const setType = (type) => {
  return {
    type: "SET_TYPE",
    payload: type,
  };
};
