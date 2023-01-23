import { createContext, useState, useEffect} from "react";
export const DataContext = createContext();


export function DataContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({});
  const [text, setText] = useState("")

  const filterCharacters = data.filter((character) =>
  character.name.toLowerCase().includes(text.toLocaleLowerCase())
);



  function fetchData(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) =>{
        setData(data.results)
        setInfo(data.info)
      });
  }

function onPrevious() {
  fetchData(info.prev)
}

function onNext() {
  fetchData(info.next)
}




  return (
    <DataContext.Provider
      value={{
        fetchData,
        data,
        info,
        setText,
        text,
        filterCharacters,
        onPrevious,
        onNext,
        infoPrev : info.prev,
        infoNext : info.next
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
