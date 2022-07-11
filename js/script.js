let persona = new Object();
persona.colorPelo = 'rubio';
persona.barba = 'larga';
persona.sexo = 'femenino';
persona.edad = 25;
persona.caminar = function(){
  console.log('caminando.....');
}


let camion = {
  color: 'red',
  anio: 1950,
  marca: 'Éscania',
  modelo: '155',
  avanzar: function() {
    console.log('Avanzando....')
  }
};

camion['cubiertas'] = 4;

