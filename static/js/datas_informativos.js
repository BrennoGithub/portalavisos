// Organizar informativos em ordem cronologica
export async function ordenarInformativos(informativos, tipoData) {
    return informativos.sort((a, b) => new Date(a[tipoData]) - new Date(b[tipoData]));
  }

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

///formata as datas dos formularios
export function formataDataForm(tipo, data){
    let formatacao = ``;
    switch (tipo){
        case "data":
            let dia = Number(data.getDay()) + 1;
            if(Number(dia) < 10){ dia = "0"+dia; }
            let mes = Number(data.getMonth()) + 1;
            if(Number(mes) < 10){ mes = "0"+mes; }
            const ano = data.getFullYear();
            formatacao = `${ano}-${mes}-${dia}`;
            break;
        case "hora":
            const hora = data.getHours();
            const minuto = data.getMinutes();
            formatacao = `${hora}:${minuto}`;
            break;
        default:
            formatacao = data;
            break;
    }
    return formatacao;
}