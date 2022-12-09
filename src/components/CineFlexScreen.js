import MoviesList from "./MoviesList";
import SelectSession from "./SelectSession";
import SelectSeats from "./SelectSeats";
import FinalScreen from "./FinalScreen";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function CineFlexScreen() {
  return (
    <BrowserRouter>
      <MoviesList/>
      {/* <SelectSession /> */}
      {/* <SelectSeats/> */}
      {/* <FinalScreen/> */}
    </BrowserRouter>
  );
}
