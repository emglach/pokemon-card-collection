import Barplot from "./Barplot.jsx";

const Card = ({ row }) => {
  return (
    <div
      style={{
        border: "3px solid #edc40b" /*Ajoute une bordure noire autour du div*/,
        width: 250 /*Fixe la largeur du div à 250 pixels*/,
        padding: 12 /*Ajoute un peu de marge intérieure au div*/,
        marginBottom: 20,
        borderRadius: 50 /*Applique un bordure arrondie à 4 pixels*/,
        color: "#28292a" /*Définit la couleur de texte du div en gris foncé*/,
      }}
    >
      {/*Ce div contient les éléments suivants : */}
      <img /*Un élément img est utilisé pour afficher l'image du Pokémon*/
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${row.id}.png`}
        alt={row.name} /*L'attribut alt contient le nom du Pokémon*/
        style={{ width: 120, height: 120 }}
      />
      <p>
        <strong>{row.name}</strong>{" "}
        {/*rappel, <strong> permet d'afficher en gras*/}
      </p>
      <p>Type: {row.type}</p>
      <Barplot width={row.hp} color={"#0011ffff"} type="hp" />
      <Barplot width={row.attack} color={"#ff0000"} type="attack" />
    </div>
  );
};

export default Card;
