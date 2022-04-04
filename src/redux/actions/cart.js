export const addPizzaToCart = (pizzaObj) => ({
  type: 'ADD_PIZZA_CART',
  payload: pizzaObj,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});

export const removeCart = (id) => ({
  type: 'REMOVE_CART',
  payload: id,
})

export const plusCart = (id) => ({
  type: 'PLUS_CART',
  payload: id,
})

export const minusCart = (id) => ({
  type: 'MINUS_CART',
  payload: id,
})