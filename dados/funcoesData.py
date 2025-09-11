import datetime #Modulo padrão Python para datas e horas

#Função para chamar data atual
def return_DataAtual(tipoData):
    data_hora = datetime.datetime.now() #Objeto com data e hora atual
    #data = data_hora.strftime("%d/%m/%y")
    match tipoData:
        case "Dia":
            return data_hora.strftime("%y - %m - %d")
        case "Hora":
            return data_hora.strftime("%H:%M")
        case _:
            return data_hora

#Função para formatar data no formato brasileiro
def formataData(data):
    data = data.split("-")
    dia = data[2]
    mes = data[1]
    ano = data[0]
    return f"{dia}/{mes}/{ano}"