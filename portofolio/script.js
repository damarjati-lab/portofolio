// Mengambil form dari HTML
const form = document.getElementById("contactForm");

// Menjalankan fungsi ketika form dikirim
form.addEventListener("submit", function(event) {

    // Mencegah halaman melakukan refresh
    event.preventDefault();

    // Mengambil nilai dari input
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElementById("pesan").value.trim();

    // Validasi nama
    if (nama === "") {
        alert("Nama harus diisi!");
        return;
    }

    // Validasi email
    if (email === "") {
        alert("Email harus diisi!");
        return;
    }

    // Validasi pesan
    if (pesan === "") {
        alert("Pesan harus diisi!");
        return;
    }

    // Jika semua valid
    alert("Form berhasil dikirim. Terima kasih, " + nama + "!");

    // Mengosongkan form
    form.reset();
});