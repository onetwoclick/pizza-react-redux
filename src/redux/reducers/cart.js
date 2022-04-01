const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART':{
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
          ...state.items,
          [action.payload.id]: {
            items: currentPizzaItems,
            totalPrice: currentPizzaItems.reduce((sum, obj) => obj.price + sum, 0),
            totalCount: currentPizzaItems.length,
          },
        };
      const items = Object.values(newItems).map((obj) => obj.items)
      const sumCount = [].concat.apply([], items);
      const sumTotal = sumCount.reduce((sum, obj) => obj.price + sum, 0);
      return {
        ...state,
        items: newItems,
        totalCount: sumCount.length,
        totalPrice: sumTotal,
      };
    }
    case 'SET_TOTAL_PRICE':
      return ({
        ...state,
        totalPrice: action.payload,
      })
    case 'SET_TOTAL_COUNT':
      return ({
        ...state,
        totalCount: action.payload,
      })
    case 'REMOVE_CART':
      const newItems={
        ...state.items
      }
      delete newItems[action.payload]
      return ({
        ...state,
        items: newItems,
        totalPrice: 0,
        totalCount: 0
      })
    case 'CLEAR_CART':
      return ({
        items: {},
        totalPrice: 0,
        totalCount: 0
      })
    default:
      return state;
  }
}

export default cart;