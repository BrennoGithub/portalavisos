#lista de ids de avisos
#ANALISAR COMO CONVERTER PARA O FORMATO SQL NO MYSQL
lista_id_informativos = [1, 2, 3, 4]

lista_informativos = [
    {"ID_turma": 1, "ID_informativo": 1, "assunto":"Aviso", 
     "mensagem": "texto", "anexo": "ARQUIVO", "dataCriacao": "2025-12-07 HH:MM:SS"},

    {"ID_turma": 1, "ID_informativo": 2, "assunto":"Avaliação", 
     "tipoAvaliacao": "prova", "materia": "matematica", "assuntoAvaliacao": "adição",
     "dataAvaliacao": "2025-12-07 HH:MM:SS", "mensagem": "texto", 
     "anexo": "ARQUIVO", "dataCriacao": "2025-12-07 HH:MM:SS"},

    {"ID_turma": 1, "ID_informativo": 3, "assunto":"Evento",
     "nomeEvento": "festa da uva", "dataInicial_Evento": "2025-12-07", "dataFinal_Evento": "2025-12-07", 
     "horaInicial_Evento": "HH:MM:SS", "horaFinal_Evento": "HH:MM:SS",
     "mensagem": "texto", "anexo": "ARQUIVO", "dataCriacao": "2025-12-07 HH:MM:SS"},

    {"ID_turma": 1, "ID_informativo": 4, "assunto":"Material Didatico", "materia": "matematica", "assuntoMaterial": "matematica",
     "mensagem": "texto", "anexo": "ARQUIVO", "dataCriacao": "2025-12-07 HH:MM:SS"},
]

'''
for info in lista_informativos:
    match info["assunto"]:
        case "Avaliação":
            print(f'INSERT INTO informativos(ID_informativo, assunto, mensagem, dataCriacao) VALUES({info["ID_informativo"]}, "{info["assunto"]}", "{info["mensagem"]}", "{info["dataCriacao"]}");')
            print(f'INSERT INTO turma_informativo(turma, informativo) VALUES({info["ID_turma"]}, {info["ID_informativo"]});')
            print(f'INSERT INTO dados_avaliacoes(tipoAvaliacao, assuntoAvaliacao, dataAvaliacao, materia, informativo) VALUES("{info["tipoAvaliacao"]}", "{info["assuntoAvaliacao"]}", "{info["dataAvaliacao"]}", "{info["materia"]}", {info["ID_informativo"]});')
        case "Evento":
            print(f'INSERT INTO informativos(ID_informativo, assunto, mensagem, dataCriacao) VALUES({info["ID_informativo"]}, "{info["assunto"]}", "{info["mensagem"]}", "{info["dataCriacao"]}");')
            print(f'INSERT INTO turma_informativo(turma, informativo) VALUES({info["ID_turma"]}, {info["ID_informativo"]});')
            print(f'INSERT INTO dados_eventos(nomeEvento, dataInicial_Evento, dataFinal_Evento, horaInicial_Evento, horaFinal_Evento, informativo) VALUES("{info["nomeEvento"]}", "{info["dataInicial_Evento"]}", "{info["dataFinal_Evento"]}", "{info["horaInicial_Evento"]}", "{info["horaFinal_Evento"]}", {info["ID_informativo"]});')
        case "Material Didatico":
            print(f'INSERT INTO informativos(ID_informativo, assunto, mensagem, dataCriacao) VALUES({info["ID_informativo"]}, "{info["assunto"]}", "{info["mensagem"]}", "{info["dataCriacao"]}");')
            print(f'INSERT INTO turma_informativo(turma, materia, informativo) VALUES({info["ID_turma"]}, {info["ID_informativo"]});')
            print(f'INSERT INTO dados_materiais(assuntoMaterial, materia, informativo) VALUES("{info["assuntoMaterial"]}", "{info["materia"]}", {info["ID_informativo"]});')
        case _:
            print(f'INSERT INTO informativos(ID_informativo, assunto, mensagem, dataCriacao) VALUES({info["ID_informativo"]}, "{info["assunto"]}", "{info["mensagem"]}", "{info["dataCriacao"]}");')
            print(f'INSERT INTO turma_informativo(turma, informativo) VALUES({info["ID_turma"]}, {info["ID_informativo"]});')
'''