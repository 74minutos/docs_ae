//cómo conseguir la ip y almacenarla en una variable de datalayer en tealium:
const Http = new XMLHttpRequest();
const url9="https://api.ipify.org/?format=text";
Http.open("GET", url9)
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)

  var ip_address_ipify = (Http.responseText)
  utag_data.ip_address=ip_address_ipify;
}

//Cómo generar un evento de cookies actualizadas con onetrust y tealium
try{
    var accept_cookies = document.getElementById('onetrust-accept-btn-handler');
    accept_cookies.addEventListener('click', function() {
        utag.view({'tealium_event': 'cookie_consent_update'})
    })
}catch(e) {}

try{
    var decline_cookies = document.getElementById('onetrust-reject-btn-handler');
    decline_cookies.addEventListener('click', function() {
        utag.view({'tealium_event': 'cookie_consent_update'})
    })
} catch(e) {}
try{
    var decline_cookies_config = document.getElementsByClassName('ot-pc-refuse-all-handler')[0];
    decline_cookies_config.addEventListener('click', function() {
        utag.view({'tealium_event': 'cookie_consent_update'})
    })
} catch(e) {}
try{
    var preferences_cookies_config = document.getElementsByClassName('save-preference-btn-handler onetrust-close-btn-handler')[0];
    preferences_cookies_config.addEventListener('click', function() {
        utag.view({'tealium_event': 'cookie_consent_update'})
    })
} catch(e) {}
try{
    var accept_cookies_config = document.getElementById('accept-recommended-btn-handler');
    accept_cookies_config.addEventListener('click', function() {
        utag.view({'tealium_event': 'cookie_consent_update'})
    })
} catch(e) {}

//Cómo generar un timestamp y almacenarlo en una variable de capa de datos en telaium:
function getTime(){
  var date = new Date();

  var year = date.getFullYear();
  var month = (date.getMonth() +1);
  var day = date.getDate();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  return formateTime(year, month, day, hour, minute, second);
}

function formateTime(year, month, day, hour, minute, second){
  return makeDoubleDigit(year) + "-" +
         makeDoubleDigit(month) + "-" +
         makeDoubleDigit(day) + " " +
         makeDoubleDigit(hour) + ":" +
         makeDoubleDigit(minute) + ":" +
         makeDoubleDigit(second);
}

function makeDoubleDigit(x){
  return (x < 10) ? "0" + x : x;
}

b['timestamp'] = getTime()

// Conseguimos el ID de la cookie de Onetrust
function readCookie() {
    var nameEQ = 'consentId' + "=";
    var ca = document.cookie.split('&');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0)
          return c.substring(nameEQ.length,c.length);
    }
    return null;
}
var onetrust_id = readCookie()
b['onetrust_id'] = onetrust_id

//detectar returning users (útil para optimize, por ejemplo):
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());


if(document.location.pathname === '/el-precio-lo-pones-tu'){ //aquí filtramos por este path como ejemplo
    if (localStorage.returning_user && !params.onboarding){
        dataLayer.push({'event': 'returning_customer'})
    }else if (!localStorage.returning_user){
        localStorage.returning_user = true;
    }
}

//añadir valores a una url cuando estamos en un SPA (GTM):

var refresh = {{TCK - URL_clean}} + "&jQuery{{TCK - Página_virtual_custom}}"; //ejemplos de variables
window.history.pushState({path: refresh}, '', refresh); //info sobre pushState: https://developer.mozilla.org/en-US/docs/Web/API/History/pushState

//cambiar link a un elemento de la página
var link_onetrust = document.querySelector('#onetrust-policy-text a')
link_onetrust.setAttribute('href', 'https://wwwtst.santalucia.es/politica-de-privacidad-y-cookies')

//obtener el valor de texto de un elemento:
var a = document.getElementsByTagName("a");
  for(var i=0; i < a.length; i++ ){
    a[i].onclick = function() { dataLayer.push({
                    'event_category': 'menu',
                    'event_action': 'click_menu_superior',
                    'event_label': this.innerText
                });
 };
  }
//devolver valor de texto cuando se clica en una imagen:
var classes = document.getElementsByClassName('elementor-post__thumbnail__link')

  for (i = 0; i < classes.length; i++) {
     classes[i].addEventListener('click', function() {
       console.log(this.closest('div').querySelector('h3').innerText)
    	}
    )}

