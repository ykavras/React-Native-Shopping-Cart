import {
  REMOVE_FROM_CART,
  INCREASE_QTY,
  DECREASE_QTY,
  CLEAR_CART,
} from './types';

export const RemoveFromCart = product => {
  return async dispatch => {
    try {
      await dispatch({type: REMOVE_FROM_CART, payload: product});
    } catch (e) {
      console.log('REMOVE_FROM_CART Dispatch Error');
    }
  };
};

export const IncreaseQty = product => {
  return async dispatch => {
    try {
      await dispatch({type: INCREASE_QTY, payload: product});
    } catch (e) {
      console.log('INCREASE_QTY Dispatch Error');
    }
  };
};

export const DecreaseQty = product => {
  return async dispatch => {
    try {
      await dispatch({type: DECREASE_QTY, payload: product});
    } catch (e) {
      console.log('DECREASE_QTY Dispatch Error');
    }
  };
};

export const ClearCart = () => {
  return async dispatch => {
    try {
      await dispatch({type: CLEAR_CART, payload: {}});
    } catch (e) {
      console.log('CLEAR_CART Dispatch Error');
    }
  };
};
