//Soal 1
let pemisah = "========================================"
console.log(pemisah)
console.log("Jawaban No 1")

const persegiPanjang = (panjang, lebar) => {
    return `Persegi Panjang dengan panjang ${panjang} dan lebar ${lebar} \nmemiliki luas ${panjang*lebar} dan keliling ${2*(panjang+lebar)}`//Jawaban Soal 1
}
console.log(persegiPanjang(6,4))

//Soal 2
console.log("\n" + pemisah)
console.log("Jawaban No 2")

  const newFunction = (firstName, lastName) => {
    return {
        fullName: () => console.log(firstName + " " + lastName) //Jawaban Soal 2
      }
  }
   
  //Driver Code 
  newFunction("William", "Imoh").fullName() 

//Soal 3
console.log("\n" + pemisah)
console.log("Jawaban No 3")

const newObject = {
    firstName: "Muhammad",
    lastName: "Iqbal Mubarok",
    address: "Jalan Ranamanyar",
    hobby: "playing football",
  }

const{firstName, lastName, address, hobby} = newObject //Jawaban Soal 3

// Driver code
console.log(firstName, lastName, address, hobby)

//Soal 4
console.log("\n" + pemisah)
console.log("Jawaban No 4")

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east] //Jawaban Soal 4
//Driver Code
console.log(combined)

//Soal 5
console.log("\n" + pemisah)
console.log("Jawaban No 5")

const planet = "earth" 
const view = "glass" 
var before = 'Lorem ' + view + ' dolor sit amet, ' + 'consectetur adipiscing elit, ' + planet

const after = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet}`//Jawaban Soal 5

console.log(before)
console.log(after)