import IndexManager from "./IndexManager.js";
import UtilityClass from "./UtilityClass.js";
import HtmlBuilder from "./HtmlBuilder.js";
import RequestJson from "./RequestJson.js"

var requestJson = new RequestJson(null, "https://data.mongodb-api.com/app/data-ivdyd/endpoint/data/beta", null);
var htmlBuilder = new HtmlBuilder("../Views");


var partPath = window.location.hash
console.log(partPath);

// console.log(UtilityClass.GetJsonFromFile("../Files/Json/test.json"));

var date = new Date();

var jsonWalletDepositAddress;
var eleVideoBG;
var eleSorceVideoBG;
var tabs;
var current;
var cryptoSelectOptions;
var addressInfos;
var popoverTriggerList;
var popoverList;
var embed;

var x = await RequestJson.RequestMongoDB();
document.addEventListener('DOMContentLoaded', function(event) {

    //var x = await requestJson.RequestMongoDB();
    //console.log(await requestJson.RequestMongoDB());

    //document.querySelector(window.location.hash).style.display.
    StartUp();
    // CreateVariables();
    // AppendEvents();
});

//CREAZIONE DI TUTTO IL CONTENUTO HTML
async function StartUp() {
    //Insert Navbar
    let htmlNavbar = await htmlBuilder.CreateNavbarView("");
    IndexManager.ReplaceHtmlContent("mainNavbar", htmlNavbar);

    let htmlSectionsHome = await htmlBuilder.CreateSectionView("");
    IndexManager.ReplaceHtmlContent("sHome", htmlSectionsHome);
    
    let htmlSectionsAboutMe = await htmlBuilder.CreateSectionViewById("sAboutMe");
    htmlSectionsAboutMe = HtmlBuilder.RepleaceAllKey(htmlSectionsAboutMe, "myAge", date.getFullYear() - 1994);
    IndexManager.ReplaceHtmlContent("sAboutMe", htmlSectionsAboutMe);

    let htmlSectionsFeatures = await htmlBuilder.CreateSectionViewById("sFeatures");
    IndexManager.ReplaceHtmlContent("sFeatures", htmlSectionsFeatures);

    let htmlSectionsDev = await htmlBuilder.CreateSectionViewById("sDev");
    IndexManager.ReplaceHtmlContent("sDev", htmlSectionsDev);

    jsonWalletDepositAddress = await UtilityClass.GetJsonFromRootPage("WalletDepositAddress");
    let htmlSectionsDonate = await htmlBuilder.CreateSectionDonateView(jsonWalletDepositAddress);
    IndexManager.ReplaceHtmlContent("sDonate", htmlSectionsDonate);

    let htmlFooter = await htmlBuilder.CreateFooterViewById("iFooter");
    IndexManager.ReplaceHtmlContent("iFooter", htmlFooter);

    // CreateVariables
    eleVideoBG = document.querySelector("#videoBG");
    eleSorceVideoBG = document.querySelector("#sorceVideoBG");

    tabs = [
        { tabI: document.querySelector("#iHome"), tabS: document.querySelector("#sHome") },
        { tabI: document.querySelector("#iAboutMe"), tabS: document.querySelector("#sAboutMe") },
        { tabI: document.querySelector("#iFeatures"), tabS: document.querySelector("#sFeatures") },
        { tabI: document.querySelector("#iDev"), tabS: document.querySelector("#sDev") },
        { tabI: document.querySelector("#iDonate"), tabS: document.querySelector("#sDonate") },
    ];
    current = tabs[0];


    cryptoSelectOptions = document.querySelector('#cryptoSelectOptions');
    addressInfos = document.querySelectorAll(".chainList");
    //console.log(andressInfo);

    
    embed = new Twitch.Embed("twitch-embed", {
        width: "90%",
        height: "600",
        theme: "dark",
        // layout: "video",
        autoplay: false,
        channel: "arutosio",
        // Only needed if this page is going to be embedded on other websites
        parent: ["embed.example.com", "othersite.example.com"]
    });

    eleVideoBG.style.opacity = '1';

    // EVENTI!!!!
    document.addEventListener('click', function(event) 
    {
        // console.log(tabScenaries[Object.keys(tabScenaries)]);
        if (event.target.getAttribute("class") != "nav-link active" && tabs.find(t => t.tabI == event.target)) 
        {

                eleVideoBG.style.opacity = '0';

            switch(event.target) {
                case tabs[0].tabI:
                    tabs[0].tabS.style.display = "flex";
                    eleVideoBG.style.display = "inline-flex";
                    eleSorceVideoBG.setAttribute('src', '../Files/Videos/Toaru-Kagaku-no-Accelerator.m4v');
                    setTimeout(function() {
                        eleVideoBG.load();
                    }, 500); // Ritardo di 500 millisecondi (0,5 secondi)
                    tabs[0].tabI.classList.add("active");
                    break;
                case tabs[1].tabI:
                    tabs[1].tabS.style.display = "flex";
                    eleVideoBG.style.display = "inline-flex";
                    eleSorceVideoBG.setAttribute('src', '../Files/Videos/Toaru-Kagaku-no-Railgun.m4v');
                    setTimeout(function() {
                        eleVideoBG.load();
                    }, 500); // Ritardo di 500 millisecondi (0,5 secondi)
                    tabs[1].tabI.classList.add("active");
                    break;
                case tabs[2].tabI:
                    tabs[2].tabS.style.display = "flex";
                    eleVideoBG.style.display = "inline-flex";
                    eleSorceVideoBG.setAttribute('src', '../Files/Videos/Toaru-Majutsu-no-Index2.m4v');
                    setTimeout(function() {
                        eleVideoBG.load();
                    }, 500); // Ritardo di 500 millisecondi (0,5 secondi)
                    tabs[2].tabI.classList.add("active");
                    break;
                case tabs[3].tabI:
                    tabs[3].tabS.style.display = "flex";
                    eleVideoBG.style.display = "inline-flex";
                    eleSorceVideoBG.setAttribute('src', '../Files/Videos/Toaru-Majutsu-no-Index1.m4v');
                    setTimeout(function() {
                        eleVideoBG.load();
                    }, 500); // Ritardo di 500 millisecondi (0,5 secondi)
                    tabs[3].tabI.classList.add("active");
                    break;
                case tabs[4].tabI:
                    tabs[4].tabS.style.display = "flex";
                    eleVideoBG.style.display = "inline-flex";
                    eleSorceVideoBG.setAttribute('src', '../Files/Videos/Toaru-Kagaku-no-Accelerator.m4v');
                    setTimeout(function() {
                        eleVideoBG.load();
                    }, 500); // Ritardo di 500 millisecondi (0,5 secondi)
                    tabs[4].tabI.classList.add("active");
                    break;
                default:
                    console.log(`NON RICONOSCIUTO! - ${event.target}`);
            }

            setTimeout(function() {
                // Imposta l'opacità a 1 per far apparire gradualmente il video
                eleVideoBG.style.opacity = '1';
            }, 500); // Ritardo di 500 millisecondi (0,5 secondi)
            current.tabS.style.display = "none";
            current.tabI.classList.remove("active");
            current = tabs.find(t => t.tabI == event.target);
        }
    });

    // Example: Enable popovers everywhere
    popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    });

    embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
        var player = embed.getPlayer();
        player.play();
    });

    cryptoSelectOptions.addEventListener("change", function(event) {
        for (let i = 0; i < addressInfos.length; i++) {
            let address = addressInfos[i];
            if (i == this.value) {
                address.style.display = "flex";
            }
            else {
                address.style.display = "none";
            }
        }
    });



}
function ChnageVideoSetup(tabS) {
    tabs[4].tabS.style.display = "flex";
    eleVideoBG.style.display = "inline-flex";
    eleSorceVideoBG.setAttribute('src', '../Files/Videos/Toaru-Kagaku-no-Accelerator.m4v');
}


