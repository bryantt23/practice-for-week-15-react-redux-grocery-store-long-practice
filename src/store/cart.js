export const ADD_ITEM = 'cart/ADD_ITEM';
export const REMOVE_ITEM = 'cart/REMOVE_ITEM';
export const INCREASE_ITEM_COUNT = 'cart/INCREASE_ITEM_COUNT';
export const DECREASE_ITEM_COUNT = 'cart/DECREASE_ITEM_COUNT';
export const PURCHASE = 'cart/PURCHASE';

export const getAllCartItems = state => Object.values(state.cart);

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

export const increaseItemCount = id => {
  return {
    type: INCREASE_ITEM_COUNT,
    id
  };
};

export const decreaseItemCount = id => {
  return {
    type: DECREASE_ITEM_COUNT,
    id
  };
};

export const purchase = () => {
  return {
    type: PURCHASE
  };
};

export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case ADD_ITEM: {
      const stateCopy = JSON.parse(JSON.stringify(state));
      const { id, name } = action.item;
      if (!stateCopy[id]) {
        stateCopy[id] = { count: 0, name, id };
      }
      stateCopy[id].count++;
      return stateCopy;
    }
    case REMOVE_ITEM: {
      const stateCopy = JSON.parse(JSON.stringify(state));
      delete stateCopy[action.id];
      return stateCopy;
    }
    case INCREASE_ITEM_COUNT: {
      const stateCopy = JSON.parse(JSON.stringify(state));
      stateCopy[action.id].count++;
      return stateCopy;
    }
    case DECREASE_ITEM_COUNT: {
      const stateCopy = JSON.parse(JSON.stringify(state));
      stateCopy[action.id].count--;
      if (stateCopy[action.id].count === 0) {
        delete stateCopy[action.id];
      }
      return stateCopy;
    }
    case PURCHASE: {
      return {};
    }
    default:
      return state;
  }
}
