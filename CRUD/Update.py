#Função UPDATE
def atualizaInformativo(ID, lista_informativos, lista_id_informativos, tipoInformativo, objetoInformativo):
    for item in lista_informativos:
        if tipoInformativo == "avisos":
            if item["ID_aviso"] == ID and ID in lista_id_informativos:
                item["assunto"] = objetoInformativo["assunto"]
                item["texto"] == objetoInformativo["texto"]

        elif tipoInformativo == "avaliacoes":
            if item["ID_avaliacao"] == ID and ID in lista_id_informativos:
                item["materia"] == objetoInformativo["materia"]
                item["assunto"] == objetoInformativo["assunto"]
                item["data_avaliacao"] == objetoInformativo["data_avaliacao"]
                item["hora_avaliacao"] == objetoInformativo["hora_avaliacao"]
                item["descricao"] == objetoInformativo["descricao"]

        elif tipoInformativo == "eventos":
            if item["ID_evento"] == ID and ID in lista_id_informativos:
                item["nome"] == objetoInformativo["nome"]
                item["data_evento"] == objetoInformativo["data_evento"]
                item["hora_evento"] == objetoInformativo["hora_evento"]
                item["descricao"] == objetoInformativo["descricao"]

        elif tipoInformativo == "materiais":
            if item["ID_material"] == ID and ID in lista_id_informativos:
                item["material"] == objetoInformativo["material"]
                item["materia"] == objetoInformativo["materia"]
                item["assunto"] == objetoInformativo["assunto"]
                item["descricao"] == objetoInformativo["descricao"]
                #Por enquanto atualizaMaterial não atualiza tipo_material
