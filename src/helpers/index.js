export const capz = (word) => {
    try {
        return word.charAt(0).toUpperCase() + word.slice(1, word.length);
    } catch (ex) {
        return word;
    }
}