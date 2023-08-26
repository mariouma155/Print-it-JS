const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// Sauvegarde de la position actuel dans le slider
let currentSlidePosition = 0;

// On récupère la balise P du slider
const slideText = document.getElementById("slideText");
// On récupère la balise img du slider
const slideImage = document.getElementById("slideImage");
// On récupère le bouton précédent du slider
const btnPrevious = document.getElementById("btnPrevious");
// On récupère le bouton suivant du slider
const btnNext = document.getElementById("btnNext");
// On récupère la div avec la classe dots que le premier élement 
const dots = document.querySelector(".dots");

// DECLARATION DES FONCTION  

/** fonction pour modifier la source et alt de l'image (grace à set attribut ) et le texte P avec le span ( grace à innerHTML)
 * Met à jour le rendu visuel du carousel en fonction du currentSlidePosition
 */
function updateCarouselView () {
  slideImage.setAttribute(
      "src",
      `./assets/images/slideshow/${slides[currentSlidePosition].image}`
  );
  slideImage.setAttribute("alt", slides[currentSlidePosition].tagLine);
  slideText.innerHTML = slides[currentSlidePosition].tagLine;
}

  /**fonction initialisation des points et association avec les images
 * Met à jour le rendu visuel des dots en fonction du currentSlidePosition
 */
function updateCarouselDots () {
  // permet de récupèrer la liste de tous les noeuds qui ont la classe .dot
  const dotsList = document.querySelectorAll(".dot");      

    // On parcours tous les dots
    for(let i = 0; i < dotsList.length; i++) {
        dotsList[i].classList.remove("dot_selected");
    }

    // On ajoute la classe dot_selected sur le bon dot actif
    dotsList[currentSlidePosition].classList.add("dot_selected");
}