import datetime #Modulo padrão Python para datas e horas
from dados.lista_turmas import lista_turmas
from dados.lista_informativos import *

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

#Função de criação de aviso
def criaAviso(lista_id_informativos, lista_informativos, data_atual, hora_atual, tipo_aviso, assunto, texto):
    id = 1
    if id in lista_id_informativos:
        while id in lista_id_informativos:
            id += 1

    lista_id_informativos.append(id)
    lista_informativos.append({
        "ID": id,
        "tipo": tipo_aviso,
        "data": data_atual,
        "hora": hora_atual,
        "assunto": assunto,
        "texto": texto
    })
    print({
        "ID": id,
        "tipo": tipo_aviso,
        "data": data_atual,
        "hora": hora_atual,
        "assunto": assunto,
        "texto": texto
    })

#Função de exibição de aviso
def exibiAviso(tipo_informativos, lista_informativos):
    informativos = []
    for turma in lista_turmas:
        for iten in turma['informativos']:
            if iten['tipo'] == tipo_informativos:
                informativos.append(iten)
    return informativos
 