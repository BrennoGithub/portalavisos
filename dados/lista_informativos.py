#lista de ids de avisos
#ANALISAR COMO CONVERTER PARA O FORMATO SQL NO MYSQL
lista_id_informativos = [1, 2, 3, 4]

lista_informativos = [
    {"ID_turma": 1, "ID_informativo": 1, "assunto":"Aviso", 
     "mensagem": "texto", "anexo": "ARQUIVO", "dataInformativo": "2025-12-07", "horaInformativo": "HH:MM"},

    {"ID_turma": 1, "ID_informativo": 2, "assunto":"Avaliação", 
     "tipoAvaliacao": "prova", "materia": "matematica", "assuntoAvaliacao": "adição",
     "dataAvaliacao": "2025-12-07", "horaAvaliacao": "HH:MM", "mensagem": "texto", 
     "anexo": "ARQUIVO", "dataInformativo": "2025-12-07", "horaInformativo": "HH:MM"},

    {"ID_turma": 1, "ID_informativo": 3, "assunto":"Evento",
     "nomeEvento": "festa da uva", "dataInicial_Evento": "2025-12-07", "dataFinal_Evento": "2025-12-07", 
     "horaInicial_Evento": "HH:MM", "horaFinal_Evento": "HH:MM",
     "mensagem": "texto", "anexo": "ARQUIVO", "dataInformativo": "2025-12-07", "horaInformativo": "HH:MM"},

    {"ID_turma": 1, "ID_informativo": 4, "assunto":"Material Didatico", "materia": "matematica", "assuntoMaterial": "matematica",
     "mensagem": "texto", "anexo": "ARQUIVO", "dataInformativo": "2025-12-07", "horaInformativo": "HH:MM"},
]

for info in lista_informativos:
    match info["assunto"]:
        case "Avaliação":
            print(f'INSERT INTO informativos(assunto, mensagem, dataCriacao) VALUES({info["assunto"]}, {info["mensagem"]}, {info["dataInformativo"]})')
            print("Avaliação")
        case "Evento":
            print("Evento")
        case "Material Didatico":
            print("Material Didatico")
        case _:
            print("Aviso")
