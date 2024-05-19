const intialState = [];
export const cartData = (state = intialState, action) => {
//   console.warn("action is called", { action });
  switch (action.type) {
    case "GET_API_DATA": {
        const data= action.data;
          console.log({ data });
          return [...data];
    }
    case "REMOVE_TO_CART": {
      //   state.length = state.length - 1;
      console.log({ state });
      const newStateData = state.slice(0, state.length - 1);
      state = newStateData;
      console.log({ newStateData: state });
      return state;
    }
    default:
      return [];
  }
};
