/* Rappel: ici on crée un composant React, écrit en JSX, qui permet d'afficher une
barre horizontale colorée accompagnée d'un texte, que l'on pourra réutiliser plus tard*/

/* Ce composant prend 3 propriétés (les "props") (width/color/type) transmises au
composant.
width : largeur de la barre.
color : couleur de la barre.
type : le nom ou la catégorie associée à la barre.
NB : les noms des propriétés sont des noms prédéfinis et doivent être respectés.*/
const Barplot = ({ width, color, type }) => {
  return (
    /*le return indique que ce composant doit afficher à l'écran*/
    <div /*ici il s'agit du <div> principal, càd l'élément principal ou le "conteneur" qui 
    va contenir deux éléments (un 2ème <div> (la barre colorée) et un <span> (affiche le texte*/
      style={{
        display:
          "flex" /*gérer les éléments enfants de manière flexible. Propriété CSS qui
        active le mode flexbox. Lorsque l'élément est dans un mode flexbox, les éléments
        enfants sont disposés dans une ligne (le mode horizontal par défaut) ou sur
        une colonne (le mode vertical) en fonction des autres propriétés.*/,
        alignItems:
          "center" /*aligne les éléments enfants verticalement au centre dans le <div> principal*/,
        gap: 8 /*ajoute une marge horizontale de 8 pixels entre les éléments enfants.*/,
        marginBottom: 6 /*ajoute une marge verticale de 6 pixels en dessous du <div> principal*/,
      }}
    >
      <div /* le 2ème <div> représente la barre colorée */
        style={{
          width:
            width /*taille du barplot (définie par la propriété width du composant)*/,
          height: 10 /*hauteur fixe du barplot*/,
          backgroundColor:
            color /*couleur (définie par la propriété color du composant)*/,
          borderRadius: 4 /*rondeur des coins du barplot*/,
        }}
      ></div>
      <span>
        {/*Le <span> permet d'afficher du texte.*/}
        {type}: {width}
      </span>
    </div>
  );
};

export default Barplot;
