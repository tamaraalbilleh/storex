import * as actions from "./utils";

let initialState = {
  bag: [],
};

const bagReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case actions.ADD:
      let oldState = [...state.bag];
      if (!oldState.includes(payload)) {
        let outPutState = [...oldState, payload];
        return { bag: outPutState };
      } else {
        let outPutState = [...oldState];
        return { bag: outPutState };
      }

    case actions.REMOVE:
      let oldState2 = [...state.bag];
      let outPutState2 = oldState2.filter((item) => item.id !== payload.id);
      return { bag: outPutState2 };

      case actions.UPDATE:
      let oldState3 = [...state.bag];
      console.log ('this is the payload' , payload)
      let outPutState4 = oldState3.map((item) => {
        if (item.id  === payload.id) {
          return  {...item , color : payload.color , size : [ payload.size] }
        }else {

          return {...item}
        }
      });
      return { bag: outPutState4 };
    default:
      return state;
  }
};

export default bagReducer;
