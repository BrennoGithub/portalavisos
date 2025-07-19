from dados.lista_turmas import lista_turmas
from dados.lista_informativos import *

#Funções READ
def exibiAviso(tipo_informativos, lista_turmas):
    informativos = []
    for iten in lista_turmas:
        if tipo_informativos == "aviso":
            informativos = iten["informativos"]["avisos"]
            if len(iten["informativos"]["avisos"]) == 0:
                informativos = "Não há informativos desse tipo registrado."
        
        elif tipo_informativos == "avaliacao":
            informativos = iten["informativos"]["avaliacoes"]
            if len(iten["informativos"]["avaliacoes"]) == 0:
                informativos = "Não há informativos desse tipo registrado."
        
        elif tipo_informativos == "material":
            informativos = iten["informativos"]["materiais"]
            if len(iten["informativos"]["materiais"]) == 0:
                informativos = "Não há informativos desse tipo registrado."
        
        elif tipo_informativos == "evento":
            informativos = iten["informativos"]["eventos"]
            if len(iten["informativos"]["eventos"]) == 0:
                informativos = "Não há informativos desse tipo registrado."

    return informativos
 