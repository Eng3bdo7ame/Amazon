export const initialState = {
  card: [],
  user: null,
};

export const getBasketTotal = (card) =>
  card?.reduce((amount, item) => item.price + amount, 0);

const cardsReducer = (state, action) => {
  // console.log(action); ]
  switch (action.type) {
    case "ADD_TO_CARD":
      return {
        ...state,
        card: [...state.card, action.item],
      };

    case "Remove_CARD":
      return {
        ...state,
        card: state.card.filter((item) => item.id !== action.id),
      };

    case "clear_CARD":
      return {
        ...state,
        card: [],
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default cardsReducer;
