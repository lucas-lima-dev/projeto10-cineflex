import MoviesList from "./MoviesList";
import SelectSession from "./SelectSession";
import SelectSeats from "./SelectSeats";
import FinalScreen from "./FinalScreen";
import { useState } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function CineFlexScreen() {
    const [bookedSeatsInfo, setBookedSeatsInfo] = useState() 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/sessoes/:idFilme" element={<SelectSession />} />
        <Route path="/assentos/:idSessao" element={<SelectSeats setBookedSeatsInfo={setBookedSeatsInfo}/>} />
        <Route path="/sucesso" element={<FinalScreen bookedSeatsInfo={bookedSeatsInfo}/>} />
      </Routes>
    </BrowserRouter>
    
  );
}
