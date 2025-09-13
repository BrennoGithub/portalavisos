// Organizar informativos
export async function ordenarInformativos(informativos, tipoData) {
    return informativos.sort((a, b) => new Date(a[tipoData]) - new Date(b[tipoData]));
  }

//ANALISAR O QUE HÁ DE ERRADO NA FUNÇÃO PARA ELA DEMORAR PARA CARREGAR
export function formataDatas(informativo, tipoData){
    informativo.forEach( info => {
        let data = info[tipoData];
        data = data.split("-");
        let dia = data[2];
        let mes = data[1];
        let ano = data[0];
        info[tipoData] = `${dia}/${mes}/${ano}`;
    });
    return informativo;
};

export function formataUnicaData(tipoAvaliacao){
    let data = tipoAvaliacao;
    data = data.split("-");
    let dia = data[2];
    let mes = data[1];
    let ano = data[0];
    data = `${dia}/${mes}/${ano}`;
    return data;
}