// Organizar informativos em ordem cronologica
export function FormataData(lista, tipoData) {
    lista.map(info => {
        let data = info[tipoData];
        data = data.split("-");
        let dia = data[2];
        let mes = data[1];
        let ano = data[0];
        info[tipoData] = `${dia}/${mes}/${ano}`
    })
};

///formata as datas dos formularios
export function formataDataForm(tipo, dataOriginal) {
    let formatacao = ``;
    switch (tipo) {
        case "data":
            const data = new Date(dataOriginal)

            let dia = Number(data.getDate()) + 1;
            if (Number(dia) < 10) { dia = "0" + dia; }

            let mes = Number(data.getMonth()) + 1;
            if (Number(mes) < 10) { mes = "0" + mes; }

            const ano = data.getFullYear();

            formatacao = `${ano}-${mes}-${dia}`;
            break;
        case "hora":
            const horaOriginal = dataOriginal.split(":");
            const hora = horaOriginal[0]
            const minuto = horaOriginal[1]
            formatacao = horaOriginal.length === 2 ? `${hora}:${minuto}:00` : dataOriginal
            break;
        default:
            formatacao = dataOriginal;
            break;
    }
    return formatacao;
}