//tugas 1
let namaSiswa = "kacchan";

//tugas 2
let nilaiUjian = 90;

//tugas 3
function cekKelulusan(nilai) {
    if (nilai >= 80) {
    return("Lulus");
}
else if (nilai >= 75) {
    return('Nilai Pas KKM');
}
else { 
    return('remedial');
}
}

//tugas 4
let statusSiswa = cekKelulusan(nilaiUjian);
console.log(`Siswa bernama ${namaSiswa} mendapatkan nilai ${nilaiUjian}. Status: ${statusSiswa}`);