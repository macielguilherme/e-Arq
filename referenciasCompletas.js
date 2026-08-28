// referenciasCompletas.js
// Lista completa de referências bibliográficas do e-ARQ Brasil (páginas 222-224 do PDF)

const dadosReferenciasCompletas = {
    titulo: "Referências Bibliográficas",
    descricao: "Lista completa de normas, resoluções, modelos e obras de referência utilizadas na elaboração do e-ARQ Brasil Versão 2.",
    
    // =====================================================================
    // OBRAS DO ARQUIVO NACIONAL
    // =====================================================================
    arquivoNacional: [
        {
            titulo: "Gestão de documentos: conceitos e procedimentos básicos",
            local: "Rio de Janeiro",
            editora: "Arquivo Nacional",
            ano: "1993",
            colecao: "Publicações Técnicas, n. 47"
        },
        {
            titulo: "Curso de gestão de documentos",
            local: "Rio de Janeiro",
            editora: "Arquivo Nacional",
            ano: "2004"
        },
        {
            titulo: "Dicionário brasileiro de terminologia arquivística",
            local: "Rio de Janeiro",
            editora: "Arquivo Nacional",
            ano: "2005",
            colecao: "Publicações Técnicas, n. 51",
            link: "https://www.gov.br/conarq/pt-br/centrais-de-conteudo/publicacoes/dicionrio_de_terminologia_arquivistica.pdf"
        }
    ],

    // =====================================================================
    // NORMAS E PADRÕES DO GOVERNO BRASILEIRO
    // =====================================================================
    normasBrasil: [
        {
            titulo: "Padrão de metadados do governo eletrônico – e-PMG",
            versao: "v. 1.1",
            data: "jul. 2014",
            link: "https://www.gov.br/governodigital/pt-br/governanca-de-dados/PMGVersao1_1.pdf"
        }
    ],

    // =====================================================================
    // NORMAS DA MARINHA
    // =====================================================================
    normasMarinha: [
        {
            titulo: "Normas sobre documentação administrativa e arquivamento na Marinha (NODAM)",
            local: "Brasília",
            editora: "Ministério da Defesa. Marinha",
            ano: "2000"
        }
    ],

    // =====================================================================
    // RESOLUÇÕES DO CONARQ
    // =====================================================================
    conarq: [
        {
            titulo: "Resolução n. 39, de 29 de abril de 2014",
            descricao: "Estabelece diretrizes para a implementação de repositórios arquivísticos digitais confiáveis para o arquivamento e manutenção de documentos arquivísticos digitais em suas fases corrente, intermediária e permanente, dos órgãos e entidades integrantes do Sistema Nacional de Arquivos – SINAR",
            link: "https://www.gov.br/conarq/pt-br/centrais-de-conteudo/publicacoes/conarq_diretrizes_rdc_arq_resolucao_43.pdf"
        },
        {
            titulo: "Glossário: documentos arquivísticos digitais",
            versao: "v. 8",
            data: "2020",
            link: "https://www.gov.br/conarq/pt-br/assuntos/camaras-tecnicas-setoriais-inativas/camara-tecnica-de-documentos-eletronicos-ctde/glosctde_2020_08_07.pd"
        }
    ],

    // =====================================================================
    // OBRAS DO CONSELHO INTERNACIONAL DE ARQUIVOS (ICA)
    // =====================================================================
    ica: [
        {
            titulo: "Guide for managing electronic records from an archival perspective",
            local: "Paris",
            editora: "International Council on Archives",
            ano: "1997",
            colecao: "ICA Studies, n. 8",
            link: "https://www.ica.org/en/ica-study-n%C2%B08-guide-managing-electronic-records-archival-perspective"
        },
        {
            titulo: "ISAD(G): Norma geral internacional de descrição arquivística",
            edicao: "2. ed.",
            local: "Rio de Janeiro",
            editora: "Arquivo Nacional",
            ano: "2001",
            colecao: "Publicações Técnicas, n. 49"
        },
        {
            titulo: "ISAAR(CPF): Norma internacional de registro de autoridade arquivística para entidades coletivas, pessoas e famílias",
            edicao: "2. ed.",
            local: "Rio de Janeiro",
            editora: "Arquivo Nacional",
            ano: "2004",
            colecao: "Publicações Técnicas, n. 50"
        },
        {
            titulo: "Documentos de arquivo electrónicos: manual para arquivistas",
            local: "Paris",
            editora: "International Council on Archives",
            ano: "2005",
            colecao: "Estudo n. 16 do ICA",
            link: "https://www.ica.org/en/ica-study-n%C2%B016-electronic-records-workbook-archivists"
        },
        {
            titulo: "Principles and functional requirements for records in electronic office environments",
            local: "Paris",
            editora: "International Council on Archives",
            ano: "2013",
            link: "https://www.ica.org/sites/default/files/11.%20Recordkeeping%20Requirements%20for%20Multiple%20Functions%20supported%20by%20one%20Business%20System.pdf"
        }
    ],

    // =====================================================================
    // OBRAS GERAIS
    // =====================================================================
    obrasGerais: [
        {
            titulo: "Gestão estratégica",
            autor: "Eliezer Arantes Costa",
            local: "São Paulo",
            editora: "Saraiva",
            ano: "2003"
        }
    ],

    // =====================================================================
    // MODELOS DE REQUISITOS - DLM FORUM FOUNDATION
    // =====================================================================
    dlmForum: [
        {
            titulo: "MoReq: Model requirements for the management of electronic records",
            local: "Luxembourg",
            editora: "European Communities",
            ano: "2002",
            link: "https://moreq.info/"
        },
        {
            titulo: "MoReq 2: Model requirements for the management of electronic records update and extension",
            ano: "2007",
            link: "https://moreq.info/"
        },
        {
            titulo: "MoReq 2010: Modular requirements for records systems",
            ano: "2011",
            link: "https://www.moreq.info/"
        }
    ],

    // =====================================================================
    // OBRAS DE LUCIANA DURANTI E INTERPARES
    // =====================================================================
    duranti: [
        {
            titulo: "The InterPARES Project. In: Authentic records in the electronic age",
            local: "Vancouver",
            editora: "University of British Columbia",
            ano: "2000",
            link: "http://www.interpares.org/documents/interpares_symposium_2000.pdf"
        },
        {
            titulo: "Preservation of the integrity of electronic records",
            autores: ["Luciana Duranti", "et al."],
            local: "Dordrecht",
            editora: "Kluwer Academic",
            ano: "2002"
        },
        {
            titulo: "The long-term preservation of the authentic electronic records: findings of the InterPARES Project",
            editor: "Luciana Duranti",
            local: "San Miniato",
            editora: "Archilab",
            ano: "2005"
        }
    ],

    // =====================================================================
    // ARTIGOS - DURANTI E MACNEIL
    // =====================================================================
    artigos: [
        {
            titulo: "The protection of the integrity of electronic records: an overview of the UBC-MAS research project",
            autores: ["Luciana Duranti", "Heather MacNeil"],
            revista: "Archivaria",
            local: "Ottawa",
            numero: "n. 42",
            paginas: "p. 46-67",
            data: "Fall 1996"
        }
    ],

    // =====================================================================
    // OUTRAS OBRAS INTERNACIONAIS
    // =====================================================================
    internacionais: [
        {
            titulo: "Electronic records management: a literature review",
            autor: "Alf Erlandsson",
            local: "Paris",
            editora: "International Council on Archives / Committee on Electronic Records",
            ano: "1997",
            colecao: "Studies, 10"
        },
        {
            titulo: "Modelo de requisitos para a gestão de arquivos eletrônicos",
            editora: "Instituto dos Arquivos Nacionais (Portugal). Torre do Tombo. Instituto de Informática",
            ano: "2002"
        },
        {
            titulo: "Design criteria standard for electronic records management software applications: DOD 5015.2-STD",
            local: "Washington",
            editora: "USA. Department of Defense",
            ano: "2002",
            link: "https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodm/501502std.pdf"
        },
        {
            titulo: "Directrices para la preservación del patrimonio digital",
            editora: "UNESCO. División de la Sociedad de la Información",
            local: "Canberra",
            editora2: "Biblioteca Nacional de Australia",
            ano: "2002",
            link: "http://unesdoc.unesco.org/images/0013/001300/130071e.pdf"
        },
        {
            titulo: "e-Government Metadata Standard – e-GMS",
            versao: "v. 3.0",
            ano: "2004",
            link: "https://www.nationalarchives.gov.uk/documents/information-management/egms-metadata-standard.pdf"
        },
        {
            titulo: "Metainformação para interoperabilidade de Portugal – MIP",
            local: "Lisboa",
            ano: "2006",
            link: "https://arquivos.dglab.gov.pt/wp-content/uploads/sites/16/2013/10/MIP_v1-0c.pdf"
        },
        {
            titulo: "PREMIS Data Dictionary for Preservation Metadata",
            versao: "version 3",
            ano: "2015",
            link: "http://www.loc.gov/standards/premis/v3/premis-3-0-final.pdf"
        },
        {
            titulo: "Requirements for electronic records management systems: functional requirements",
            editora: "United Kingdom. Public Record Office",
            ano: "2002",
            link: "https://www.nationalarchives.gov.uk/documents/requirementsfinal.pdf"
        },
        {
            titulo: "Australian standard AS ISO 15489:2017 – Records management. Part 1: general [and] Part 2: guidelines",
            local: "Sidney",
            editora: "Standards Australia International",
            ano: "2002",
            link: "https://www.standards.org.au/standards-catalogue/sa-snz/publicsafety/it-021/as--iso--15489-dot-1-colon-2017"
        }
    ],

    // =====================================================================
    // TESES E MONOGRAFIAS
    // =====================================================================
    teses: [
        {
            titulo: "Gerenciamento arquivístico de documentos eletrônicos: uma abordagem teórica da diplomática arquivística contemporânea",
            autor: "Rosely Curi Rondinelli",
            local: "Rio de Janeiro",
            editora: "FGV",
            ano: "2002"
        },
        {
            titulo: "Gestão de documentos eletrônicos: uma visão arquivística",
            autor: "Vanderlei Batista dos Santos",
            local: "Brasília",
            editora: "ABARQ",
            ano: "2002"
        }
    ],

    // =====================================================================
    // OBRAS DE ROUSSEAU E COUTURE
    // =====================================================================
    rousseauCouture: [
        {
            titulo: "Os fundamentos da disciplina arquivística",
            autores: ["Jean-Yves Rousseau", "Carol Couture"],
            local: "Lisboa",
            editora: "D. Quixote",
            ano: "1994"
        }
    ],

    // =====================================================================
    // MANUAIS INSTITUCIONAIS
    // =====================================================================
    manuais: [
        {
            titulo: "Manual de gestão de processos e de expedientes no âmbito da Universidade Estadual de Campinas",
            editora: "Universidade Estadual de Campinas. Sistema de Arquivos",
            link: "https://www.siarq.unicamp.br/siarq/images/siarq/protocolos_e_arquivos/manual_protocolo_expediente.pdf"
        },
        {
            titulo: "Glossário sobre documentos arquivísticos digitais",
            editora: "Universidade Federal da Fronteira do Sul",
            ano: "2020",
            link: "https://portalsei.uffs.edu.br/gestao-documental/glossario-de-gestao-de-documentos"
        }
    ],

    // =====================================================================
    // DOCUMENTOS DO NATIONAL ARCHIVES AND RECORDS ADMINISTRATION (NARA)
    // =====================================================================
    nara: [
        {
            titulo: "Disposition of federal records: a records management handbook",
            local: "Washington",
            editora: "National Archives and Records Administration",
            ano: "2000",
            link: "http://www.archives.gov/records-mgmt/pdf/dfr-2000.pdf"
        },
        {
            titulo: "Transfer guidance",
            editora: "National Archives and Records Administration",
            link: "https://www.archives.gov/records-mgmt/policy/transfer-guidance.html"
        }
    ]
};