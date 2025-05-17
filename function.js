function luasLingkaran (r) {
  return Math.PI * r * r;
}
function luasSegitiga (a,t){
 return 0.5 * a * t;
}
function  luasPanjang (p, l){
  return p * l;
}
function luasGenjang (a,t){
  return a * t;
}
console.log("Luas Lingkaran r=10", luasLingkaran(10));
console.log("Luas segitiga alas = 5, tinggi = 10", luasSegitiga(5, 10));
console.log("Luas Persegi Panjang panjang=20, lebar = 10", luasPanjang(20,10));
console.log("Luas Jajar Genjang alas= 12, tinggi = 32", luasGenjang(12,32));

const namaKaryawan = 'Ariq Shidqi'
let gajiPerhari = 100000;
const hari = 364;
function hitungGaji (gajiPerhari, hari){
  return gajiPerhari * hari;
}
console.log("Nama Karyawan :", namaKaryawan)
console.log("Gajih perhari:", gajiPerhari)
console.log("Jumlah Masuk kerja:", hari)
console.log("Total Gajih" , hitungGaji(gajiPerhari, hari))

