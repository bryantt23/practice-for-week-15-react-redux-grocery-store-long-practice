import produceData from '../mockData/produce.json';
export const POPULATE = 'produce/POPULATE';
export const TOGGLE_LIKE = 'produce/TOGGLE_LIKE';

export const getAllProduce = state => Object.values(state.produce);

export const toggleLike = id => {
  return {
    type: TOGGLE_LIKE,
    id
  };
};

export const populateProduce = () => {
  return {
    type: POPULATE,
    produce: produceData
  };
};

export default function produceReducer(state = {}, action) {
  switch (action.type) {
    case POPULATE: {
      const newState = {};
      action.produce.forEach(produce => {
        newState[produce.id] = produce;
      });
      return newState;
    }
    case TOGGLE_LIKE: {
      const stateCopy = JSON.parse(JSON.stringify(state));
      const liked = stateCopy[action.id].liked;
      stateCopy[action.id].liked = !liked;
      return stateCopy;
    }
    default:
      return state;
  }
}
