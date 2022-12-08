import FinalScreen from "./FinalScreen";
import Footer from "./Footer";
import Header from "./Header";
import MoviesList from "./MoviesList";
import SelectSeats from "./SelectSeats";
import SelectSession from "./SelectSession";
import Title from "./Title";
import {BrowserRouter, Routes, Route} from "react-router-dom";

export default function CineFlexScreen() {
    return (
        <BrowserRouter>
        <Header/>
        <Title/>
        <MoviesList/>
        {/* <SelectSession/> */}
        {/* <SelectSeats/> */}
        {/* <FinalScreen/> */}
        {/* <Footer/> */}
        </BrowserRouter>
    )
}