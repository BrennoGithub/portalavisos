// Organizar informativos em ordem cronologica

///formata as datas dos formularios
export function formataDataForm(tipo, dataOriginal){
    let formatacao = ``;
    switch (tipo){
        case "data":
            const data = new Date(dataOriginal)

            let dia = Number(data.getDate()) + 1;
            if(Number(dia) < 10){ dia = "0"+dia; }

            let mes = Number(data.getMonth()) + 1;
            if(Number(mes) < 10){ mes = "0"+mes; }

            const ano = data.getFullYear();

            formatacao = `${ano}-${mes}-${dia}`;
            break;
        case "hora":
            horaOriginal = dataOriginal.split(":")
            const hora = Number(horaOriginal[0]) < 10 ? `0${horaOriginal[0]}` : horaOriginal[0]
            const minuto = Number(horaOriginal[1]) < 10 ? `0${horaOriginal[1]}` : horaOriginal[1]
            formatacao = horaOriginal.length === 2 ? `${hora}:${minuto}:00` : dataOriginal
            alert(formatacao)
            break;
        default:
            formatacao = dataOriginal;
            break;
    }
    return formatacao;
}