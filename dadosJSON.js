const rotaObjeto = "";
const objetoResposta = "";

fetch(rotaObjeto)
    .then(response =>{
        // Verifica se a resposta foi bem-sucedida (status 2xx)
        if (!response.ok){
             throw new Error(`Erro HTTP! Status: ${response.status}`);
        }
        return response.json(); // Converte a resposta para JSON
    })
    .then(data => {
        // Aqui 'data' é a lista de produtos do seu backend Flask
        if (data.length === 0) {
            objetoResposta = 'Nenhum produto encontrado.';
        }
        else{
            console.log('Objeto da Resposta:', data);
            objetoResposta = data;
        }
    })
    .catch(error => {
        // Captura e lida com erros de rede ou de parsing JSON
        console.error('Erro ao carregar produtos:', error);
        console.error(`Falha ao carregar produtos: ${error.message}`);
    });

console.log(`Objeto carregado: ${objetoResposta}`);