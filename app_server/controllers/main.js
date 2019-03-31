module.exports.index = function (req, res) {
    res.render('index', { title: 'express' });
}

module.exports.Home = function(req, res){
    res.render('Home', {title:'Home', nombre: 'Elias', apellido: 'Cali', ballenas:[{especie: 'Azul', peso: '10toneladas'}]}); /*Esto es el controlador y accede a las variables. PUEDO PONER ARREGLO DE OBJETOS de mis views en este caso es el Home*/
}

module.exports.About_us = function(req, res){
    res.render('About_us', {title:'About_us'});
}

module.exports.News = function(req, res){
    res.render('News', {title:'News'});
}