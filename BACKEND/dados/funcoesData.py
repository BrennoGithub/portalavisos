import datetime #Modulo padrão Python para datas e horas

#Função para chamar data atual
def return_DataAtual(formato):
    data_hora = datetime.datetime.now() #Objeto com data e hora atual
    match formato:
        case "DD/MM/AAAA":
            return data_hora.strftime("%y-%m-%d")
        case "HH:MM":
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