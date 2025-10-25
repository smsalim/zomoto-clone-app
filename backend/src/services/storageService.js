const ImageKit = require("imagekit")

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
})

module.exports.uploadFile = async (file, fileName) => {
    const result = await imagekit.upload({
        file: file.buffer,
        fileName: fileName
    })
    return result
}