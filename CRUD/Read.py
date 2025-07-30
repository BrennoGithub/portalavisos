#Funções READ
def exibiInformativo(tipo_informativos, lista_informativos, ID_turma):
    informativos = []
    lista_do_tipo = lista_informativos.get(tipo_informativos, []) 
    for iten in lista_do_tipo:
        if int(iten["ID_turma"]) == int(ID_turma) and "ID_turma" in iten:
            informativos.append(iten)

    if len(informativos) == 0:
        return "Não há informativos desse tipo cadastrados."
    else:
        return informativos

"""
@app.route("/submit_aviso", methods=["POST", "DELETE", "PUT"]) # Corrigida a lista de métodos
def CRUD_informativo():
    if request.method == "POST":
        # ... (sua lógica para criar avisos, avaliações, etc.) ...

        # Após o POST, geralmente redirecionamos para a página onde o usuário verá o resultado
        # Se for para a tela principal, você precisa saber a matrícula do usuário logado.
        # Por enquanto, se você quer redirecionar para o form_avisos, use:
        return redirect(url_for("form_avisos")) 

    elif request.method == "DELETE": 
        # ... lógica para DELETE ...
        return "Requisição DELETE recebida com sucesso", 204

    elif request.method == "PUT": 
        # ... lógica para PUT ...
        return "Requisição PUT recebida com sucesso", 200

    # Este é um fallback caso a requisição não seja POST, DELETE ou PUT
    # Ex: alguém tenta acessar /submit_aviso com um método GET
    return redirect(url_for("index")) # Redireciona para a página inicial, por exemplo
"""
 