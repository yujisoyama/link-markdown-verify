import chalk from 'chalk';
import fs from 'fs';
import path from 'path';

const treatError = (error) => {
    throw new Error(chalk.red(error.code, 'File not found'));
}

export const takeFile = async (filePath) => {
    try {
        const absoluteDir = path.join(path.resolve(), '.', filePath);
        const encoding = 'utf-8';
        const files = await fs.promises.readdir(absoluteDir, { encoding });
        const result = await Promise.all(files.map(async (file) => {
            const fileDir = `${absoluteDir}/${file}`;
            const text = await fs.promises.readFile(fileDir, encoding);
            return extractLinks(text);
        }));
        return result;
    } catch (error) {
        treatError(error);
    }
}

const extractLinks = (text) => {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const links = [];
    let temp;

    while ((temp = regex.exec(text)) !== null) {
        links.push({ [temp[1]]: temp[2] });
    }
    return links.length === 0 ? 'No link was found.' : links;
}


// takeFile('./arquivos/texto1.md');