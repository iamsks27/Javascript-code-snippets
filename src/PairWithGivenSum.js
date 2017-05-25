/*
* Simple program to find if an array contains pair with given sum
* author: Shivam Kumar Singh
*/

const harPairWithSum = (data, sum) => {
    const comp = []; //complements
    for (let i = 0; i < data.length; i++) {
        if (comp.includes(data[i]) === true) {
            return true;
        }
        comp.push(sum - data[i]);
    }
    return false;
}

const data = [1, 2, 3, 4, 9, 5];
console.log(harPairWithSum(data, 1));
