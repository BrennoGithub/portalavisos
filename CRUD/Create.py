import datetime #Modulo padrão Python para datas e horas

#Função para chamar data atual
def returnData():
    data_hora = datetime.datetime.now() #Objeto com data e hora atual
    data = data_hora.strftime("%d/%m/%y")
    return data

#Função para chamar a hora atual
def returnHora():
    data_hora = datetime.datetime.now() #Objeto com data e hora atual
    hora = data_hora.strftime("%H:%M")
    return hora

#Funções CREATE
def criaAviso(lista_id_informativos, lista_informativos, data_atual, hora_atual, assunto, texto):
    id = 1
    while id in lista_id_informativos:
        id += 1

    lista_id_informativos.append(id)
    lista_informativos["avisos"].append({
        "ID_aviso": id,
        "data": data_atual,
        "hora": hora_atual,
        "assunto": assunto,
        "texto": texto
    })
   
def criaAvaliacao(lista_id_informativos, lista_informativos, materia, assunto, data_avaliacao, hora_avaliacao, descricao):
    id = 1
    while id in lista_id_informativos:
        id += 1
    
    lista_id_informativos.append(id)
    lista_informativos["avaliacoes"].append({
        "ID_avaliacao": id,
        "materia": materia,
        "assunto": assunto,
        "data_avaliacao": data_avaliacao,
        "hora_avaliacao": hora_avaliacao,
        "descricao": descricao
    })

def criaEvento(lista_id_informativos, lista_informativos,  nome_evento, data_evento, hora_evento, descricao):
    id = 1
    while id in lista_id_informativos:
        id += 1
    
    lista_id_informativos.append(id)
    lista_informativos["eventos"].append({
        "ID_evento": id,
        "nome": nome_evento,
        "data_evento": data_evento,
        "hora_evento": hora_evento,
        "descricao": descricao
    })

def criaMaterial(lista_id_informativos, lista_informativos,  tipo_material, material, materia, assunto, descricao):
    id = 1
    while id in lista_id_informativos:
        id += 1
    
    lista_id_informativos.append(id)
    lista_informativos["materiais"].append({
        "ID_material": id,
        "tipo_material": tipo_material,
        "material": material,
        "materia": materia,
        "assunto": assunto,
        "descricao": descricao
    })