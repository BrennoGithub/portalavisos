#Funções DELETE
def deletaAvisos(ID, lista_informativos):
    for iten in range(1, len(lista_informativos)+1):
        if lista_informativos[-iten]["tipo"] == "aviso" and lista_informativos[-iten]["ID_aviso"] == ID:
            del lista_informativos[-iten]