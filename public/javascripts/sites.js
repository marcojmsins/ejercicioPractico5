loadsites();
var select = document.getElementById("categories");
var selectsite= document.getElementById("sites");


function loadcategories(idsite) {
    child = select.lastChild;
    while(child){
        select.removeChild(child)
        child = select.lastChild;
    }
    console.log("LLEGO A LOAD categories");
    var request = new XMLHttpRequest();
    request.open('GET', `https://api.mercadolibre.com/sites/${idsite}/categories`, true);

    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            var opt = document.createElement('option');


            data.forEach(category => {

                var opt = document.createElement('option');

                opt.appendChild( document.createTextNode(category.name) );

                opt.value = category.id;

                select.appendChild(opt);
            });
        } else {
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = "No funciona!";
            app.appendChild(errorMessage);
        }
    }
    request.send();


}


function loadsites() {
    console.log("LLEGO A LOAD SITES");
    var request = new XMLHttpRequest();
    request.open('GET', 'https://api.mercadolibre.com/sites', true);
    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            var opt = document.createElement('option');


            data.forEach(site => {

                var opt = document.createElement('option');

                opt.appendChild( document.createTextNode(site.name) );

                opt.value = site.id;

                selectsite.appendChild(opt);
            });
        } else {
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = "No funciona!";
            app.appendChild(errorMessage);
        }
    }
    request.send();


}