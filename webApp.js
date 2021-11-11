const aloitus_btn = document.querySelector(".aloita_btn button");
const tieto_laatikko = document.querySelector(".tieto_laatikko");
const lopeta_btn = tieto_laatikko.querySelector(".buttons .lopeta");
const jatka_btn = tieto_laatikko.querySelector(".buttons .jatka");
const koe_laatikko = document.querySelector(".koe_laatikko");
const vaihtoehdot_lista = document.querySelector(".vaihtoehdot_lista");

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
}

let kysymykset = [

    {
        no: 1,
        kysymys: "Mitä HTML tarkoittaa?",
        vastaus: "Hyper Text Markup Language",
        vaihtoehdot: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language"
        ]
    },

    {
        no: 2,
        kysymys: "Mitä CSS tarkoittaa?",
        vastaus: "Cascading Style Sheet",
        vaihtoehdot: [
            "Common Style Sheer",
            "Colorful Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet"
        ]
    },

    {
        no: 3,
        kysymys: "Mitä PHP tarkoittaa?",
        vastaus: "Hypertext Preprocessor",
        vaihtoehdot: [
            "Hypertext Preprocessor",
            "Hypertext programming",
            "Hypertext Preprogramming",
            "Hometext preprocessor"
        ]
    },

    {
        no: 4,
        kysymys: "Mitä SQL tarkoittaa?",
        vastaus: "Structured Query Language",
        vaihtoehdot: [
            "Stylish Question Language",
            "Stylesheet Query Language",
            "Statement Question Language",
            "Structured Query Language"
        ]
    },

    {
        no: 5,
        kysymys: "Mitä XML tarkoittaa?",
        vastaus: "Extensible Markup Language",
        vaihtoehdot: [
            "Extensible Markup Language",
            "Executable Multiple Language",
            "Extra Multiple Language",
            "Extra Multi-Program Language"
        ]
    },
];

let kysymysCount = 0;
let kysy_no = 1;

const seu_btn = koe_laatikko.querySelector(".seuraava_btn");

seu_btn.onclick = ()=>{
    if(kysymysCount < kysymykset.length){
    kysymysCount++;
    kysy_no++;
    naytaKysymys(kysymysCount);
    kysyCount(kysy_no);
} else {
    console.log("Kysymykset on Loppunut");
}
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
    let kayttayaVas = vastaus.innerHTML;
    let oikVastaus = kysymykset[kysymysCount].vastaus;
    let kaikkiVaihtoehdot = vaihtoehdot_lista.children.length;
    if(kayttayaVas == oikVastaus){
        vastaus.classList.add("oikein");
        console.log("Oikein Vastaus");
    } else {
        vastaus.classList.add("vaarin");
        console.log("Väärin Vastaus");

        if(vaihtoehdot_lista[i].children)
    }

    for(let i = 0; i < kaikkiVaihtoehdot; i++){
        vaihtoehdot_lista.children[i].classList.add("disabled");
    }
}

let timerTeksti = document.querySelector(".timer .aika_teksti");
let timer = document.querySelector(".timer .aika_sek");
let timer_tag =  '<span>'+ timerTeksti + " " + timer +'</span>';


function kysyCount(index){
const viimeinen_kysymys_count = koe_laatikko.querySelector(".yhteensa");
let yhteensaKysyCountTag = '<span><p>'+ index +'</p>of<p>'+ kysymykset.length +'</p>Kysmykset</span>';
viimeinen_kysymys_count.innerHTML = yhteensaKysyCountTag;
}