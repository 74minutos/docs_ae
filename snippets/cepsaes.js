function(){
  //here we're going to have all the logic to translate ua events to ga4 for GTM container GTM-5SVS6WN
  //regex that we're trying to find
  var re = new RegExp("^abrir$|^cerrar$|^desplegar$|^buscar$|^mostrar$");
  var registro_regex = new RegExp("^sucess$|^solicitud alta cliente o tarjeta virtual$");
  var error_regex = new RegExp(".*error.*|.*ko.*")
  var error_form_regex = new RegExp("^error formulario.*")
  var success_regex = new RegExp(".*success.*")
  var search_regex = new RegExp("query.*|buscar.*")
  var segment_regex = new RegExp("^desplegar$|^cerrar$")
  var abrir_regex = new RegExp(".*abrir.*")
  var contact_regex = new RegExp("^clic_contactar.*|^clic contactar.*")
  var nav_regex = new RegExp("^clic.*|^ver_en.*|^grafico.*|^modulo de mapa.*")
  var footer_regex = new RegExp("^footer.*")
  var gestion_regex = new RegExp("^gestion_nuevo.*|^gestion_indicencia.*|^gestion_informacion.*")
  var download_regex = new RegExp("^descarga.*")
  var flujos_regex = new RegExp("^flujo.*")
  var gestion_ar_regex = new RegExp("^gestion.*|asociar.*")
  var form_regex = new RegExp("^formulario_.*")

  //first logic: to navigation
  if({{DL - eventAction}} === 'registro' && registro_regex.test({{DL - eventLabel}})
  ) {
    return 'alta_ptv'
  }
  else if({{DL - eventAction}} === 'registro' && error_regex.test({{DL - eventLabel}})
  ) {
    return 'alta_ptv_ko'
  }
  else if({{DL - eventAction}} === 'gestion_activacionColectivo' && success_regex.test({{DL - eventLabel}})
  ) {
    return 'colectivo_ptv'
  }
  else if({{DL - eventAction}} === 'menu hamburguesa_tercer nivel' && abrir_regex.test({{DL - eventLabel}})
  ) {
    return 'navigation'
  }
  else if({{DL - eventAction}} === 'gestion_activacionColectivo' && error_regex.test({{DL - eventLabel}})
  ) {
    return 'colectivo_ptv_ko'
  }
  else if(gestion_regex.test({{DL - eventAction}}) && success_regex.test({{DL - eventLabel}} && {{Page URL}}.indexOf('prv') === -1)
  ) {
    return 'contact'
  }
  else if(gestion_regex.test({{DL - eventAction}}) && error_regex.test({{DL - eventLabel}} && {{Page URL}}.indexOf('prv') === -1)
  ) {
    return 'contact_ko'
  }
  else if({{DL - eventAction}} === 'form sent' && success_regex.test({{DL - eventLabel}})
  ) {
    return 'generate_lead'
  }
  else if({{DL - eventAction}} === 'solicitar_informacion'
  ) {
    return 'generate_lead'
  }
  else if({{DL - eventAction}} === 'form sent' && error_regex.test({{DL - eventLabel}})
  ) {
    return 'generate_lead_ko'
  }
  else if({{DL - eventAction}} === 'formulario login' && success_regex.test({{DL - eventLabel}})
  ) {
    return 'login'
  }
  else if({{DL - eventAction}} === 'formulario login' && error_regex.test({{DL - eventLabel}})
  ) {
    return 'login_ko'
  }
  else if({{DL - eventAction}} === 'formulario registro' && success_regex.test({{DL - eventLabel}})
  ) {
    return 'sign_up'
  }
  else if({{DL - eventAction}} === 'formulario registro' && error_regex.test({{DL - eventLabel}})
  ) {
    return 'sign_up_ko'
  }
  else if({{DL - eventAction}} === 'formulario ticket digital' && success_regex.test({{DL - eventLabel}})
  ) {
    return 'ticket_digital_ptv'
  }
  else if({{DL - eventAction}} === 'formulario ticket digital' && error_regex.test({{DL - eventLabel}})
  ) {
    return 'ticket_digital_ptv_ko'
  }
  else if({{DL - eventAction}} === 'formulario validacion' && success_regex.test({{DL - eventLabel}})
  ) {
    return 'registro_validacion'
  }
  else if({{DL - eventAction}} === 'formulario validacion' && error_regex.test({{DL - eventLabel}})
  ) {
    return 'registro_validacion_ko'
  }
  else if({{DL - eventAction}} === 'buscar' && search_regex.test({{DL - eventLabel}})
  ) {
    return 'search'
  }
  else if({{DL - eventAction}} === 'menu superior_segmento' && segment_regex.test({{DL - eventLabel}})
  ) {
    return 'navigation'
  }
  else if({{DL - eventAction}} === 'gestion_solicitudTarjeta' && error_regex.test({{DL - eventLabel}})
  ) {
    return 'solicitud_tarjetas_ptv_ko'
  }
  else if(contact_regex.test({{DL - eventAction}})
  ) {
    return 'contact'
  }
  else if(nav_regex.test({{DL - eventAction}})
  ) {
    return 'navigation'
  }
  else if(download_regex.test({{DL - eventAction}})
  ) {
    return 'download'
  }
  else if(search_regex.test({{DL - eventAction}})
  )  {
    return 'search'
  }
  else if(footer_regex.test({{DL - eventAction}})
  ) {
    return 'select_content'
  }
  else if(flujos_regex.test({{DL - eventAction}})
  ) {
    return 'flujos_ar'
  }
  else if(gestion_ar_regex.test({{DL - eventAction}}) && {{Page URL}}.includes("prv")
  ) {
    return 'gestiones_ar'
  }
  else if(form_regex.test({{DL - eventAction}}) && {{Page URL}}.includes("prv")
  ) {
    return 'formularios_ar'
  }
  else if({{DL - eventAction}} === 'banner app' || {{DL - eventAction}} === 'menu superior_buscar' || {{DL - eventAction}} === 'menu superior' && re.test({{DL - eventLabel}}))  {
    return 'navigation'
  } else {
    switch ({{DL - eventAction}}){
      case 'gestion_tarjetaMovil_PTV':
      case 'gestion_asociarTarjetaPTV':
        return 'gestion_tarjetas_ptv'
        break
      case 'contactarTelefono':
      case 'formulario_OTHER REQUESTS':
      case 'formulario_Otras Consultas':
      case 'formulario enviado con exito':
        return 'contact'
        break
      case 'gestion_pedidoGas':
        return 'pedido_gas'
        break
      case 'gestion_solicitudTarjeta':
        return 'solicitud_tarjetas_ptv'
        break
      case 'gestion_solicitud_tarjeta_starressa':
      case 'gestion_solicitud_tarjeta_starressa_eurotraffic':
      case 'gestion_solicitud_tarjeta_starressa_flota':
      case 'gestion_solicitud_tarjeta_starressa_gasoleoBonificado':
      case 'gestion_solicitud_tarjeta_starressa_go':
        return 'solicitud_tarjetas_starressa'
        break
      case 'abrir desplegable':
      case 'menu superior':
      case 'calcular':
      case 'gestion_consultaFacturas':
      case 'filtrar':
      case 'filtro':
      case 'buscador':
      case 'menu hamburguesa_abrir':
      case 'menu hamburguesa_cerrar':
      case 'menu superior_hamburguesa':
      case 'ver modelo':
      case 'Selector de idioma Abrir':
      case 'contenido relacionado':
      case 'seleccion tipo de certificado':
      case 'cintillo azul':
      case 'actividades':
      case 'modulo compartir':
      case 'contenidos especificos de la seccion':
        return 'navigation'
        break
      case 'menu superior_icono':
      case 'menu hamburguesa_tercer nivel':
      case 'cintillo rojo':
      case 'menu hamburguesa:primer nivel':
      case 'menu hamburguesa:tercer nivel':
      case 'menu hamburguesa:cuarto nivel':
      case 'menu hamburguesa:segundo nivel':
      case 'menu hamburguesa:contacto':
      case 'menu hamburguesa:RRSS':
      case 'footer_correo electronico':
      case 'menu superior_ar':
      case 'menu ar_categoria':
      case 'menu superior_segmento':
      case 'menu hamburguesa_sitesexternos':
      case 'menu superior_subcategoria1':
      case 'menu superior_utilities':
      case 'menu superior_categoria':
      case 'menu superior_logo':
      case 'menu superior_subcategoria2':
      case 'menu ar_subcategoria1':
      case 'menu ar_subcategoria2':
        return 'select_content'
        break
      case 'video':
        return 'video'
        break
    }
  }
}


//lógica para recoger los eventos de rebote, aceptación y rechazo de cookies
function onPopupVisible() {
    console.log('Pop-up detectado.');

    // Aquí puedes agregar más lógica, como escuchar eventos de clic en los botones del pop-up
    document.querySelector(popupSelector + ' #button1').addEventListener('click', function() {
        console.log('Botón 1 clicado');
    });

    document.querySelector(popupSelector + ' #button2').addEventListener('click', function() {
        console.log('Botón 2 clicado');
    });
}


var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
            var popup = document.querySelector(popupSelector);
            if (popup && popup.style.display !== 'none') {
                onPopupVisible();
            }
        }
    });
})

var popupSelector = 'cp-cookie-policy-dialog';

window.onbeforeunload = function() {
    var popup = document.getElementById(popupSelector);
    if (popup && popup.style.display !== 'none') {
        // Lanzar evento si el pop-up está visible y el usuario intenta salir
        console.log('El usuario salió sin interactuar con el pop-up');
    }
};
