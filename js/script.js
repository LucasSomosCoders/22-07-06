var persona = new Object();
persona.colorPelo = 'rubio';
persona.barba = 'larga';
persona.sexo = 'femenino';
persona.fechaNac = 1980;
persona.caminar = function(){
  console.log('caminando');
}


var camion = {
  color: 'red',
  anio: 1950,
  marca: 'Éscania',
  modelo: '155',
  avanzar: function() {
    console.log('Avanzando....')
  }
};

camion['cubiertas'] = 4;