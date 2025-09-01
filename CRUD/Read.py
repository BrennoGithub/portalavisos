from flask import jsonify

#Funções READ
def exibiInformativo(assuntoInformativo, lista_informativos, ID_turma):
    informativos = []
    for iten in lista_informativos:
        if int(iten["ID_turma"]) == int(ID_turma) and "ID_turma" in iten:
            match assuntoInformativo:
                case "avalicoes":
                    if iten["assunto"] == "Avaliação":
                        informativos.append(iten)
                case "eventos":
                    if iten["assunto"] == "Evento":
                        informativos.append(iten)
                case "materiais":
                    if iten["assunto"] == "Material Didatico":
                        informativos.append(iten)
                case _:
                    if iten["assunto"] != "Avaliação" and iten["assunto"] != "Evento" and iten["assunto"] != "Material Didatico":
                        informativos.append(iten)

    if len(informativos) == 0:
        return jsonify({"mensagemServidor": "404 - Não foi encontrado informativo desse tipo."})
    
    else:
        return jsonify(informativos)
    

def exibiTodosInformativos(lista_informativos, ID_turma):
    informativos = []
    for iten in lista_informativos:
        if int(iten["ID_turma"]) == int(ID_turma) and "ID_turma" in iten:
            informativos.append(iten)

    if len(informativos) == 0:
        return jsonify({"mensagemServidor": "404 - Não foi encontrado informativo desse tipo."})
    
    else:
        return jsonify(informativos)
