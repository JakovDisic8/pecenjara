// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
}
function ispisProizvodaSvinjetina() {
  return [
    {
      id: 1,
      selekcija: `svinjetina`,
      imeProizvoda: `Rolovana plećka`,
      cenaProizvoda: 820,
    },
    {
      id: 2,
      selekcija: `svinjetina`,
      imeProizvoda: `Svinjski file`,
      cenaProizvoda: 850,
    },
    {
      id: 3,
      selekcija: `svinjetina`,
      imeProizvoda: `Kremenadla`,
      cenaProizvoda: 650,
    },
    {
      id: 4,
      selekcija: `svinjetina`,
      imeProizvoda: `Svinjska pečenica`,
      cenaProizvoda: 820,
    },
    {
      id: 5,
      selekcija: `svinjetina`,
      imeProizvoda: `Sveža carska rebra`,
      cenaProizvoda: 490,
    },
    {
      id: 6,
      selekcija: `svinjetina`,
      imeProizvoda: `Sveža slanina`,
      cenaProizvoda: 550,
    },
    {
      id: 7,
      selekcija: `svinjetina`,
      imeProizvoda: `Svinjska plećka`,
      cenaProizvoda: 690,
    },
    {
      id: 8,
      selekcija: `svinjetina`,
      imeProizvoda: `Svinjski but bez kostiju`,
      cenaProizvoda: 690,
    },
    {
      id: 9,
      selekcija: `svinjetina`,
      imeProizvoda: `Sveže svinjske nogice`,
      cenaProizvoda: 80,
    },
    {
      id: 10,
      selekcija: `svinjetina`,
      imeProizvoda: `Praseća glava`,
      cenaProizvoda: 400,
    },
    {
      id: 11,
      selekcija: `svinjetina`,
      imeProizvoda: `Čvarci`,
      cenaProizvoda: 1100,
    },
    {
      id: 12,
      selekcija: `svinjetina`,
      imeProizvoda: `Suvo soljena domaća slanina`,
      cenaProizvoda: 1250,
    },
    {
      id: 13,
      selekcija: `svinjetina`,
      imeProizvoda: `Dimnjena mesnata slanina`,
      cenaProizvoda: 950,
    },
    {
      id: 14,
      selekcija: `svinjetina`,
      imeProizvoda: `Dimnjena carska rebra`,
      cenaProizvoda: 600,
    },
    {
      id: 15,
      selekcija: `svinjetina`,
      imeProizvoda: `Butkice`,
      cenaProizvoda: 390,
    },
    {
      id: 16,
      selekcija: `svinjetina`,
      imeProizvoda: `Kolenica`,
      cenaProizvoda: 350,
    },
    {
      id: 17,
      selekcija: `svinjetina`,
      imeProizvoda: `Rebra`,
      cenaProizvoda: 280,
    },
    {
      id: 18,
      selekcija: `svinjetina`,
      imeProizvoda: `Suve kosti`,
      cenaProizvoda: 220,
    },
    {
      id: 19,
      selekcija: `svinjetina`,
      imeProizvoda: `Svinjski ražnjić`,
      cenaProizvoda: 690,
    },
    {
      id: 20,
      selekcija: `svinjetina`,
      imeProizvoda: `Svinjski vrat bez kostiju`,
      cenaProizvoda: 820,
    },
    {
      id: 21,
      selekcija: `svinjetina`,
      imeProizvoda: `Svinjski pauflek`,
      cenaProizvoda: 680,
    },
    {
      id: 22,
      selekcija: `svinjetina`,
      imeProizvoda: `Dimljena rostilj kobasica`,
      cenaProizvoda: 730,
    },
    {
      id: 23,
      selekcija: `svinjetina`,
      imeProizvoda: `Sveža roštilj kobasica`,
      cenaProizvoda: 695,
    },
    {
      id: 24,
      selekcija: `svinjetina`,
      imeProizvoda: `Kobasica sa kačkavaljem`,
      cenaProizvoda: 850,
    },
    {
      id: 25,
      selekcija: `svinjetina`,
      imeProizvoda: `Mast`,
      cenaProizvoda: 190,
    },
  ];
}
function ispisProizvodaJunetina() {
  return [
    {
      id: 1,
      selekcija: `junetina`,
      imeProizvoda: `Juneća rebra`,
      cenaProizvoda: 720,
    },
    {
      id: 2,
      selekcija: `junetina`,
      imeProizvoda: `Juneće grudi`,
      cenaProizvoda: 720,
    },
    {
      id: 3,
      selekcija: `junetina`,
      imeProizvoda: `Juneći pauflek`,
      cenaProizvoda: 890,
    },
    {
      id: 4,
      selekcija: `junetina`,
      imeProizvoda: `Juneći ribić`,
      cenaProizvoda: 890,
    },
    {
      id: 5,
      selekcija: `junetina`,
      imeProizvoda: `Juneći vrat bez kostiju`,
      cenaProizvoda: 1090,
    },
    {
      id: 6,
      selekcija: `junetina`,
      imeProizvoda: `Juneća plećka bez kostiju`,
      cenaProizvoda: 1090,
    },
    {
      id: 7,
      selekcija: `junetina`,
      imeProizvoda: `Juneći but bez kostiju`,
      cenaProizvoda: 1090,
    },
  ];
}

