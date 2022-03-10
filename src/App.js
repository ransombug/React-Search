import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Components/UI/Header";
import CharacterGrid from "./Components/Characters/CharacterGrid";
import Search from "./Components/UI/Search";

const App = () => {
  const [items, setItems] = useState([]);
  const [isload, setIsload] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // Function for fetching items
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(result.data);

      setItems(result.data);
      setIsload(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search
        getQuery={(q) => {
          setQuery(q);
        }}
      />
      <CharacterGrid items={items} isload={isload} />
    </div>
  );
};

export default App;
