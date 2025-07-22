#Funções READ
def exibiInformativo(tipo_informativos, lista_informativos, ID_turma):
    informativos = []
    if len(lista_informativos[tipo_informativos]) == 0:
        informativos = "Não há informativos desse tipo cadastrados."

    for iten in lista_informativos[tipo_informativos]:
        if iten["ID_turma"] == ID_turma:
            informativos.append(iten)
           
    return informativos
 