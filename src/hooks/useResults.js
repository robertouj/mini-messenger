import { useState, useEffect } from "react";

function useResults() {
  const [items, setItems] = useState(null);

  const loadResults = (searchQuery, items) => {
    const newItems = items?.filter((items) =>  items.content.search(searchQuery));
    setItems(newItems);
  };

  useEffect(loadResults, []);

  return [items, loadResults];
}

export default useResults;
