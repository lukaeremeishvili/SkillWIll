import React from "react";
import AddForm, { FormField } from "../forms/AddForm";
import { ADD_GAME } from "../../graphql/mutations/add-game";
import { useMutation } from "@apollo/client";


const CreateGame: React.FC = () => {

  const [CreateGame, { loading, error }] = useMutation(ADD_GAME, {
    update(cache, { data }) {
        if (!data?.addGame) return;
        cache.modify({
            fields: {
                games(existingGames = [], { toReference }) {
                    const newGameRef = toReference(data.addGame);
                    return [...existingGames, newGameRef];
                }
            }
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
