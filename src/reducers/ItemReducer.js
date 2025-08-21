import { v4 as uuidv4 } from "uuid";

// Reducer function
const itemReducer = (state, action) => {
  switch (action.type) {
    case "add_item":
      return [...state, { id: uuidv4(), name: action.itemName, quantity: 1 }];

    case "increase_item":
      return state.map((item) =>
        item.id === action.itemId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

    case "decrease_item":
      return state
        .map((item) =>
          item.id === action.itemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    case "remove_item":
      return state.filter((item) => item.id !== action.itemId);

    default:
      return state;
  }
};

export default itemReducer;
