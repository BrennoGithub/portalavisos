# Exibindo a Data e Hora Atual
O módulo datetime oferece a classe datetime que permite trabalhar com datas e horas. Para pegar a data e hora atual, você usa o método now().

```
import datetime

# Pega a data e hora atual do sistema
data_e_hora_atual = datetime.datetime.now()

# Exibe no terminal
print(data_e_hora_atual)
Ao rodar este código, a saída no seu terminal será algo como:

2025-06-21 11:52:01.234567
Isso mostra o ano, mês, dia, hora, minuto, segundo e microssegundos.

Formatando a Data e Hora (Personalizando a Saída)
Se você quiser exibir a data e hora em um formato mais legível ou específico (por exemplo, "21/06/2025 11:52:01"), você pode usar o método strftime(). Este método recebe uma string de formato que define como a data e hora devem ser apresentadas.
```

Aqui estão alguns dos códigos de formato mais comuns:

- **%Y:** Ano com quatro dígitos (ex: 2025)
- **%y:** Ano com dois dígitos (ex: 25)
- **%m:** Mês como um número com dois dígitos (01-12)
- **%d:** Dia do mês com dois dígitos (01-31)
- **%H:** Hora (24 horas) com dois dígitos (00-23)
- **%M:** Minuto com dois dígitos (00-59)
- **%S:** Segundo com dois dígitos (00-59)
- **%f:** Microssegundos com seis dígitos
- **%a:** Nome abreviado do dia da semana (ex: Sat)
- **%A:** Nome completo do dia da semana (ex: Saturday)
- **%b:** Nome abreviado do mês (ex: Jun)
- **%B:** Nome completo do mês (ex: June)
- **%c:** Representação de data e hora local (formato padrão do sistema)
- **%x:** Representação de data local
- **%X:** Representação de hora local

```
import datetime

data_e_hora_atual = datetime.datetime.now()

# Formato comum brasileiro: DD/MM/AAAA HH:MM:SS
formato_brasileiro = data_e_hora_atual.strftime("%d/%m/%Y %H:%M:%S")
print(f"Data e Hora (formato brasileiro): {formato_brasileiro}")

# Outro formato: Dia da semana, Dia do mês de Mês Ano - HHhMM
formato_personalizado = data_e_hora_atual.strftime("%A, %d de %B de %Y - %Hh%M")
print(f"Data e Hora (personalizado): {formato_personalizado}")

# Apenas a data
apenas_data = data_e_hora_atual.strftime("%d-%m-%Y")
print(f"Apenas a data: {apenas_data}")

# Apenas a hora
apenas_hora = data_e_hora_atual.strftime("%H:%M:%S")
print(f"Apenas a hora: {apenas_hora}")
Ao rodar este código (considerando a data de hoje, 21 de junho de 2025, 11:52:01):

Data e Hora (formato brasileiro): 21/06/2025 11:52:01
Data e Hora (personalizado): Saturday, 21 de June de 2025 - 11h52
Apenas a data: 21-06-2025
Apenas a hora: 11:52:01
```