#Funções UPDATE
def atualizaAviso(ID, lista_informativos, assunto, texto):
    for item in lista_informativos:
        if item["tipo"] == "aviso" and item["ID_aviso"] == ID:
            item["assunto"] = assunto
            item["texto"] == texto

def atualizaAvaliacao(ID, lista_informativos, materia, assunto, data_avaliacao, hora_avaliacao, descricao):
    for item in lista_informativos:
        if item["tipo"] == "avaliacao" and item["ID_avaliacao"] == ID:
            item["materia"] == materia
            item["assunto"] == assunto
            item["data_avaliacao"] == data_avaliacao
            item["hora_avaliacao"] == hora_avaliacao
            item["descricao"] == descricao

def atualizaEvento(ID, lista_informativos, nome, data_evento, hora_evento, descricao):
    for item in lista_informativos:
        if item["tipo"] == "evento" and item["ID_evento"] == ID:
            item["nome"] == nome
            item["data_evento"] == data_evento
            item["hora_evento"] == hora_evento
            item["descricao"] == descricao

def atualizaMaterial(ID, lista_informativos, material, materia, assunto, descricao):
    for item in lista_informativos:
        if item["tipo"] == "material" and item["ID_material"] == ID:
            item["material"] == material
            item["materia"] == materia
            item["assunto"] == assunto
            item["descricao"] == descricao
#Por enquanto atualizaMaterial não atualiza tipo_material