//CREAZIONE DI TUTTE LE VARIABILI NECESARIE UTILIZZATI DALLE FUNZIONI
function CreateVariables()
{
    //Delcare Costant
    eleVideoBG = document.querySelector("#videoBG");
    eleSorceVideoBG = document.querySelector("#sorceVideoBG");

    tabs = [
    { tabI: document.querySelector("#iHome"), tabS: document.querySelector("#sHome") },
    { tabI: document.querySelector("#iAboutMe"), tabS: document.querySelector("#sAboutMe") },
    { tabI: document.querySelector("#iFeatures"), tabS: document.querySelector("#sFeatures") },
    { tabI: document.querySelector("#iDev"), tabS: document.querySelector("#sDev") },
    { tabI: document.querySelector("#iDonate"), tabS: document.querySelector("#sDonate") },
    ];
    current = tabs[0];
    cryptoSelectOptions = document.getElementById('#cryptoSelectOptions');
    andressInfo = document.querySelector("#addressInfo");
    //console.log(andressInfo);

    
    embed = new Twitch.Embed("twitch-embed", {
        width: "90%",
        height: "60%",
        theme: "dark",
        // layout: "video",
        autoplay: false,
        channel: "arutosio",
        // Only needed if this page is going to be embedded on other websites
        parent: ["embed.example.com", "othersite.example.com"]
    });
}

