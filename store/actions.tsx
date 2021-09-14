import * as actions from "./utils";

export const getFemaleWare = () => {
  return {
    type: actions.GET_FEMALE,
  };
};

export const getMaleWare = () => {
  return {
    type: actions.GET_MALE,
  };
};

export const getAll = () => {
  return {
    type: actions.GET_ALL,
  };
};

export const filterAll = (payload) => {
  return {
    type: actions.FILTER,
    payload,
  };
};

export const filterSpecial = (payload) => {
  return {
    type: actions.FILTER_S,
    payload,
  };
};

export const addToBag = (payload) => {
  return {
    type: actions.ADD,
    payload,
  };
};

export const removeFromBag = (payload) => {
  return {
    type: actions.REMOVE,
    payload,
  };
};

export const updateBagItem = (payload) => {
  return {
    type: actions.UPDATE,
    payload,
  };
};
