function(){
  //here we're going to have all the logic to translate ua events to ga4 for GTM container GTM-5SVS6WN
  //regex that we're trying to find
  var buscador = new RegExp("^envio de busqueda");
  var navegacion_content =
   new RegExp("^click en Yo, empleado$|^click en En el trabajo$|^click en Employee experience$|^click en At work$|^click en Infórmate$|^click en Cultura Cepsa$|^click en Learn more$|^click en Cepsa culture$|^click en Tutoriales$|^click en Tutorials$ ")
  var navegacion_file = new RegExp(".*descarga de archivo.*")

  //first logic: to navigation
  if({{Category_generic}} === 'Buscador' && buscador.test({{Action_generic}})
  ) {
    return 'search'
  }
  else if({{Category_generic}} === 'Navegacion' && navegacion_content.test({{Action_generic}})
  ) {
    return 'select_content'
  }
  else if({{Category_generic}} === 'Navegacion' && navegacion_file.test({{Action_generic}})
  ) {
    return 'file_download'
  }
  else if({{Action_generic}} === 'Pause'
  ) {
    return 'video_pause'
  }
  else if({{Action_generic}} === 'Start playing'
  ) {
    return 'video_start'
  }
  else if({{Action_generic}} === 'Reached 25%' || {{Action_generic}} === 'Reached 50%' || {{Action_generic}} === 'Reached 75%'
  ) {
    return 'video_progress'
  }
  else if({{Action_generic}} === 'Reached 100%'
  ) {
    return 'video_complete'
  }
  else if({{Category_generic}} === 'Buscador'
  ) {
      return 'navigation'
  }
  else if({{Category_generic}} === 'Aplicacion'
  ) {
      return 'select_content'
  }
  else if({{Category_generic}} === 'Descarga de archivos'
  ) {
      return 'file_download'
  }
  else if({{Category_generic}} === 'Interes'
  ) {
      return 'navigation'
  }
  else if({{Category_generic}} === 'Navegacion|Aplicacion'
  ) {
      return 'navigation'
  }
  else if({{Category_generic}} === 'Scroll'
  ) {
      return 'navigation'
  }
  else if({{Category_generic}} === 'Navegacion'
  ) {
      return 'navigation'
  }
}
