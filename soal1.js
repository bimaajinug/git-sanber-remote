const prompt = require('prompt-sync')({ sigint: true });
function akarPangkatDua(x) {
    // Cek apakah input kurang dari 0
    if (x < 0) {
      return "Tidak bisa input bilangan negatif";
    }
    
    // Cek apakah input adalah bilangan ganjil
    if (x % 2 !== 0) {
      return "Tidak bisa input bilangan ganjil";
    }
    
    // Menghitung akar pangkat 2 dari x
    return Math.sqrt(x);
  }
  
  // Meminta input dari user
  const input = prompt("Masukkan angka genap yang lebih besar dari 0:");
  const number = parseFloat(input);
  
  // Menampilkan hasil atau pesan error ke console
  console.log(akarPangkatDua(number));
  