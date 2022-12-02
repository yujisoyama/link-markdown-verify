function generateURLsArray(linksArray) {
    return linksArray.map(linkObject => Object.values(linkObject))
}

export function validURLs(linksArray) {
    return generateURLsArray(linksArray);
}