function ispisProizvodaPiletina() {
  return [
    {
      id: 1,
      selekcija: `piletina`,
      imeProizvoda: `Rolovana piletina`,
      cenaProizvoda: 820,
    },
    {
      id: 2,
      selekcija: `piletina`,
      imeProizvoda: `Pileće meso`,
      cenaProizvoda: 350,
    },
    {
      id: 3,
      selekcija: `piletina`,
      imeProizvoda: `Pileci batak/karabatak`,
      cenaProizvoda: 390,
    },
    {
      id: 4,
      selekcija: `piletina`,
      imeProizvoda: `Pileća ledja`,
      cenaProizvoda: 99,
    },
    {
      id: 5,
      selekcija: `piletina`,
      imeProizvoda: `Pileće grudi`,
      cenaProizvoda: 499,
    },
    {
      id: 6,
      selekcija: `piletina`,
      imeProizvoda: `Pileća krilca`,
      cenaProizvoda: 390,
    },
    {
      id: 7,
      selekcija: `piletina`,
      imeProizvoda: `Pileći file`,
      cenaProizvoda: 739,
    },
    {
      id: 8,
      selekcija: `piletina`,
      imeProizvoda: `Pileći batak bez kostiju`,
      cenaProizvoda: 600,
    },
    {
      id: 9,
      selekcija: `piletina`,
      imeProizvoda: `Pileći ražnjić`,
      cenaProizvoda: 789,
    },
  ];
}
function ispisProizvodaMesanoMeso() {
  return [
    {
      id: 1,
      selekcija: `mesano`,
      imeProizvoda: `Pljeskavica`,
      cenaProizvoda: 740,
    },
    {
      id: 2,
      selekcija: `mesano`,
      imeProizvoda: `Ćevapi`,
      cenaProizvoda: 740,
    },
    {
      id: 3,
      selekcija: `mesano`,
      imeProizvoda: `Gurmanska pljeskavica`,
      cenaProizvoda: 750,
    },
    {
      id: 4,
      selekcija: `mesano`,
      imeProizvoda: `Uštipak`,
      cenaProizvoda: 750,
    },
    {
      id: 5,
      selekcija: `mesano`,
      imeProizvoda: `Mešano mleveno meso`,
      cenaProizvoda: 740,
    }
  ];
}

function ispisProizvodaPecenje() {
  return [
    {
      id: 1,
      selekcija: `pecenje`,
      imeProizvoda: `Jagnjeće pečenje`,
      cenaProizvoda: 2100,
    },
    {
      id: 2,
      selekcija: `pecenje`,
      imeProizvoda: `Praseće pečenje`,
      cenaProizvoda: 1300,
    },
  ];
}

function ispisProizvodaLepinje() {
  return [
    {
      id: 1,
      selekcija: `lepinje`,
      imeProizvoda: `Lepinja manja`,
      cenaProizvoda: 30,
    },
    {
      id: 2,
      selekcija: `lepinje`,
      imeProizvoda: `Somun`,
      cenaProizvoda: 40,
    },
  ];
}


