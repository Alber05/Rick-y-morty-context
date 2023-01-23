import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext.jsx";
import { Tabla } from "../tabla/Tabla.jsx";
import { Pagination } from "../pagination/Pagination";
import { Main } from "../MainContainer.jsx";

export function LocationsMain() {
  const locationsUrl = "https://rickandmortyapi.com/api/location";
  const {fetchData, data} = useContext(DataContext)

  useEffect(() => {
  
    fetchData(locationsUrl);
    
  }, []);

  return (
    <>
      <Pagination />
      <Main>
        <Tabla
          datos={data}
          fth="Nombre"
          sth="Tipo"
          tth="Dimension"
          type="location"
        />
      </Main>
      <Pagination />
    </>
  );
}
