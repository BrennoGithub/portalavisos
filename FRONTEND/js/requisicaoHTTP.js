//Funções de requisições HTTP de JSONs

//Metodo GET
export async function GET(rota){ 
    try { 
        let resposta = await fetch(rota, {credentials: 'include'}); // Permite que o navegador pegue cookies de sessão
        const dados = await resposta.json();
        if("mensagemServidor" in dados){
            return dados["mensagemServidor"];
        }else{
            return dados;
        }

    } catch (erro) {
        console.error("Erro na busca de dados", erro)
        return {"mensagemServidor": `Erro na busca de dados: ${erro.message || erro}`};
    }
};

//Metodo POST
export async function POST(rota, objeto) {
    try {
        const objetoJSON = JSON.stringify(objeto);
        let resposta = await fetch(rota, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: objetoJSON,
            credentials: 'include' // Permite que o navegador envie cookies de sessão
        })
        resposta = await resposta.json();
        return resposta
    }
    catch {
        console.error("Erro no envio de dados", erro)
        return {"mensagemServidor": `Erro no envio de dados: ${erro.message || erro}`}
    }
};

//Metodo PUT
export async function PUT(rotaEspecifica, objeto) {
    try{
        const objetoJSON = JSON.stringify(objeto);
        let resposta = await fetch(rotaEspecifica, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: objetoJSON,
            credentials: 'include' // Permite que o navegador envie cookies de sessão
        })
        resposta = await resposta.json();
        return resposta
    }
    catch{
        console.error("Erro na atualização de dados", erro)
        return {"mensagemServidor": `Erro na atualização de dados: ${erro.message || erro}`};
    }
};

//Metedo DELETE
export async function DELETE(rotaEspecifica) {
    try{
        let resposta = await fetch(rotaEspecifica, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include' // Permite que o navegador envie cookies de sessão
        })
        resposta = await resposta.json();
        return resposta
    }
    catch{
        console.error("Erro na excluição de dados", erro)
        return {"mensagemServidor": `Erro na excluição de dados: ${erro.message || erro}`};
    }
};