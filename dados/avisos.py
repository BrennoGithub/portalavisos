import datetime #Modulo padrão Python para datas e horas

data_hora = datetime.datetime.now() #Objeto com data e hora atual

#lista de ids de avisos
lista_id_avisos = []
lista_avisos = [
    {
    'ID': 'id',
    'data': 'DD/MM/AA',
    'hora': 'HH:MM',
    'tipo': 'tipo_aviso',
    'assunto': 'assunto',
    'texto': 'texto'}
]

avaliacao = {
    'ID': 'id',
    'materia': 'matematica',
    'tipo': 'prova',
    'assunto': 'adição',
    'data': '23/09',
    'hora': '12:00',
    'descrição': ''
}

material = {
    'ID': 'id',
    'tipo': 'link',
    'assunto': 'matematica',
    'descrição': ''
}

#Função de criação de aviso
def criaAviso(lista_avisos, lista_id_avisos, data_atual, hora_atual, tipo_aviso, assunto, texto):
    id = 1
    if id in lista_id_avisos:
        id += 1

    lista_id_avisos.append(id)
    lista_avisos.append({
        'ID': id,
        'data': data_atual,
        'hora': hora_atual,
        'tipo': tipo_aviso,
        'assunto': assunto,
        'texto': texto
    })

def exibiAviso(lista_avisos):
    avisos = ''
    for iten in lista_avisos:
        avisos = f"""<div class="estilo_aviso">
                     <div class="estilo_data">{iten['data']} {iten['hora']}</div>
                     <div class="estilo_assunto">{iten['assunto']}</div>
                     <div class="estilo_texto">{iten['texto']}</div>
                     </div>"""+avisos
    return avisos
 