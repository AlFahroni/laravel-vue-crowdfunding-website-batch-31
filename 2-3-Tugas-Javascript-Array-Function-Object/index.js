//Soal 1
var pemisah = "========================================"
console.log(pemisah)
console.log("Jawaban No 1")

var daftarBuah = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];

daftarBuah.sort()
for(i = 0; i < daftarBuah.length; i++){ //Jawaban Soal 1
    console.log(daftarBuah[i])
}

//Soal 2
console.log(pemisah)
console.log("Jawaban No 2")

function introduce(){
     return `Nama saya  ${data.name}, umur saya ${data.age} tahun, alamat saya di ${data.address}, dan saya punya hobby yaitu ${data.hobby}!`; //Jawaban Soal 2
}
var data = {name : "John" , age : 30 , address : "Jalan Pelesiran" , hobby : "Gaming" }
 
var perkenalan = introduce(data)
console.log(perkenalan)

//Soal 3
console.log(pemisah)
console.log("Jawaban No 3")

function hitung_huruf_vokal(hitungVokal){
    var jumlahVokal = 0;
    var vokal = "aeiou";

    for(var i = 0; i < hitungVokal.length; i++){
        if(vokal.indexOf(hitungVokal[i].toLowerCase()) > -1){ //Jawaban Soal 3 
            jumlahVokal++;
        }
    }   
    return jumlahVokal;
}

var hitung_1 = hitung_huruf_vokal("Muhammad")
var hitung_2 = hitung_huruf_vokal("Iqbal")

console.log(hitung_1 , hitung_2)

//Soal 4
console.log(pemisah)
console.log("Jawaban No 4")

function hitung(int){
    return int * 2 - 2;      //Jawaban Soal 4
}

console.log( hitung(0) ) // -2
console.log( hitung(1) ) // 0
console.log( hitung(2) ) // 2
console.log( hitung(3) ) // 4
console.log( hitung(5) ) // 8
