// constants
export const ADD_CART = 'APP/ADD_CART';
export const REMOVE_CART = 'APP/REMOVE_CART';
export const INCREMENT_COST = 'APP/INCREMENT_COST';
export const DECREMENT_COST = 'APP/DECREMENT_COST';

// action creator
// export const addCart = (payload) => ({
//   type: ADD_CART,
//   payload
// })
export const addCart = (payload) => ({
  type: ADD_CART,
  payload
})

export const removeCart = (itemId) => ({
  type: REMOVE_CART,
  payload: itemId
})

export const incrementCost = (itemId) => ({
  type: INCREMENT_COST,
  payload: itemId 
})

export const decrementCost = (itemId) => ({
  type: DECREMENT_COST,
  payload: itemId 
})