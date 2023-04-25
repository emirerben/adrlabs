import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const imagesDir = path.join(process.cwd(), 'public', 'images');
  const imageFilenames = fs.readdirSync(imagesDir);
    console.log(imageFilenames)
  res.status(200).json(imageFilenames);
}