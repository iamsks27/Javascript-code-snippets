/*
* Simple program to find if a sorted array contains pair with given sum
* author: Shivam Kumar Singh
*/

const hasPairWithSum = (data, sum) => {
    let low = 0;
    let high = data.length - 1;
    while (low < high) {
        if (data[low] + data[high] === sum) {
            return true;
        } else if (data[low] + data[high] > sum) {
            high--;
        } else {
            low++;
        }
    }
    return false;
}

const data = [1, 2, 5, 7, 9];
console.log(hasPairWithSum(data, 13));
