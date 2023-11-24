import { StatsProps } from "./App";

//function for that stats and footer
export function Stats({ items }: StatsProps) {
  if (items.length === 0)
    return (
      <p className="stats">
        <em>Start adding items to your list!!</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percent = Math.round((numPacked / numItems) * 100);
  //the terniary here is used to dynamically change the state and description at the bottom of the page
  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "You got everything! Ready to go! ✈️🌍"
          : `💼You have ${numItems} items on your list, and you already packed ${numPacked} (${percent}%)`}
      </em>
    </footer>
  );
}
