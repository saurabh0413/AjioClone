export const initialDAta ={
    products:[]
}

function reducer(oldState=initialDAta,action) {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...oldState,
        products: action.payload,
      };
    default:
      return oldState;
  }
}
export default reducer;
