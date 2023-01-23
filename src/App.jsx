import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CharactersMain } from './components/characters/CharactersMain'
import { LocationsMain } from "./components/locations/LocationsMain";
import { EpisodesMain } from "./components/episodes/EpisodesMain";
import { Header } from "./components/Header/Header";
import './App.css'

function App() {

  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CharactersMain />} />
          <Route path="/locations" element={<LocationsMain />} />
          <Route path="/episodes" element={<EpisodesMain />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
