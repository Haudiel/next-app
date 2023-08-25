import fs from 'fs';

const fileToBase64 = (filePath: string): string => {
  try {
    const fileData = fs.readFileSync(filePath);
    return fileData.toString('base64');
  } catch (error) {
    console.error('Error reading file:', error);
    return '';
  }
};

export default fileToBase64;