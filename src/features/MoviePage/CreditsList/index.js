import { Subtitle } from "../../../common/Subtitle";
import { PeopleTile } from "../../../common/tiles/PeopleTile";
import { PeopleTilesList } from "../../PeopleList/styled";
import { PersonLink } from "./styled";

export const CreditsList = ({ title, iterator }) => {
  return (
    <>
      {iterator ? (
        <>
          <Subtitle title={title} />
          <PeopleTilesList>
            {iterator.map(({ name, profile_path, character, job }) => {
              return (
                <PeopleTile
                  title={name}
                  poster_path={profile_path}
                  description={character ? character : job}
                />
              );
            })}
          </PeopleTilesList>
        </>
      ) : (
        ""
      )}
    </>
  );
};
