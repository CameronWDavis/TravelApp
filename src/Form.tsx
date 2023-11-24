import { useState } from "react";

interface ItemProp {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

interface FormProps {
  onAddItems: (item: ItemProp) => void;
}

//This is teh form used for users to input in the items for there travel list
export default function Form({ onAddItems }: FormProps) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(5);

  //function for submitting
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!description) return;

    const newItem: ItemProp = {
      quantity,
      description,
      packed: false,
      id: Date.now(),
    };
    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
