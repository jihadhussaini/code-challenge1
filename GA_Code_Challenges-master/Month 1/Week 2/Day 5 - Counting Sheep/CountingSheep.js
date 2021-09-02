function countSheeps(arrayOfSheep) {
    // Buat variabel utk ngitungin jumlah, start hitungnya dr 0
    // bikin loop
    // cek apakah sheep nya true. Benar return variabel penghitung + 1. Salah skip ke next index
    // finally, return ke variabel penghitung
    let totalSheep = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
      if(arrayOfSheep[i]) {
        totalSheep++;
      }
    }
    return totalSheep;
  }