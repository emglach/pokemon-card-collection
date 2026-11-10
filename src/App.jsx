import { useState } from "react";
import "./App.css";
import Barplot from "./Barplot";
import Pill from "./Pill";
import Card from "./Card";
import pokemons from "./pokemons.js";

/*Ce code définit la structure principale d'une application React utilisant Vite*/

function App() {
  // uniqueTypes est un tableau qui contient une liste unique de types de Pokémon.
  // C'est obtenu en utilisant Set, qui enlève les doublons, et en mappant les Pokémon pour
  // extraire leurs types
  const uniqueTypes = [...new Set(pokemons.map((p) => p.type))];
  // selectedTypes est l'état local qui stockera les types de Pokémon sélectionnés par
  // l'utilisateur. Le useState est utilisé pour initialiser cette variable à un tableau vide
  const [selectedTypes, setSelectedTypes] = useState([]);

  // ici on déclare la fonction de mise à jour de l'état.
  // Cette fonction toggleType prend un type de Pokémon en tant qu'argument et met
  // à jour l'état local selectedTypes en fonction de sa présence dans le tableau.
  // Si le type est déjà sélectionné, il le retire du tableau. Sinon, il l'ajoute.
  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  // Déclaration de la fonction de filtrage des Pokémon.
  // Cette variable filteredPokemons stocke une liste filtrée des Pokémon, basée sur les
  // types sélectionnés par l'utilisateur.
  // Si selectedTypes est vide, filteredPokemons est égal à pokemons, ce qui signifie
  // qu'aucun filtre n'est appliqué.
  // Sinon, filteredPokemons est égal à pokemons.filter(p => selectedTypes.includes(p.type)),
  // ce qui signifie que seul les Pokémon dont le type est inclus dans selectedTypes
  // sont inclus dans la liste.
  const filteredPokemons =
    selectedTypes.length === 0
      ? pokemons
      : pokemons.filter((p) => selectedTypes.includes(p.type));

  // Ensuite, on renvoie le rendu de l'interface utilisateur :
  return (
    <>
      <h1>Pokemon App</h1>
      <h3>You can filter the Pokemons by type using the pills below</h3>
      <div
        style={{
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          minWidth: "200px",
        }}
      >
        {uniqueTypes.map((type, i) => (
          <Pill
            key={i}
            type={type}
            isSelected={selectedTypes.includes(type)}
            onClick={() => toggleType(type)}
          />
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 300px)",
          gap: 12,
        }}
      >
        {filteredPokemons.map((row) => (
          <Card key={row.id} row={row} />
        ))}
      </div>
    </>
  );
}

export default App;
