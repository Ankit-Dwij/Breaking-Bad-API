import React from "react";
import CharacterItem from "./characterItem";
import Spinner from "../ui/spinner";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>
      <Spinner />
    </h1>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem item={item} id={item.char_id} />
      ))}
    </section>
  );
};

export default CharacterGrid;
