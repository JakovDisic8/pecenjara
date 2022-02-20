 // When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}
function ispisProizvodaSvinjetina(){
  return[
    {
      id:1,
      imeProizvoda:`Rolovana plećka`,
      cenaProizvoda:820
    },
    {
      id:2,
      imeProizvoda:`Svinjski file`,
      cenaProizvoda:850
    },
    {
      id:3,
      imeProizvoda:`Kremenadla`,
      cenaProizvoda:650
    },
    {
      id:4,
      imeProizvoda:`Svinjska pečenica`,
      cenaProizvoda:820
    },
    {
      id:5,
      imeProizvoda:`Sveža carska rebra`,
      cenaProizvoda:490
    },
    {
      id:6,
      imeProizvoda:`Sveža slanina`,
      cenaProizvoda:550
    },
    {
      id:7,
      imeProizvoda:`Svinjska plećka`,
      cenaProizvoda:690
    },
    {
      id:8,
      imeProizvoda:`Svinjski but bez kostiju`,
      cenaProizvoda:690
    },
    {
      id:9,
      imeProizvoda:`Sveže svinjske nogice`,
      cenaProizvoda:80
    },
    {
      id:10,
      imeProizvoda:`Praseća glava`,
      cenaProizvoda:400
    },
    {
      id:11,
      imeProizvoda:`Čvarci`,
      cenaProizvoda:1100
    },
    {
      id:12,
      imeProizvoda:`Suvo soljena domaća slanina`,
      cenaProizvoda:1250
    },
    {
      id:13,
      imeProizvoda:`Dimnjena mesnata slanina`,
      cenaProizvoda:950
    },
    {
      id:14,
      imeProizvoda:`Dimnjena carska rebra`,
      cenaProizvoda:600
    },
    {
      id:15,
      imeProizvoda:`Butkice`,
      cenaProizvoda:390
    },
    {
      id:16,
      imeProizvoda:`Kolenica`,
      cenaProizvoda:350
    },
    {
      id:17,
      imeProizvoda:`Rebra`,
      cenaProizvoda:280
    },
    {
      id:18,
      imeProizvoda:`Suve kosti`,
      cenaProizvoda:220
    },
    {
      id:19,
      imeProizvoda:`Svinjski ražnjić`,
      cenaProizvoda:690
    },
    {
      id:20,
      imeProizvoda:`Svinjski vrat bez kostiju`,
      cenaProizvoda:820
    },
    {
      id:21,
      imeProizvoda:`Svinjski pauflek`,
      cenaProizvoda:680
    },
    {
      id:22,
      imeProizvoda:`Dimljena rostilj kobasica`,
      cenaProizvoda:730
    },
    {
      id:23,
      imeProizvoda:`Sveža roštilj kobasica`,
      cenaProizvoda:695
    },
    {
      id:24,
      imeProizvoda:`Kobasica sa kačkavaljem`,
      cenaProizvoda:850
    },
    {
      id:25,
      imeProizvoda:`Mast`,
      cenaProizvoda:190
    },

  ]
};
function ispisProizvodaJunetina(){
  return[
    {
      id:1,
      imeProizvoda:`Juneća rebra`,
      cenaProizvoda:720
    },
    {
      id:2,
      imeProizvoda:`Juneće grudi`,
      cenaProizvoda:720
    },
    {
      id:3,
      imeProizvoda:`Juneći pauflek`,
      cenaProizvoda:890
    },
    {
      id:4,
      imeProizvoda:`Juneći ribić`,
      cenaProizvoda:890
    },
    {
      id:5,
      imeProizvoda:`Juneći vrat bez kostiju`,
      cenaProizvoda:1090
    },
    {
      id:6,
      imeProizvoda:`Juneća plećka bez kostiju`,
      cenaProizvoda:1090
    },
    {
      id:7,
      imeProizvoda:`Juneći but bez kostiju`,
      cenaProizvoda:1090
    }
  ]
};
function ispisProizvodaPiletina(){
  return[
    {
      id:1,
      imeProizvoda:`Rolovana piletina`,
      cenaProizvoda:820
    },
    {
      id:2,
      imeProizvoda:`Pileće meso`,
      cenaProizvoda:350
    },
    {
      id:3,
      imeProizvoda:`Pileci batak/karabatak`,
      cenaProizvoda:390
    },
    {
      id:4,
      imeProizvoda:`Pileća ledja`,
      cenaProizvoda:99
    },
    {
      id:5,
      imeProizvoda:`Pileće grudi`,
      cenaProizvoda:499
    },
    {
      id:6,
      imeProizvoda:`Pileća krilca`,
      cenaProizvoda:390
    },
    {
      id:7,
      imeProizvoda:`Pileći file`,
      cenaProizvoda:739
    },
    {
      id:8,
      imeProizvoda:`Pileći batak bez kostiju`,
      cenaProizvoda:600
    },
    {
      id:9,
      imeProizvoda:`Pileći ražnjić`,
      cenaProizvoda:789
    }
  ]
};
function ispisProizvodaMesanoMeso(){
  return[
    {
      id:1,
      imeProizvoda:`Pljeskavica`,
      cenaProizvoda:740
    },
    {
      id:2,
      imeProizvoda:`Ćevapi`,
      cenaProizvoda:740
    },
    {
      id:3,
      imeProizvoda:`Gurmanska pljeskavica`,
      cenaProizvoda:750
    },
    {
      id:4,
      imeProizvoda:`Uštipak`,
      cenaProizvoda:750
    },
    {
      id:5,
      imeProizvoda:`Mešano mleveno meso`,
      cenaProizvoda:740
    }
  ]
};
function ispisProizvodaPecenje(){
  return[
    {
      id:1,
      imeProizvoda:`Jagnjeće pečenje`,
      cenaProizvoda:2100
    },
    {
      id:2,
      imeProizvoda:`Praseće pečenje`,
      cenaProizvoda:1300
    }
  ]
};
function ispisProizvodaLepinje(){
  return[
    {
      id:1,
      imeProizvoda:`Lepinja manja`,
      cenaProizvoda:30
    },
    {
      id:2,
      imeProizvoda:`Somun`,
      cenaProizvoda:40
    }
  ]
};
  