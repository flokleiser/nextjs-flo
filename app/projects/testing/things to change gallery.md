change img to motion.img, add:
    initial={{scale:0.5}}
    animate={{scale:1}}
    exit={{scale:0.5}}
    transition={{duration:0.3}}



check setShouldAnimateOut -> not working properly



const imageUrls = ["image1.jpg", "image2.jpg", "image3.jpg"];

function preloadImages() {
  imageUrls.forEach((imageUrl) => {
    const img = new Image();
    img.src = imageUrl;
  });
}

// Call the preloadImages function to start preloading the images
preloadImages();