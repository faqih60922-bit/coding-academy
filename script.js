// Fungsi untuk berpindah antara tampilan Gallery dan Pendaftaran
function tampilkanHalaman(namaHalaman) {
    const halamanGallery = document.getElementById('halaman-gallery');
    const halamanPendaftaran = document.getElementById('halaman-pendaftaran');
    const btnGallery = document.getElementById('btn-gallery');
    const btnPendaftaran = document.getElementById('btn-pendaftaran');

    if (namaHalaman === 'gallery') {
        halamanGallery.classList.add('aktif');
        halamanPendaftaran.classList.remove('aktif');
        btnGallery.classList.add('active');
        btnPendaftaran.classList.remove('active');
    } else if (namaHalaman === 'pendaftaran') {
        halamanPendaftaran.classList.add('aktif');
        halamanGallery.classList.remove('aktif');
        btnPendaftaran.classList.add('active');
        btnGallery.classList.remove('active');
    }
}

// Fungsi ketika tombol Simpan Pendaftaran ditekan
function prosesSimpan(event) {
    // Mencegah halaman refresh otomatis saat submit form
    event.preventDefault();

    // Ambil nilai dari masing-masing input
    const nik = document.getElementById('nik').value.trim();
    const nama = document.getElementById('nama').value.trim();
    const jkTerpilih = document.querySelector('input[name="jk"]:checked');
    const nohp = document.getElementById('nohp').value.trim();
    const alamat = document.getElementById('alamat').value.trim();
    const bahasa = document.getElementById('bahasa').value;

    const jenisKelamin = jkTerpilih ? jkTerpilih.value : '-';

    // Tampilkan dialog confirm sesuai instruksi soal
    const yakinSimpan = confirm("Apakah Anda sudah yakin untuk menyimpan?");

    // Jika pengguna memilih "OK" / "Ya"
    if (yakinSimpan) {
        // Masukkan data ke dalam tabel hasil
        document.getElementById('hasil-nik').textContent = nik;
        document.getElementById('hasil-nama').textContent = nama;
        document.getElementById('hasil-jk').textContent = jenisKelamin;
        document.getElementById('hasil-nohp').textContent = nohp;
        document.getElementById('hasil-alamat').textContent = alamat;
        document.getElementById('hasil-bahasa').textContent = bahasa;

        // Sembunyikan pesan kosong dan tampilkan tabel hasil
        document.getElementById('pesan-kosong').classList.add('tersembunyi');
        document.getElementById('tampilan-hasil').classList.remove('tersembunyi');
    }
}

// Fungsi untuk menyembunyikan kembali hasil saat tombol Reset ditekan
function resetHasil() {
    document.getElementById('pesan-kosong').classList.remove('tersembunyi');
    document.getElementById('tampilan-hasil').classList.add('tersembunyi');
}