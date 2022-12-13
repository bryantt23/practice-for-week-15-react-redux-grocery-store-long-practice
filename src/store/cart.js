export const ADD_ITEM = 'cart/ADD_ITEM';

export const addItem = item => {
  return {
    type: ADD_ITEM,
    item
  };
};

export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case ADD_ITEM:
      const stateCopy = { ...state };
      const { id, name } = action.item;

      if (!stateCopy[id]) {
        stateCopy[id] = { count: 0, name };
      }

      stateCopy[id].count++;

      return stateCopy;
    default:
      return state;
  }
}
