Dùng reduce làm tất cả những bài tập sau:
Bài 1. Chunk array.
    [input]: [1, 2, 3, 4, 5];
    Chunk(arr, 2);
    [output]: [[1, 2], [3, 4], [5]];
Bài 2. Tìm phần tử khác nhau giữa 2 mảng.
    [input]: arr1 = [1, 2, 3, 4, 5];
             arr2 = [2, 3, 6];
    Difference(arr1, arr2);
    [output]: [1, 4, 5];
Bài 3. Uniq array. Loại bỏ phần tử bị lặp.
    [input]: [2, 1, 0, 3, 2, 1, 2];
    [output]: [2, 1, 0, 3];
Bài 4. Đếm số lượng giống nhau trong một array.
    [input]: [0, 1, 1, 2, 2, 2];
    [outpu]: { 0: 1, 1: 2, 2: 3 };
Bài 5. Get max() và min()
    [input]: [12, 45, 21, 65, 38, 76, 108, 43];
    [output]: Max(arr); // 108
              Min(arr); // 12
Bài 6. Group by.
    [input]: arr = [
                { area: "GZ", name: "YZW", age: 27 },
                { area: "GZ", name: "TYJ", age: 25 },
                { area: "SZ", name: "AAA", age: 23 },
                { area: "FS", name: "BBB", age: 21 },
                { area: "SZ", name: "CCC", age: 19 }
            ];
    [output]: Group(arr, "area"); // { GZ: Array(2), SZ: Array(2), FS: Array(1) }.