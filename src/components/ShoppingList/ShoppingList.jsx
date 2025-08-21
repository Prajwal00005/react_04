import React, { useReducer } from "react";
import Header from "../Header/Header";
import InputItem from "../inputItem/InputItem";
import ItemList from "../itemList.jsx/ItemList";
import itemReducer from "../../reducers/ItemReducer";
import {
  shoppingItemsContext,
  shoppingDispatchContext,
} from "../../context/ShoppingContext";

const ShoppingList = () => {
  const [shoppingItems, dispatch] = useReducer(itemReducer, []);

  return (
    <shoppingItemsContext.Provider value={shoppingItems}>
      <shoppingDispatchContext.Provider value={dispatch}>
        <Header />
        <div className="z-10">
          <InputItem />
          <ItemList />
        </div>
      </shoppingDispatchContext.Provider>
    </shoppingItemsContext.Provider>
  );
};

export default ShoppingList;
