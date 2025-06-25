import datetime #Modulo padrão Python para datas e horas

#Função para chamar data atual
def returnData():
    data_hora = datetime.datetime.now() #Objeto com data e hora atual
    data = str(data_hora.strftime("%d/%m/%y"))
    return data

#Função para chamar a hora atual
def returnHora():
    data_hora = datetime.datetime.now() #Objeto com data e hora atual
    hora = str(data_hora.strftime("%H:%M"))
    return hora

#lista de ids de avisos
lista_id_informativos = []
lista_informativos = [
    {
    'ID': 'id',
    'tipo': 'aviso',
    'data': 'DD/MM/AA',
    'hora': 'HH:MM',
    'tipo': 'tipo_aviso',
    'assunto': 'assunto',
    'texto': 'texto'}
]

avaliacao = {
    'ID': 'id',
    'tipo': 'avaliacao',
    'materia': 'matematica',
    'assunto': 'adição',
    'data_avaliacao': '23/09/25',
    'hora_avaliacao': '12:00',
    'descricao': ''
}

material = {
    'ID': 'id',
    'tipo': 'material',
    'tipo_material': '',
    'materia': 'matematica',
    'assunto': 'matematica',
    'descrição': ''
}

evento = {
    'ID': 'id',
    'tipo': 'evento',
    'nome': '',
    'data_evento': '',
    'hora_evento': '',
    'descrição': ''
}

#Função de criação de aviso
def criaAviso(lista_informativos, lista_id_informativos, data_atual, hora_atual, tipo_aviso, assunto, texto):
    id = 1
    if id in lista_id_informativos:
        while id in lista_id_informativos:
            id += 1

    lista_id_informativos.append(id)
    lista_informativos.append({
        'ID': id,
        'data': data_atual,
        'hora': hora_atual,
        'tipo': tipo_aviso,
        'assunto': assunto,
        'texto': texto
    })
    print({
        'ID': id,
        'data': data_atual,
        'hora': hora_atual,
        'tipo': tipo_aviso,
        'assunto': assunto,
        'texto': texto
    })

#Função de exibição de aviso
def exibiAviso(lista_informativos):
    avisos = ''
    for iten in lista_informativos:
        avisos = f"""<div class="estilo_aviso">
                     <div class="estilo_data">{iten['data']} {iten['hora']}</div>
                     <div class="estilo_assunto">{iten['assunto']}</div>
                     <div class="estilo_texto">{iten['texto']}</div>
                     </div>"""+avisos
    return avisos
 