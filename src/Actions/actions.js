export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const APPEND_DATA = "APPEND_DATA";

//  actions return plain object , type , payload

export const Increment_function = () => {
  return {
    type: INCREMENT
  };
};

export const Decrement_function = () => {
  return {
    type: DECREMENT
  };
};

export const append_Data_Function = () => {
  return {
    type: APPEND_DATA
  };
};
