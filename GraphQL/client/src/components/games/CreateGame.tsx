import React from "react";
import AddForm, { FormField } from "../forms/AddForm";
import { ADD_GAME } from "../../graphql/mutations/add-game";
import { useMutation } from "@apollo/client";
import { GET_GAMES } from "../../graphql/queries/get-games";
import { IGame } from "../../interfaces/game.interface";

const CreateGame: React.FC = () => {

    const [CreateGame, {loading, error}] = useMutation(ADD_GAME, {
        update(cache, {data:CreateGame}) {
            const data = cache.readQuery({
                query: GET_GAMES
            }) as {games: IGame[]};
            cache.writeQuery({
                query: GET_GAMES,
                data: {games: [CreateGame, ...data?.games || []]}
            });
        }
    });


    /* Form Construction */

  const formContent: FormField[] = [
    {   name: "title", placeholder: "game title",label: "Title",type: "text", },
    {  name: "platform",  placeholder: "game platform",  label: "Platform",  type: "type",}
  ];

  const onSubmit = (formData: Record<string, string>) => {
    CreateGame({
        variables: {game: {...formData}}
    })
  };

  const createBtn = () => {
    return <button type="submit">Add a game</button>;
  };

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error.message}</h1>;
  
  return (
    <AddForm
      onSubmit={onSubmit}
      formBtn={createBtn()}
      formFields={formContent}
    />
  );
};

export default CreateGame;
