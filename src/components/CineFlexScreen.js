import Footer from "./Footer";
import Header from "./Header";
import MoviesList from "./MoviesList";
import SelectSeats from "./SelectSeats";
import Title from "./Title";

export default function CineFlexScreen() {
    return (
        <>
        <Header/>
        <Title/>
        {/* <MoviesList/> */}
        <SelectSeats/>
        <Footer/>
        </>
    )
}