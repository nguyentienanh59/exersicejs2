// Bai 1
const initArr = [1, 2, 3, 4, 5];

function ChunkAray(arr) {
  return arr.reduce((acc, item, index) => {
    const chunkIndex = Math.floor(index / 2);
    // console.log(acc);
    // console.log(chunkIndex);
    // console.log(item);
    // console.log(!acc[chunkIndex]);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(item);
    return acc;
  }, []);
}

console.log(ChunkAray(initArr));
console.log(initArr);

// bai 2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 6];

function Getdifference(arr1, arr2) {}

// bai 3
let array = [2, 1, 0, 3, 2, 1, 2];

function uniqArr(arr) {
  return arr.reduce((accurment, item, index) => {
    return accurment.includes(item) ? accurment : [...accurment, item];
  }, []);
}
console.log(uniqArr(array));

// bai 4

let listCount = [0, 1, 1, 2, 2, 2];

function countArr(arrC) {
  return arrC.reduce((prevC, currentC) => {
    console.log(prevC);
    prevC[currentC] = (prevC[currentC] || 0) + 1;
    return prevC;
  }, {});
}
console.log(countArr(listCount));

// bai 5
let arrayList = [12, 45, 21, 65, 38, 76, 108, 43];

let maxNum = arrayList.reduce((prev, current) => {
  return Math.max(prev, current);
});
console.log(maxNum); //108
let minNum = arrayList.reduce((prev, current) => {
  return Math.min(prev, current);
});
console.log(minNum); //12

// bai 6
let arrGroup = [
  { area: "GZ", name: "YZW", age: 27 },
  { area: "GZ", name: "TYJ", age: 25 },
  { area: "SZ", name: "AAA", age: 23 },
  { area: "FS", name: "BBB", age: 21 },
  { area: "SZ", name: "CCC", age: 19 },
];

function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    console.log(key);
    const curGroup = acc[key] ?? [];

    return { ...acc, [key]: [...curGroup, obj] };
  }, {});
}
console.log(groupBy(arrGroup, "area"));
