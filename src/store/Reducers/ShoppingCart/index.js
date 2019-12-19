import {
  REMOVE_FROM_CART,
  INCREASE_QTY,
  DECREASE_QTY,
  CLEAR_CART,
} from '../../Actions/ShoppingCart/types';
import {Toast} from 'native-base';

const INITIAL_STATE = {
  data: [],
};

export const ShoppingCart = (state = INITIAL_STATE, {type, payload}) => {
  const index = state.data.findIndex(el => el.id === payload.id);
  const newState = [...state.data];
  switch (type) {
    case INCREASE_QTY:
      if (index > -1) {
        newState[index] = {...newState[index], qty: newState[index].qty + 1};
        return {...state, data: [...newState]};
      } else {
        return {...state, data: [...state.data, {...payload, qty: 1}]};
      }
    case DECREASE_QTY:
      if (index > -1) {
        if (newState[index].qty === 1) {
          return {...state, data: state.data.filter(p => p.id !== payload.id)};
        } else {
          newState[index] = {...newState[index], qty: newState[index].qty - 1};
          return {...state, data: [...newState]};
        }
      }
      return state;
    case REMOVE_FROM_CART:
      return {...state, data: state.data.filter(p => p.id !== payload.id)};
    case CLEAR_CART:
      return {...state, data: []};
    default:
      return state;
  }
};

export default ShoppingCart;
