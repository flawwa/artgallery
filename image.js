const imagenes = [
    "JANHERNANDEZ.JPG",
    "TWODRAGONINCLOUD.JPG",
    "MARTINLEWIS.jpg",
    "GIUSEPPEPENONE.jpg"

  ];
  
  let contador = 0;
  
  const cambiarImagen = function() {
    document.querySelector("#miImagen").src = imagenes[contador];
    contador = (contador + 1) % imagenes.length;
  };
  
  setInterval(cambiarImagen, 2000);
  