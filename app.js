const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


let getInfo = async(direccion) => {
    try {

        let coord = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coord.lat, coord.lng);

        return `El clima en ${coord.direccion} es de ${temp}`;

    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }


};


getInfo(argv.direccion).then(resp => console.log(resp))
    .catch(e => console.log(e));