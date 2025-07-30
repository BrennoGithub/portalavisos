//Função de requisição HTTP de JSONs
export function requisiçãoHTTP(URL){
    fetch(URL)
        .then(response =>{
            // Verifica se a resposta foi bem-sucedida (status 2xx)
            if (!response.ok){
                throw new Error(`Erro HTTP! Status: ${response.status}`);
            }
            return response.json(); // Converte a resposta para JSON
        })
        .then(data => {
            // Aqui 'data' é a lista de produtos do seu backend Flask
            if (data.includes("mensagem")) {
                return data["mensagem"];
            }
            else{
                console.log('Objeto da Resposta:', data);
                return data;
            }
        })
        .catch(error => {
            // Captura e lida com erros de rede ou de parsing JSON
            return `Erro ao carregar produtos:', ${error}
            \nFalha ao carregar produtos: ${error.message}`
        });
}


