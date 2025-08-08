//Função de requisição HTTP de JSONs

//async => Sinaliza função assíncrona, ou seja, leva tempo para serem exercutadas
//await => Pausa a exercução até a Promise ser resolvida.

export async function requisicaoHTTP(URL){
    try { 
        //Bloco de código que será exercutado e tratado a requisição.
        const resposta = await fetch(URL);
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
}

