//Funções de requisições HTTP de JSONs

//async => Sinaliza função assíncrona, ou seja, leva tempo para serem exercutadas
//await => Pausa a exercução até a Promise ser resolvida.

//Metodo GET
export async function GET(rota){ 
    try { 
        //Bloco de código que será exercutado e tratado a requisição.
        let resposta = await fetch(rota);
        //ADICIONAR E MELHORAR TRATAMENTO DE ERROS.
        if(!resposta.ok){
            resposta = {"mensagemServidor": "404 - Não encontrado."}
            return resposta["mensagemServidor"];
        }
        const dados = await resposta.json();
        if("mensagemServidor" in dados){
            return dados["mensagemServidor"];
        }else{
            return dados;
        }

    } catch (erro) {
        //Bloco de código que trata os erros da requisição
        console.error("Erro na busca de dados", erro)
        return `Erro na busca de dados: ${erro.message || erro}`;
    }
};

//Metodo POST
export async function POST(rota, objeto) {
    try {
        const objetoJSON = JSON.stringify(objeto);
        let resposta = await fetch(rota, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: objetoJSON
        })
        resposta = await resposta.json();
        console.log(objeto);
    }
    catch {
        console.error("Erro no envio de dados", erro)
        return `Erro no envio de dados: ${erro.message || erro}`;
    }
};

//Metodo PUT
export async function PUT(rotaEspecifica, objeto) { //PUT e DELETE possuiem uma rota que espefica o objeto a ser atualizado ou deletado.
    try{
        const objetoJSON = JSON.stringify(objeto);
        let resposta = await fetch(rotaEspecifica, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: objetoJSON
        })
        resposta = await resposta.json();
        console.log(objeto);
    }
    catch{
        console.error("Erro na atualização de dados", erro)
        return `Erro na atualização de dados: ${erro.message || erro}`;
    }
};

//Metedo DELETE
export async function DELETE(rotaEspecifica) {
    try{
        let resposta = await fetch(rotaEspecifica, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
        resposta = await resposta.json();
        console.log(objeto);
    }
    catch{
        console.error("Erro na excluição de dados", erro)
        return `Erro na excluição de dados: ${erro.message || erro}`;
    }
};