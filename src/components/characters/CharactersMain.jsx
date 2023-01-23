import { useContext, useEffect } from "react";
import "./characters.css";
import { CharacterCard } from "./Character-Card";
import { DataContext } from "../../context/DataContext";
import { Main } from "../MainContainer";
import { Filter } from "../header/Filter";
import { Pagination } from "../pagination/Pagination";

export function CharactersMain({}) {
  const charactersUrl = "https://rickandmortyapi.com/api/character";

  const { fetchData, data, filterCharacters } = useContext(DataContext);

  useEffect(() => {
    
    fetchData(charactersUrl);
    
  }, [data]);

  return (
    <>
      <Filter></Filter>
      <Pagination></Pagination>
      <Main className="characters-main">
        <CharacterCard
          characters={filterCharacters == "" ? data : filterCharacters}
        />
      </Main>
      <Pagination></Pagination>
    </>
  );
}
