
export const removeMascara = (valor: string): any => {
    if (!(valor)) {
        valor = valor.replace(/[^\d]/g, '').slice(0, valor.length);
        return valor.trim().length > 0 ? valor : null;
    }
    return valor;
};

export const download = (nome: string, arquivo: any, extensao: string): any => {
    const nomeFormatado = nome + '.' + extensao;
    if (navigator.msSaveBlob) {
        navigator.msSaveBlob(arquivo, nomeFormatado);
    } else {
        const link = document.createElement('a');
        if (link.download !== undefined) {
            const url = URL.createObjectURL(arquivo);
            link.setAttribute('href', url);
            link.setAttribute('download', nomeFormatado);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
};

export const inicializarTiposExtensoes = (): any => {
    return [
        {label: 'PDF', value: 'pdf'},
        {label: 'EXCEL', value: 'xls'},
        {label: 'WORD', value: 'docx'}
    ];
};

