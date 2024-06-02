function kenaRazia(date, data) {
    var lokasiRazia = ["Gajah Mada", "Hayam Wuruk", "Sisingamangaraja", "Panglima Polim", "Fatmawati", "Tomang Raya"];
    var hasil = [];
  
    for (var i = 0; i < data.length; i++) {
      if (data[i].type === "Mobil") {
        var platTerakhir = parseInt(data[i].plat[data[i].plat.length - 1]);
        if (date % 2 !== platTerakhir % 2) {
          var tilang = 0;
          for (var j = 0; j < data[i].rute.length; j++) {
            if (lokasiRazia.indexOf(data[i].rute[j]) !== -1) {
              tilang++;
            }
          }
          if (tilang > 0) {
            hasil.push({ name: data[i].name, tilang: tilang });
          }
        }
      }
    }
  
    return hasil;
  }
  
  console.log(
    kenaRazia(27, [
      {
        name: "Denver",
        plat: "B 2791 KDS",
        type: "Mobil",
        rute: ["TB Simatupang", "Panglima Polim", "Depok", "Senen Raya"]
      },
      {
        name: "Toni",
        plat: "B 1212 JBB",
        type: "Mobil",
        rute: ["Pintu Besar Selatan", "Panglima Polim", "Depok", "Senen Raya", "Kemang"]
      },
      {
        name: "Stark",
        plat: "B 444 XSX",
        type: "Motor",
        rute: ["Pondok Indah", "Depok", "Senen Raya", "Kemang"]
      },
      {
        name: "Anna",
        plat: "B 678 DD",
        type: "Mobil",
        rute: ["Fatmawati", "Panglima Polim", "Depok", "Senen Raya", "Kemang", "Gajah Mada"]
      }
    ])
  );
  