import React from "react";
import "./header.css";
import { useContext} from "react";
import { DataContext } from "../../context/DataContext";


export function Filter() {

  const { text, setText } = useContext(DataContext);

  const handleFilter = ({ target }) => {
    setText(target.value);
  };

  return (
    <div className="browser-container">
      <input
        type="search"
        name="buscador"
        id="browser"
        value={text}
        onChange={handleFilter}
      />
    </div>
  );
}
