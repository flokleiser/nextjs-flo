// const cards = document.querySelectorAll(".cardanimation");

// cards.forEach((card) => {
//   const cardIndex = card.getAttribute("data-card-index"); // Assuming each card has a data-card-index attribute
//   const animatedGifURL = getAnimatedGifURLForCardIndex(cardIndex); // Replace with your function to get the GIF URL based on card index

//   const hoverImage = new Image();
//   hoverImage.src = animatedGifURL;
//   hoverImage.onload = () => {
//     card.style.backgroundImage = `url(${hoverImage.src})`;
//     card.style.backgroundPosition = "center";
//     card.style.backgroundSize = "cover";
//     card.style.animation = "play-animation 1s ease-in-out infinite";
//   };

//   card.addEventListener("mouseenter", () => {
//     card.style.backgroundImage = "none";
//     card.style.animation = "none";
//   });

//   card.addEventListener("mouseleave", () => {
//     const backgroundImage = card.style.backgroundImage.replace(/url\((.*?)\)/, "$1");
//     card.style.backgroundImage = `url(${backgroundImage})`;
//     card.style.animation = "";
//   });
// });

// function getAnimatedGifURLForCardIndex(cardIndex) {
//     const baseGifURL = "public/images/animations/gifs"; 
//     const gifs = ["plasticine-gif-half.gif, skate gif.gif"];
  
//     return `${baseGifURL}${gifs[cardIndex]}`;
//   }
