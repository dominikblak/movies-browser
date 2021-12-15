import { MovieSlider } from "./MovieSlider";
import { MovieTileDetails } from "../../common/tiles/MovieTileDetails";
import Container from "../../common/Container";
import { useDispatch, useSelector } from "react-redux";
import { fetchCredits, fetchElement, resetState, selectElement, selectError, selectLoading, resetCreditsState, selectCast, selectCredits, } from "../elementSlice";
import { useEffect } from "react";
import { StateChecker } from "../../common/StateChecker";
import { Header } from "../../common/Header";
import { useLocation } from "react-router-dom";
import { PeopleTilesList } from "../PeopleList/styled";
import { PeopleTile } from "../../common/tiles/PeopleTile";

export function MoviePage() {
    const dispatch = useDispatch();
    const location = useLocation();
    const pathname = location.pathname.substring(14);
    const id = pathname;
    const data = useSelector(selectCredits);
    console.log(data)
    const cast = data.cast;
    const elementData = useSelector(selectElement);

    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchElement({ id }));
        dispatch(fetchCredits({ id }));
        return () => resetState() && resetCreditsState();
    }, [dispatch, id]);

    return (
        <>
            <Header />
            <StateChecker isLoading={isLoading} isError={isError}>
                <MovieSlider
                    title={elementData.title}
                    backdrop={elementData.backdrop_path}
                    rate={elementData.vote_average}
                    votes={elementData.vote_count} />
                <Container>
                    <MovieTileDetails
                        poster_path={elementData.poster_path}
                        title={elementData.title}
                        subtitle={elementData.release_date}
                        production_countries={elementData.production_countries}
                        genres={elementData.genres}
                        rate={elementData.vote_average}
                        votes={elementData.vote_count}
                        description={elementData.overview} />
                </Container>

                <PeopleTilesList>
                    {data.map(({name}) => {
                        console.log(name)
                        return (
                        <PeopleTile
                            title={name} />
                            
                    )})}
                </PeopleTilesList>
            </StateChecker>
        </>
    )
};

