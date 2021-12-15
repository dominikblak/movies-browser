import { Container, ContentPeopleTile, Description, Picture, TileHeader } from "./styled";
import emptyPoster from "./svg/emptyPoster.svg"

export const PeopleTile = ({ poster_path, title, description }) => {

    return (
        <Container>
            <Picture src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` :`${emptyPoster}`} />
            <ContentPeopleTile>
                    <TileHeader>{title}</TileHeader>
                    {description ? <Description>{description}</Description>: ""}
            </ContentPeopleTile>
        </Container>
    );
};