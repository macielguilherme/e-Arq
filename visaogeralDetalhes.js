// visaogeralDetalhes.js
// Detalhamentos completos para o modal da Visão Geral do e-ARQ Brasil
// Cada seção contém: explicacao, implementacao, exemplo e dicas

const detalhesVisaoGeral = {
    // =========================================================================
    // 1. IDENTIFICAÇÃO - Detalhamento
    // =========================================================================
    identificacao: {
        explicacao: "O e-ARQ Brasil Versão 2 foi adotado pelo CONARQ em junho de 2021 e publicado em maio de 2022. É o resultado de um trabalho de revisão de 2017 a 2020, que envolveu estudos teóricos, retroalimentação de iniciativas de adoção de SIGAD e análise de documentos similares internacionais atualizados, como MoReq 2, MoReq 2010, ICA Principles e PREMIS v3.",
        implementacao: "Para utilizar o e-ARQ Brasil como referência, a instituição deve: 1) Conhecer as bases legais (Lei 8.159/91, Decreto 4.073/02, LAI 12.527/11, LGPD 13.709/18, Lei 14.063/20); 2) Acompanhar as resoluções do CONARQ; 3) Alinhar-se às normas internacionais (ISO 15489, ISO 14721/OAIS, ISO 23081); 4) Adotar padrões como e-PING e e-PMG para interoperabilidade.",
        exemplo: "Um arquivo público estadual, ao implementar seu SIGAD, deve observar a Lei de Arquivos (8.159/91) e as resoluções do CONARQ, especialmente a nº 39/2014 sobre RDC-Arq, para garantir que os documentos digitais tenham valor probatório e sejam preservados a longo prazo.",
        dicas: "O e-ARQ Brasil é de domínio público (CC BY 4.0). Pode ser reproduzido livremente com créditos ao CONARQ. A versão 2 incorpora lições aprendidas com implementações reais em órgãos como Unicamp, Câmara dos Deputados e DATAPREV."
    },

    // =========================================================================
    // 2. INTRODUÇÃO - Detalhamento
    // =========================================================================
    introducao: {
        explicacao: "O e-ARQ Brasil foi desenvolvido a partir de referências internacionais consolidadas: o MoReq (Model Requirements for the Management of Electronic Records) da Comissão Europeia (2001), o DoD 5015.2-STD do Departamento de Defesa dos EUA (2002), o modelo do Public Record Office do Reino Unido (2002), o InterPARES Project e a ISO 15489. A decisão de criar um modelo próprio, e não adotar o MoReq diretamente, foi para adequar os procedimentos e conceitos à legislação e tradição administrativa brasileira, que se diferencia do contexto europeu e norte-americano.",
        implementacao: "Para aplicar a introdução na prática: 1) Reconheça que o e-ARQ Brasil é uma referência, não um roteiro inflexível; 2) Adapte os conceitos à realidade da sua instituição; 3) Use a fundamentação teórica (diplomática e arquivologia) para embasar decisões; 4) Considere que os requisitos são mínimos – sua organização pode precisar de mais.",
        exemplo: "Uma universidade federal, ao desenvolver seu sistema de gestão de documentos acadêmicos, usa o e-ARQ Brasil como referência, mas adiciona metadados específicos para histórico escolar (matrícula, curso, período, notas) que não estão contemplados no modelo.",
        dicas: "O e-ARQ Brasil é um documento vivo. A versão 2 atualiza a versão 1 (2006/2009) com base em experiências reais. A participação em consultas públicas (como a realizada para a versão 2) é uma oportunidade para contribuir com melhorias."
    },

    // =========================================================================
    // 3. OBJETIVOS E ÂMBITO - Detalhamento
    // =========================================================================
    objetivosAmbito: {
        explicacao: "O e-ARQ Brasil tem dois objetivos principais: orientar a implantação da gestão arquivística (parte conceitual) e fornecer especificações técnicas para sistemas (parte de requisitos). Ele se aplica a qualquer organização, pública ou privada, que produza documentos arquivísticos, independentemente do suporte (digital, não digital, híbrido).",
        implementacao: "O e-ARQ Brasil pode ser usado de quatro formas principais: 1) Como checklist para avaliar se um sistema existente é um SIGAD; 2) Como especificação em editais de aquisição de software; 3) Como guia para desenvolvimento de sistemas internos; 4) Como material didático para capacitação de servidores e formação acadêmica.",
        exemplo: "Um tribunal de justiça elabora um edital para contratar um novo sistema de gestão processual eletrônica. O edital exige que o software atenda a todos os requisitos funcionais do e-ARQ Brasil (Capítulos 1 a 8) e não funcionais (Capítulos 9 a 15), com comprovação por meio de testes de homologação.",
        dicas: "A abrangência do e-ARQ Brasil é ampla – serve para atividades-meio (administrativas) e atividades-fim (finalísticas). Não se restringe a um ramo de atividade. Pode ser adotado como padrão pela administração pública em todas as esferas e poderes."
    },

    // =========================================================================
    // 4. LIMITES DA ESPECIFICAÇÃO - Detalhamento
    // =========================================================================
    limitesEspecificacao: {
        explicacao: "O e-ARQ Brasil não é uma solução completa e pronta para todas as organizações. Ele estabelece requisitos mínimos, mas cada instituição tem exigências legais, regulamentares e operacionais específicas que podem exigir complementos. Além disso, documentos especiais (imagens, áudio, vídeo, mapas) demandam metadados específicos não contemplados.",
        implementacao: "Para lidar com os limites: 1) Mapeie as necessidades específicas da sua organização; 2) Complemente os requisitos do e-ARQ Brasil com regras próprias; 3) Reclassifique requisitos facultativos ou altamente desejáveis como obrigatórios conforme seu contexto; 4) Implemente metadados adicionais para documentos especiais; 5) Documente todas as adaptações.",
        exemplo: "Um arquivo de mapas históricos precisa de metadados como 'escala', 'coordenadas geográficas', 'projeção cartográfica', 'data do levantamento' e 'precisão' – metadados que não estão no e-ARQ Brasil, mas são essenciais para a gestão desse tipo de documento.",
        dicas: "O sucesso da implementação depende mais da política arquivística e do envolvimento dos profissionais do que do software em si. A interação entre arquivistas e profissionais de TI é fundamental. A adoção pode ser modular – comece pelos capítulos mais críticos para sua realidade."
    },

    // =========================================================================
    // 5. NORMAS E ORIENTAÇÕES DE REFERÊNCIA - Detalhamento
    // =========================================================================
    normasReferencia: {
        explicacao: "O e-ARQ Brasil está alinhado com as principais normas nacionais e internacionais: ISO 15489 (gestão de documentos), ISO 14721/OAIS (preservação em repositórios), ISO 23081 (metadados), ISO 30300/30301/30302 (sistema de gestão de documentos), além das resoluções do CONARQ (que são obrigatórias para o SINAR) e padrões como e-PING e e-PMG (interoperabilidade do governo eletrônico).",
        implementacao: "Na prática: 1) Para órgãos do SINAR, as resoluções do CONARQ são obrigatórias; 2) A ISO 15489 é a referência internacional para gestão de documentos; 3) A ISO 14721 (OAIS) é o modelo para repositórios digitais confiáveis; 4) O PREMIS é o padrão para metadados de preservação; 5) O e-PMG define metadados para interoperabilidade no governo brasileiro.",
        exemplo: "Um RDC-Arq (Repositório Arquivístico Digital Confiável) deve seguir a ISO 14721 (modelo OAIS), a Resolução CONARQ nº 39/2014, e utilizar o PREMIS Data Dictionary para metadados de preservação, garantindo que os documentos possam ser preservados e acessados por décadas.",
        dicas: "Para a administração pública federal, o e-PING estabelece padrões de interoperabilidade. O e-PMG define o padrão de metadados do governo eletrônico. O InterPARES Project fornece diretrizes para autenticidade e preservação de documentos eletrônicos."
    },

    // =========================================================================
    // 6. ORGANIZAÇÃO DA ESPECIFICAÇÃO - Detalhamento
    // =========================================================================
    organizacaoEspecificacao: {
        explicacao: "A especificação está dividida em duas partes complementares. A Parte I (conceitual) explica os fundamentos da gestão arquivística – política, planejamento, procedimentos e instrumentos. A Parte II (prática) lista os requisitos que um SIGAD deve atender, divididos em funcionais (o que o sistema faz) e não funcionais (como o sistema é: desempenho, segurança, usabilidade), além de metadados, glossário e referências.",
        implementacao: "Para usar a especificação: 1) Leia a Parte I para entender os conceitos e fundamentos; 2) Use a Parte II como checklist para o SIGAD; 3) Verifique os requisitos funcionais (Capítulos 1 a 8: organização, captura, avaliação, pesquisa, elaboração, tramitação, segurança, preservação); 4) Verifique os não funcionais (Capítulos 9 a 15: armazenamento, administração, conformidade, usabilidade, interoperabilidade, disponibilidade, desempenho); 5) Consulte o esquema de metadados.",
        exemplo: "Ao especificar um novo SIGAD, o arquivista verifica se o sistema atende ao requisito funcional 2.1.1 (captura com registro, classificação, indexação, restrição e arquivamento) e ao requisito não funcional 12.1.15 (acessibilidade para usuários com deficiência, seguindo WCAG).",
        dicas: "Os capítulos 1 a 8 (funcionais) são obrigatórios para um SIGAD. Os capítulos 5 e 6 (elaboração e tramitação) são obrigatórios apenas se o sistema apoiar produção de documentos. Os capítulos 9 a 15 (não funcionais) devem ser adaptados à realidade de cada instituição."
    },

    // =========================================================================
    // 7. OBRIGATORIEDADE DOS REQUISITOS - Detalhamento
    // =========================================================================
    obrigatoriedadeRequisitos: {
        explicacao: "A classificação de obrigatoriedade (O, AD, F) ajuda a priorizar a implementação do SIGAD. Requisitos obrigatórios (O) são fundamentais para garantir a autenticidade, confiabilidade e acessibilidade dos documentos – sem eles, o sistema não pode ser considerado um SIGAD. Requisitos altamente desejáveis (AD) trazem melhorias significativas. Requisitos facultativos (F) dependem do contexto e da maturidade da instituição.",
        implementacao: "Estratégia de implementação: 1) Garanta 100% dos requisitos obrigatórios – eles são a base; 2) Implemente o máximo possível dos altamente desejáveis – eles fazem a diferença na qualidade; 3) Avalie os facultativos conforme a necessidade – alguns podem se tornar obrigatórios no seu contexto; 4) Documente todas as decisões sobre quais requisitos foram adotados e por quê; 5) Revise periodicamente a classificação conforme a instituição amadurece.",
        exemplo: "O requisito 1.1.1 (plano de classificação com identificador, nome, código, subordinação, permissão de uso e classe ativa/inativa) é OBRIGATÓRIO – sem ele, não há relação orgânica entre documentos. O requisito 12.1.20 (OCR para reconhecimento de caracteres) é FACULTATIVO – pode ser implementado se a instituição tiver muitos documentos escaneados.",
        dicas: "Uma implementação que não inclui um item altamente desejável deve estar preparada para interoperar com outra que o inclui. Metadados facultativos podem se tornar obrigatórios dependendo das necessidades específicas da instituição. A revisão periódica da classificação é recomendada."
    },

    // =========================================================================
    // 8. CONSIDERAÇÕES INICIAIS - Detalhamento
    // =========================================================================
    consideracoesIniciais: {
        explicacao: "A gestão arquivística de documentos evoluiu com a tecnologia. Dos anos 1970 (CPD centralizado) aos anos 1980 (PCs descentralizados) e 1990 (TICs e internet), a produção documental se transformou. Documentos digitais trouxeram vantagens (facilidade de criação, transmissão, armazenamento) mas também desafios: informalidade, vulnerabilidade a alterações não autorizadas, obsolescência tecnológica e degradação de mídias. A solução é um programa de gestão arquivística com procedimentos rigorosos de controle.",
        implementacao: "Para implementar: 1) Reconheça os desafios específicos da sua instituição; 2) Estabeleça um programa de gestão com política, responsabilidades, planejamento e implantação; 3) Adote procedimentos para garantir confiabilidade e autenticidade; 4) Planeje a preservação digital desde a produção; 5) Capacite servidores para a nova cultura documental.",
        exemplo: "Um ministério que, antes da era digital, mantinha apenas processos em papel, hoje precisa gerenciar simultaneamente documentos digitais (PDFs, e-mails, planilhas) e físicos, aplicando os mesmos princípios de classificação e temporalidade a ambos, evitando a perda de informação e garantindo o acesso contínuo.",
        dicas: "A gestão arquivística não é apenas uma questão de TI – é uma mudança cultural que exige conscientização de todos os servidores. Comece com um diagnóstico da produção documental atual. Envolva todas as áreas. O CONARQ e o SINAR são as referências normativas para o setor público brasileiro."
    },

    // =========================================================================
    // 9. BASE CONCEITUAL - Detalhamento
    // =========================================================================
    baseConceitual: {
        explicacao: "A base conceitual estabelece as definições fundamentais: documento é qualquer unidade de registro; documento arquivístico é aquele produzido no curso de uma atividade e retido como prova; documento digital é codificado em dígitos binários. O SIGAD é o sistema que aplica princípios arquivísticos a documentos digitais, mantendo relação orgânica, autenticidade e acessibilidade.",
        implementacao: "Para implementar: 1) Diferencie documentos arquivísticos dos não arquivísticos (pessoais, cópias extras, publicações); 2) Estabeleça um plano de classificação baseado nas funções da instituição; 3) Defina metadados para todos os documentos capturados; 4) Garanta a relação orgânica entre documentos; 5) Aplique tabela de temporalidade para destinação.",
        exemplo: "Um processo de licitação digital contém edital (PDF), planilhas (ODS), pareceres (DOCX) e atas (PDF). O SIGAD trata esse conjunto como uma unidade arquivística indivisível, classificando-o sob a classe 'Licitações', aplicando prazos de guarda e garantindo que todos os componentes sejam preservados juntos.",
        dicas: "Não confunda SIGAD com GED (Gerenciamento Eletrônico de Documentos). O SIGAD incorpora princípios arquivísticos (ciclo de vida, relação orgânica, temporalidade); o GED foca em digitalização e busca, sem necessariamente manter a integridade arquivística. Sistemas de negócio (ERP, RH) produzem documentos que devem ser exportados para o SIGAD."
    },

    // =========================================================================
    // 10. ASPECTOS ESSENCIAIS - Detalhamento
    // =========================================================================
    aspectosEssenciais: {
        explicacao: "A gestão arquivística confere às organizações capacidade de transparência, documentação de decisões, evidência em litígios, proteção de direitos e preservação da memória institucional. O ciclo vital (produção, utilização, destinação) e a teoria das três idades (corrente, intermediária, permanente) são seus pilares. A avaliação define prazos de guarda baseados nos valores primário (administrativo) e secundário (histórico).",
        implementacao: "Para implementar: 1) Mapeie os documentos produzidos em cada atividade; 2) Identifique quais têm valor primário (administrativo, legal, fiscal) e quais têm valor secundário (histórico, probatório); 3) Defina prazos de guarda para cada classe; 4) Aplique a tabela de temporalidade; 5) Garanta que documentos de valor permanente sejam preservados; 6) Elimine apenas os que não têm valor secundário, com autorização formal.",
        exemplo: "Um contrato de aluguel: na idade corrente (vigência), é consultado frequentemente; na intermediária (após vencimento, por 5 anos), ainda tem valor fiscal; após isso, se não tiver valor histórico, é eliminado com autorização da CPAD e edital. Já um processo de tombamento de patrimônio histórico tem valor permanente e vai para o arquivo definitivo, nunca sendo eliminado.",
        dicas: "A avaliação (definição de prazos) é a atividade mais crítica – envolva a comissão de avaliação (CPAD). Documentos com valor secundário NUNCA são eliminados. O CONARQ estabelece critérios para classificação, avaliação e procedimentos de eliminação. A eliminação exige edital, termo e autorização da autoridade arquivística."
    },

    // =========================================================================
    // 11. POLÍTICA ARQUIVÍSTICA - Detalhamento
    // =========================================================================
    politicaArquivistica: {
        explicacao: "A política arquivística é a declaração oficial de intenções da instituição sobre como irá gerenciar seus documentos. Não é um documento burocrático – é o compromisso da alta direção em alocar recursos e apoiar a gestão documental. Sem política, a gestão fica fragmentada, sem diretrizes claras, vulnerável a decisões isoladas e falta de continuidade.",
        implementacao: "Para implementar: 1) Crie um grupo de trabalho com representantes de todas as áreas (arquivo, TI, jurídico, administrativo); 2) Faça diagnóstico da situação atual (o que existe, o que falta); 3) Redija a política alinhada à missão institucional e à legislação; 4) Submeta à aprovação da alta direção (portaria/resolução); 5) Comunique a todos os servidores (publicação, treinamentos); 6) Aloque orçamento e recursos para execução.",
        exemplo: "Um ministério publica a Portaria nº 10/2024 estabelecendo a Política de Gestão Arquivística, determinando: (i) todos os documentos devem ser classificados no SIGAD em até 48h após a produção; (ii) a eliminação só ocorre após aprovação da CPAD e publicação de edital; (iii) a preservação digital é prioridade, com migração para formatos abertos; (iv) treinamento obrigatório para todos os servidores.",
        dicas: "A política deve ser um documento vivo, revisado a cada 2-3 anos. Envolva a alta direção desde o início – sem apoio dela, a política não sairá do papel. A política precisa estar articulada com a política de segurança da informação e a política de governança de dados. Divulgue amplamente."
    },

    // =========================================================================
    // 12. RESPONSABILIDADES - Detalhamento
    // =========================================================================
    responsabilidades: {
        explicacao: "A gestão arquivística não é responsabilidade exclusiva do arquivista. Ela exige o envolvimento de todos os níveis da organização: a direção (que aloca recursos e apoia), os arquivistas (que planejam e orientam), os gerentes (que garantem que suas equipes cumpram os procedimentos), os usuários finais (que produzem e mantêm documentos) e a TI (que garante a infraestrutura e integrações).",
        implementacao: "Designar formalmente os responsáveis: 1) Direção Superior: aprova a política e aloca recursos (Portaria do Presidente/Diretor); 2) Arquivista-Chefe: coordena o programa, elabora instrumentos e orienta (nomeação formal); 3) Chefes de setor: garantem que suas equipes sigam os procedimentos (descrição de cargo); 4) Servidores: produzem, classificam e mantêm documentos (instrução normativa); 5) TI: mantém infraestrutura, backups e integrações (contrato/serviço).",
        exemplo: "Em uma universidade: o Reitor assina a Política de Gestão Arquivística; o Coordenador do Sistema de Arquivos elabora o plano de classificação; os chefes de departamento orientam suas equipes; cada servidor classifica seus processos no SIGAD; a equipe de TI mantém o sistema e faz backups diários.",
        dicas: "A responsabilidade pela gestão arquivística deve constar nas descrições de cargo e no plano de desenvolvimento de pessoal. Crie um comitê de governança com representantes de todas as áreas para acompanhamento. A comunicação é fundamental – todos devem saber qual é o seu papel e por que ele é importante."
    },

    // =========================================================================
    // 13. PLANEJAMENTO - Detalhamento
    // =========================================================================
    planejamento: {
        explicacao: "O planejamento é a etapa em que se conhece a realidade da instituição e se definem os instrumentos e procedimentos. É a base para a implantação bem-sucedida do SIGAD. Sem planejamento, o SIGAD será apenas um repositório de arquivos, não um sistema de gestão arquivística. O planejamento envolve levantamento, análise, definição de procedimentos e elaboração de instrumentos.",
        implementacao: "Etapas práticas: 1) Mapeie a estrutura organizacional e as atividades (organograma, regimento); 2) Inventarie a produção documental (quais documentos, volumes, suportes, sistemas); 3) Analise os fluxos de trabalho (como os documentos tramitam); 4) Elabore o plano de classificação baseado nas funções (não na estrutura); 5) Defina prazos de guarda na tabela de temporalidade; 6) Defina metadados para cada tipo de documento; 7) Especifique o SIGAD (requisitos funcionais e não funcionais); 8) Elabore manuais e instruções.",
        exemplo: "Uma universidade: mapeia processos acadêmicos (matrícula, histórico, diploma, transferência); identifica documentos (requerimentos, atas, certificados, históricos); elabora plano de classificação (010 - Ensino de Graduação, 020 - Ensino de Pós-Graduação, 030 - Pesquisa); define prazos (históricos escolares = guarda permanente, requerimentos = 5 anos); especifica SIGAD com captura, classificação e busca.",
        dicas: "O planejamento é iterativo – revisite os passos conforme avança. Não espere ter tudo pronto para começar – comece pelas áreas críticas. Envolva os servidores no levantamento – eles conhecem melhor seus documentos. O plano de classificação deve refletir funções, não estrutura organizacional (que muda com frequência)."
    },

    // =========================================================================
    // 14. IMPLANTAÇÃO E EXIGÊNCIAS - Detalhamento
    // =========================================================================
    implantacao: {
        explicacao: "A implantação do programa envolve execução e acompanhamento de ações simultâneas. O programa deve atender a exigências: o documento deve refletir a ação, conter metadados, apoiar atividades e prestar contas. O programa deve cobrir o ciclo de vida, garantir acesso e segurança, reter documentos pelo prazo certo, implementar preservação e garantir as cinco características do documento arquivístico.",
        implementacao: "Na prática: 1) Implemente o plano de classificação que mantém a relação orgânica (documentos conectados por função); 2) Atribua identificadores únicos a cada documento (UUID) – unicidade; 3) Controle a produção (autor, data, contexto, procedimentos) – confiabilidade; 4) Mantenha integridade com hashes e trilhas de auditoria – autenticidade; 5) Garanta que documentos sejam localizáveis e recuperáveis a qualquer tempo – acessibilidade.",
        exemplo: "Um memorando digital assinado eletronicamente: sua relação orgânica é mantida pelo plano de classificação (021.1 - Recrutamento e Seleção); sua unicidade é garantida por um UUID único; sua confiabilidade vem de sua completeza (autor, data, destinatário, assunto, texto); sua autenticidade é comprovada pela assinatura digital ICP-Brasil e hash SHA-256; sua acessibilidade permite que qualquer servidor autorizado o localize por busca em segundos.",
        dicas: "Autenticidade = IDENTIDADE (quem, quando, contexto) + INTEGRIDADE (não foi alterado). Confiabilidade está ligada ao MOMENTO DA PRODUÇÃO – documento deve ser produzido no ato da ação. Acessibilidade exige planejamento de longo prazo – migração de formatos, preservação digital. A segurança não é apenas TI – envolve políticas e treinamento."
    },

    // =========================================================================
    // 15. METODOLOGIA DE IMPLANTAÇÃO (8 PASSOS) - Detalhamento
    // =========================================================================
    metodologiaImplantacao: {
        explicacao: "A metodologia de implantação do SIGAD é cíclica e iterativa, baseada na ISO 15489. Os 8 passos não são lineares – podem ser revisitados conforme a maturidade da gestão. O objetivo é construir um programa de gestão que evolui com a instituição, adaptando-se a mudanças tecnológicas, normativas e organizacionais.",
        implementacao: "Na prática: 1) Comece pelos Passos A e B (diagnóstico: conheça a instituição e suas atividades); 2) Faça C e D (requisitos: o que é obrigatório e o que existe); 3) Escolha estratégias no Passo E (padrões, segurança, ferramentas); 4) Projete o SIGAD no Passo F (arquitetura modular, expansível, segura); 5) Implemente gradualmente no Passo G – comece por um projeto-piloto em uma área crítica; 6) Monitore e ajuste no Passo H continuamente.",
        exemplo: "Um tribunal: Passo A = mapeia leis, estrutura e práticas; Passo B = identifica funções (julgar, administrar, executar); Passo C = define documentos obrigatórios (sentenças, despachos, certidões); Passo D = avalia sistema atual (legado, lacunas); Passo E = define estratégias (assinatura digital ICP-Brasil, RDC-Arq, e-PMG); Passo F = projeta novo sistema (arquitetura em camadas, microserviços); Passo G = implanta em piloto na Vara de Família; Passo H = monitora e ajusta para expandir.",
        dicas: "A implantação deve ser GRADUAL – comece por uma área-piloto. CAPACITE os servidores antes da implantação – eles são a chave do sucesso. A COMUNICAÇÃO é essencial – todos devem entender os benefícios. O MONITORAMENTO deve ser contínuo, não apenas no final. Revise PERIODICAMENTE os instrumentos (plano de classificação, tabela de temporalidade)."
    },

    // =========================================================================
    // 16. SUSPENSÃO OU EXTINÇÃO DO SIGAD - Detalhamento
    // =========================================================================
    suspensaoExtincao: {
        explicacao: "A suspensão ou extinção de um SIGAD é um processo crítico que exige planejamento para garantir que os documentos não sejam perdidos e que sua autenticidade seja preservada. Não se trata apenas de 'desligar o sistema' – é um procedimento arquivístico que deve garantir a continuidade do acesso, a integridade dos documentos e a comprovação da cadeia de custódia.",
        implementacao: "Antes de suspender/extinguir: 1) Avalie a destinação de cada documento (eliminar, transferir, recolher) conforme a tabela de temporalidade; 2) Exporte documentos para outros sistemas (ex: RDC-Arq, outro SIGAD); 3) Documente todo o processo (metadados de migração, conversões realizadas, responsáveis); 4) Mantenha acesso de leitura por um período de transição (ex: 6 meses); 5) Registre a suspensão nos metadados dos documentos; 6) Preserve a documentação técnica do sistema extinto.",
        exemplo: "Um órgão federal migra do sistema legado SIGAD-A (desenvolvido em 2008) para o novo SIGAD-B (em conformidade com e-ARQ v2). Durante a transição de 12 meses: o SIGAD-A permanece acessível para consulta (somente leitura); os documentos são exportados em lote com metadados completos (XML + PDF/A); um Termo de Transferência Documental é assinado; os metadados de migração são preservados (data, versão, responsável).",
        dicas: "A suspensão/extinção deve constar no planejamento do programa. Defina um plano de contingência – se algo der errado, como recuperar? A documentação do processo (planos de conversão, mapeamentos de dados, logs de migração) deve ser preservada para comprovar a autenticidade futura. Considere a migração para repositórios digitais confiáveis (RDC-Arq) para documentos de guarda permanente."
    },

    // =========================================================================
    // 17. O QUE É O E-ARQ BRASIL? - Detalhamento
    // =========================================================================
    oQueE: {
        explicacao: "O e-ARQ Brasil não é um software, mas um conjunto de regras e requisitos que qualquer software de gestão documental deve cumprir para ser considerado um SIGAD em conformidade com as normas nacionais. Ele estabelece o 'padrão ouro' para a gestão arquivística digital no Brasil, garantindo que os documentos digitais tenham o mesmo valor probatório que os documentos em papel.",
        implementacao: "Para usar o e-ARQ Brasil: 1) Adote-o como referência normativa na instituição (portaria/resolução); 2) Mapeie seus processos documentais (o que produz, como produz); 3) Especifique ou adquira um SIGAD que atenda aos requisitos (edital com referência ao e-ARQ Brasil); 4) Homologue o sistema (testes de conformidade); 5) Capacite servidores (treinamento); 6) Mantenha conformidade contínua (auditoria, monitoramento).",
        exemplo: "Um tribunal federal publica edital para contratação de sistema de gestão processual eletrônica. O edital exige conformidade com o e-ARQ Brasil Versão 2, listando todos os requisitos funcionais (captura, classificação, temporalidade, segurança) e não funcionais (interoperabilidade, disponibilidade, usabilidade). As propostas são avaliadas com base no atendimento a esses requisitos.",
        dicas: "O e-ARQ Brasil é útil para: AQUISIÇÃO DE SOFTWARE (como referência em editais de licitação); DESENVOLVIMENTO DE SISTEMAS (como guia de funcionalidades); AUDITORIA (como checklist de conformidade); FORMAÇÃO PROFISSIONAL (como material didático em cursos de arquivologia e TI); GESTÃO DOCUMENTAL (como referência para elaboração de políticas e instrumentos)."
    },

    // =========================================================================
    // 18. PROCEDIMENTOS TÉCNICOS - Detalhamento
    // =========================================================================
    procedimentosTecnicos: {
        explicacao: "As operações técnicas são o coração do SIGAD. Da captura à preservação, cada etapa garante que o documento mantenha sua autenticidade e acessibilidade ao longo do tempo. A CAPTURA é o momento crítico em que o documento é declarado arquivístico (registro, classificação, indexação, restrição, arquivamento). A AVALIAÇÃO define sua temporalidade (prazos de guarda). A SEGURANÇA (controle de acesso, trilhas, backup) e a PRESERVAÇÃO (migração, hashes) garantem sua integridade no longo prazo.",
        implementacao: "No SIGAD, cada operação é implementada como módulo funcional: 1) Captura: formulários de entrada, upload de arquivos, extração automática de metadados (autor, data, formato); 2) Avaliação: motor de temporalidade que calcula prazos automaticamente e gera alertas de vencimento; 3) Pesquisa: índice de busca (Elasticsearch) com busca textual e por metadados; 4) Segurança: RBAC (controle de acesso), logs de auditoria, backup automatizado; 5) Armazenamento: tiers de storage (on-line, near-line, off-line); 6) Preservação: verificador de hash (fixidade), migrador de formatos (PDF/A).",
        exemplo: "Um processo judicial digital: 1) Captura: servidor autua o processo (NUP), preenche metadados (partes, juiz, vara), anexa petição inicial (PDF); 2) Avaliação: sistema define prazo de 20 anos (classe 'Processo Judicial' com valor permanente); 3) Pesquisa: qualquer servidor com permissão busca por número ou partes; 4) Segurança: acesso restrito a magistrados e servidores autorizados, com log de todas as visualizações; 5) Armazenamento: em storage com redundância (RAID) e backup diário; 6) Preservação: hashes SHA-256 verificados mensalmente, migração para formatos abertos.",
        dicas: "A captura deve ser o mais AUTOMÁTICA possível (extração de metadados, classificação sugerida). A avaliação não é automática – exige decisão humana da comissão de avaliação (CPAD). A segurança não é apenas TI – envolve políticas e treinamento. A preservação deve começar na captura (escolha de formatos abertos como PDF/A, XML, TIFF)."
    },

    // =========================================================================
    // 19. INSTRUMENTOS DE GESTÃO - Detalhamento
    // =========================================================================
    instrumentosGestaoDetalhados: {
        explicacao: "Os instrumentos de gestão são as ferramentas que tornam a gestão arquivística possível. O PLANO DE CLASSIFICAÇÃO e a TABELA DE TEMPORALIDADE são imprescindíveis – sem eles, não há gestão arquivística, apenas armazenamento de arquivos. O MANUAL organiza os procedimentos para todos os servidores. O ESQUEMA DE ACESSO controla quem pode ver o quê, respeitando LAI, LGPD e sigilos. O GLOSSÁRIO e o VOCABULÁRIO CONTROLADO padronizam a linguagem e a indexação.",
        implementacao: "Implementar: 1) Elabore o plano de classificação baseado nas FUNÇÕES da instituição (não na estrutura organizacional, que muda); 2) Defina a tabela de temporalidade com prazos (corrente, intermediária) e destinação (eliminação, recolhimento); 3) Redija o manual de gestão com procedimentos claros, passo a passo, exemplos; 4) Defina perfis de acesso (RBAC: Administrador, Arquivista, Usuário, Consulta Externa); 5) Crie glossário com termos técnicos; 6) Adote vocabulário controlado (e-PING) para indexação consistente.",
        exemplo: "Um órgão federal utiliza: Plano de Classificação aprovado pelo Arquivo Nacional (Código de Classificação de Documentos das Atividades-Meio); Tabela de Temporalidade e Destinação aprovada pelo CONARQ; Manual de Gestão que detalha cada procedimento (captura, classificação, eliminação); Esquema de Acesso com perfis definidos (Administrador: tudo; Arquivista: gestão; Usuário: consulta e captura; Externo: consulta pública); Glossário com 150 termos arquivísticos; Vocabulário Controlado da Lista de Assuntos de Governo (e-PING).",
        dicas: "O plano de classificação deve refletir as FUNÇÕES, não a estrutura organizacional (que muda com reformas administrativas). A tabela de temporalidade deve ser aprovada pela autoridade arquivística competente (Arquivo Nacional para órgãos federais). O manual deve ser PRÁTICO e ACESSÍVEL, com exemplos e fluxogramas. O esquema de acesso deve seguir o princípio do MENOR PRIVILÉGIO (cada usuário tem apenas as permissões necessárias)."
    },

    // =========================================================================
    // 20. ESQUEMA DE METADADOS - Detalhamento
    // =========================================================================
    esquemaMetadados: {
        explicacao: "Os metadados são a espinha dorsal do SIGAD. Eles descrevem cada documento (identidade), seu contexto (classe, processo), eventos (captura, tramitação, eliminação) e preservação (hashes, migrações). Sem metadados, um documento digital é apenas um arquivo – com metadados, ele se torna um DOCUMENTO ARQUIVÍSTICO com identidade, contexto, autenticidade e valor probatório.",
        implementacao: "Implementar o esquema de metadados do e-ARQ Brasil: 1) Mapeie cada entidade (Documento, Classe, Componente Digital, Eventos, Agente); 2) Defina os elementos obrigatórios (identificador, autor, data, classe, etc.); 3) Integre com padrões internacionais (Dublin Core para descrição, PREMIS para preservação); 4) Persista em banco de dados relacional (tabelas normalizadas); 5) Exponha via APIs REST para interoperabilidade; 6) Garanta a integridade referencial entre entidades.",
        exemplo: "Metadados de um processo judicial digital: Identificador: UUID 550e8400-e29b-41d4-a716-446655440000; Número do processo: 0012345-67.2024.8.26.0100; Autor (criador): Juiz de Direito Dr. Carlos Silva; Interessado (parte): João da Silva; Classe: 033.1 - Processo Judicial (Prazo: 20 anos, Destinação: Guarda Permanente); Data de produção: 2024-01-15T10:00:00Z; Eventos: Captura (2024-01-15, por servidor Maria), Tramitação (2024-02-01, para Vara Cível), Arquivamento (2024-12-01); Componentes: peticao_inicial.pdf (hash SHA-256: a1b2c3...), despacho.pdf (hash SHA-256: d4e5f6...); Preservação: hash verificado em 2025-01-01 (OK), formato PDF/A-1b.",
        dicas: "Metadados devem ser capturados no ato da PRODUÇÃO/CAPTURA, não depois. Use padrões internacionais (Dublin Core, PREMIS) para INTEROPERABILIDADE entre sistemas. Eventos de preservação (hashes, migrações) são tão importantes quanto os metadados descritivos. O AGENTE (quem fez o quê, quando) é fundamental para AUTENTICIDADE e trilha de auditoria."
    },

    // =========================================================================
    // 21. FAQ - Detalhamentos individuais
    // =========================================================================
    faq: {
        "O e-ARQ Brasil é um software que posso baixar e instalar?": {
            explicacao: "O e-ARQ Brasil é uma especificação, não um software. Ele define requisitos que um software (como SEI, Solar BPM, SIGA-Doc) precisa cumprir para ser considerado um SIGAD. É como um 'manual de construção' para sistemas de gestão documental.",
            implementacao: "Para usar o e-ARQ Brasil, você deve: 1) Baixar o PDF do site do CONARQ; 2) Estudar os requisitos; 3) Usá-los como referência em editais ou desenvolvimento de sistemas; 4) Verificar se seu software atual atende aos requisitos; 5) Planejar adequações se necessário.",
            exemplo: "Uma empresa de tecnologia desenvolve um SIGAD para o mercado. Ela usa o e-ARQ Brasil como referência para garantir que seu software atenda a todos os requisitos funcionais e não funcionais, podendo então comercializá-lo como 'em conformidade com o e-ARQ Brasil'.",
            dicas: "O e-ARQ Brasil é gratuito e de domínio público. Baixe a versão atualizada no site do CONARQ. Use-o como checklist em auditorias de conformidade."
        },
        "Qual a diferença entre eliminar um arquivo no Windows e eliminar no SIGAD?": {
            explicacao: "No Windows, deletar um arquivo o envia para a Lixeira, onde pode ser recuperado. Não há controle, autorização ou registro. No SIGAD, a eliminação é um ATO ADMINISTRATIVO LEGAL: exige cumprimento da temporalidade (prazo de guarda), parecer da CPAD, edital de ciência, termo de eliminação e destruição irreversível, com metadados preservados para comprovação jurídica.",
            implementacao: "O SIGAD implementa a eliminação com: 1) Verificação automática do prazo de guarda; 2) Requisição de autorização da CPAD; 3) Geração de Listagem de Eliminação e Edital; 4) Confirmação do administrador; 5) Destruição irreversível (sobrescrita de dados ou trituração); 6) Registro em metadados (data, motivo, responsável); 7) Preservação dos metadados para comprovação.",
            exemplo: "Um processo de prestação de contas: prazo de guarda de 5 anos. Após 5 anos, o sistema alerta a CPAD. A comissão analisa, aprova a eliminação. O sistema gera a Listagem de Eliminação (200 processos). O edital é publicado no Diário Oficial. Após 15 dias, o administrador confirma a eliminação. Os arquivos são sobrescritos (sanitização) e os metadados são mantidos: 'Processo eliminado em 15/01/2025, Termo nº 03/2025'.",
            dicas: "A eliminação no SIGAD é IRREVERSÍVEL – não há lixeira ou recuperação. A eliminação só pode ocorrer após DESCLASSIFICAÇÃO de documentos sigilosos. Documentos sob litígio ou investigação NÃO podem ser eliminados. Mantenha os metadados dos documentos eliminados para comprovação jurídica."
        },
        "O que torna um documento arquivístico digital autêntico?": {
            explicacao: "A autenticidade é composta por IDENTIDADE (saber quem produziu, quando, onde, em qual contexto) e INTEGRIDADE (provar que o documento não foi alterado desde sua criação). Isso é atestado por assinaturas digitais (ICP-Brasil), carimbos do tempo (ACT), hashes criptográficos (SHA-256) e trilhas de auditoria imutáveis. Um documento autêntico é o que diz ser, livre de adulterações.",
            implementacao: "Para garantir autenticidade: 1) Capture metadados de identidade (autor, data, local, contexto); 2) Aplique assinatura digital (ICP-Brasil) com certificado válido; 3) Aposte carimbo do tempo (ACT) para comprovar existência na data; 4) Calcule e armazene hash SHA-256 do documento (fixidade); 5) Mantenha trilhas de auditoria imutáveis (tabela append-only); 6) Verifique periodicamente a integridade (recalcular hash e comparar).",
            exemplo: "Um contrato assinado digitalmente: o PDF contém a assinatura ICP-Brasil com certificado válido; o carimbo do tempo (ACT) comprova que foi assinado em 15/01/2024 às 10:00; o hash SHA-256 do PDF é calculado e armazenado; a trilha de auditoria registra quem visualizou, imprimiu, baixou o documento; mensalmente, o sistema recalcula o hash e confirma que não houve alteração.",
            dicas: "IDENTIDADE = elementos intrínsecos (autor, data, local) + elementos extrínsecos (assinatura, selo). INTEGRIDADE = hash + trilhas de auditoria. A PRESUNÇÃO DE AUTENTICIDADE (Res. CONARQ 37/2012) é a inferência de autenticidade a partir de procedimentos controlados de produção e manutenção."
        },
        "Por que não podemos armazenar documentos permanentes cifrados?": {
            explicacao: "A criptografia no longo prazo (mais de 5 anos) representa altíssimo risco de perda definitiva por obsolescência de chaves, perda de senhas ou descontinuidade tecnológica. Documentos de guarda permanente devem estar em formato aberto e legível, não cifrados, para garantir acesso futuro. O ICA define 'longo prazo' como mais de 5 anos.",
            implementacao: "Para documentos de guarda permanente: 1) Remova a criptografia antes do recolhimento ao arquivo permanente; 2) Converta para formatos abertos e estáveis (PDF/A, XML, TIFF); 3) Documente a desclassificação e remoção de criptografia; 4) Preserve os metadados originais; 5) Mantenha o documento em repositório confiável (RDC-Arq) com controles de acesso, não criptografia.",
            exemplo: "Um processo sigiloso (Reservado) com 10 anos de prazo de sigilo. Após a desclassificação (torna-se ostensivo), ele é recolhido ao arquivo permanente. Antes do recolhimento, a criptografia é removida, o documento é convertido para PDF/A, e o termo de desclassificação é anexado. O documento fica acessível para pesquisa histórica, sem risco de perda de chave.",
            dicas: "A criptografia é útil para TRANSMISSÃO segura, mas não para ARMAZENAMENTO de longo prazo. Para documentos sigilosos, use CONTROLE DE ACESSO (perfis, credenciais) em vez de criptografia. Documentos de guarda permanente devem ser OSTENSIVOS (desclassificados) e em FORMATOS ABERTOS."
        },
        "O que é um SIGAD e como ele se diferencia de um GED?": {
            explicacao: "SIGAD (Sistema Informatizado de Gestão Arquivística) é um sistema que incorpora os conceitos arquivísticos: ciclo de vida (produção, uso, destinação), plano de classificação (relação orgânica), tabela de temporalidade (prazos de guarda), autenticidade (identidade + integridade) e acessibilidade. GED (Gerenciamento Eletrônico de Documentos) foca em digitalização, busca e workflow, mas NÃO incorpora necessariamente os princípios arquivísticos.",
            implementacao: "Para diferenciar: 1) Verifique se o sistema mantém RELAÇÃO ORGÂNICA (documentos vinculados por função, não por pastas); 2) Verifique se aplica TABELA DE TEMPORALIDADE (prazos de guarda e destinação); 3) Verifique se tem CONTROLE DE AUTENTICIDADE (assinatura, hash, auditoria); 4) Verifique se suporta PRESERVAÇÃO DE LONGO PRAZO (migração de formatos). Se não tiver esses elementos, é GED, não SIGAD.",
            exemplo: "Um GED pode armazenar contratos em pastas por ano, permitir busca por texto e workflow de aprovação. Mas não aplica plano de classificação funcional (contratos de aluguel vs. contratos de prestação de serviços), não controla prazos de guarda (quando eliminar), não mantém hash de integridade. Um SIGAD faria tudo isso, garantindo que os contratos tenham valor probatório por décadas.",
            dicas: "O SIGAD é mais adequado para DOCUMENTOS ARQUIVÍSTICOS (com valor probatório e de longo prazo). O GED é adequado para DOCUMENTOS OPERACIONAIS (de uso temporário). Idealmente, integre ambos: documentos produzidos em GED/sistemas de negócio são CAPTURADOS no SIGAD para receber tratamento arquivístico."
        },
        "Quais são os instrumentos essenciais para a gestão arquivística?": {
            explicacao: "Os instrumentos essenciais são: PLANO DE CLASSIFICAÇÃO (organiza os documentos por função), TABELA DE TEMPORALIDADE E DESTINAÇÃO (define prazos e destinação), MANUAL DE GESTÃO ARQUIVÍSTICA (procedimentos), ESQUEMA DE CLASSIFICAÇÃO DE ACESSO E SEGURANÇA (controle de quem acessa). Instrumentos adicionais: GLOSSÁRIO (padronização de termos) e VOCABULÁRIO CONTROLADO/TESAURO (indexação consistente).",
            implementacao: "Implementar: 1) Plano de classificação: baseado nas funções, com identificador, nome, código, subordinação, permissão de uso e status (ativo/inativo); 2) Tabela de temporalidade: com identificador de classe, prazos (corrente/intermediária), eventos de contagem, destinação final; 3) Manual: com definição de documentos, classificação, forma documental, captura, tramitação; 4) Esquema de acesso: com perfis (administrador, arquivista, usuário, externo) e permissões.",
            exemplo: "Um órgão federal tem: Plano de Classificação (Código de Classificação de Documentos das Atividades-Meio); Tabela de Temporalidade e Destinação aprovada pelo Arquivo Nacional; Manual de Gestão (Portaria nº 10/2024); Esquema de Acesso (perfis definidos em sistema de controle); Glossário (anexo ao manual); Vocabulário Controlado (Lista de Assuntos de Governo - e-PING).",
            dicas: "O plano de classificação deve refletir FUNÇÕES, não estrutura (que muda). A tabela de temporalidade deve ser APROVADA pela autoridade arquivística. O manual deve ser PRÁTICO e ACESSÍVEL (não apenas um documento formal). O esquema de acesso deve seguir o MENOR PRIVILÉGIO (cada um só tem o que precisa)."
        }
    }
};