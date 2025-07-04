from dados.lista_turmas import lista_turmas
from dados.lista_informativos import *

#Função de exibição de aviso
def exibiAviso(tipo_informativos, lista_informativos):
    informativos = []
    for turma in lista_turmas:
        for iten in turma['informativos']:
            if iten['tipo'] == tipo_informativos:
                informativos.append(iten)
    
    if len(informativos) == 0:
        informativos = "Não há informativos."
    return informativos
 