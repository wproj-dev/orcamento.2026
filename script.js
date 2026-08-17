document.addEventListener('DOMContentLoaded', () => {
    console.log("Dashboard carregado.");
    
    // Exemplo de como atualizar os valores dinamicamente
    const atualizarDados = (id, valor) => {
        const elemento = document.getElementById(id);
        if (elemento) {
            elemento.innerText = `R$ ${valor.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
        }
    };

    // Simulação de carregamento de dados
    setTimeout(() => {
        atualizarDados('valor-discricionario', 150000.50);
        atualizarDados('valor-pac', 85000.00);
        atualizarDados('valor-emendas', 42000.75);
        atualizarDados('valor-bloqueado', 5000.00);
    }, 500);
});
