import { MovieSlider } from "./MovieSlider";
import { MovieTileDetails } from "../../common/tiles/MovieTileDetails";
import Container from "../../common/Container";
import { useDispatch, useSelector } from "react-redux";
import { fetchCredits, fetchElement, resetState, selectElement, selectError, selectLoading, resetCreditsState, selectCredits, } from "../elementSlice";
import { useEffect } from "react";
import { StateChecker } from "../../common/StateChecker";
import { Header } from "../../common/Header";
import { useLocation } from "react-router-dom";
import { CreditsList } from "./CreditsList";

export function MoviePage() {
    const dispatch = useDispatch();
    const location = useLocation();
    const data = useSelector(selectCredits);
    const elementData = useSelector(selectElement);
    const isLoading = useSelector(selectLoading);
    const isError = useSelector(selectError);
    const pathname = location.pathname.substring(14);
    const id = pathname;

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
                        <CreditsList title="Cast" iterator={data.cast} />
                        <CreditsList title="Crew" iterator={data.crew} />
                </Container>
            </StateChecker>
        </>
    )
};

