function sumOfDifferences(arr) {
    // Sort dulu, bikin sort desc, biar gampang cari selisihnya
    // Bikin variabel base utk hitung sum nya, start 0.
    // Bikin loop yg ngereturn jumlah dari selisih nilai index i dan i+1, dst
    let sum = 0;
    let sortedArr = arr.sort((a, b) => b - a)
    for (let i = 0; i < sortedArr.length - 1; i++) {
        sum += (sortedArr[i] - sortedArr[i + 1]);
    }
    return sum;
}