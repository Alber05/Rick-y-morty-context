import { useEffect, useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { Pagination } from "../pagination/Pagination";
import { Main } from "../MainContainer.jsx";
import { Tabla } from "../tabla/Tabla";

export function EpisodesMain() {
  const episodesUrl = "https://rickandmortyapi.com/api/episode";
 
  const {fetchData, data}= useContext(DataContext);

  useEffect(() => {
    fetchData(episodesUrl);


  }, []);

  return (
    <>
      <Pagination/>
      <Main>
        <Tabla
          datos={data}
          fth="Nombre"
          sth="Fecha de emisión"
          tth="Episodio"
          type="episode"
        />
      </Main>
      <Pagination />
    </>
  );
}
