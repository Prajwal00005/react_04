import React, { useContext } from "react";
import Item from "../Item/Item";
import {
  shoppingItemsContext,
  shoppingDispatchContext,
} from "../../context/ShoppingContext";

const ItemList = () => {
  const shoppingItems = useContext(shoppingItemsContext);
  const dispatch = useContext(shoppingDispatchContext);

  const handleInc = (id) => dispatch({ type: "increase_item", itemId: id });
  const handleDec = (id) => dispatch({ type: "decrease_item", itemId: id });

  return (
    <div>
      {shoppingItems?.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          itemName={item.name}
          quantity={item.quantity}
          onInc={handleInc}
          onDec={handleDec}
        />
      ))}
    </div>
  );
};

export default ItemList;
