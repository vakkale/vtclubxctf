function loadImages(imageUrls) {
    return new Promise((resolve, reject) => {
        const images = imageUrls.map((url) => {
            console.log(`url: ${url}`)
            const image = new window.Image();
            image.src = url;
            return image;
        });

        let imagesLoaded = true;
        images.forEach((image) => {
            if (!image.complete) {
                imagesLoaded = false;
            }
        });

        if (imagesLoaded) {
            resolve();
        } else {
            let counter = 0;
            images.forEach((image) => {
                image.addEventListener("load", () => {
                    counter++;
                    if (counter === images.length) {
                        console.log("got here");
                        resolve();
                    }
                });
            });
        }
    });
}
export default loadImages;