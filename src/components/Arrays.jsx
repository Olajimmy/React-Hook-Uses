import { useState } from "react";

function Array() {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const addIngredient = () => {
    setIngredients([...ingredients, name]);
  };
  return (
    <>
      <div>Arrays</div>
      <h1> Array Examples</h1>
      <input value={name} onChange={(evt) => setName(evt.target.value)} />
      <button onClick={addIngredient}>Add Ingredient </button>
      <h2>ingredients list</h2>
      <ul>
        {ingredients.length &&
          ingredients.map((ingr) => {
            return <li>{ingr}</li>;
          })}
      </ul>
    </>
  );
}
export default Array;
