//Função de requisição HTTP de JSONs

//async => Sinaliza função assíncrona, ou seja, leva tempo para serem exercutadas
//await => Pausa a exercução até a Promise ser resolvida.

export async function requisiçãoHTTP(URL){
    try { 
        //Bloco de código que será exercutado e tratado a requisição.
        const resposta = await fetch(URL);
        const dados = await resposta.json();
        if(dados.includes("mensagem")){
            return dados["mensagem"]
        }else{
            return dados;
        }

    } catch (erro) {
        //Bloco de código que trata os erros da requisição
        console.error("Erro na busca de dados", erro)
        return "Erro na busca de dados";
    }
}

