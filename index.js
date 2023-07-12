const sidebar = document.getElementById("side-bar");
window.addEventListener("click", () => {
  //   sidebar.style.left = 0;
  sidebar.classList.toggle("active");
});
// Etape 1 : On a commencé par créer une class en CSS qu'on appelle .active
// Etape 2 : dans cette classe, on a juste indiqué "left:0"
// Etape 3 : on déclare une const "sidebar" car notre id s'appelle "side-bar" et JS ne peut pas comprendre le tiret du milieu
// Etape 4 : on crée le toggle qui appelle la classe "active". Dans un premier temps, la classe se crée mais la bar n'apparaît pas. Pourquoi ? Car l'iD est prioritaire. or, c'est dans l'id qu'on a créé en CSS le left:-230px qui cache la slidebar.
// Etape 5 : à la place de ".active" dans le CSS, on va remplacer par "#sidebar.active" Cela lie notre .active du toggle avec l'iD "side-bar" et permet de passer au-delà des priorités, puisqu'on luit dit "applique la classe 'active' dans l'id 'side-bar' "

// Bonus, en même temps que cet événement, on souhaite assombrir le reste de la page (de la classe .content) =>> voir dans le css comment ça a été géré grâce à ".active~.content"

//

content.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
// Ici on dit que lorsque l'on clique n'importe où de la section (ou balise) "content", alors on retire ce que l'on avait fait avec la classe ".active"

//

//-------Transformer Hamburger en Croix ------

// - NOTE 1 : il faut déjà noter que notre hamburger a été créé à l'aide de 3 span empilés en bloc. On a créé l'apparence de chaque span (une sorte de baton ovale) en CSS avec la classe ".toggle-btn span"
// - NOTE 2 : je crée une nouvelle classe dans mon CSS ".active span". Attention, celle-ci doit se trouver avant la classe ".active~.content" (l'ordre est important). Je ocmmence par mettre la position en absolute. A partir de là, lorsque je cliquerai sur le hamburger, les 3 bâtons s'empileront les uns sur les autres.
// - NOTE 3 : on va enssuite créer une classe pour chaque span en les nommant par le énième child. Par exemple, le 1er sera ".active span:nth-child(1)". On fait comme ça car on n'a pas donné d'iD aux span.
