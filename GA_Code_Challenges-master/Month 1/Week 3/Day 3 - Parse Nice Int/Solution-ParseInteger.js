function getAge(inputString){
    // return correct age (int). Happy coding :) 
        let newInput = inputString.split(' '); // split string jadi ke array dulu
        console.log(newInput);
        let age = newInput[0]; // ambil index 0 nya aja
        return parseInt(age); // ubah index 0 dari string ke integer
    }