window.addEventListener(`load`, function () {
  const artikliSvinjetina = ispisProizvodaSvinjetina();
  const artikliJunetina = ispisProizvodaJunetina();
  const artikliPiletina=ispisProizvodaPiletina();
  const artikliMesano=ispisProizvodaMesanoMeso();
  const artikliPecenje=ispisProizvodaPecenje();
  const artikliLepinje=ispisProizvodaLepinje();

  ispisiArtikleSvinjetina(artikliSvinjetina);
  ispisiArtikleJunetina(artikliJunetina);
  ispisiArtiklePiletina(artikliPiletina);
  ispisiArtikleMesano(artikliMesano);
  ispisiArtiklePecenje(artikliPecenje);
  ispisiArtikleLepinje(artikliLepinje);



// ispis svinjskog mesa
  function ispisiArtikleSvinjetina(nizArtikalaSvinjetina) {
    let ispisSvinjetina = "";
    nizArtikalaSvinjetina.forEach((element) => {
      ispisSvinjetina += `<div class="elementListe" id="elemnetListeSvinjetina">
           <div class="elementNaziv">${element.imeProizvoda}</div>
           <div class="elementCena">kg/ ${element.cenaProizvoda} rsd</div>
            </div>  `;
    });

    document.getElementById(`listaSvinjetina`).innerHTML = ispisSvinjetina;
  }
  
  // ispis juneceg mesa
  function ispisiArtikleJunetina(nizArtikalaJunetina) {
    let ispisJunetina ="";
    nizArtikalaJunetina.forEach((element) => {
      ispisJunetina += `<div class="elementListe" id="elemnetListeSvinjetina">
           <div class="elementNaziv">${element.imeProizvoda}</div>
           <div class="elementCena">kg/ ${element.cenaProizvoda} rsd</div>
            </div>  `;
    });

    document.getElementById(`listaJunetina`).innerHTML= ispisJunetina;
  }

// ispis Pileceg mesa
function ispisiArtiklePiletina(nizArtikalaPiletina){
  let ispisPiletina="";
  nizArtikalaPiletina.forEach((element)=>{
    ispisPiletina+=`<div class="elementListe" id="elemnetListeSvinjetina">
    <div class="elementNaziv">${element.imeProizvoda}</div>
    <div class="elementCena">kg/ ${element.cenaProizvoda} rsd</div>
     </div>
    `;
  });
  document.getElementById(`listaPiletina`).innerHTML=ispisPiletina;
}

// ispis Mesanog mesa
function ispisiArtikleMesano(nizArtikalaMesano){
  let ispisMesano="";
  nizArtikalaMesano.forEach((element)=>{
    ispisMesano+=`<div class="elementListe" id="elemnetListeSvinjetina">
    <div class="elementNaziv">${element.imeProizvoda}</div>
    <div class="elementCena">kg/ ${element.cenaProizvoda} rsd</div>
     </div>
    `;
  });
  document.getElementById(`listaMesano`).innerHTML=ispisMesano;
}
// ispis precenja
function ispisiArtiklePecenje(nizArtikalaPecenje){
  let ispisPecenje="";
  nizArtikalaPecenje.forEach((element)=>{
    ispisPecenje+=`<div class="elementListe" id="elemnetListeSvinjetina">
    <div class="elementNaziv">${element.imeProizvoda}</div>
    <div class="elementCena">kg/ ${element.cenaProizvoda} rsd</div>
     </div>
    `;
  });
  document.getElementById(`listaPecenje`).innerHTML=ispisPecenje;
}
// ispis lepinje
function ispisiArtikleLepinje(nizArtikalaLepinje){
  let ispisLepinje="";
  nizArtikalaLepinje.forEach((element)=>{
    ispisLepinje+=`<div class="elementListe" id="elemnetListeSvinjetina">
    <div class="elementNaziv">${element.imeProizvoda}</div>
    <div class="elementCena">kg/ ${element.cenaProizvoda} rsd</div>
     </div>
    `;
  });
  document.getElementById(`listaLepinje`).innerHTML=ispisLepinje;
}


});
// btn menu hamburger

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)







