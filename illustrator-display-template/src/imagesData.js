let IMAGE_DATA = [];
let noOfImages = 20;

for(let i = 0; i < noOfImages; i++) {
    IMAGE_DATA.push({
        id: i + 1,
        url: `/media/images/image_${i+1}.jpg`,
        likes: Math.floor(Math.random() * 50) + 200,
        isLiked: false,
    })
}

export default IMAGE_DATA;