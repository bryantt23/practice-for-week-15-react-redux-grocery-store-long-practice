export const ADD_ITEM = 'cart/ADD_ITEM';
export const REMOVE_ITEM = 'cart/REMOVE_ITEM';

export const addItem = item => {
  return {
    type: ADD_ITEM,
    item
  };
};

export const removeItem = id => {
  return {
    type: REMOVE_ITEM,
    id
  };
};

export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case ADD_ITEM:
      const stateCopy = { ...state };
      const { id, name } = action.item;
      if (!stateCopy[id]) {
        stateCopy[id] = { count: 0, name, id };
      }
      stateCopy[id].count++;
      return stateCopy;
    case REMOVE_ITEM:
      const stateCopyWithRemoval = { ...state };
      delete stateCopyWithRemoval[action.id];
      return stateCopyWithRemoval;
    default:
      return state;
  }
}
