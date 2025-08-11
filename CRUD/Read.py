from flask import jsonify

#Funções READ
def exibiInformativo(tipo_informativos, lista_informativos, ID_turma):
    informativos = []
    lista_do_tipo = []

    if tipo_informativos in lista_informativos:
        lista_do_tipo = lista_informativos[tipo_informativos] 
        
    for iten in lista_do_tipo:
        if int(iten["ID_turma"]) == int(ID_turma) and "ID_turma" in iten:
            informativos.append(iten)

    if len(informativos) == 0:
        return jsonify({"mensagemServidor": "404 - Não foi encontrado informativo desse tipo."})
    
    else:
        return jsonify(informativos)
    

def exibiTodosInformativos(lista_informativos, ID_turma):
    informativos = {
        "avisos":[],
        "avaliacoes":[],
        "materiais":[],
        "eventos":[]
    }
    lista_do_tipo = ["avisos", "avaliacoes", "materiais", "eventos"]

    for iten in lista_do_tipo:
        for objeto in lista_informativos[iten]:
            if int(objeto["ID_turma"]) == int(ID_turma) and "ID_turma" in objeto:
                informativos[iten].append(objeto)

    if len(informativos) == 0:
        return jsonify({"mensagemServidor": "404 - Não foi encontrado informativo desse tipo."})
    
    else:
        return jsonify(informativos)
