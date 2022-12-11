import MoviesList from "./MoviesList";
import SelectSession from "./SelectSession";
import SelectSeats from "./SelectSeats";
import FinalScreen from "./FinalScreen";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function CineFlexScreen() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/sessoes/:idFilme" element={<SelectSession />} />
        <Route path="/assentos/:idSessao" element={<SelectSeats />} />
        <Route path="/sucesso" element={<FinalScreen />} />
      </Routes>
    </BrowserRouter>
    
  );
}