//CREAZIONI ASSOCIAGIONE AGLI EVENTI DEGLI ELEMENTI
function AppendEvents() {
    
    //#region EVENT LISTENERS
    //document.body.querySelector("#Selections").addEventListener("click", ShowSelection(x));
    document.addEventListener('click', function( event ) 
    {
        // console.log(tabScenaries[Object.keys(tabScenaries)]);
        if (event.target.getAttribute("class") != "nav-link active" && tabs.find(t => t.tabI == event.target)) 
        {
            switch(event.target) {
                case tabs[0].tabI:
                    tabs[0].tabS.style.display = "flex";
                    //eleVideoBG.style.display = "inline-flex";
                    eleSorceVideoBG.setAttribute('src', '../Files/Videos/Toaru-Kagaku-no-Accelerator.m4v');
                    eleVideoBG.load();
                    tabs[0].tabI.classList.add("active");
                    break;
                case tabs[1].tabI:
                    tabs[1].tabS.style.display = "flex";
                    //eleVideoBG.style.display = "inline-flex";
                    eleSorceVideoBG.setAttribute('src', '../Files/Videos/Toaru-Kagaku-no-Railgun.m4v');
                    eleVideoBG.load();
                    tabs[1].tabI.classList.add("active");
                    break;
                case tabs[2].tabI:
                    tabs[2].tabS.style.display = "flex";
                    //eleVideoBG.style.display = "inline-flex";
                    eleSorceVideoBG.setAttribute('src', '../Files/Videos/Toaru-Majutsu-no-Index2.m4v');
                    eleVideoBG.load();
                    tabs[2].tabI.classList.add("active");
                    break;
                case tabs[3].tabI:
                    tabs[3].tabS.style.display = "flex";
                    //eleVideoBG.style.display = "inline-flex";
                    eleSorceVideoBG.setAttribute('src', '../Files/Videos/Toaru-Majutsu-no-Index1.m4v');
                    eleVideoBG.load();
                    tabs[3].tabI.classList.add("active");
                    break;
                case tabs[4].tabI:
                    tabs[4].tabS.style.display = "flex";
                    //eleVideoBG.style.display = "inline-flex";
                    eleSorceVideoBG.setAttribute('src', '../Files/Videos/Toaru-Kagaku-no-Accelerator.m4v');
                    eleVideoBG.load();
                    tabs[4].tabI.classList.add("active");
                    break;
                default:
                    console.log(`NON RICONOSCIUTO! - ${event.target}`);
            }

            current.tabS.style.display = "none";
            current.tabI.classList.remove("active");
            current = tabs.find(t => t.tabI == event.target);
        }
    });

    // Example: Enable popovers everywhere
    popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    });

    embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
        var player = embed.getPlayer();
        player.play();
    });

    cryptoSelectOptions.addEventListener("select", ShowAddressInfo());


}

//METODI SECONDARI
function ShowAddressInfo() {
    cryptoSelectOptions
}
