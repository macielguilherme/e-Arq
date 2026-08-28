// visaogeral.js - Versão Completa com Introdução do e-ARQ Brasil
const dadosVisaoGeral = {
    // =========================================================================
    // 1. IDENTIFICAÇÃO E CONTEXTO INSTITUCIONAL
    // =========================================================================
    identificacao: {
        titulo: "e-ARQ Brasil",
        subtitulo: "Modelo de Requisitos para Sistemas Informatizados de Gestão Arquivística de Documentos",
        versao: "Versão 2",
        dataAdocao: "Junho de 2021 (Adotada pelo CONARQ)",
        dataPublicacao: "Maio de 2022",
        isbn: "978-85-7009-007-2",
        orgaoResponsavel: "Conselho Nacional de Arquivos (CONARQ)",
        camaraTecnica: "Câmara Técnica de Documentos Eletrônicos (CTDE)",
        vinculacao: "Arquivo Nacional / Ministério da Justiça e Segurança Pública",
        licenca: "Creative Commons – Atribuição CCBY 4.0 (Domínio Público)",
        baseLegal: [
            {
                ato: "Lei nº 8.159, de 8 de janeiro de 1991",
                descricao: "Lei de Arquivos: Dispõe sobre a política nacional de arquivos públicos e privados e institui o Sistema Nacional de Arquivos (SINAR) e o CONARQ."
            },
            {
                ato: "Decreto nº 4.073, de 3 de janeiro de 2002",
                descricao: "Regulamenta a Lei nº 8.159/1991, estabelecendo competências e normas para a gestão documental na administração pública federal."
            },
            {
                ato: "Lei nº 12.527, de 18 de novembro de 2011",
                descricao: "Lei de Acesso à Informação (LAI): Regula o acesso a informações públicas, transparência ativa/passiva e graus de sigilo."
            },
            {
                ato: "Lei nº 13.709, de 14 de agosto de 2018",
                descricao: "Lei Geral de Proteção de Dados Pessoais (LGPD): Tratamento e proteção de dados pessoais e dados pessoais sensíveis."
            },
            {
                ato: "Lei nº 14.063, de 23 de setembro de 2020",
                descricao: "Regras sobre uso de assinaturas eletrônicas em interações com o poder público (simples, avançada e qualificada)."
            }
        ],
        resolucoesConarq: [
            { numero: "Resolução nº 1/1995", tema: "Adoção de planos/códigos de classificação nos arquivos correntes." },
            { numero: "Resolução nº 5/1996", tema: "Publicação de editais para eliminação de documentos em diários oficiais." },
            { numero: "Resolução nº 20/2004", tema: "Inserção de documentos digitais em programas de gestão arquivística." },
            { numero: "Resolução nº 24/2006", tema: "Diretrizes para transferência e recolhimento de documentos digitais." },
            { numero: "Resolução nº 36/2012", tema: "Gestão arquivística de correio eletrônico corporativo." },
            { numero: "Resolução nº 37/2012", tema: "Presunção de autenticidade de documentos arquivísticos digitais." },
            { numero: "Resolução nº 39/2014 (c/ redação da nº 43/2015)", tema: "Diretrizes para Repositórios Arquivísticos Digitais Confiáveis (RDC-Arq)." },
            { numero: "Resolução nº 40/2014", tema: "Procedimentos de eliminação de documentos no âmbito do SINAR." },
            { numero: "Resolução nº 45/2020", tema: "Diretrizes para elaboração de instrumentos técnicos de gestão documental." }
        ],
        normasInternacionaisReferencia: [
            "ISO 15489-1:2018 (Gestão de Documentos de Arquivo)",
            "ISO 14721:2012 (Modelo de Referência OAIS / Repositórios Digitais)",
            "ISO 23081:2019/2020 (Metadados para Documentos de Arquivo)",
            "MoReq / MoReq2 / MoReq2010 (Model Requirements for Records Systems - Europa)",
            "DoD 5015.2-STD (Design Criteria for Records Applications - EUA)",
            "InterPARES Project (Autenticidade e Preservação de Longo Prazo)",
            "PREMIS Data Dictionary v3 (Metadados de Preservação)",
            "e-PING & e-PMG (Padrões de Interoperabilidade e Metadados do Governo Brasileiro)"
        ]
    },

    // =========================================================================
    // 2. INTRODUÇÃO COMPLETA (PÁGINAS 10-16 DO PDF)
    // =========================================================================
    introducao: {
        titulo: "Introdução",
        baseadoEm: "A elaboração do e-ARQ Brasil foi baseada em documentos similares já publicados no início dos anos 2000, por diferentes instituições europeias e americanas. Na ocasião, o documento base utilizado foi o Modelo de requisitos para a gestão de arquivos eletrônicos – MoReq, publicado em 2001 pelo DLM Forum e Comissão Europeia.",
        razaoPropria: "A decisão de se elaborar um modelo de requisitos próprio, diferenciado do MoReq, foi em razão da necessidade de se introduzirem procedimentos e conceitos que fossem compreensíveis e adequados à legislação brasileira, bem como à nossa tradição administrativa e arquivística, que se diferencia, em muitos aspectos, do contexto europeu e norte-americano.",
        outrasReferencias: "Outras referências importantes que subsidiaram a primeira versão foram a norma DOD 5015.2-STD – Design criteria standard for electronic records management software applications (USA, Department of Defense, 2002), os Requirements for electronic records management systems: functional requirements (UK, Public Record Office, 2020), bem como os resultados e publicações do InterPARES Project e a norma AS ISO 15.489/2002 (STANDARDS AUSTRALIA INTERNATIONAL, 2002).",
        consideracoes: "O e-ARQ Brasil considerou a existência de um importante acervo de documentos digitais que vem sendo tratado por especialistas de diversas áreas, entre as quais arquivologia e tecnologia da informação. O documento partiu da definição dos conceitos de documento arquivístico e documento arquivístico digital, tendo como base os fundamentos da diplomática e da arquivologia, enfatizando os conceitos e a prática de gestão de documentos, para fornecer um conjunto de requisitos que seja amplo, rigoroso e de qualidade.",
        // Detalhamento para modal
        detalhes: {
            explicacao: "O e-ARQ Brasil foi desenvolvido a partir de referências internacionais como MoReq (Reino Unido), DoD 5015.2-STD (EUA) e ISO 15489, mas adaptado à realidade brasileira. A versão 2, publicada em 2022, atualiza e consolida o modelo com base em experiências de implementação em órgãos como Unicamp, Câmara dos Deputados e DATAPREV.",
            implementacao: "A introdução estabelece que o e-ARQ Brasil deve ser usado para orientar a aquisição ou desenvolvimento de SIGADs, servindo como referência para arquivistas, profissionais de TI, auditores e gestores públicos. A adoção deve considerar as especificidades de cada organização.",
            exemplo: "Um órgão público que deseja adquirir um sistema de gestão documental usa o e-ARQ Brasil como referência no edital, exigindo que o software atenda aos requisitos funcionais (classificação, captura, temporalidade) e não funcionais (segurança, interoperabilidade) especificados.",
            dicas: "O e-ARQ Brasil é um documento de domínio público, podendo ser reproduzido livremente com os devidos créditos. Sua aplicação deve ser modular – cada organização decide quais capítulos são obrigatórios conforme seu contexto."
        }
    },

    // =========================================================================
    // 3. OBJETIVOS E ÂMBITO (PÁGINAS 11-12)
    // =========================================================================
    objetivosAmbito: {
        objetivos: [
            "Orientar a implantação da gestão arquivística de documentos arquivísticos digitais e não digitais",
            "Fornecer especificações técnicas e funcionais, além de metadados, para orientar a aquisição e/ou a especificação e desenvolvimento de sistemas informatizados de gestão arquivística de documentos"
        ],
        ambito: "O e-ARQ Brasil deve ser utilizado para desenvolver um sistema informatizado ou para avaliar um já existente, cuja atividade principal seja a gestão arquivística de documentos.",
        aplicabilidade: "O e-ARQ Brasil é aplicável aos sistemas que produzem e mantêm somente documentos digitais e aos sistemas que compreendem documentos digitais, não digitais e híbridos.",
        publicoAlvo: [
            "Profissionais da gestão arquivística de documentos: para orientar a execução desses serviços a partir de uma abordagem arquivística",
            "Profissionais de tecnologia da informação: para orientar o desenvolvimento de um SIGAD em conformidade com os requisitos exigidos",
            "Auditores: como base para auditoria ou inspeção do SIGAD instalado",
            "Potenciais usuários de um SIGAD: como apoio na elaboração de edital para apresentação de propostas de fornecimento de software",
            "Potenciais compradores de serviços externos de gestão de documentos: como material auxiliar para a especificação dos serviços a serem comprados",
            "Instituições acadêmicas e organizações de formação profissional: como um documento de referência e recurso de ensino para a formação em gestão arquivística de documentos"
        ],
        // Detalhamento para modal
        detalhes: {
            explicacao: "Os objetivos do e-ARQ Brasil são duplos: orientar a implantação da gestão arquivística e fornecer especificações técnicas para sistemas. Ele serve tanto para o setor público quanto privado, em todas as esferas (federal, estadual, municipal) e poderes (Executivo, Legislativo, Judiciário).",
            implementacao: "O e-ARQ Brasil deve ser adotado como referência para: 1) Elaboração de editais de aquisição de SIGAD; 2) Desenvolvimento de sistemas internos; 3) Auditoria de conformidade; 4) Capacitação de servidores; 5) Pesquisa acadêmica em arquivologia e TI.",
            exemplo: "Uma universidade utiliza o e-ARQ Brasil para desenvolver seu sistema de gestão de documentos acadêmicos, garantindo que todos os requisitos de classificação, temporalidade e segurança sejam atendidos desde a concepção do projeto.",
            dicas: "O e-ARQ Brasil não é um software – é uma especificação. Ele não abrange todos os requisitos de qualquer organização; cada instituição deve complementar com suas próprias regras e adaptar os requisitos facultativos conforme sua realidade."
        }
    },

    // =========================================================================
    // 4. LIMITES DA ESPECIFICAÇÃO (PÁGINA 12)
    // =========================================================================
    limitesEspecificacao: {
        texto: "O e-ARQ Brasil compreende uma extensa variedade de requisitos para diferentes esferas de atuação, ramos de atividade e tipos de documentos. No entanto, o e-ARQ Brasil sozinho não abrange todos os requisitos necessários para qualquer órgão ou entidade poder criar, manter e dar acesso a documentos digitais.",
        requisitosAdicionais: "As organizações possuem exigências legais e regulamentares distintas que devem ser levadas em conta ao se adotar este modelo. Cada organização deve considerar as suas atividades, os documentos que produz, bem como o contexto de produção e manutenção do documento e, dependendo da situação, acrescentar requisitos específicos e/ou assegurar que os requisitos listados aqui como facultativos ou altamente desejáveis possam ser classificados como obrigatórios.",
        metadadosEspecificos: "A gestão arquivística de documentos imagéticos, audiovisuais e sonoros, dentre outros, demandam metadados específicos de gestão e descrição que não estão contemplados por esta norma. Quando o SIGAD contemplar esses documentos, deverão ser implementados metadados específicos para garantir sua incorporação no programa de gestão documental da instituição.",
        // Detalhamento para modal
        detalhes: {
            explicacao: "O e-ARQ Brasil é um modelo de referência, não uma solução pronta. Ele estabelece o mínimo necessário, mas cada organização tem particularidades que exigem complementos. Documentos como fotografias, vídeos, áudios e mapas precisam de metadados específicos (ex: cromia, duração, escala).",
            implementacao: "Para usar o e-ARQ Brasil, a organização deve: 1) Adotá-lo como base; 2) Mapear suas necessidades específicas; 3) Complementar com requisitos próprios; 4) Adaptar a classificação de obrigatoriedade conforme seu contexto; 5) Implementar metadados adicionais para documentos especiais.",
            exemplo: "Um arquivo de imagens aéreas precisa de metadados como 'escala', 'coordenadas geográficas', 'data do voo' e 'resolução' – que não estão no e-ARQ Brasil, mas devem ser implementados pelo SIGAD.",
            dicas: "O sucesso da implementação depende mais da política arquivística do que do software. A interação entre arquivistas e profissionais de TI é essencial. A adoção pode ser modular – comece pelos capítulos mais críticos."
        }
    },

    // =========================================================================
    // 5. NORMAS E ORIENTAÇÕES DE REFERÊNCIA (PÁGINAS 12-14)
    // =========================================================================
    normasReferencia: {
        normas: [
            "ISO/IEC 15408-1:2009 – Evaluation criteria for IT security",
            "ABNT NBR ISO 15489-1:2018 – Gestão de documentos de arquivo. Parte 1: Conceitos e princípios",
            "ABNT NBR ISO 30300:2016 – Sistema de gestão de documentos de arquivo – Fundamentos e vocabulário",
            "ABNT NBR ISO 30301:2016 – Sistema de gestão de documentos de arquivo – Requisitos",
            "ABNT NBR ISO 30302:2017 – Sistema de gestão de documentos de arquivo – Diretrizes para implementação",
            "ISO 14721:2012 – Reference model for an open archival information system (OAIS)",
            "ABNT NBR ISO 23081-1:2019 – Metadados para documentos de arquivo – Parte 1: Princípios",
            "ABNT NBR ISO 23081-2:2020 – Gerenciamento de metadados para documentos de arquivo – Parte 2: Problemas conceituais e implementação",
            "ISO 15836-1:2017 – Information and documentation – the Dublin Core metadata element"
        ],
        modelosInternacionais: [
            "Design criteria standard for electronic records management software applications: DOD 5015.2-STD, 2002",
            "MoReq – Modelo de requisitos para a gestão de arquivos eletrônicos, 2002",
            "MoReq 2010 – Modular Requirements for Records Systems, 2011",
            "Requirements for electronic records management systems: functional requirements, United Kingdom, 2002"
        ],
        padroesMetadados: [
            "e-Government Metadata Standard – e-GMS, United Kingdom, v. 3.0, 2004",
            "Metainformação para Interoperabilidade de Portugal – MIP, Lisboa, 2006",
            "MoReq 2 – Model requirements for the management of electronic records update and extension, 2007",
            "Padrão de Metadados do Governo Eletrônico – e-PMG, Brasil, versão 1.1, 2014",
            "PREMIS Data Dictionary for Preservation Metadata – version 3, 2015"
        ],
        orientacoes: [
            "Directrices para la preservación del patrimonio digital, UNESCO, 2002",
            "Documentos de arquivo electrónico: manual para arquivistas, ICA, Estudo n. 16, 2005",
            "Electronic Records Management Initiative",
            "InterPARES Project",
            "Management, appraisal and preservation of electronic records guidelines, The National Archives, UK"
        ],
        // Detalhamento para modal
        detalhes: {
            explicacao: "O e-ARQ Brasil está alinhado com as principais normas internacionais e nacionais: ISO 15489 (gestão de documentos), ISO 14721/OAIS (preservação), ISO 23081 (metadados), além das resoluções do CONARQ e padrões do governo eletrônico (e-PING, e-PMG).",
            implementacao: "Ao implementar um SIGAD, a organização deve: 1) Conhecer as normas aplicáveis; 2) Verificar a conformidade com as resoluções do CONARQ; 3) Adotar padrões abertos para interoperabilidade; 4) Utilizar o e-PMG para metadados; 5) Seguir o modelo OAIS para preservação.",
            exemplo: "Um repositório digital confiável (RDC-Arq) deve seguir a ISO 14721 (OAIS), a Resolução CONARQ nº 39/2014 e utilizar o PREMIS para metadados de preservação.",
            dicas: "As resoluções do CONARQ são obrigatórias para órgãos do SINAR. Para o setor privado, são referências recomendadas. A e-PING estabelece padrões de interoperabilidade para a administração pública federal."
        }
    },

    // =========================================================================
    // 6. ORGANIZAÇÃO DA ESPECIFICAÇÃO (PÁGINAS 14-16)
    // =========================================================================
    organizacaoEspecificacao: {
        descricao: "O e-ARQ Brasil está dividido em duas partes. A Parte I, Gestão arquivística de documentos, pretende fornecer um arcabouço teórico e conceitual para que cada órgão ou entidade possa desenvolver um programa de gestão arquivística de documentos. A Parte II, Especificação de requisitos para sistemas informatizados de gestão arquivística de documentos, descreve os requisitos necessários para desenvolver o SIGAD.",
        parteI: {
            titulo: "Parte I - Gestão arquivística de documentos",
            conteudo: "Contém nove capítulos, alguns divididos em seções, e trata da política arquivística, do planejamento e da implantação do programa de gestão arquivística de documentos, dos procedimentos e controles do SIGAD e dos instrumentos utilizados na gestão de documentos."
        },
        parteII: {
            titulo: "Parte II - Especificação de requisitos para SIGAD",
            conteudo: "Está organizada em requisitos funcionais, requisitos não funcionais, metadados, glossário e referências."
        },
        requisitosFuncionais: "Requisitos funcionais são aqueles que especificam uma função que o sistema deve ser capaz de realizar sob o ponto de vista do usuário final. No e-ARQ Brasil, os requisitos funcionais compreendem oito capítulos, divididos em seções, e tratam de organização de documentos (incluindo o plano de classificação), captura, avaliação (incluindo a destinação), recuperação da informação, elaboração de documentos, tramitação, segurança e preservação.",
        requisitosNaoFuncionais: "Requisitos não funcionais são aqueles que não estão diretamente relacionados à funcionalidade do sistema, mas que são relevantes para a sua implementação. No e-ARQ Brasil, os requisitos não funcionais compreendem sete capítulos, e tratam de armazenamento, funções administrativas, conformidade com a legislação e regulamentações, usabilidade, interoperabilidade, disponibilidade, desempenho e escalabilidade.",
        // Detalhamento para modal
        detalhes: {
            explicacao: "A especificação é organizada em duas partes: a primeira, conceitual, explica os fundamentos da gestão arquivística; a segunda, prática, lista os requisitos que um SIGAD deve atender. Os requisitos funcionais dizem O QUE o sistema deve fazer; os não funcionais dizem COMO deve ser (desempenho, segurança, usabilidade).",
            implementacao: "Para usar a especificação: 1) Estude a Parte I para entender os conceitos; 2) Use a Parte II como checklist para o SIGAD; 3) Verifique os requisitos funcionais (capítulos 1 a 8) e não funcionais (capítulos 9 a 15); 4) Consulte o esquema de metadados para definir os dados a serem capturados.",
            exemplo: "Ao especificar um SIGAD, o arquivista verifica se o sistema atende ao requisito funcional 2.1.1 (captura com registro, classificação, indexação) e ao requisito não funcional 12.1.15 (acessibilidade).",
            dicas: "Os requisitos são classificados em OBRIGATÓRIOS, ALTAMENTE DESEJÁVEIS e FACULTATIVOS. Os obrigatórios são imprescindíveis. Os metadados também têm classificação de obrigatoriedade. A decisão sobre quais capítulos adotar depende do contexto da organização."
        }
    },

    // =========================================================================
    // 7. OBRIGATORIEDADE DOS REQUISITOS (PÁGINAS 15-16)
    // =========================================================================
    obrigatoriedadeRequisitos: {
        descricao: "Os requisitos foram classificados em obrigatórios, altamente desejáveis e facultativos, de acordo com o grau maior ou menor de exigência para que o SIGAD possa desempenhar suas funções.",
        classificacoes: [
            {
                sigla: "O",
                texto: "Obrigatórios",
                indicador: '“O SIGAD tem que...”',
                significado: "O requisito é imprescindível."
            },
            {
                sigla: "AD",
                texto: "Altamente Desejáveis",
                indicador: '“É altamente desejável que o SIGAD...”',
                significado: "Podem existir razões válidas em circunstâncias particulares para ignorar um determinado item, mas a totalidade das implicações deve ser cuidadosamente examinada antes de se escolher uma proposta diferente."
            },
            {
                sigla: "F",
                texto: "Facultativos",
                indicador: '“O SIGAD pode...”',
                significado: "O requisito é opcional."
            }
        ],
        metadadosClassificacao: [
            {
                sigla: "O",
                texto: "Obrigatório",
                significado: "O elemento deve, obrigatoriamente, estar presente."
            },
            {
                sigla: "OA",
                texto: "Obrigatório, se aplicável",
                significado: "O elemento pode ser aplicável ou não, porém, se aplicável, sua presença é obrigatória."
            },
            {
                sigla: "F",
                texto: "Facultativo",
                significado: "Os elementos facultativos estão relacionados à implementação do SIGAD e cabe à instituição decidir ou não pelo seu uso."
            }
        ],
        // Detalhamento para modal
        detalhes: {
            explicacao: "A classificação de obrigatoriedade ajuda a priorizar a implementação. Requisitos obrigatórios são fundamentais para a autenticidade e confiabilidade dos documentos. Os altamente desejáveis melhoram significativamente o sistema. Os facultativos dependem do contexto da organização.",
            implementacao: "Ao implementar um SIGAD: 1) Garanta todos os requisitos obrigatórios; 2) Implemente o máximo possível de altamente desejáveis; 3) Avalie os facultativos conforme a necessidade; 4) Documente as decisões sobre quais requisitos foram adotados; 5) Revise periodicamente.",
            exemplo: "O requisito 1.1.1 (plano de classificação) é obrigatório – sem ele, o sistema não é um SIGAD. O requisito 12.1.20 (OCR) é facultativo – pode ser implementado se a instituição tiver muitos documentos escaneados.",
            dicas: "Uma implementação que não inclui um item altamente desejável deve estar preparada para interoperar com outra que o inclui. Metadados facultativos podem se tornar obrigatórios dependendo das necessidades específicas da instituição."
        }
    },

    // =========================================================================
    // 8. CONSIDERAÇÕES INICIAIS (CAPÍTULO 1) - PÁGINAS 17-18
    // =========================================================================
    consideracoesIniciais: {
        titulo: "1. Considerações Iniciais",
        descricao: "Contexto histórico da gestão arquivística de documentos desde a Segunda Guerra Mundial até a era digital.",
        topicos: [
            {
                titulo: "Evolução da Tecnologia da Informação",
                conteudo: "Após a Segunda Guerra Mundial, a tecnologia do computador extrapolou os limites do uso militar. Até a década de 1970, o uso do computador era limitado aos especialistas devido à necessidade de domínio de estruturas complexas de hardware e software. Eram os tempos do CPD – Centro de Processamento de Dados."
            },
            {
                titulo: "Anos 1980 - Computadores Pessoais e Redes",
                conteudo: "Os anos 1980 trouxeram duas grandes novidades: os computadores pessoais e as redes de trabalho. Os primeiros marcaram o início da descentralização das atividades informatizadas. O desenvolvimento de programas amigáveis e a redução dos custos da tecnologia levaram à disseminação do uso dos microcomputadores."
            },
            {
                titulo: "Anos 1990 - Avanço das TIC",
                conteudo: "O avanço das tecnologias de informação e comunicação (TIC), a partir dos anos 1990, muda radicalmente os mecanismos de registro e comunicação da informação. Os documentos passam a ser gerados em ambientes eletrônicos, armazenados em suportes magnéticos e ópticos, em formato digital."
            },
            {
                titulo: "Desafios dos Documentos Digitais",
                conteudo: "A simplicidade de criação e transmissão traz informalidade na linguagem; a facilidade de acesso acarreta intervenções não autorizadas; a rápida obsolescência tecnológica e a degradação das mídias digitais dificultam a preservação de longo prazo."
            },
            {
                titulo: "Solução: Gestão Arquivística de Documentos",
                conteudo: "É necessária a adoção de procedimentos rigorosos de controle para garantir a confiabilidade e a autenticidade desses documentos, bem como o acesso contínuo a eles. Isso só é possível com a implantação de um programa de gestão arquivística de documentos."
            }
        ],
        baseLegal: [
            "Lei n. 8.159, de 8 de janeiro de 1991 - Lei de Arquivos",
            "Decreto n. 4.073, de 3 de janeiro de 2002 - Regulamenta a gestão de documentos na administração pública federal"
        ],
        conarqSinar: "O Conselho Nacional de Arquivos (CONARQ), criado pela lei n. 8.159/1991, tem por finalidade definir a política nacional de arquivos públicos e privados, e exercer orientação normativa, visando à gestão documental e à proteção especial aos documentos de arquivo. O Sistema Nacional de Arquivos (SINAR) tem o CONARQ como órgão central.",
        // Detalhamento para modal
        detalhes: {
            explicacao: "A gestão arquivística de documentos surgiu da necessidade de controlar a produção massiva de documentos, especialmente com o advento da era digital. Antes da década de 1970, os computadores eram restritos a especialistas. Nos anos 1980, com a popularização dos PCs, a descentralização começou. Nos anos 1990, as TICs transformaram radicalmente a produção documental, criando novos desafios: informalidade, vulnerabilidade a alterações não autorizadas e obsolescência tecnológica.",
            implementacao: "Para implantar um programa de gestão arquivística, é necessário: 1) Definir política arquivística; 2) Designar responsabilidades; 3) Planejar o programa (levantamento de atividades, documentos, sistemas); 4) Implementar com capacitação, integração de sistemas e manuais; 5) Monitorar e ajustar continuamente.",
            exemplo: "Um órgão público que, antes da era digital, mantinha processos apenas em papel, hoje precisa gerenciar simultaneamente documentos digitais (PDFs, e-mails) e físicos, aplicando os mesmos princípios de classificação e temporalidade a ambos.",
            dicas: "Comece com um diagnóstico da produção documental atual. Envolva todas as áreas. A gestão arquivística não é apenas uma questão de TI – é uma mudança cultural que exige conscientização de todos os servidores. O CONARQ e o SINAR são as referências normativas para o setor público."
        }
    },

    // =========================================================================
    // 9. BASE CONCEITUAL (CAPÍTULO 2) - PÁGINAS 19-23
    // =========================================================================
    baseConceitual: {
        titulo: "2. Base Conceitual",
        descricao: "Definições fundamentais para compreender a gestão arquivística de documentos digitais.",
        definicoes: [
            {
                termo: "Documento",
                definicao: "Unidade de registro de informações, qualquer que seja o formato ou o suporte."
            },
            {
                termo: "Documento arquivístico",
                definicao: "Documento produzido (elaborado ou recebido), no curso de uma atividade prática, como instrumento ou resultado de tal atividade, e retido para ação ou referência."
            },
            {
                termo: "Documento digital",
                definicao: "Informação registrada, codificada em dígitos binários, acessível e interpretável por meio de sistema computacional."
            },
            {
                termo: "Documento arquivístico digital",
                definicao: "Documento digital reconhecido e tratado como um documento arquivístico."
            },
            {
                termo: "Documento não digital",
                definicao: "Documentos que se apresentam em suporte, formato e codificação diferentes dos digitais, tais como: documentos em papel, documentos em películas e documentos eletrônicos analógicos."
            },
            {
                termo: "Sistema de informação",
                definicao: "Conjunto organizado, não necessariamente informatizado, de políticas, procedimentos, pessoas e equipamentos que produzem, processam, armazenam e proveem acesso à informação."
            },
            {
                termo: "Sistema informatizado",
                definicao: "Sistema que apoia o acesso e a gestão de dados, informação e/ou documentos em um ambiente computacional."
            },
            {
                termo: "Gestão arquivística de documentos",
                definicao: "Conjunto de procedimentos e operações técnicas referentes à produção, tramitação, uso, avaliação e arquivamento dos documentos em idades corrente e intermediária, visando a sua eliminação ou recolhimento para guarda permanente."
            },
            {
                termo: "Sistema de gestão arquivística de documentos",
                definicao: "Conjunto de procedimentos e operações técnicas, cuja interação permite a eficiência e a eficácia da gestão arquivística de documentos."
            }
        ],
        sigadDefinicao: "Sistema informatizado que apoia a gestão arquivística de documentos. O sucesso do SIGAD dependerá, fundamentalmente, da implementação prévia de um programa de gestão arquivística de documentos.",
        sigadCaracteristicas: [
            "Captura, armazenamento, indexação e recuperação de todos os tipos de documentos arquivísticos",
            "Captura, armazenamento, indexação e recuperação de todos os componentes digitais do documento arquivístico como uma unidade complexa",
            "Gestão dos documentos a partir do plano de classificação para manter a relação orgânica entre os documentos",
            "Registro de metadados associados aos documentos para descrever os contextos desses mesmos documentos",
            "Estabelecimento de relacionamento entre documentos digitais, não digitais e híbridos",
            "Manutenção da autenticidade dos documentos",
            "Aplicação de tabela de temporalidade e destinação de documentos, permitindo a seleção dos documentos para eliminação ou para guarda permanente",
            "Exportação de documentos para apoiar a transferência e o recolhimento",
            "Apoio à preservação dos documentos"
        ],
        ged: "Gerenciamento Eletrônico de Documentos (GED): Conjunto de tecnologias utilizadas para organização da informação não estruturada de um órgão ou entidade, que pode ser dividido nas seguintes funcionalidades: captura, gerenciamento, armazenamento e distribuição.",
        ecm: "Enterprise Content Management (ECM): Termo amplo para tecnologia digital, estratégias e métodos utilizados para capturar, gerir, acessar, integrar, medir e armazenar informação.",
        sistemasNegocio: "Sistema de negócio: É um sistema informatizado cuja principal função é apoiar a realização de atividades específicas na organização e que produzem e mantêm dados, informações e documentos sobre essas atividades. Exemplos: sistemas de recursos humanos, atividades financeiras, acadêmicos, prontuários e informação geográfica.",
        // Detalhamento para modal
        detalhes: {
            explicacao: "A base conceitual estabelece as definições fundamentais para entender a gestão arquivística. Um documento arquivístico não é qualquer documento – ele é produzido no curso de uma atividade prática e retido como prova ou referência. Na era digital, o SIGAD é o sistema que aplica os princípios arquivísticos (classificação, temporalidade, autenticidade) a documentos digitais.",
            implementacao: "Para implementar um SIGAD, é essencial que a instituição primeiro estabeleça seu programa de gestão arquivística, com plano de classificação, tabela de temporalidade e manuais. O SIGAD deve capturar tanto documentos digitais (nato-digitais ou digitalizados) quanto não digitais (via metadados), mantendo a relação orgânica entre eles.",
            exemplo: "Um processo de licitação digital contém vários documentos (edital em PDF, planilhas ODS, pareceres em DOCX). O SIGAD trata esse conjunto como uma unidade arquivística indivisível, classificando-o sob a classe 'Licitações' e aplicando os prazos de guarda correspondentes.",
            dicas: "Não confunda SIGAD com GED. O SIGAD incorpora os princípios arquivísticos de ciclo de vida, relação orgânica e temporalidade. O GED foca em digitalização e busca, mas não necessariamente mantém a integridade arquivística. Sistemas de negócio (ERP, RH) produzem documentos que devem ser exportados para o SIGAD."
        }
    },

    // =========================================================================
    // 10. ASPECTOS ESSENCIAIS DA GESTÃO ARQUIVÍSTICA (PÁGINAS 23-25)
    // =========================================================================
    aspectosEssenciais: {
        titulo: "3. Aspectos Essenciais da Gestão Arquivística de Documentos",
        capacidades: [
            "Conduzir as atividades de forma transparente, possibilitando a governança e o controle social das informações",
            "Apoiar e documentar a elaboração de políticas e o processo de tomada de decisão",
            "Possibilitar a continuidade das atividades em caso de sinistro",
            "Fornecer evidência em caso de litígio",
            "Proteger os interesses do órgão ou entidade e os direitos dos funcionários e dos usuários ou clientes",
            "Assegurar e documentar as atividades de pesquisa, desenvolvimento e inovação, bem como a pesquisa histórica",
            "Manter a memória corporativa e coletiva"
        ],
        cicloVital: {
            titulo: "Ciclo Vital dos Documentos",
            descricao: "Sucessivas fases por que passam os documentos de um arquivo, desde a produção até a guarda permanente ou eliminação.",
            fases: [
                {
                    nome: "Produção",
                    descricao: "Consiste na elaboração, recebimento e retenção dos documentos em razão da execução das atividades de um órgão ou entidade."
                },
                {
                    nome: "Utilização",
                    descricao: "Consiste na tramitação do documento para o cumprimento da função administrativa, bem como seu arquivamento após cessar o trâmite."
                },
                {
                    nome: "Destinação",
                    descricao: "Consiste na aplicação da decisão, após processo de avaliação, de quais documentos serão eliminados e quais serão encaminhados para a guarda permanente."
                }
            ]
        },
        tresIdades: {
            titulo: "Teoria das Três Idades",
            fases: [
                {
                    nome: "Corrente",
                    descricao: "Documentos que estão em curso, isto é, tramitando ou que foram arquivados, mas são objeto de consultas frequentes, sendo conservados nos locais onde foram produzidos sob a responsabilidade do órgão produtor."
                },
                {
                    nome: "Intermediária",
                    descricao: "Documentos que não são mais de uso corrente, mas que, por ainda conservarem algum interesse administrativo, aguardam, no arquivo intermediário, o cumprimento do prazo estabelecido em tabela de temporalidade e destinação, para serem eliminados ou recolhidos ao arquivo permanente."
                },
                {
                    nome: "Permanente",
                    descricao: "Documentos que devem ser definitivamente preservados em razão de seu valor histórico, probatório ou informativo."
                }
            ]
        },
        valoresDocumentais: {
            valorPrimario: "Valor atribuído aos documentos considerando sua utilidade administrativa imediata, isto é, as razões pelas quais esses documentos foram produzidos.",
            valorSecundario: "Valor atribuído aos documentos em função de sua utilidade para fins diferentes daqueles para os quais foram originalmente produzidos, como, por exemplo, fontes de prova em questões judiciais e administrativas, bem como em pesquisas acadêmicas."
        },
        // Detalhamento para modal
        detalhes: {
            explicacao: "A gestão arquivística confere aos órgãos a capacidade de conduzir atividades com transparência, documentar decisões, fornecer provas em litígios e preservar a memória institucional. O ciclo vital (produção, utilização, destinação) e a teoria das três idades (corrente, intermediária, permanente) são seus pilares.",
            implementacao: "Para implementar: 1) Mapeie os documentos produzidos em cada atividade; 2) Defina prazos de guarda com base nos valores primário (administrativo) e secundário (histórico); 3) Aplique a tabela de temporalidade; 4) Garanta que documentos de valor permanente sejam preservados; 5) Elimine apenas os que não têm valor secundário.",
            exemplo: "Um contrato de aluguel: na idade corrente (vigência), é consultado frequentemente; na intermediária (após vencimento), ainda tem valor fiscal; se não tiver valor histórico, é eliminado. Já um processo de tombamento de patrimônio tem valor permanente e vai para o arquivo definitivo.",
            dicas: "A avaliação (definição de prazos) é a atividade mais crítica – envolva a comissão de avaliação (CPAD). Documentos com valor secundário NUNCA são eliminados. O CONARQ estabelece critérios para classificação, avaliação e procedimentos de eliminação."
        }
    },

    // =========================================================================
    // 11. DEFINIÇÃO DA POLÍTICA ARQUIVÍSTICA (CAPÍTULO 4) - PÁGINAS 25-26
    // =========================================================================
    politicaArquivistica: {
        titulo: "4. Definição da Política Arquivística",
        descricao: "Órgãos e entidades devem definir uma política de gestão arquivística de documentos que tenha por objetivo produzir, manter e preservar documentos confiáveis, autênticos, acessíveis e compreensíveis.",
        elementos: [
            "Declaração oficial de intenções que especifica como será realizada a gestão no órgão ou entidade",
            "Linhas gerais do programa de gestão e os procedimentos necessários para que essas intenções sejam alcançadas",
            "Comunicação e implementação em todos os níveis dos órgãos e entidades",
            "Apoio da direção superior e alocação dos recursos necessários",
            "Formação de um grupo de trabalho ligado aos níveis mais altos da hierarquia",
            "Articulação com as demais políticas informacionais existentes (políticas de sistemas e de segurança da informação)"
        ],
        importancia: "A política de gestão arquivística de documentos deve ser formulada com base na análise do perfil institucional, isto é, de seu contexto jurídico-administrativo, estrutura organizacional, missão, competências, funções e atividades, de forma que os documentos produzidos sejam os mais adequados, completos e necessários.",
        // Detalhamento para modal
        detalhes: {
            explicacao: "A política arquivística é a declaração oficial de intenções da instituição sobre como irá gerenciar seus documentos. Ela não é apenas um documento formal – é o compromisso da alta direção em alocar recursos e apoiar a gestão documental. Sem política, a gestão fica fragmentada e vulnerável.",
            implementacao: "Para implementar, a instituição deve: 1) Criar um grupo de trabalho com representantes de todas as áreas; 2) Fazer diagnóstico da situação atual; 3) Redigir a política alinhada à missão institucional; 4) Submeter à aprovação da alta direção; 5) Comunicar a todos os servidores; 6) Alocar orçamento e recursos.",
            exemplo: "Um ministério publica sua Política de Gestão Arquivística, estabelecendo que todos os documentos devem ser classificados no SIGAD em até 48h após a produção, que a eliminação só ocorre após aprovação da comissão de avaliação, e que a preservação digital é prioridade.",
            dicas: "A política deve ser um documento vivo, revisado periodicamente. Envolva a alta direção desde o início. A política precisa ser articulada com a política de segurança da informação e a política de governança de dados."
        }
    },

    // =========================================================================
    // 12. DESIGNÇÃO DE RESPONSABILIDADES (PÁGINA 26)
    // =========================================================================
    responsabilidades: {
        titulo: "5. Designação de Responsabilidades no Programa de Gestão",
        descricao: "A designação de responsabilidades é um dos fatores que garantem o êxito da gestão arquivística de documentos. As autoridades responsáveis terão o dever de assegurar o cumprimento das normas e dos procedimentos previstos no programa de gestão.",
        categorias: [
            {
                categoria: "Direção Superior",
                responsabilidades: "Autoridade máxima responsável pela viabilidade da política de gestão arquivística. Deve apoiar integralmente a implantação, alocando recursos humanos, materiais e financeiros, e promovendo o envolvimento de todos no programa."
            },
            {
                categoria: "Profissionais de Arquivo",
                responsabilidades: "Responsáveis pelo planejamento e implantação do programa de gestão arquivística, assim como pela avaliação e controle dos trabalhos executados. Também responsáveis pela disseminação das técnicas e da cultura arquivística."
            },
            {
                categoria: "Gerentes de Unidades ou Grupos de Trabalho",
                responsabilidades: "Responsáveis por garantir que os membros de suas equipes produzam e mantenham documentos como parte de suas tarefas, de acordo com o programa de gestão arquivística."
            },
            {
                categoria: "Usuários Finais",
                responsabilidades: "Responsáveis, em todos os níveis, pela produção e uso dos documentos arquivísticos em suas atividades rotineiras, conforme estabelecido pelo programa de gestão."
            },
            {
                categoria: "Gestores de Sistemas de Informação e TI",
                responsabilidades: "Equipes responsáveis pelo projeto, desenvolvimento e manutenção de sistemas de informação nos quais os documentos arquivísticos digitais são gerados e usados, e pela operacionalização dos sistemas de computação e de comunicação."
            }
        ],
        // Detalhamento para modal
        detalhes: {
            explicacao: "A gestão arquivística não é responsabilidade exclusiva do arquivista. Ela exige o envolvimento de todos: da direção (que aloca recursos) aos usuários finais (que produzem documentos). Cada um tem um papel definido no programa de gestão.",
            implementacao: "Designar formalmente os responsáveis em portaria/instrumento normativo: 1) Diretor-Presidente: aprova a política; 2) Arquivista-Chefe: coordena o programa; 3) Chefes de setor: garantem que suas equipes sigam os procedimentos; 4) Servidores: produzem e classificam documentos; 5) TI: garante infraestrutura e integrações.",
            exemplo: "Em um ministério, o Secretário Executivo assina a Política de Gestão Arquivística; o Coordenador de Arquivo elabora o plano de classificação; os chefes de departamento orientam suas equipes; cada servidor classifica seus processos no SIGAD; a equipe de TI mantém o sistema e faz backups.",
            dicas: "A responsabilidade pela gestão arquivística deve constar nas descrições de cargo. Crie um comitê de governança com representantes de todas as áreas. A comunicação é fundamental: todos devem saber o que é esperado deles."
        }
    },

    // =========================================================================
    // 13. PLANEJAMENTO DO PROGRAMA DE GESTÃO (PÁGINAS 26-27)
    // =========================================================================
    planejamento: {
        titulo: "6. Planejamento do Programa de Gestão Arquivística",
        descricao: "O planejamento envolve o levantamento e a análise da realidade institucional, o estabelecimento das diretrizes e procedimentos a serem cumpridos pelo órgão ou entidade, o desenho do sistema de gestão arquivística e a elaboração de instrumentos e manuais.",
        tarefas: [
            "Levantamento da estrutura organizacional e das atividades desempenhadas",
            "Levantamento da produção documental, diferenciando documentos arquivísticos dos não arquivísticos",
            "Levantamento, caso existam, dos sistemas utilizados internamente para tratamento de documentos e informações",
            "Definição, a partir do levantamento da produção documental, dos tipos de documentos que devem ser mantidos e produzidos, e das informações que devem conter",
            "Definição e/ou aperfeiçoamento da forma desses documentos",
            "Análise e revisão do fluxo dos documentos",
            "Elaboração e/ou revisão do plano de classificação e da tabela de temporalidade e destinação",
            "Definição dos metadados a serem criados no momento da produção do documento e ao longo do seu ciclo de vida",
            "Definição e/ou aperfeiçoamento dos procedimentos de protocolo e de arquivamento dos documentos",
            "Definição e/ou aperfeiçoamento dos procedimentos para acesso, uso e transmissão dos documentos",
            "Definição do ambiente tecnológico que compreende os sistemas (hardware e software), formatos, padrões e protocolos que darão sustentação aos procedimentos de gestão e preservação",
            "Definição da infraestrutura para armazenamento dos documentos não digitais, que compreende espaço físico, mobiliário e acessórios",
            "Definição das equipes de trabalho de arquivo e de tecnologia da informação",
            "Definição de programas de capacitação de pessoal",
            "Elaboração e/ou revisão de manuais e instruções normativas",
            "Definição dos meios de divulgação e de capacitação de pessoal",
            "Definição do plano de ação do programa de gestão, com seus objetivos, metas e estratégias de implantação, divulgação e acompanhamento"
        ],
        // Detalhamento para modal
        detalhes: {
            explicacao: "O planejamento é a etapa em que se conhece a realidade da instituição e se definem os instrumentos e procedimentos. É a base para a implantação bem-sucedida do SIGAD. Sem planejamento, o SIGAD será apenas um repositório de arquivos, não um sistema de gestão arquivística.",
            implementacao: "Etapas práticas: 1) Mapear a estrutura organizacional e as atividades; 2) Inventariar a produção documental (quais documentos, volumes, suportes); 3) Mapear sistemas existentes (protocolo, GED, ERP); 4) Elaborar plano de classificação baseado nas funções; 5) Definir prazos de guarda; 6) Definir metadados; 7) Especificar o SIGAD; 8) Elaborar manuais.",
            exemplo: "Uma universidade mapeia seus processos acadêmicos (matrícula, histórico, diploma), identifica os documentos produzidos (requerimentos, atas, certificados), elabora um plano de classificação (010 - Ensino, 020 - Pesquisa), define prazos (históricos escolares = guarda permanente), e especifica um SIGAD que atenda a todas essas necessidades.",
            dicas: "O planejamento é iterativo. Não espere ter tudo pronto para começar. Comece pelas áreas críticas. Envolva os servidores no levantamento – eles conhecem melhor seus documentos. O plano de classificação deve refletir funções, não estrutura organizacional (que muda)."
        }
    },

    // =========================================================================
    // 14. IMPLANTAÇÃO E EXIGÊNCIAS (CAPÍTULO 7) - PÁGINAS 27-30
    // =========================================================================
    implantacao: {
        titulo: "7. Implantação do Programa de Gestão Arquivística de Documentos",
        descricao: "A implantação do programa de gestão arquivística de documentos envolve a execução e o acompanhamento de ações e projetos, efetuados simultaneamente.",
        exigenciasDocumento: [
            "Refletir corretamente o que foi comunicado, decidido ou a ação implementada",
            "Conter os metadados necessários para documentar a ação",
            "Ser capaz de apoiar as atividades",
            "Prestar contas das atividades realizadas"
        ],
        exigenciasPrograma: [
            "Contemplar o ciclo de vida dos documentos",
            "Garantir o acesso aos documentos",
            "Manter os documentos em ambiente seguro",
            "Reter os documentos somente pelo período estabelecido na tabela de temporalidade e destinação",
            "Implementar estratégias de preservação dos documentos desde a sua produção e pelo tempo que for necessário",
            "Garantir as características do documento arquivístico: relação orgânica, unicidade, confiabilidade, autenticidade e acessibilidade"
        ],
        // Detalhamento para modal
        detalhes: {
            explicacao: "O programa de gestão arquivística deve atender a exigências tanto sobre os documentos quanto sobre o próprio programa. O documento deve refletir fielmente a ação, conter metadados e prestar contas. O programa deve cobrir todo o ciclo de vida, garantir acesso e segurança, e assegurar as cinco características fundamentais do documento arquivístico.",
            implementacao: "Na prática, isso significa: 1) Implementar um plano de classificação que mantenha a relação orgânica; 2) Atribuir identificadores únicos a cada documento; 3) Controlar a produção (autor, data, contexto); 4) Manter integridade com hashes e trilhas de auditoria; 5) Garantir que documentos sejam localizáveis e recuperáveis a qualquer tempo.",
            exemplo: "Um memorando digital assinado eletronicamente: sua relação orgânica é mantida pelo plano de classificação (021.1 - Recrutamento). Sua unicidade é garantida por um UUID. Sua confiabilidade vem de sua completeza (todos os campos preenchidos). Sua autenticidade é comprovada pela assinatura digital. Sua acessibilidade permite que qualquer servidor autorizado o localize em segundos.",
            dicas: "A autenticidade depende da identidade (quem, quando, contexto) e integridade (não foi alterado). A confiabilidade está ligada ao momento da produção – documento deve ser produzido no ato da ação. A acessibilidade exige planejamento de longo prazo, incluindo migração de formatos."
        }
    },

    // =========================================================================
    // 15. METODOLOGIA DE IMPLANTAÇÃO (8 PASSOS) - PÁGINAS 30-33
    // =========================================================================
    metodologiaImplantacao: {
        visaoGeral: "A metodologia do planejamento e da implantação de um programa de gestão arquivística de documentos estabelece oito passos que não são lineares, isto é, podem ser desenvolvidos em diferentes estágios, interativa, parcial ou gradualmente, de acordo com as necessidades do órgão ou entidade.",
        passos: [
            {
                passo: "Passo A",
                nome: "Levantamento Preliminar",
                objetivo: "Conhecer a missão, competências, estrutura organizacional e o contexto jurídico-normativo do órgão para identificar as exigências de criação de documentos.",
                detalhes: "Levantamento de atos normativos, legislação, regimento e regulamento. Apreciação geral dos pontos fortes e fracos das práticas de gestão existentes."
            },
            {
                passo: "Passo B",
                nome: "Análise das Funções e Atividades",
                objetivo: "Mapear o que a instituição faz e como faz (fluxos de trabalho), servindo de base para o Plano de Classificação e Tabela de Temporalidade.",
                detalhes: "Identificar e documentar cada função e atividade, bem como os fluxos de trabalho e os documentos produzidos. Desenvolver um modelo conceitual sobre o que o órgão faz e como faz."
            },
            {
                passo: "Passo C",
                nome: "Identificação das Exigências",
                objetivo: "Determinar quais documentos devem ser obrigatoriamente produzidos, em que forma documental e quem possui autoridade para emiti-los.",
                detalhes: "Identificar quais documentos devem ser produzidos, determinar a forma documental e definir quem está autorizado a produzir cada documento."
            },
            {
                passo: "Passo D",
                nome: "Análise dos Sistemas Existentes",
                objetivo: "Avaliar os sistemas legados e fluxos atuais para identificar lacunas em relação aos requisitos arquivísticos do e-ARQ Brasil.",
                detalhes: "Identificar e analisar o sistema de gestão arquivística e outros sistemas de informação e comunicação existentes. Identificar lacunas entre as exigências e o desempenho dos sistemas existentes."
            },
            {
                passo: "Passo E",
                nome: "Identificação das Estratégias",
                objetivo: "Definir os padrões, políticas de segurança, tecnologias e ferramentas adequadas para atender às necessidades identificadas.",
                detalhes: "Determinar as estratégias (padrões, procedimentos, práticas e ferramentas) que levem ao cumprimento das exigências. Avaliar o potencial de cada estratégia e os riscos em caso de falha."
            },
            {
                passo: "Passo F",
                nome: "Projeto do SIGAD",
                objetivo: "Projetar a arquitetura técnica, modelos de dados, integrações, plano de contingência, testes e cronograma do sistema informatizado.",
                detalhes: "Projetar sistema que incorpore as estratégias selecionadas, atenda às exigências e corrija deficiências. Incluir definição de tarefas, responsabilidades, arquitetura, especificações, plano de segurança e contingência."
            },
            {
                passo: "Passo G",
                nome: "Implementação do SIGAD",
                objetivo: "Executar o projeto: capacitar servidores, homologar o software, integrar com sistemas legados e regulamentar as normas internas.",
                detalhes: "Execução do projeto por meio de treinamento de pessoal, introdução do sistema ou adaptação do existente, integração com procedimentos e sistemas existentes."
            },
            {
                passo: "Passo H",
                nome: "Monitoramento e Ajustes",
                objetivo: "Avaliar sistematicamente o desempenho do SIGAD, realizar auditorias, corrigir deficiências e atualizar instrumentos arquivísticos continuamente.",
                detalhes: "Coletar sistematicamente informação sobre o desempenho do sistema. Avaliar se os documentos estão sendo produzidos e organizados corretamente. Detectar deficiências e fazer ajustes."
            }
        ],
        // Detalhamento para modal
        detalhes: {
            explicacao: "A metodologia de implantação do SIGAD é cíclica e iterativa, baseada na ISO 15489. Os 8 passos não são lineares – podem ser revisitados conforme a maturidade da gestão. O objetivo é construir um programa de gestão que evolui com a instituição.",
            implementacao: "Na prática: 1) Comece pelos Passos A e B (diagnóstico). 2) Faça C e D (requisitos e lacunas). 3) Escolha estratégias (Passo E). 4) Projete o SIGAD (Passo F) com arquitetura modular. 5) Implemente gradualmente (Passo G) – comece por um projeto-piloto. 6) Monitore e ajuste (Passo H) continuamente.",
            exemplo: "Um tribunal: Passo A = mapeia leis e estrutura; B = identifica funções (julgar, administrar); C = define documentos obrigatórios (sentenças, despachos); D = avalia sistema atual; E = define estratégias (assinatura digital, RDC-Arq); F = projeta novo sistema; G = implanta em piloto; H = monitora e ajusta.",
            dicas: "A implantação deve ser gradual – comece por uma área-piloto. Capacite os servidores antes da implantação. A comunicação é essencial – todos devem entender os benefícios. O monitoramento deve ser contínuo, não apenas no final. Revise periodicamente os instrumentos (plano de classificação, tabela de temporalidade)."
        }
    },

    // =========================================================================
    // 16. SUSPENSÃO OU EXTINÇÃO DO SIGAD (PÁGINA 33)
    // =========================================================================
    suspensaoExtincao: {
        titulo: "7.3. Suspensão ou Extinção do SIGAD",
        descricao: "Quando um SIGAD, ou um sistema de negócios que mantém documentos arquivísticos, é suspenso ou extinto, deve ficar acessível para consulta e novos documentos não devem ser incluídos. Quanto aos documentos já inseridos, eles poderão ser removidos de acordo com as diretrizes de destinação ou transferidos para outros sistemas.",
        procedimentos: [
            "O sistema deve permanecer acessível para consulta após a suspensão",
            "Novos documentos não devem ser incluídos durante o período de suspensão",
            "Documentos já inseridos podem ser removidos conforme diretrizes de destinação ou transferidos",
            "O processo de suspensão ou extinção deve ser documentado",
            "Incluir planos de conversão ou mapeamento dos dados",
            "Informações detalhadas serão necessárias à verificação de autenticidade e manutenção do acesso"
        ],
        // Detalhamento para modal
        detalhes: {
            explicacao: "A suspensão ou extinção de um SIGAD é um processo crítico que exige planejamento para garantir que os documentos não sejam perdidos e que sua autenticidade seja preservada. Não se trata apenas de 'desligar o sistema'.",
            implementacao: "Antes de suspender/extinguir: 1) Avaliar a destinação de cada documento (eliminar, transferir, recolher); 2) Exportar documentos para outros sistemas (ex: RDC-Arq); 3) Documentar todo o processo (metadados, conversões, responsáveis); 4) Manter acesso de leitura por um período; 5) Registrar a suspensão nos metadados dos documentos.",
            exemplo: "Um órgão migra do sistema legado SIGAD-A para o novo SIGAD-B. Durante a transição, o SIGAD-A permanece acessível para consulta por 6 meses, com exportação em lote dos documentos para o novo sistema. Um termo de transferência documental é assinado, e os metadados de migração são preservados.",
            dicas: "A suspensão/extinção deve constar no planejamento do programa. Defina um plano de contingência. A documentação do processo (planos de conversão, mapeamentos) deve ser preservada para comprovar a autenticidade futura. Considere a migração para repositórios digitais confiáveis (RDC-Arq)."
        }
    },

    // =========================================================================
    // 17. O QUE É O E-ARQ BRASIL? (PÁGINA 10 E 11)
    // =========================================================================
    oQueE: {
        definicao: "O e-ARQ Brasil é uma especificação de requisitos a serem cumpridos pela organização produtora/recebedora de documentos, pelo sistema de gestão arquivística (SIGAD) e pelos próprios documentos, a fim de garantir sua confiabilidade, autenticidade, integridade e acessibilidade ao longo do tempo.",
        missao: "Estabelecer as condições arquivísticas e tecnológicas necessárias para que os documentos digitais tenham pleno valor probatório e administrativo, mantendo sua cadeia de custódia ininterrupta.",
        publicoAlvo: [
            "Profissionais da Gestão Documental e Arquivistas (planejamento e aplicação de instrumentos arquivísticos)",
            "Profissionais de Tecnologia da Informação (arquitetura, desenvolvimento, contratação e homologação de SIGADs)",
            "Auditores e Órgãos de Controle (auditoria, inspeção de conformidade e governança de dados)",
            "Gestores Públicos e Compradores de TI (elaboração de termos de referência e editais de software)",
            "Instituições de Ensino e Pesquisa (formação e capacitação técnica em gestão arquivística)"
        ],
        abrangencia: "Aplica-se aos setores público e privado em qualquer esfera (federal, estadual, municipal) e a todos os poderes (Executivo, Legislativo e Judiciário), cobrindo tanto as atividades-meio quanto as atividades-fim da organização.",
        naturezaDocumental: "Gerencia simultaneamente documentos digitais (natodigitais e digitalizados), documentos não digitais (papel e microfilmes) e documentos híbridos (processos com frações físicas e digitais).",
        // Detalhamento para modal
        detalhes: {
            explicacao: "O e-ARQ Brasil não é um software, mas um conjunto de regras e requisitos que qualquer software de gestão documental deve cumprir para ser considerado um SIGAD em conformidade. Ele estabelece o 'padrão ouro' para a gestão arquivística digital no Brasil.",
            implementacao: "Para usar o e-ARQ Brasil, a instituição deve: 1) Adotá-lo como referência normativa; 2) Mapear seus processos documentais; 3) Especificar ou adquirir um SIGAD que atenda aos requisitos; 4) Homologar o sistema; 5) Capacitar servidores; 6) Manter conformidade contínua.",
            exemplo: "Um tribunal federal usa o e-ARQ Brasil para especificar seu novo sistema de gestão processual eletrônica. O edital exige conformidade com todos os requisitos funcionais (captura, classificação, temporalidade) e não funcionais (segurança, interoperabilidade).",
            dicas: "O e-ARQ Brasil é útil para: aquisição de software (como referência em editais), desenvolvimento de sistemas (como guia de funcionalidades), auditoria (como checklist de conformidade) e formação profissional (como material didático)."
        }
    },

    // =========================================================================
    // 18. PROCEDIMENTOS E OPERAÇÕES TÉCNICAS (CAPÍTULO 8) - PÁGINAS 34-46
    // =========================================================================
    procedimentosTecnicos: {
        titulo: "8. Procedimentos e Operações Técnicas do Sistema de Gestão Arquivística",
        descricao: "Conjunto de procedimentos e operações técnicas que devem ser executados pelo sistema de gestão arquivística de documentos, abrangendo desde a captura até a preservação dos documentos.",
        operacoes: [
            {
                id: "8.1",
                titulo: "Captura",
                icon: "document_scanner",
                descricao: "Declarar um documento como arquivístico, incorporando-o ao sistema por meio de registro, classificação, indexação, atribuição de restrição de acesso e arquivamento.",
                subitens: [
                    "Registro: formaliza a captura com atribuição de número identificador e metadados",
                    "Classificação: análise e identificação do conteúdo para seleção da classe no plano de classificação",
                    "Indexação: atribuição de termos para descrição do documento usando vocabulário controlado",
                    "Arquivamento: guarda ordenada dos documentos em local apropriado"
                ]
            },
            {
                id: "8.2",
                titulo: "Avaliação, Temporalidade e Destinação",
                icon: "assessment",
                descricao: "Processo de análise dos documentos para estabelecer prazos de guarda e destinação (eliminação ou recolhimento) com base nos valores primário e secundário.",
                subitens: [
                    "Avaliação: análise dos valores primário (administrativo/legal) e secundário (histórico/informativo)",
                    "Tabela de Temporalidade: define prazos de guarda nas fases corrente e intermediária",
                    "Eliminação: destruição de documentos sem valor permanente, com autorização formal",
                    "Transferência: passagem do arquivo corrente para o intermediário",
                    "Recolhimento: entrada de documentos no arquivo permanente"
                ]
            },
            {
                id: "8.3",
                titulo: "Pesquisa, Localização e Apresentação dos Documentos",
                icon: "search",
                descricao: "Funções de recuperação e acesso aos documentos e às informações neles contidas, facilitando a condução das atividades e a transparência.",
                subitens: [
                    "Pesquisa: utilização de metadados e conteúdo textual para localização",
                    "Localização: identificação da posição física ou lógica do documento",
                    "Apresentação: exibição fiel do conteúdo em diferentes dispositivos (tela, impressão, áudio)"
                ]
            },
            {
                id: "8.4",
                titulo: "Segurança: Controle de Acesso, Trilhas de Auditoria e Cópias de Segurança",
                icon: "lock",
                descricao: "Conjunto de controles e procedimentos para garantir a integridade, confidencialidade e disponibilidade dos documentos arquivísticos.",
                subitens: [
                    "Controle de Acesso: restrição por usuários, grupos, papéis e níveis de sigilo",
                    "Trilhas de Auditoria: registro de todas as ações realizadas no sistema",
                    "Cópias de Segurança: backups regulares para recuperação em caso de falhas",
                    "Segurança da Infraestrutura: controle ambiental, contra incêndio e acesso físico"
                ]
            },
            {
                id: "8.5",
                titulo: "Armazenamento",
                icon: "storage",
                descricao: "Guarda dos documentos em local apropriado, com considerações sobre volume, segurança, características físicas, frequência de uso e custo.",
                subitens: [
                    "Memória Primária (RAM): dados em execução, volátil e rápida",
                    "Memória Secundária (HD/SSD): armazenamento permanente de grande volume",
                    "Memória Terciária (Fitas/CD/DVD): armazenamento de longo prazo e backup",
                    "Políticas de migração e atualização de suporte para evitar obsolescência"
                ]
            },
            {
                id: "8.6",
                titulo: "Preservação",
                icon: "settings",
                descricao: "Garantia de que os documentos permaneçam acessíveis e utilizáveis pelo tempo necessário, adotando estratégias proativas de produção e preservação.",
                subitens: [
                    "Atualização de Suporte (Refreshing): cópia para novas mídias antes da degradação",
                    "Conversão de Formatos: migração para formatos abertos e estáveis (ex: PDF/A)",
                    "Emulação: recriação de ambiente tecnológico obsoleto",
                    "Monitoramento: verificação periódica de integridade (checksum/hash)",
                    "Interoperabilidade com RDC-Arq para guarda permanente"
                ]
            }
        ],
        // Detalhamento para modal
        detalhes: {
            explicacao: "As operações técnicas são o coração do SIGAD. Da captura à preservação, cada etapa garante que o documento mantenha sua autenticidade e acessibilidade. A captura é o momento crítico em que o documento é declarado arquivístico. A avaliação define sua temporalidade. A segurança e a preservação garantem sua integridade no longo prazo.",
            implementacao: "No SIGAD, cada operação é implementada como módulo: 1) Captura: formulários, upload, extração de metadados; 2) Avaliação: motor de temporalidade que calcula prazos; 3) Pesquisa: índice de busca (Elasticsearch); 4) Segurança: RBAC, logs, backup; 5) Armazenamento: tiers de storage; 6) Preservação: verificador de hash, migrador de formatos.",
            exemplo: "Um processo judicial digital: 1) Captura: servidor autua o processo, preenche metadados; 2) Avaliação: sistema define prazo de 20 anos (classe 'Processo Judicial'); 3) Pesquisa: qualquer servidor pode buscar por número; 4) Segurança: acesso restrito a usuários autorizados; 5) Armazenamento: em storage com redundância; 6) Preservação: hashes verificados mensalmente.",
            dicas: "A captura deve ser o mais automática possível (extração de metadados). A avaliação não é automática – exige decisão humana (comissão de avaliação). A segurança não é apenas TI – envolve políticas e treinamento. A preservação deve começar na captura (escolha de formatos abertos)."
        }
    },

    // =========================================================================
    // 19. INSTRUMENTOS DE GESTÃO ARQUIVÍSTICA (CAPÍTULO 9) - PÁGINAS 46-49
    // =========================================================================
    instrumentosGestaoDetalhados: {
        titulo: "9. Instrumentos Utilizados na Gestão Arquivística de Documentos",
        descricao: "Instrumentos técnicos essenciais e adicionais para apoiar os procedimentos e operações técnicas de gestão arquivística de documentos.",
        instrumentos: [
            {
                id: "9.1",
                nome: "Plano ou Código de Classificação",
                icon: "folder",
                obrigatoriedade: "Imprescindível",
                descricao: "Esquema de distribuição de documentos em classes, de acordo com métodos de arquivamento específicos, elaborado a partir do estudo das estruturas e funções da instituição.",
                detalhes: "Pode ser codificado (numérico ou alfanumérico) e serve para contextualizar os documentos, agilizar a recuperação e facilitar a destinação."
            },
            {
                id: "9.2",
                nome: "Tabela de Temporalidade e Destinação",
                icon: "calendar_today",
                obrigatoriedade: "Imprescindível",
                descricao: "Instrumento arquivístico que determina prazos de guarda para transferência, recolhimento e eliminação de documentos.",
                detalhes: "Deve conter: identificador de classe, prazos nas fases corrente e intermediária, destinação final e observações. Aprovada pela instituição arquivística competente."
            },
            {
                id: "9.3",
                nome: "Manual de Gestão Arquivística de Documentos",
                icon: "menu_book",
                obrigatoriedade: "Fundamental",
                descricao: "Documento oficial que estabelece procedimentos regulares para produção, tramitação, arquivamento e destinação dos documentos arquivísticos.",
                detalhes: "Contempla definição de documentos, classificação, forma documental, procedimentos de captura e implementação dos instrumentos de gestão."
            },
            {
                id: "9.4",
                nome: "Esquema de Classificação de Acesso e Segurança",
                icon: "lock",
                obrigatoriedade: "Imprescindível",
                descricao: "Definição das categorias de usuários e permissões de acesso e uso do sistema de gestão arquivística para produção, leitura, atualização e eliminação.",
                detalhes: "Controla quem está autorizado a acessar documentos e em que circunstâncias, respeitando a legislação (LAI, LGPD) e as restrições de acesso."
            },
            {
                id: "9.5",
                nome: "Glossário",
                icon: "translate",
                obrigatoriedade: "Recomendado",
                descricao: "Vocabulário afeito à área de gestão arquivística, com definições conceituais dispostas em ordem alfabética, onde os termos não guardam relações entre si.",
                detalhes: "Pode estar anexo ao plano de classificação, à tabela de temporalidade e ao manual de gestão."
            },
            {
                id: "9.6",
                nome: "Vocabulário Controlado e Tesauro",
                icon: "search",
                obrigatoriedade: "Altamente Desejável",
                descricao: "Conjunto de termos padronizados para indexação e recuperação da informação, controlando sinônimos, homônimos, abreviaturas e acrônimos.",
                detalhes: "Tesauro: lista controlada com relações semânticas, hierárquicas, associativas ou de equivalência, com significado e relações explicitados."
            }
        ],
        // Detalhamento para modal
        detalhes: {
            explicacao: "Os instrumentos de gestão são as ferramentas que tornam a gestão arquivística possível. O plano de classificação e a tabela de temporalidade são imprescindíveis – sem eles, não há gestão arquivística. O manual organiza os procedimentos. O esquema de acesso controla quem vê o quê.",
            implementacao: "Implementar: 1) Elaborar plano de classificação baseado nas funções (não na estrutura); 2) Definir tabela de temporalidade com prazos e destinação; 3) Redigir manual com procedimentos claros; 4) Definir perfis de acesso (RBAC); 5) Criar glossário para padronização; 6) Adotar vocabulário controlado (e-PING) para indexação.",
            exemplo: "Um órgão federal utiliza: Plano de Classificação aprovado pelo Arquivo Nacional; Tabela de Temporalidade das Atividades-Meio; Manual de Gestão que detalha cada passo; Esquema de Acesso com perfis (Administrador, Arquivista, Usuário); Glossário com termos técnicos; Vocabulário Controlado da e-PING.",
            dicas: "O plano de classificação deve refletir as FUNÇÕES, não a estrutura organizacional (que muda). A tabela de temporalidade deve ser aprovada pela autoridade arquivística. O manual deve ser prático e acessível. O esquema de acesso deve seguir o princípio do menor privilégio."
        }
    },

    // =========================================================================
    // 20. ESQUEMA DE METADADOS
    // =========================================================================
    esquemaMetadados: {
        definicao: "Dados estruturados que descrevem e permitem encontrar, gerenciar, compreender e preservar documentos arquivísticos ao longo do tempo.",
        premissas: [
            "Complementação dos requisitos do SIGAD, compreendendo a identificação de documentos e as ações de gerenciamento do seu ciclo de vida.",
            "Aproveitamento de elementos de metadados de esquemas similares já consagrados por organismos nacionais e internacionais, visando assegurar a interoperabilidade dos sistemas."
        ],
        metodologia: [
            "Identificação dos metadados referidos no e-ARQ Brasil",
            "Complementação dos metadados a partir de normas e referências bibliográficas das áreas de arquivologia e diplomática",
            "Confronto do levantamento inicial com esquemas, normas e padrões de metadados semelhantes, nacionais e internacionais",
            "Análise, definição e aprovação do esquema"
        ],
        referenciaUtilizada: [
            "ABNT NBR ISO 23081-1:2019 – Informação e documentação – Processos de gestão de documentos de arquivo – Metadados para documentos de arquivo",
            "ISO 15836:2017 – Dublin Core metadata element",
            "e-Government metadata standard – e-GMS, United Kingdom",
            "Metainformação para interoperabilidade de Portugal – MIP",
            "MoReq 2 – Model requirements for the management of electronic records",
            "Padrão de Metadados do Governo Eletrônico – e-PMG, Brasil",
            "PREMIS – Data dictionary for preservation metadata, version 3"
        ],
        entidadesPrincipais: [
            {
                entidade: "Documento",
                descricao: "Refere-se ao documento que foi capturado pelo SIGAD, declarado como arquivístico e incorporado ao sistema. É a entidade mais importante.",
                elementos: 37
            },
            {
                entidade: "Eventos de Gestão do Ciclo de Vida",
                descricao: "Refere-se às ações de gestão que ocorrem com os documentos ao longo de seu ciclo de vida: captura, classificação, desclassificação, eliminação, transferência, recolhimento, restrição de acesso.",
                elementos: 8
            },
            {
                entidade: "Eventos de Gestão do Processo/Dossiê",
                descricao: "Refere-se aos procedimentos de protocolo realizados com os processos: abertura de volume, encerramento de volume, juntada, desapensação, desentranhamento, desmembramento, tramitação.",
                elementos: 7
            },
            {
                entidade: "Classe",
                descricao: "Refere-se aos diversos níveis de agregação do plano de classificação: classes, subclasses, grupos e subgrupos, organizados de forma hierárquica.",
                elementos: 13
            },
            {
                entidade: "Eventos de Gerenciamento da Classe",
                descricao: "Refere-se às ações de manutenção do plano de classificação: abertura, desativação, reativação, mudança de nome, deslocamento, extinção, alterações de prazos e destinação.",
                elementos: 6
            },
            {
                entidade: "Componente Digital",
                descricao: "Refere-se aos objetos digitais que compõem o documento arquivístico digital. São os arquivos de computador que contêm as informações de conteúdo, forma e composição.",
                elementos: 15
            },
            {
                entidade: "Eventos de Preservação",
                descricao: "Refere-se às ações de preservação realizadas nos componentes digitais: compressão, decifração, validação de assinatura, cálculo/verificação de fixidade, migração, replicação, verificação de vírus.",
                elementos: 7
            },
            {
                entidade: "Agente",
                descricao: "Refere-se aos usuários que acessam o SIGAD, responsáveis pelas ações registradas nos eventos.",
                elementos: 3
            }
        ],
        // Detalhamento para modal
        detalhes: {
            explicacao: "Os metadados são a espinha dorsal do SIGAD. Eles descrevem cada documento, seu contexto, eventos e preservação. Sem metadados, um documento digital é apenas um arquivo – com metadados, ele se torna um documento arquivístico com valor probatório.",
            implementacao: "Implementar o esquema de metadados do e-ARQ Brasil: 1) Mapear cada entidade (Documento, Classe, Componente, Eventos, Agente); 2) Definir os elementos obrigatórios (identificador, autor, data, classe); 3) Integrar com padrões internacionais (Dublin Core, PREMIS); 4) Persistir em banco de dados relacional; 5) Expor via APIs para interoperabilidade.",
            exemplo: "Metadados de um processo judicial digital: identificador (UUID), número do processo (0012345-67.2024), autor (Juiz), interessado (Réu), classe (033.1 - Processo Judicial), data (2024-01-01), eventos (captura, tramitação), componentes (PDFs das peças), preservação (hashes das assinaturas).",
            dicas: "Metadados devem ser capturados no ato da produção/captura. Use padrões internacionais (Dublin Core, PREMIS) para interoperabilidade. Eventos de preservação são tão importantes quanto os metadados descritivos. O agente (quem fez o quê) é fundamental para autenticidade."
        }
    },

    // =========================================================================
    // 21. PERGUNTAS FREQUENTES (FAQ)
    // =========================================================================
    faq: [
        {
            pergunta: "O e-ARQ Brasil é um software que posso baixar e instalar?",
            resposta: "Não. O e-ARQ Brasil é uma especificação técnica e funcional (modelo de requisitos). Ele dita as regras que qualquer software (como SEI, Solar BPM, SIGA-Doc ou soluções proprietárias) precisa cumprir para ser considerado um SIGAD em conformidade com as normas nacionais."
        },
        {
            pergunta: "Qual a diferença entre eliminar um arquivo no Windows e eliminar no SIGAD?",
            resposta: "No sistema operacional, o arquivo é simplesmente apagado. No SIGAD, a eliminação é um ato administrativo legal: exige cumprimento da temporalidade, parecer da comissão de avaliação (CPAD), publicação de edital de ciência, emissão de termo formal e destruição física/lógica irreversível, mantendo os metadados arquivados para comprovação jurídica."
        },
        {
            pergunta: "O que torna um documento arquivístico digital autêntico?",
            resposta: "A autenticidade depende da manutenção contínua de sua IDENTIDADE (saber com certeza quem produziu, quando e em qual contexto) e da sua INTEGRIDADE (provar que a cadeia de bits não foi alterada de forma ilegítima desde sua criação, atestada por assinaturas digitais, carimbos do tempo e trilhas de auditoria imutáveis)."
        },
        {
            pergunta: "Por que não podemos armazenar documentos permanentes cifrados?",
            resposta: "A criptografia no longo prazo (mais de 5 anos) representa altíssimo risco de perda definitiva por obsolescência de chaves, perda de senhas ou descontinuidade tecnológica. Documentos de guarda permanente devem ter sua criptografia removida no ato do recolhimento ao arquivo permanente."
        },
        {
            pergunta: "O que é um SIGAD e como ele se diferencia de um GED?",
            resposta: "SIGAD (Sistema Informatizado de Gestão Arquivística) é um sistema que incorpora os conceitos arquivísticos de ciclo de vida, plano de classificação, tabela de temporalidade e relação orgânica entre documentos. GED (Gerenciamento Eletrônico de Documentos) foca em digitalização, busca e workflow, mas não necessariamente incorpora os princípios arquivísticos."
        },
        {
            pergunta: "Quais são os instrumentos essenciais para a gestão arquivística?",
            resposta: "Os instrumentos essenciais são: Plano ou Código de Classificação, Tabela de Temporalidade e Destinação, Manual de Gestão Arquivística e Esquema de Classificação de Acesso e Segurança. Vocabulário controlado e tesauro são instrumentos adicionais altamente desejáveis."
        }
    ],

    // =========================================================================
    // 22. CRÉDITOS E INFORMAÇÕES INSTITUCIONAIS
    // =========================================================================
    creditos: {
        titulo: "Créditos e Informações Institucionais",
        descricao: "Dados de catalogação, equipe de produção e integrantes da Câmara Técnica de Documentos Eletrônicos que participaram da elaboração do e-ARQ Brasil Versão 2."
    }
};