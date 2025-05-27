function carpimTablosu() {
    var sayi = parseInt(document.getElementById("sayi").value);
    var sonuc = "";
    
    
        for (var i = 1; i <= 10; i++) {
            sonuc += `${sayi} x ${i} = ${sayi * i}\n`;
        }
    
    document.getElementById("carpimSonuc").innerText = sonuc;
}