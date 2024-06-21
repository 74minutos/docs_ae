function(){
  //here we're going to have all the logic to translate ua events to ga4 for GTM container GTM-5SVS6WN
  //regex that we're trying to find
  var re = new RegExp("^abrir$|^cerrar$|^desplegar$|^buscar$|^mostrar$");
  var error_form_regex = new RegExp("^error formulario.*")

  //first logic: to navigation
  if({{DL_eventAction}} === 'menu hamburguesa' | {{DL_eventAction}} === 'menu superior_buscar' | {{DL_eventAction}} === 'menu superior' && re.test({{DL_eventLabel}})){
    return 'navigation'
  }
  else if(error_form_regex.test({{DL_eventAction}})){
    return 'contact_ko'
  } else {
    switch ({{DL_eventAction}}){
      case 'descargar':
      return 'download'
      break
      case 'abrir desplegable':
      case 'play':
      case 'clic boton':
      case 'scroll lateral':
      case 'clic modulo':
      case 'clic banner':
      case 'clic enlace':
      case 'clic pestaña':
      case 'clic texto':
      case 'clic imagen':
      case 'modulo de mapa:mapa ficha pais':
      case 'modulo de mapa:click en pais':
      case 'modulo de mapa:controles del mapa':
      case 'cerrar desplegable':
      case 'clic en contenidos específicos de la seccion':
      case 'clic card':
      case 'clic en contenidos de lista':
      case 'clic desplegable':
      case 'clic_boton':
      case 'clic fecha':
      case 'clic opcion desplegable':
      case 'clic tipo de certificado':
      case 'clic icono':
      case 'modulo compartir':
      case 'scroll_lateral':
      case 'clic empresa':
      case 'seleccion tipo de certificado':
      case 'clic video playlist':
      case 'modulo de mapa:filtro de actividades mapa':
      case 'clic logo':
      case 'clic logo ':
      case 'seleccion empresa':
      case 'Selector de idioma Abrir':
      case 'pagina de error':
      case 'desplegable todas las notas':
      case 'cintillo azul':
      case 'actividades':
      case 'contenidos especificos de la seccion':
        return 'navigation';
        break
      case 'menu superior_icono':
      case 'menu superior_subcategoria1':
      case 'menu superior_utilities':
      case 'footer:segundo nivel':
      case 'menu superior_categoria':
      case 'menu hamburguesa_categoria':
      case 'footer:primer nivel':
      case 'menu hamburguesa:primer nivel':
      case 'menu hamburguesa_utilities':
      case 'menu superior_idioma':
      case 'menu hamburguesa_subcategoria1':
      case 'menu superior_logo':
      case 'menu superior':
      case 'banner app':
      case 'breadcrumb':
      case 'breadCrumb':
      case 'menu hamburguesa_idioma':
      case 'footer:RRSS':
        return 'select_content'
        break
      case 'modulo compartir:red social':
        return 'share'
        break
      case 'formulario enviado con exito':
        return 'contact'
        break
      case 'video_experiencias':
      case 'video':
        return 'video'
        break
    }
  }
}
