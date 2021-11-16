const aloitus_btn = document.querySelector(".aloita_btn button");
const tieto_laatikko = document.querySelector(".tieto_laatikko");
const lopeta_btn = tieto_laatikko.querySelector(".buttons .lopeta");
const jatka_btn = tieto_laatikko.querySelector(".buttons .jatka");
const koe_laatikko = document.querySelector(".koe_laatikko");
const vaihtoehdot_lista = document.querySelector(".vaihtoehdot_lista");
const timeCount = koe_laatikko.querySelector(".timer .aika_sek");
const timeOff = koe_laatikko.querySelector(".timer .aika_teksti");

aloitus_btn.onclick = ()=>{
    tieto_laatikko.classList.add("activeTieto");
}

lopeta_btn.onclick = ()=>{
    tieto_laatikko.classList.remove("activeTieto");
}

jatka_btn.onclick = ()=>{
    tieto_laatikko.classList.remove("activeTieto");
    koe_laatikko.classList.add("activeKoe");
    naytaKysymys(0);
    kysyCount(1);
    aloitaCounter(15);
}

let kysymykset = [

    {
        no: 1,
        kysymys: "Milloin suomi itsenäistyi?",
        vastaus: "6.12.1917",
        vaihtoehdot: [
            "1.2.1809",
            "6.12.1917",
            "20.11.1919",
            "3.4.1945"
        ]
    },

    {
        no: 2,
        kysymys: "Kuka on suomen ensimmäinen presidentti?",
        vastaus: "Kaarlo Juho",
        vaihtoehdot: [
            "Urho Kaleva Kekkonen",
            "Carl Gustaf Emil Mannerheim",
            "Sauli Niinistö",
            "Kaarlo Juho"
        ]
    },

    {
        no: 3,
        kysymys: "Kuka on ensimmäinen suomen naispresidentti?",
        vastaus: "Tarja Halonen",
        vaihtoehdot: [
            "Theresa May",
            "Sanna Marin",
            "Tarja Halonen",
            "Angela Merkel"
        ]
    },

    {
        no: 4,
        kysymys: "Milloin suomi liittyi euroopan unioniin?",
        vastaus: "1.1.1995",
        vaihtoehdot: [
            "20.3.1994",
            "1.1.1995",
            "15.5.2000",
            "19.7.1920"
        ]
    },

    {
        no: 5,
        kysymys: "Milloin euro otettiin käyttöön suomessa?",
        vastaus: "1.1.2002",
        vaihtoehdot: [
            "1.1.2002",
            "3.10.2010",
            "4.1.1945",
            "15.11.2021"
        ]
    },
];

let kysymysCount = 0;
let kysy_no = 1;
let aikaCount;
let timeOfff;
let timeValue = 15;

const seu_btn = koe_laatikko.querySelector(".seuraava_btn");

seu_btn.onclick = ()=>{
    if(kysymysCount <= kysymykset.length){
    kysymysCount++;
    kysy_no++;
    naytaKysymys(kysymysCount);
    kysyCount(kysy_no);
    clearInterval(aikaCount);
    aloitaCounter(timeValue);
    seu_btn.style.display = "none";
} else {
    console.log("Kysymykset on Loppunut");
    koe_laatikko.classList.remove("activeKoe");
    aloitus_btn.style.display = "none";
    uud_btn.style.display = "block";

    //document.classList.add("tee_uud");
        //alert('Koe on loppunut. Otetaanko kokeetta uudestaan?')
        //window.location.reload();

    }
}

const uud_btn = document.querySelector(".tee_uud");

uud_btn.onclick = ()=>{
        window.location.reload();
    }

function naytaKysymys(index){
    const kysymys_teksti = document.querySelector(".kysymys_teksti");
    let kysymys_tag =  '<span>'+ kysymykset[index].no + ". " + kysymykset[index].kysymys +'</span>';
    let vaihtoehto_tag = '<div class="vaihtoehto">'+ kysymykset[index].vaihtoehdot[0] +'</div>'
                        + '<div class="vaihtoehto">'+ kysymykset[index].vaihtoehdot[1] + '</div>'
                        + '<div class="vaihtoehto">'+ kysymykset[index].vaihtoehdot[2] +'</div>'
                        + '<div class="vaihtoehto">'+ kysymykset[index].vaihtoehdot[3] +'</div>';

    kysymys_teksti.innerHTML = kysymys_tag;
    vaihtoehdot_lista.innerHTML = vaihtoehto_tag;
    const vaihtoehto = vaihtoehdot_lista.querySelectorAll(".vaihtoehto");
    for(let i = 0; i < vaihtoehto.length; i++){
        vaihtoehto[i].setAttribute("onclick", "vaihtoehtoSelected(this)");
    }
}

function vaihtoehtoSelected(vastaus){
    clearInterval(aikaCount);
    let kayttayaVas = vastaus.innerHTML;
    let oikVastaus = kysymykset[kysymysCount].vastaus;
    let kaikkiVaihtoehdot = vaihtoehdot_lista.children.length;
    if(kayttayaVas == oikVastaus){
        vastaus.classList.add("oikein");
        console.log("Oikein Vastaus");
    } else {
        vastaus.classList.add("vaarin");
        console.log("Väärin Vastaus");
        

        for(let i = 0; i < kaikkiVaihtoehdot; i++){
            if(vaihtoehdot_lista.children[i].innerHTML == oikVastaus){
                vaihtoehdot_lista.children[i].classList.add("oikein");
    }

        }
    }

    for(let i = 0; i < kaikkiVaihtoehdot; i++){
        vaihtoehdot_lista.children[i].classList.add("disabled");
    }
    seu_btn.style.display = "block";
}

function aloitaCounter(aika){
aikaCount = setInterval(timer, 1000);
function timer(){
    timeCount.innerHTML = aika;
    aika--;
    if(aika <= 0){
        clearInterval(aikaCount);
        timeCount.innerHTML = ("0");

        let oikVastaus = kysymykset[kysymysCount].vastaus;
        let kaikkiVaihtoehdot = vaihtoehdot_lista.children.length;

        timeOff.innerHTML = "Aika on loppunut";
        seu_btn.style.display = "block";

        for(let i = 0; i < kaikkiVaihtoehdot; i++){
            if(vaihtoehdot_lista.children[i].innerHTML == oikVastaus){
                vaihtoehdot_lista.children[i].classList.add("oikein");
    }

        }
        for(let i = 0; i < kaikkiVaihtoehdot; i++){
            vaihtoehdot_lista.children[i].classList.add("disabled");
        }
        seu_btn.style.display = "block";
        
} else {
    timeOff.innerHTML = "Aika jäljellä";
}
}
}


function kysyCount(index){
const viimeinen_kysymys_count = koe_laatikko.querySelector(".yhteensa");
let yhteensaKysyCountTag = '<span><p>'+ index +'</p>of<p>'+ kysymykset.length +'</p>Kysmykset</span>';
viimeinen_kysymys_count.innerHTML = yhteensaKysyCountTag;
}