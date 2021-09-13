import * as actions from "./utils";

let initialState = {
  categories: [
    { id: 1, title: "all", selected: true, display: "All Products" },
    { id: 2, title: "jeans", selected: false, display: "Jeans" },
    { id: 3, title: "shirts", selected: false, display: "T-Shirts" },
    { id: 4, title: "shoes", selected: false, display: "Shoes" },
    { id: 5, title: "accessories", selected: false, display: "Accessories" },
  ],
};

const catigoryReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case actions.GET_ALL:
      const newState = { ...state };
      return newState;
    case actions.GET_FEMALE:
      const newState2 = { ...state };
      return newState2;

    case actions.GET_MALE:
      const newState3 = { ...state };
      return newState3;

    case actions.FILTER:
      const filteredState = [...state.categories];
      let out = filteredState.map((item) => {
        if (item.title === payload.catigory) {
          return { ...item, selected: true };
        } else {
          return { ...item, selected: false };
        }
      });
      return { categories: out };

    default:
      return state;
  }
};
export default catigoryReducer;
