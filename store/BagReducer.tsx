import * as actions from "./utils";

let initialState = {
  bag: [],
};

const bagReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case actions.ADD:
      let oldState = [...state.bag];
      let oldStateContent = oldState.map((item) => item.name);
      if (!oldStateContent.includes(payload.name)) {
        let outPutState = [...oldState, { ...payload, count: 1 }];
        console.log ('outputstate' , outPutState)
        return { bag: outPutState };
      } else {
        let outState = oldState.map((item) => {
          if (item.name === payload.name) {
            return { ...item, count: item.count + 1 };
          }else { 
            return {...item}
          }
        });
        let outPutState = [...outState];
        return { bag: outPutState };
      }

    case actions.REMOVE:
      let oldState2 = [...state.bag];
      let oldStateContent2 = oldState2.filter((item) => item.name === payload.name);

      if (oldStateContent2[0].count > 1) {
        let outPutState2 = oldState2.map((item) => {
          if (item.id === payload.id) {
            return { ...item, count: item.count - 1 };
          } else {
            return { ...item };
          }
        });
        return { bag: outPutState2 };
      } else {
        let outPutState2 = oldState2.filter((item) => item.id !== payload.id);
        return { bag: outPutState2 };
      }

    case actions.UPDATE:
      let oldState3 = [...state.bag];
      console.log("this is the payload", payload);
      let outPutState4 = oldState3.map((item) => {
        if (item.id === payload.id) {
          return { ...item, color: payload.color, size: [payload.size] };
        } else {
          return { ...item };
        }
      });
      return { bag: outPutState4 };
    default:
      return state;
  }
};

export default bagReducer;
