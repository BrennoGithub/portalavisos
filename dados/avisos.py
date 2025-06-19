#lista de ids de avisos
lista_id_avisos = []
lista_avisos = [
    {
    'ID': 'id',
    'tipo': 'tipo_aviso',
    'assunto': 'assunto',
    'texto': 'texto'}
]

#Função de criação de aviso
def criaAviso(lista_avisos, lista_id_avisos, tipo_aviso, assunto, texto):
    id = 1
    if id in lista_id_avisos:
        id += 1

    lista_id_avisos.append(id)
    lista_avisos.append({
        'ID': id,
        'tipo': tipo_aviso,
        'assunto': assunto,
        'texto': texto
    })

def exibiAviso(lista_avisos):
    avisos = ''
    for iten in lista_avisos:
        avisos = avisos+f"""<div class="estilo_aviso">
                        <div class="estilo_data">DD/MM/AAAA<br>HH:MM:SS</div>
                        <div class="estilo_assunto">{iten['assunto']}</div>
                        <div class="estilo_texto">{iten['texto']}</div>
                        </div>"""
    return avisos
 
