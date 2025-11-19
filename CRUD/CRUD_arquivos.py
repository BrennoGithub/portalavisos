from Modelos.Arquivos import *
from config import db

#Função GET
def GET_arquivos(ID_informativo):
    lista_arquivo = Informativo_arquivo.query.filter_by(informativo=ID_informativo).all()
    if lista_arquivo is None:
        print("MENSAGEM SERVIDOR: Arquivos relacionados ao informativo não encontrados")
        return {"mensagemServidor": "Arquivos relacionados ao informativo não encontrados"}

    arquivos = []
    for obj in lista_arquivo:
        arquivo = Arquivos.query.get_or_404(obj.arquivo)
        arquivos.append(arquivo)
        
    lista_arquivos = []
    for iten in arquivos:
        objetoArquivo = {}
        objetoArquivo["ID_arquivo"] = iten.ID_arquivo
        objetoArquivo["tipoArquivo"] = iten.tipoArquivo
        objetoArquivo["dataRegistro"] = str(iten.dataRegistro)
        objetoArquivo["arquivo"] = iten.arquivo
        lista_arquivos.append(objetoArquivo)

    return lista_arquivos

#Função POST
def POST_arquivos(ID_informativo, tipoArquivo, arquivo): # Registro de apenas 1 anexo por informativo
    novo_arquivo = Arquivos(
        tipoArquivo = tipoArquivo,
        arquivo = arquivo
    )
    db.session.add(novo_arquivo)
    db.session.commit()

    relacionamento = Informativo_arquivo(
        informativo = ID_informativo,
        arquivo = novo_arquivo.ID_arquivo
    )
    db.session.add(relacionamento)
    db.session.commit()

    print("MENSAGEM SERVIDOR: Arquivo anexado ao informativo com sucesso")
    #return {"mensagemServidor": "Arquivo anexado ao informativo com sucesso"}

#Função POST
def PUT_arquivos(ID_arquivos, tipoArquivo, arquivo):
    print("MENSAGEM SERVIDOR: ")
    return {"mensagemServidor": ""}

#Função POST
def DELETE_arquivos(ID_informativo, ID_arquivos):
    print("MENSAGEM SERVIDOR: ")
    return {"mensagemServidor": ""}