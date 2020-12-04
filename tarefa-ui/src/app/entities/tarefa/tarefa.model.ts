export class Tarefa {
    constructor(
        public id?: number,
        public titulo?: string,
        public descricao?: string,
        public indicadorDeConcluido?: boolean,
        public dataCriacao?: Date,
        public dataEdicao?: Date,
        public dataConclusao?: Date,
        public dataRemocao?: Date,
        public status?: boolean
    ) {
    }
}
