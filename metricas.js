// metricas.js
const dadosMetricas = {
     total: 119,

    // PORCENTAGENS
    obrigatorios: 73.9,
    altamenteDesejaveis: 25.2,
    facultativos: 0.8,

    // QUANTIDADES
    quantObrigatorios: 88,
    quantAD: 30,
    quantFacultativos: 1,

    totalSeguranca: 82,
    percentualSeguranca: 68.9,
    capitulos: [
        {
            nome: "1. Organização dos documentos arquivísticos",
            total: 43,
            obrigatorios: 31,
            ad: 9,
            facultativos: 3,
            icone: "folder"
        },
        {
            nome: "2. Captura",
            total: 35,
            obrigatorios: 27,
            ad: 8,
            facultativos: 0,
            icone: "document_scanner"
        },
        {
            nome: "3. Avaliação: temporalidade e destinação",
            total: 34,
            obrigatorios: 28,
            ad: 5,
            facultativos: 1,
            icone: "assessment"
        },
        {
            nome: "4. Pesquisa, localização e apresentação",
            total: 26,
            obrigatorios: 19,
            ad: 5,
            facultativos: 2,
            icone: "search"
        },
        {
            nome: "5. Elaboração de documentos",
            total: 23,
            obrigatorios: 18,
            ad: 3,
            facultativos: 2,
            icone: "edit"
        },
        {
            nome: "6. Tramitação e fluxo de trabalho",
            total: 24,
            obrigatorios: 14,
            ad: 7,
            facultativos: 3,
            icone: "swap_horiz"
        },
        {
            nome: "7. Segurança",
            total: 82,
            obrigatorios: 53,
            ad: 21,
            facultativos: 8,
            icone: "lock",
            destaque: true
        },
        {
            nome: "8. Preservação",
            total: 19,
            obrigatorios: 13,
            ad: 6,
            facultativos: 0,
            icone: "settings"
        }
    ],
    topicosSeguranca: [
        "Trilha de Auditoria",
        "Controle de Acesso",
        "Classificação de Sigilo",
        "Assinatura Digital",
        "Cópias de Segurança (Backup)",
        "Criptografia",
        "Carimbo Digital do Tempo",
        "Marcas d'água digitais",
        "Assinatura cadastrada (login/senha)",
        "Autoproteção",
        "Alterar, apagar e truncar documentos"
    ],
        distribuicaoObrigatoriedade: {
        obrigatorios: {
            total: 88,
            porcentagem: 73.9
        },
        altamenteDesejaveis: {
            total: 30,
            porcentagem: 25.2
        },
        facultativos: {
            total: 1,
            porcentagem: 0.8
        }
    },

    top5Capítulos: [
        { posicao: 1, nome: "7. Segurança", total: 82 },
        { posicao: 2, nome: "1. Organização dos documentos arquivísticos", total: 43 },
        { posicao: 3, nome: "2. Captura", total: 35 },
        { posicao: 4, nome: "3. Avaliação: temporalidade e destinação", total: 34 },
        { posicao: 5, nome: "4. Pesquisa, localização e apresentação", total: 26 }
    ],
    insights: [
        {
            titulo: "Segurança é o capítulo mais extenso",
            descricao: "Com 82 requisitos, o Capítulo 7 representa 68,9% de todos os requisitos funcionais. Isso demonstra a importância crítica da segurança da informação na gestão arquivística de documentos digitais.",
            icone: "lock",
            cor: "red"
        },
        {
            titulo: "Maioria dos requisitos é obrigatória",
            descricao: "73,9% dos requisitos são obrigatórios (88 itens). Apenas 1 requisito é facultativo, demonstrando o alto rigor do e-ARQ Brasil.",
            icone: "verified",
            cor: "green"
        },
        {
            titulo: "Preservação tem 100% de requisitos obrigatórios",
            descricao: "O Capítulo 8 (Preservação) possui 19 requisitos, todos obrigatórios. Isso reflete a prioridade na garantia de acesso e autenticidade dos documentos a longo prazo.",
            icone: "settings",
            cor: "blue"
        },
        {
            titulo: "Capítulo 6 tem mais requisitos facultativos",
            descricao: "O Capítulo 6 (Tramitação e fluxo de trabalho) possui 3 requisitos facultativos, pois a automação de workflow é opcional dependendo da realidade da instituição.",
            icone: "swap_horiz",
            cor: "amber"
        }
    ]
};