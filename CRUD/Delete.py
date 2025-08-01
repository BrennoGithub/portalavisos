#Funções DELETE
def deletaInformativo(ID, tipoInformativo, lista_informativos, lista_id_informativos):
    for iten in range(1, len(lista_informativos)+1):
        if tipoInformativo == "avisos":
            if lista_informativos[-iten]["ID_aviso"] == ID and ID in lista_id_informativos:
                del lista_informativos[-iten]

        elif tipoInformativo == "avaliacoes":
            if lista_informativos[-iten]["ID_avaliacao"] == ID and ID in lista_id_informativos:
                del lista_informativos[-iten]

        elif tipoInformativo == "eventos":
            if lista_informativos[-iten]["ID_evento"] == ID and ID in lista_id_informativos:
                del lista_informativos[-iten]

        elif tipoInformativo == "materiais":
            if lista_informativos[-iten]["ID_material"] == ID and ID in lista_id_informativos:
                del lista_informativos[-iten]