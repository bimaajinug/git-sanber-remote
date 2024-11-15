// Memanggil modul prompt-sync
const prompt = require('prompt-sync')({ sigint: true });

// Meminta pengguna untuk memasukkan angka pertama
const num1 = prompt('Enter a first number: ');

// Meminta pengguna untuk memasukkan angka kedua
const num2 = prompt('Enter a second number: ');

// Menampilkan hasil penjumlahan angka pertama dan kedua
console.log('first number + second number =');
console.log(Number(num1) + Number(num2));
