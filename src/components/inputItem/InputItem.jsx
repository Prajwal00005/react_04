import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { shoppingDispatchContext } from "../../context/ShoppingContext";

const InputItem = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // Get dispatch function from context
  const dispatch = useContext(shoppingDispatchContext);

  // formSubmit receives form data from react-hook-form
  const formSubmit = (data) => {
    const itemName = data.name.trim();
    if (!itemName) {
      toast.error("Item name is required");
      return;
    }

    // Dispatch add_item action
    dispatch({ type: "add_item", itemName });
    toast.success("Successfully added item");
    reset(); // reset input field
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="shadow-lg flex gap-2 mt-4"
    >
      <input
        type="text"
        placeholder="Add an item"
        {...register("name", { required: "Item name cannot be empty" })}
        className="p-2 outline-none border-b w-full"
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <button
        type="submit"
        className="p-2 px-6 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition"
      >
        Add
      </button>
    </form>
  );
};

export default InputItem;
