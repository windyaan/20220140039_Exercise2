function submitForm() { 
    var name = document.getElementById("name").value;
    var jk = document.querySelector('input[name="jk"]:checked') ? document.querySelector('input[name="jk"]:checked').value : ""; 
    var alamat = document.getElementById("alamat").value; 
    var seat = document.getElementById("seat").value; 
    var penyakit = document.getElementById("penyakit").value; 
    var tanggal = document.getElementById("tanggal").value; 

    if (!seat) {
        alert("Silakan pilih seat");
        return false;
    }

    var message = "Nama: " + name + "\n" +
                  "Seat: " + seat + "\n" + 
                  "Alamat: " + alamat + "\n" + 
                  "Jenis Kelamin: " + jk + "\n" + 
                  "Riwayat Penyakit: " + penyakit + "\n" + 
                  "Tanggal Pesan: " + tanggal; 

    alert(message); 
     
    return false; 
}
