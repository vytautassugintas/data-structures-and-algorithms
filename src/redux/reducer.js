import { add, remove } from "./actions";

export default function(state = { items: [], action }) {
  switch (action.type) {
    case "ADD":
      return [...state.items, action.item];
    case "REMOVE":
      return {
        ...state,
        items: state.items.filter(item.id !== action.itemId)
      };
    default:
      return state;
  }
}
