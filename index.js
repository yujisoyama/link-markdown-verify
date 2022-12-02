import chalk from 'chalk';
import fs from 'fs';

const treatError = (error) => {
    throw new Error(chalk.red(error.code, 'File not found'));
}

const takeFile = async (filePath) => {
    try {
        const encoding = 'utf-8'
        const text = await fs.promises.readFile(filePath, encoding);
        extractLinks(text)
    } catch (error) {
        treatError(error);
    }
}

const extractLinks = (text) => {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const links = [];
    let temp;

    while ((temp = regex.exec(text)) !== null) {
        links.push({ [temp[1]]: temp[2] })
    }
    return links;
}


takeFile('./arquivos/texto1.md');