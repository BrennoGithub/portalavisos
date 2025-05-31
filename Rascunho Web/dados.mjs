//Lista de alunos matriculados
export const lista_alunos = [
    {
        nome: 'Júlio César',
        matricula: '20231144010043',
        turma: 'infov3'
    },
    {
        nome: 'Breno Gusmão',
        matricula: '20231144010022',
        turma: 'infov3'
    }
    
];

//Lista dos lideres de turma
export const lista_lideres_turma = [
    {
        nome: 'Júlio César',
        matricula: '20231144010043',
        turma: 'infov3'
    }
];

//Objeto Aviso
export class Aviso{
    constructor(id, tipo, assunto, data, hora){
        this._id = id;
        this._tipo = tipo;
        this._assunto = assunto;
        this._data = data;
        this._hora = hora;
    }

    return_id(){
        return this._id;
    }


    return_tipo(){
        return this._tipo;
    }

    return_assunto(){
        return this._assunto;
    }

    return_data(){
        return this._data;
    }

    return_hora(){
        return this._hora;
    }
};

//lista de ids de avisos
export let lista_id_avisos = [];
export let lista_avisos = [];