//extraer información de iframe
      //tenemos el formulario dentro de un iframe, por lo que lo almacenamos para poder acceder a sus contenidos
      var iframe = document.getElementById('hs-form-iframe-0');

      //si rellenan el campo name, lanzamos el datalayer.push con el etiquetado correspondiente
      var name = iframe.contentWindow.document.getElementById('firstname-7e34abfb-ffe1-4230-aaa1-2fc25844432d')
      iframe.contentWindow.document.getElementById('firstname-7e34abfb-ffe1-4230-aaa1-2fc25844432d').addEventListener('change', function(){
            if(name.value !== ''){
              dataLayer.push({
                'event': 'tck_event',
                'event_category': 'complete_form',
                'event_action': 'click',
                'event_label': 'form_name'
          })
        }
      })

//hubspot form listener
window.addEventListener("message", function(event) {
   if(event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmitted') {
     window.dataLayer.push({
       'event': 'hubspot-form-success',
       'hs-form-guid': event.data.id
     });
   }
 });

 //pardot form addEventListener
 window.addEventListener('message', function(event){
    if(event.data.formSubmitted === true){
        dataLayer.push({
            'event': 'pardot_form_submitted'
        })
    }
})

//Extraer parámetros de la URL (útil para obtener los utm de las campañas)

  /* Dada la URL https://example.com/?product=shirt&color=blue&newuser&size=m*/
  const urlParams = new URLSearchParams(window.location.search);
  //En la constante urlParams estamos guardando solo los parámetros: ?product=shirt&color=blue&newuser&size=m
  //Además, al crear un objeto del tipo URLSearchParams, podemos acceder directamente al valor de los parámetros
  //con el método get:

  const product = urlParams.get('product')
  console.log(product);
  // shirt

  const color = urlParams.get('color')
  console.log(color);
  // blue

  const newUser = urlParams.get('newuser')
  console.log(newUser);
  // empty string

//Obtener el clientID de la cookie _ga

  /*Dada la cookie _ga=GA1.2.533240779.1648648330*/
  var clientID = ga.getAll()[0].get("clientId");
  console.log(clientID);
  // 533240779.1648648330


  //conseguir el valor de los campos del formulario compuesto de
  //nodos de forma dinámica (ej. https://info.lhh.com/brand-2022-ca)
   // conseguimos el id del campo:
   var first_name_id = document.querySelectorAll('.first_name')[0].childNodes[1].htmlFor
   // como conseguimos el id del campo sea cual sea (da igual que lo implementemos en diferentes urls)
   // podemos recoger el valor del mismo a través de ese id:
   var first_name = document.getElementById(first_name_id).value

   // Con este script configuramos el banner de Onetrust para que no aparezcan h3, ya que estaba afectando al SEO
   jQuery('#ot-pc-title').replaceWith("<div id='ot-pc-title'>Centro de preferencia de la privacidad</div>")
   jQuery('#ot-category-title').replaceWith("<div id='ot-category-title'>Gestionar las preferencias de consentimiento</div>")
   jQuery('#onetrust-policy-title').replaceWith("<div id='onetrust-policy-title'>Aviso de cookies</div>")
   jQuery('#ot-lst-title').replaceWith("<div id='ot-lst-title'></div>")
   jQuery('#ot-header-id-C0001').replaceWith("<div class='ot-cat-header' id='ot-header-id-C0001'>Cookies estrictamente necesarias</div>")
   jQuery('#ot-header-id-C0002').replaceWith("<div class='ot-cat-header' id='ot-header-id-C0002'>Cookies de rendimiento</div>")
   jQuery('#ot-header-id-C0003').replaceWith("<div class='ot-cat-header' id='ot-header-id-C0003'>Cookies de funcionalidad</div>")
   jQuery('#ot-header-id-C0004').replaceWith("<div class='ot-cat-header' id='ot-header-id-C0004'>Cookies dirigidas</div>")

//cómo normalizar elementos de una array de ecommerce para ga4
function (){
  var dict_items = {{[TCK] Get items}}[0];
  var array_items_normalize = {}
  for (key in dict_items) {
    if(typeof dict_items[key] === 'string'){
        array_items_normalize[key] = dict_items[key].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    } else {
        array_items_normalize[key] = dict_items[key]
    }
  }
  return [array_items_normalize]
}


//generar un datalayer.push a partir de un utag.link_onetrust
(function() {
  var oldPush = window.utag.link;
  window.utag.link = function() {
    var states = [].slice.call(arguments, 0);

    console.log('si esto funciona es que llevo 11 años implementando implementaciones')
    dataLayer.push({
        'event': states[0].tealium_event,
        'args': states[0]
    })
    return oldPush.apply(window.utag, states);
  }
})()
