// Descrizione:
// Creare uno slider di immagini
// Potete usare le immagini che desiderate.
// Per facilitarvi la vita usate immagini delle stesse dimensioni :)
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// Utilizziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire qual è l’immagine attuale da visualizzare
// nello slider
// Bonus:
// Clicchiamo sui pallini e mostriamo l’immagine corrispondente
// Generiamo i pallini con JS
// Consiglio del giorno:
// Come sempre è importante usare la documentazione di jQuery
// per scoprire/rinfrescare memoria sulle funzioni che potrebbero esserci utili.

$(document).ready(function(){

    $('.next').click(function(){
        nextPic();
    });

    $('.prev').click(function(){
        prevPic();
    });

// *****funzioni*****

// funzione per andare all'immagine successiva
    function nextPic(){
        // fisso la classe active con due var
        var activePic = $('.images img.active');
        var activeCircle = $('.nav i.active');
        // rimuovo la classe active
        activePic.removeClass('active');
        activeCircle.removeClass('active');
        // aggiungo la classe active agli elementi successivi
        if (activePic.hasClass('last')) {
            $('.images img.first').addClass('active');
            $('.nav i.first').addClass('active');
        } else {
            activePic.next().addClass('active');
            activeCircle.next().addClass('active');
        }
    };

// funzione per tornare all'immagine precedente
    function prevPic() {
        // fisso la classe active con due var
        var activePic = $('.images img.active');
        var activeCircle = $('.nav i.active');
        // rimuovo la classe active
        activePic.removeClass('active');
        activeCircle.removeClass('active');
        // aggiungo la classe active agli elementi successivi
        if (activePic.hasClass('first')) {
            $('.images img.last').addClass('active');
            $('.nav i.last').addClass('active');
        } else {
            activePic.prev().addClass('active');
            activeCircle.prev().addClass('active');
        }
    };
});
