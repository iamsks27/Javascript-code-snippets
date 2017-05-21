/*
* author: Shivam Kumar Singh
*/

//A simple function to get query parameters in javascript
const queryParams = () => {
    const params = {};
    let queryName, queryVal, query;
    let qstr = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (let i = 0; i < qstr.length; i++) {
        query = qstr[i].split('=');
        queryName = query[0];
        queryVal = query[1];
        params[queryName] = queryVal;
    }
    return JSON.stringify(params);
}
