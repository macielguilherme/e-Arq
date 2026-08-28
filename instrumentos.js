// instrumentos.js
const dadosInstrumentos = {
    descricao: "Detalhamento completo dos instrumentos técnicos utilizados na gestão arquivística de documentos, conforme o e-ARQ Brasil. Estes instrumentos são fundamentais para a implementação de um programa de gestão arquivística eficaz.",
    instrumentos: [
        // =====================================================================
        // INSTRUMENTO 1 - PLANO DE CLASSIFICAÇÃO
        // =====================================================================
        {
            id: "1",
            nome: "Plano ou Código de Classificação de Documentos",
            icone: "folder",
            obrigatoriedade: "Imprescindível",
            cor: "primary",
            definicao: "Esquema de distribuição de documentos em classes, de acordo com métodos de arquivamento específicos, elaborado a partir do estudo das estruturas e funções de uma instituição e da análise do arquivo por ela produzido.",
            objetivo: [
                "Estabelecer a relação orgânica dos documentos arquivísticos",
                "Assegurar que os documentos sejam identificados de forma consistente ao longo do tempo",
                "Auxiliar a recuperação de todos os documentos arquivísticos relacionados a determinada função ou atividade",
                "Possibilitar a avaliação de um grupo de documentos de forma que os documentos associados sejam transferidos, recolhidos ou eliminados em conjunto"
            ],
            estrutura: [
                "Identificador da classe",
                "Nome da classe",
                "Código da classe",
                "Subordinação da classe",
                "Indicação de permissão de uso",
                "Indicação de classe ativa/inativa"
            ],
            niveis: [
                {
                    nivel: "Classe",
                    descricao: "Primeiro nível hierárquico, representa as grandes áreas de atuação da instituição",
                    exemplo: "020 - ADMINISTRAÇÃO GERAL"
                },
                {
                    nivel: "Subclasse",
                    descricao: "Segundo nível, subdivide a classe em áreas mais específicas",
                    exemplo: "021 - ADMINISTRAÇÃO GERAL: PESSOAL"
                },
                {
                    nivel: "Grupo",
                    descricao: "Terceiro nível, agrupa atividades relacionadas",
                    exemplo: "021.1 - ADMINISTRAÇÃO GERAL: PESSOAL: RECRUTAMENTO E SELEÇÃO"
                },
                {
                    nivel: "Subgrupo",
                    descricao: "Quarto nível, nível mais específico da classificação",
                    exemplo: "021.11 - ADMINISTRAÇÃO GERAL: PESSOAL: RECRUTAMENTO E SELEÇÃO: CANDIDATOS A CARGO PÚBLICO"
                }
            ],
            implementacao: [
                "Criar tabela de classes com campos: ID, nome, código, parent_id, permite_classificacao (bool), ativa (bool)",
                "Estrutura em árvore auto-relacionada (parent_id) permitindo profundidade multinível flexível",
                "Gerador automático de código de nível (ex: 021.1, 021.1.1)",
                "Índice único para garantir que os termos completos sejam únicos",
                "Validação para evitar ciclos (uma classe não pode ser filha de si mesma)"
            ],
            exemplos: [
                {
                    titulo: "Exemplo de Classe",
                    descricao: "Classe 021.1 - RECRUTAMENTO E SELEÇÃO",
                    detalhe: "Subordinada a 021, ativa e com permissão direta para classificação de documentos de recrutamento"
                },
                {
                    titulo: "Exemplo de Termo Completo",
                    descricao: "Identificação completa da classe na hierarquia",
                    detalhe: "MATERIAL: AQUISIÇÃO: MATERIAL PERMANENTE: COMPRA"
                },
                {
                    titulo: "Exemplo de Classe Agrupadora",
                    descricao: "Classes que não permitem classificação direta",
                    detalhe: "021 - ADMINISTRAÇÃO GERAL:PESSOAL (não permite classificar documentos diretamente)"
                }
            ],
            dicas: [
                "Baseie o plano nas funções e atividades da instituição, não em sua estrutura organizacional temporária",
                "Mantenha controle de versão do plano para rastrear alterações históricas",
                "Garanta integridade referencial para evitar classes órfãs",
                "Classes inativas devem ser mantidas para permitir consulta a documentos antigos",
                "Permita que apenas usuários autorizados (arquivistas/administradores) possam alterar o plano"
            ]
        },

        // =====================================================================
        // INSTRUMENTO 2 - TABELA DE TEMPORALIDADE
        // =====================================================================
        {
            id: "2",
            nome: "Tabela de Temporalidade e Destinação de Documentos",
            icone: "calendar_today",
            obrigatoriedade: "Imprescindível",
            cor: "tertiary",
            definicao: "Instrumento arquivístico que determina prazos de guarda tendo em vista a transferência, recolhimento e eliminação de documentos, com base nos valores primário e secundário atribuídos aos documentos.",
            objetivo: [
                "Conservar os documentos necessários ao cumprimento de obrigações legais e de prestação de contas",
                "Conservar os documentos importantes para a memória corporativa",
                "Eliminar os documentos que não são mais necessários",
                "Atender às necessidades e interesses de pessoas ou instituições externas"
            ],
            estrutura: [
                {
                    campo: "Identificador da classe",
                        descricao: "Código que identifica a classe no plano de classificação"
                },
                {
                    campo: "Prazo de guarda na idade corrente",
                    descricao: "Período em que o documento é frequentemente consultado, exigindo permanência junto às unidades organizacionais"
                },
                {
                    campo: "Evento de contagem na idade corrente",
                    descricao: "Evento que dispara o início da contagem do prazo de guarda na idade corrente"
                },
                {
                    campo: "Prazo de guarda na idade intermediária",
                    descricao: "Período em que o documento ainda é necessário à administração, porém com uso pouco frequente"
                },
                {
                    campo: "Evento de contagem na idade intermediária",
                    descricao: "Evento que dispara o início da contagem do prazo de guarda na idade intermediária"
                },
                {
                    campo: "Destinação final",
                    descricao: "Decisão final: eliminação ou guarda permanente (recolhimento)"
                },
                {
                    campo: "Sigilo associado à classe",
                    descricao: "Restrição de acesso aplicada de forma geral aos documentos da classe"
                },
                {
                    campo: "Observações",
                    descricao: "Informações adicionais relevantes para a aplicação da tabela"
                }
            ],
            prazos: [
                {
                    idade: "Corrente",
                    descricao: "Documentos em curso ou consultados frequentemente. Prazos variam conforme a natureza do documento.",
                    exemplo: "5 anos a contar do arquivamento"
                },
                {
                    idade: "Intermediária",
                    descricao: "Documentos com uso pouco frequente, aguardando destinação final.",
                    exemplo: "10 anos a contar da transferência"
                }
            ],
            eventos: [
                {
                    evento: "Abertura de dossiê/processo",
                    descricao: "Início da contagem a partir da data de autuação do processo"
                },
                {
                    evento: "Arquivamento de dossiê/processo",
                    descricao: "Início da contagem a partir da data em que o processo foi arquivado"
                },
                {
                    evento: "Desarquivamento",
                    descricao: "Reinício da contagem após reativação de processo"
                },
                {
                    evento: "Eventos específicos",
                    descricao: "Eventos como 'aprovação de contas', 'fim da vigência', 'trânsito em julgado'"
                }
            ],
            implementacao: [
                "Vincular a tabela 1:1 com as classes terminais do plano de classificação",
                "Campos numéricos inteiros para quantidade acompanhados de unidade de medida ('meses' ou 'anos')",
                "Triggers e rotinas cron que calculam a data de expiração da guarda",
                "Permissão de segurança GERENCIAR_TEMPORALIDADE associada a papéis de arquivista e administrador",
                "Tabela de versionamento registrando versão da regra, valor anterior, valor novo, responsável e data/hora"
            ],
            exemplos: [
                {
                    titulo: "Exemplo para Classe 021.1 - Recrutamento e Seleção",
                    descricao: "Documentos de candidatos a cargo público",
                    detalhe: "Corrente: 2 anos (a contar do arquivamento); Intermediária: 5 anos; Destinação: Eliminação"
                },
                {
                    titulo: "Exemplo para Classe 033.1 - Apuração de Responsabilidade",
                    descricao: "Processos disciplinares",
                    detalhe: "Corrente: 5 anos (a contar do encerramento); Intermediária: 10 anos; Destinação: Guarda Permanente"
                },
                {
                    titulo: "Exemplo de Evento Específico",
                    descricao: "Evento que não pode ser detectado automaticamente",
                    detalhe: "'5 anos a contar da data de aprovação das contas' - deve ser informado pelo usuário autorizado"
                }
            ],
            dicas: [
                "A tabela deve ser aprovada pela instituição arquivística competente (no caso do SINAR)",
                "Alterações na tabela só podem ser feitas como resultado de processo de reavaliação",
                "Acompanhe automaticamente os prazos de guarda para cada dossiê/processo",
                "Gere relatórios de documentos com prazos vencidos ou a vencer",
                "Sempre peça confirmação antes de realizar ações de destinação"
            ]
        },

        // =====================================================================
        // INSTRUMENTO 3 - MANUAL DE GESTÃO
        // =====================================================================
        {
            id: "3",
            nome: "Manual de Gestão Arquivística de Documentos",
            icone: "menu_book",
            obrigatoriedade: "Fundamental",
            cor: "secondary",
            definicao: "Documento oficial da instituição que estabelece procedimentos regulares para produção, tramitação, arquivamento e destinação dos documentos arquivísticos, de acordo com as normas e a legislação vigente.",
            objetivo: [
                "Padronizar os procedimentos de gestão documental em toda a instituição",
                "Orientar os servidores sobre suas responsabilidades na produção e manutenção de documentos",
                "Garantir a consistência e a qualidade da gestão arquivística",
                "Servir como referência para treinamento e capacitação de pessoal"
            ],
            conteudo: [
                {
                    secao: "Definição e identificação de documentos",
                    descricao: "Identificação de todos os documentos arquivísticos produzidos e separação dos documentos não arquivísticos (pessoais, cópias extras, publicações)"
                },
                {
                    secao: "Classificação de documentos",
                    descricao: "Procedimentos para classificação dos documentos de acordo com o plano de classificação"
                },
                {
                    secao: "Classificação de segurança e sigilo",
                    descricao: "Procedimentos para classificação quanto a segurança e sigilo, e sua desclassificação"
                },
                {
                    secao: "Forma documental",
                    descricao: "Definição de logomarca, título, numeração, local, data, origem, destinatário, assunto, anexos, normas de redação, formas de tratamento, assinatura"
                },
                {
                    secao: "Captura e registro",
                    descricao: "Procedimentos para captura, registro, autuação, recebimento, tramitação, distribuição, expedição e reprodução dos documentos"
                },
                {
                    secao: "Instrumentos de gestão",
                    descricao: "Procedimentos para implementação do plano de classificação, da tabela de temporalidade e destinação"
                }
            ],
            implementacao: [
                "Elaborar em formato acessível (PDF, HTML, Wiki) com linguagem clara",
                "Estruturar por perfis de usuário (servidor, gestor, arquivista)",
                "Incluir exemplos práticos e fluxogramas",
                "Manter atualizado com as mudanças normativas",
                "Disponibilizar em meio digital para consulta rápida"
            ],
            exemplos: [
                {
                    titulo: "Exemplo de Procedimento",
                    descricao: "Captura de documentos",
                    detalhe: "Passo a passo: 1) Preencher metadados obrigatórios; 2) Selecionar classe; 3) Atribuir nível de acesso; 4) Anexar arquivo; 5) Confirmar captura"
                },
                {
                    titulo: "Exemplo de Forma Documental",
                    descricao: "Definição de ofício oficial",
                    detalhe: "Brasão da República, título 'Ofício nº XX/ANO-SETOR', data, destinatário, assunto, texto, assinatura com cargo"
                }
            ],
            dicas: [
                "Envolva os servidores na elaboração do manual para maior adesão",
                "Disponibilize o manual em diferentes formatos (digital e impresso)",
                "Promova treinamentos periódicos sobre o conteúdo do manual",
                "Crie versões resumidas (checklists) para tarefas do dia a dia",
                "Registre a data de atualização do manual"
            ]
        },

        // =====================================================================
        // INSTRUMENTO 4 - ESQUEMA DE CLASSIFICAÇÃO DE ACESSO
        // =====================================================================
        {
            id: "4",
            nome: "Esquema de Classificação de Acesso e Segurança",
            icone: "lock",
            obrigatoriedade: "Imprescindível",
            cor: "error",
            definicao: "Matriz que estabelece categorias de usuários, perfis de acesso, hipóteses legais de restrição (LGPD, sigilo fiscal/bancário) e graus de sigilo (Reservado, Secreto, Ultrassecreto) para controle de acesso aos documentos.",
            objetivo: [
                "Controlar quem está autorizado a acessar os documentos arquivísticos",
                "Definir em que circunstâncias o acesso é permitido",
                "Aplicar restrições de acesso a usuários internos e externos",
                "Garantir a conformidade com a legislação (LAI, LGPD)"
            ],
            niveisAcesso: [
                {
                    nivel: "Ostensivo",
                    descricao: "Documento público, sem restrição de acesso",
                    exemplo: "Relatórios anuais, portarias, comunicados"
                },
                {
                    nivel: "Reservado",
                    descricao: "Informação cujo conhecimento irrestrito pode prejudicar a segurança da sociedade ou do Estado",
                    exemplo: "Documentos de planejamento estratégico"
                },
                {
                    nivel: "Secreto",
                    descricao: "Informação com maior grau de sigilo, cujo conhecimento irrestrito pode causar grave risco à segurança",
                    exemplo: "Documentos de defesa nacional"
                },
                {
                    nivel: "Ultrassecreto",
                    descricao: "Máximo grau de sigilo, para informações de extrema sensibilidade",
                    exemplo: "Documentos de inteligência estratégica"
                },
                {
                    nivel: "Restrição Legal",
                    descricao: "Sigilo fiscal, bancário, industrial, telefônico, segredo de justiça, dados pessoais (LGPD)",
                    exemplo: "Prontuários médicos, dados bancários, processos judiciais sob segredo de justiça"
                }
            ],
            controlesAcesso: [
                {
                    tipo: "RBAC (Role-Based Access Control)",
                    descricao: "Controle de acesso baseado em papéis/funções do usuário",
                    exemplo: "Arquivista: pode classificar e eliminar; Estagiário: apenas leitura"
                },
                {
                    tipo: "ABAC (Attribute-Based Access Control)",
                    descricao: "Controle baseado em atributos do usuário e do documento",
                    exemplo: "Acesso permitido se credencial do usuário ≥ grau de sigilo do documento"
                },
                {
                    tipo: "Grupos de Usuários",
                    descricao: "Controle por grupos de trabalho ou unidades administrativas",
                    exemplo: "Membros do grupo 'Assessoria Jurídica' têm acesso à classe 'Consultas Jurídicas'"
                }
            ],
            implementacao: [
                "Tabela de usuários com campos: id, nome, credencial_seguranca, perfis",
                "Tabela de documentos com campo: nivel_acesso (ostensivo, reservado, secreto, ultrassecreto)",
                "Validação de credenciamento: o usuário só abre documentos sigilosos se sua credencial for igual ou superior ao grau do documento",
                "Registro na trilha de auditoria de todas as tentativas de acesso",
                "Armazenamento de documentos sigilosos em meios físicos ou lógicos distintos"
            ],
            exemplos: [
                {
                    titulo: "Matriz de Acesso",
                    descricao: "Relação entre perfil do usuário e grau de sigilo permitido",
                    detalhe: "Diretor-Geral: Ultrassecreto; Chefe de Gabinete: Secreto; Arquivista: Reservado; Estagiário: Ostensivo"
                },
                {
                    titulo: "Controle de Acesso por Papel",
                    descricao: "Permissões associadas a cada função",
                    detalhe: "Papel 'Protocolista': pode autuar processos; Papel 'Arquivista': pode classificar e eliminar; Papel 'Usuário': apenas leitura"
                }
            ],
            dicas: [
                "Adote o princípio do menor privilégio (least privilege)",
                "Registre na trilha de auditoria todas as tentativas de acesso a itens sigilosos",
                "Documentos sigilosos devem se tornar ostensivos antes de serem submetidos à eliminação",
                "Exija a indicação do dispositivo legal que fundamenta cada marcação de sigilo",
                "Monitore e reveja periodicamente as permissões de acesso"
            ]
        },

        // =====================================================================
        // INSTRUMENTO 5 - VOCABULÁRIO CONTROLADO E TESAURO
        // =====================================================================
        {
            id: "5",
            nome: "Vocabulário Controlado e Tesauro",
            icone: "search",
            obrigatoriedade: "Altamente Desejável",
            cor: "blue",
            definicao: "Conjunto de listas padronizadas de termos e descritores com relações semânticas e hierárquicas, utilizadas para indexação precisa e recuperação consistente de informações por assunto.",
            objetivo: [
                "Padronizar a terminologia utilizada na indexação de documentos",
                "Controlar o uso de sinônimos, homônimos, abreviaturas e acrônimos",
                "Facilitar a recuperação consistente de informações",
                "Melhorar a precisão das pesquisas no SIGAD"
            ],
            tipos: [
                {
                    tipo: "Vocabulário Controlado",
                    descricao: "Conjunto normalizado de termos que serve para indexação e recuperação da informação. Permite controlar a terminologia, estabelecendo os termos aceitos e controlando sinônimos e homônimos.",
                    caracteristicas: [
                        "Lista de termos autorizados",
                        "Controle de sinônimos (termo preferido x termos não preferidos)",
                        "Controle de homônimos (ex: 'banco' instituição financeira x 'banco' assento)",
                        "Uso de abreviaturas e acrônimos padronizados"
                    ],
                    exemplo: "Termo preferido: 'Licitação'; Termo não preferido: 'Concorrência pública', 'Pregão'"
                },
                {
                    tipo: "Tesauro",
                    descricao: "Lista controlada de termos ligados por meio de relações semânticas, hierárquicas, associativas ou de equivalência que cobre uma área específica do conhecimento. O significado do termo e as relações são explicitados.",
                    caracteristicas: [
                        "Relações hierárquicas (gênero-espécie): TERMO GERAL > TERMO ESPECÍFICO",
                        "Relações associativas (temático): termo relacionado a outro",
                        "Relações de equivalência (sinonímia): USE, USADO POR (UP)",
                        "Escopo e notas de aplicação"
                    ],
                    exemplo: "Animal (TG) > Mamífero (TE) > Felino (TE) > Felino-doméstico (TE); Relação: Gato -> Felino-doméstico (USE)"
                }
            ],
            implementacao: [
                "Base de dados de termos com campos: termo, tipo (preferido/não preferido), definição, relações (TG, TE, TR, USE, UP)",
                "Integração do campo de assunto com serviço de autocompletar conectado à base de termos controlados",
                "Interface para navegação hierárquica no tesauro",
                "Mapeamento de termos em desuso para termos atualizados",
                "Sincronização com a Lista de Assuntos de Governo (e-PING) na administração pública federal"
            ],
            exemplos: [
                {
                    titulo: "Exemplo de Vocabulário Controlado",
                    descricao: "Termos padronizados para indexação",
                    detalhe: "Termo preferido: 'Imunização'; Termos não preferidos: 'Vacinação', 'Campanha de vacinação'"
                },
                {
                    titulo: "Exemplo de Tesauro",
                    descricao: "Relações hierárquicas e associativas",
                    detalhe: "SAÚDE PÚBLICA (TG) > VIGILÂNCIA SANITÁRIA (TE) > CONTROLE DE EPIDEMIAS (TE); CONTROLE DE EPIDEMIAS (TR) VACINAÇÃO"
                },
                {
                    titulo: "Exemplo de Termo em Desuso",
                    descricao: "Mapeamento de termos históricos",
                    detalhe: "Pesquisa pelo termo 'DASP' recupera documentos relacionados a 'Ministério do Planejamento'"
                }
            ],
            dicas: [
                "Utilize a Lista de Assuntos de Governo do e-PING na administração pública federal",
                "Mantenha o tesauro atualizado e sincronizado com as mudanças na terminologia da área",
                "Permita a navegação visual no tesauro para facilitar a seleção de termos",
                "Registre o histórico de alterações nos termos para preservação do contexto histórico",
                "Integre o tesauro com o sistema de busca para melhorar a recuperação de informações"
            ]
        },

        // =====================================================================
        // INSTRUMENTO 6 - GLOSSÁRIO
        // =====================================================================
        {
            id: "6",
            nome: "Glossário de Termos Arquivísticos",
            icone: "translate",
            obrigatoriedade: "Recomendado",
            cor: "purple",
            definicao: "Vocabulário afeito à área de arquivologia e gestão documental, que envolve definições conceituais, dispostas em ordem alfabética. Os termos não guardam relações entre si, diferente do tesauro.",
            objetivo: [
                "Padronizar a terminologia utilizada na instituição",
                "Facilitar a compreensão dos conceitos arquivísticos",
                "Servir como referência para capacitação de pessoal",
                "Auxiliar na interpretação de normas e procedimentos"
            ],
            estrutura: [
                "Termo (em ordem alfabética)",
                "Definição conceitual",
                "Sigla (quando aplicável)",
                "Remissivas (Ver, Ver também)"
            ],
            implementacao: [
                "Disponibilizar como anexo do plano de classificação e da tabela de temporalidade",
                "Incluir no manual de gestão arquivística",
                "Disponibilizar em formato digital com busca por termo",
                "Manter atualizado com novos termos e revisões"
            ],
            exemplos: [
                {
                    titulo: "Exemplo de Termo",
                    descricao: "Autenticidade",
                    detalhe: "Credibilidade de um documento enquanto documento, isto é, a qualidade de um documento ser o que diz ser e que está livre de adulteração. Composta de identidade e integridade."
                },
                {
                    titulo: "Exemplo de Termo com Sigla",
                    descricao: "SIGAD",
                    detalhe: "Sistema Informatizado de Gestão Arquivística de Documentos - Conjunto de procedimentos e operações técnicas processado eletronicamente."
                },
                {
                    titulo: "Exemplo de Remissiva",
                    descricao: "Ver também",
                    detalhe: "Confiabilidade: Ver também: Completeza"
                }
            ],
            dicas: [
                "Mantenha o glossário alinhado com o Dicionário Brasileiro de Terminologia Arquivística do Arquivo Nacional",
                "Atualize o glossário sempre que novos termos forem introduzidos",
                "Disponibilize o glossário em formato de fácil consulta (busca, índices)",
                "Inclua exemplos práticos para facilitar a compreensão dos termos"
            ]
        }
    ]
};