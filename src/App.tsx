import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

//interfaces and types
export interface ItemProp {
  id: number;
  description: string;
  quantity: number;
  packed: boolean;
}

//props for item list
export type ItemProps = {
  item: ItemProp;
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
};

//props for this method
export type StatsProps = {
  items: ItemProp[];
};

//App display for main function
export default function App() {
  const [items, setItems] = useState<ItemProp[]>([]);

  //function to add
  function handleAddItems(item: ItemProp) {
    setItems((items) => [...items, item]);
  }

  //function to delete
  function handleDeleteItem(id: number) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  //function to make item packed
  function handledToggleItem(id: number) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  //function will clear the list
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handledToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
