
const elementoExibicao = document.querySelector('.exibicaoAvisos');

if (elementoExibicao) {
    let texto = elementoExibicao.textContent;
    texto = texto.replaceAll("''", '""');
    texto = texto.replaceAll("'", '"');

    const lista_avisos = JSON.parse(texto);
    let avisos = ``;
    for(const x of lista_avisos){
        avisos = `<div class="estilo_aviso">
                    <div class="estilo_data">${x['data']} ${x['hora']}</div>
                    <div class="estilo_assunto">${String(x['assunto'])}</div>
                    <div class="estilo_texto">${String(x['texto'])}</div>
                 </div>`+avisos
    }
    elementoExibicao.innerHTML = avisos;
}