import chalk from 'chalk';
import { takeFile } from "./index.js";
import { validURLs } from './http-validate.js';

const path = process.argv;

async function textProcess(path) {
    const result = await takeFile(path[2]);
    if (path[3] === 'validate') {
        console.log('Validate Links:', validURLs(result));
    }
}

textProcess(path)