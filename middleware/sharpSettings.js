const sharp = require('sharp');
const path = require('path');

async function resizeAndSaveImage(imageName, outputPath) {
    try {
        await sharp(imageName).resize(800).jpeg({ quality: 80 }).toFile(outputPath);
    } catch (error) {
        console.error('Dosya boyutu düşürme ve kaydetme hatası:', error);
    }
}

module.exports = { resizeAndSaveImage };