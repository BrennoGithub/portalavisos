// Organizar informativos em ordem cronologica

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