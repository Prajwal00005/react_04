import React from "react";

const Item = ({ itemName, quantity, onInc, onDec, id }) => {
  return (
    <div className="flex items-center justify-between gap-4 p-4 w-80 bg-white rounded-xl shadow-lg">
      <button
        className="px-3 py-1 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition"
        onClick={() => onInc(id)}
      >
        +
      </button>

      <div className="flex flex-col items-center">
        <span className="text-lg font-semibold text-gray-800">{itemName}</span>
        <span className="text-sm text-gray-600">Qty: {quantity}</span>
      </div>

      <button
        className="px-3 py-1 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition"
        onClick={() => onDec(id)}
      >
        -
      </button>
    </div>
  );
};

export default React.memo(Item);
