import React from "react";
import Spinner from "../UI/Spinner";
import CharacterItem from "./CharacterItem";

const CharacterGrid = ({ items, isload }) => {
  console.log("Inside character", items);
  return isload ? (
    <Spinner />
  ) : (
    <section className="cards">
      {/* Loop through the cards data */}
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </section>
  );
};

export default CharacterGrid;
