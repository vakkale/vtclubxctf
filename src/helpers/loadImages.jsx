// Description: Loads images and returns a promise when all images are loaded

function loadImages(imageUrls) {

    //prevents the function from running if there are no images to load
    if (imageUrls.length === 0) {
        return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
        //creates an array of images from the imageUrls array
        const images = imageUrls.map((url) => {
            console.log(`url: ${url}`)
            const image = new window.Image();
            image.src = url;
            return image;
        });

        //checks if all images are loaded
        let imagesLoaded = true;
        images.forEach((image) => {
            if (!image.complete) {
                imagesLoaded = false;
            }
        });

        //if all images are loaded, resolve the promise
        if (imagesLoaded) {
            resolve();
        } else {
            //if not all images are loaded, add an event listener to each image and resolve the promise when all images are loaded
            let counter = 0;
            images.forEach((image) => {
                image.addEventListener("load", () => {
                    counter++;
                    if (counter === images.length) {
                        resolve();
                    }
                });
            });
        }
    });
}
export default loadImages;