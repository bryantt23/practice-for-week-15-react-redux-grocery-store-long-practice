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

      const orderArray = [];
      for (const item of Object.values(stateCopy)) {
        orderArray.push(item.id);
      }

      console.log(
        '🚀 ~ file: cart.js:51 ~ cartReducer ~ orderArray',
        orderArray
      );

      let targetObject = Object.values(stateCopy).find(item => item.id === id);
      if (!targetObject) {
        targetObject = { count: 1, name, id };
        orderArray.push(id);
      } else {
        targetObject.count++;
      }

      const returnObject = {};
      let i = 0;
      for (const id of orderArray) {
        const targetObjectForReturnObject = Object.values(stateCopy).find(
          item => item.id === id
        );
        // doesn't exist because it is the first object
        if (!targetObjectForReturnObject) {
          returnObject[i++] = targetObject;
        } else {
          returnObject[i++] = targetObjectForReturnObject;
        }
      }

      return returnObject;
    }
    case REMOVE_ITEM: {
      const stateCopy = JSON.parse(JSON.stringify(state));
      let keyToRemove;
      for (const key in stateCopy) {
        const val = stateCopy[key];
        if (val.id === action.id) {
          keyToRemove = key;
        }
      }
      delete stateCopy[keyToRemove];
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
