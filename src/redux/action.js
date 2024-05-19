export const addToCart = (data) => {
    console.warn("add cart action is called",data)
    return {
        type: "ADD_TO_CART",
        data
    }
}

export const removeToCart = (data) => {
     console.warn("remove cart action is called", data);
     return {
       type: "REMOVE_TO_CART",
       data,
     };
}