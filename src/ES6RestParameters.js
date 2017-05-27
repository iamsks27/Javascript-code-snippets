//Rest parameters in ES6
function pickProperties(language, ...properties) {
    let result = {};
    for (let i = 0; i < properties.length; i++) {
        result[properties[i]] = language[properties[i]];
    }
    return result;
}

let language = {
    typeofLanguage: 'Object Oriented',
    name: 'Java',
    creator: 'James Gosling',
    popularity: 'Very famous'
}

let languageData = pickProperties(language, 'name', 'creator');
console.log(languageData);
