// Organizar informativos
export function ordenarInformativos(informativos, tipoData) {
    return informativos.sort((a, b) => new Date(a[tipoData]) - new Date(b[tipoData]));
  }

//ANALISAR A FUNÇÃO PARA FAZER ELE FORMATAR TODO TIPO DE DATA
export function formataData(informativo, tipoData){
    informativo.forEach( info => {
        data = info[tipoData];
        data = data.split("-");
        dia = data[2];
        mes = data[1];
        ano = data[0];
        info[tipoData] = `${dia}/${mes}/${ano}`;
    });
};