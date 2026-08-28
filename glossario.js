// glossario.js
const dadosGlossario = {
    descricao: "Glossário completo de termos e definições da gestão arquivística de documentos, conforme o e-ARQ Brasil e a terminologia arquivística nacional e internacional.",
    termos: [
        // =====================================================================
        // A
        // =====================================================================
        {
            termo: "AC",
            sigla: "AC",
            definicao: "Ver Autoridade Certificadora",
            verTambem: "Autoridade Certificadora"
        },
        {
            termo: "Acessibilidade",
            definicao: "Facilidade no acesso ao conteúdo e ao significado de um documento digital.",
            verTambem: "Acesso"
        },
        {
            termo: "Acesso",
            definicao: "Direito, oportunidade ou meios de encontrar, recuperar e usar a informação.",
            verTambem: "Acessibilidade, Classificação de segurança, Credencial de segurança, Restrição de acesso"
        },
        {
            termo: "ACT",
            sigla: "ACT",
            definicao: "Ver Autoridade de Carimbo do Tempo",
            verTambem: "Autoridade de Carimbo do Tempo"
        },
        {
            termo: "Anexo",
            definicao: "Um documento digital que segue junto com uma mensagem de correio eletrônico ou um fluxo de trabalho.",
            verTambem: "Correio eletrônico, Mensagem de correio eletrônico"
        },
        {
            termo: "Anotação",
            definicao: "Informação acrescentada ao documento arquivístico após sua produção. Exemplo: 'urgente', 'arquive-se', número do protocolo, código de classificação, temporalidade, data, hora e local da transmissão, indicação de anexos e outros.",
            verTambem: "Documento arquivístico"
        },
        {
            termo: "AR",
            sigla: "AR",
            definicao: "Ver Autoridade de Registro",
            verTambem: "Autoridade de Registro"
        },
        {
            termo: "Armazenamento",
            definicao: "Guarda de documentos arquivísticos em local apropriado.",
            verTambem: "Armazenamento (documento digital)"
        },
        {
            termo: "Armazenamento (documento digital)",
            definicao: "Guarda de documentos digitais em dispositivos de memória não volátil.",
            verTambem: "Armazenamento, Sistema de storage"
        },
        {
            termo: "Arquivamento (atividade)",
            definicao: "Sequência de operações intelectuais e físicas que visam à guarda ordenada de documentos."
        },
        {
            termo: "Arquivamento (decisão)",
            definicao: "Ação pela qual uma autoridade determina a guarda de um documento, cessada a sua tramitação."
        },
        {
            termo: "Arquivo (fundo)",
            definicao: "Conjunto de documentos produzidos e acumulados por uma entidade coletiva, pública ou privada, pessoa ou família, no desempenho de suas atividades, independentemente da natureza do suporte.",
            verTambem: "Organicidade, Produtor"
        },
        {
            termo: "Arquivo (instituição ou serviço)",
            definicao: "Instituição ou serviço que tem por finalidade a custódia, o processamento técnico, a conservação e o acesso a documento arquivístico."
        },
        {
            termo: "Arquivo digital",
            definicao: "Sequência de bytes ordenada e nomeada que é reconhecida por um sistema operacional.",
            verTambem: "Objeto digital"
        },
        {
            termo: "Assinatura digital",
            definicao: "Modalidade de assinatura eletrônica, resultado de uma operação matemática, que utiliza algoritmos de criptografia e permite aferir, com segurança, a origem e a integridade do documento. Os atributos da assinatura digital são: a) ser única para cada documento, mesmo que o signatário seja o mesmo; b) comprovar a autoria do documento digital; c) possibilitar a verificação da integridade; d) assegurar ao destinatário o 'não repúdio' do documento digital, uma vez que, a princípio, o emitente é a única pessoa que tem acesso à chave privada que gerou a assinatura.",
            verTambem: "Assinatura eletrônica, Autenticação, Carimbo digital do tempo, Certificação digital, Certificado digital, Chave privada, Chave pública, Criptografia"
        },
        {
            termo: "Assinatura eletrônica",
            definicao: "Geração, por computador, de qualquer símbolo ou série de símbolos executados, adotados ou autorizados por um indivíduo para ser o laço legalmente equivalente à assinatura manual do indivíduo.",
            verTambem: "Assinatura digital, Certificação digital"
        },
        {
            termo: "Atualização de suporte",
            definicao: "Técnica de migração que consiste em copiar os dados de um suporte para outro, sem mudar sua codificação, para evitar perdas de dados provocadas por deterioração do suporte.",
            verTambem: "Migração, Conversão de formato, Preservação digital, Reformatação (migração)"
        },
        {
            termo: "Autenticação",
            definicao: "Declaração de que um documento original é autêntico – ou que uma cópia reproduz fielmente o original – feita por uma pessoa jurídica com autoridade para tal (servidor público, notário, autoridade certificadora) num determinado momento, por meio da adição de elementos ou afirmações.",
            verTambem: "Assinatura digital, Autenticidade, Carimbo digital do tempo, Certificado de autenticidade"
        },
        {
            termo: "Autenticidade",
            definicao: "Credibilidade de um documento enquanto documento, isto é, a qualidade de um documento ser o que diz ser e que está livre de adulteração ou qualquer outro tipo de corrupção. A autenticidade é composta de identidade e integridade.",
            verTambem: "Autenticação, Carimbo digital do tempo, Certificado de autenticidade, Documento arquivístico autêntico, Identidade, Integridade, Presunção de autenticidade"
        },
        {
            termo: "Autoridade Certificadora (AC)",
            definicao: "Organização que emite, renova ou revoga certificados digitais de outras autoridades certificadoras ou de titulares finais.",
            verTambem: "Certificação digital, Chave privada, Chave pública, Infraestrutura de Chaves Públicas"
        },
        {
            termo: "Autoridade de Carimbo do Tempo (ACT)",
            definicao: "Organização que tem a responsabilidade de emissão de carimbo digital do tempo.",
            verTambem: "Carimbo digital do tempo, Certificação digital, Infraestrutura de Chaves Públicas"
        },
        {
            termo: "Autoridade de Registro (AR)",
            definicao: "Organização que distribui certificados digitais aos usuários finais, mediante processo de identificação estabelecido nas práticas definidas na Infraestrutura de Chaves Públicas – ICP.",
            verTambem: "Certificação digital, Chave privada, Chave pública, Infraestrutura de Chaves Públicas"
        },
        {
            termo: "Avaliação",
            definicao: "Processo de análise de documentos arquivísticos que estabelece seus prazos de guarda e sua destinação, de acordo com os valores que lhes são atribuídos.",
            verTambem: "Destinação, Valor primário, Valor secundário"
        },

        // =====================================================================
        // B
        // =====================================================================
        {
            termo: "Backup",
            definicao: "Ver Cópia de segurança",
            verTambem: "Cópia de segurança"
        },
        {
            termo: "Banco de dados (ambiente computacional)",
            definicao: "Ambiente computacional composto por: a) dados estruturados em bases de dados relacionadas entre si, segundo um modelo de dados; b) regras que definem as operações válidas sobre os dados e garantem sua integridade.",
            verTambem: "Base de dados, Sistema Gerenciador de Banco de Dados"
        },
        {
            termo: "Banco de dados (software)",
            definicao: "Ver Sistema Gerenciador de Banco de Dados",
            verTambem: "Sistema Gerenciador de Banco de Dados"
        },
        {
            termo: "Base de dados",
            definicao: "Conjunto de dados estruturados, com as respectivas regras de acesso, formatação e validação, e gerenciados por um Sistema Gerenciador de Banco de Dados - SGBD.",
            verTambem: "Banco de dados (ambiente computacional), Sistema Gerenciador de Banco de Dados"
        },

        // =====================================================================
        // C
        // =====================================================================
        {
            termo: "Captura",
            definicao: "Declaração de um documento como documento arquivístico, incorporando-o ao sistema de gestão arquivística, por meio de, no mínimo, as seguintes ações: registro; classificação; indexação; arquivamento; e, quando couber, atribuição de restrição de acesso.",
            verTambem: "Classificação arquivística, Registro"
        },
        {
            termo: "Carimbo digital do tempo",
            definicao: "É um documento eletrônico emitido por uma Autoridade de Carimbo do Tempo (ACT) que serve como evidência de que uma informação digital existia numa determinada data e hora. O timestamp, calculado a partir do hash do documento, é o registro da data e hora em que a requisição do timestamp (Time Stamp Request) chegou à Autoridade de Carimbo do Tempo, e não se refere à data e hora de criação do documento. É uma forma de autenticação do documento.",
            verTambem: "Assinatura digital, Autenticação, Autoridade de Carimbo do Tempo, Infraestrutura de Chaves Públicas"
        },
        {
            termo: "Certificação digital",
            definicao: "Atividade pela qual se estabelece uma relação única, exclusiva e intransferível entre um elemento criptográfico e uma pessoa física ou jurídica.",
            verTambem: "Assinatura digital, Assinatura eletrônica, Autoridade certificadora, Autoridade de Carimbo do Tempo, Autoridade de registro, Criptografia"
        },
        {
            termo: "Certificado de autenticidade",
            definicao: "Declaração de autenticidade das reproduções dos documentos arquivísticos digitais emitida pela instituição responsável por sua preservação.",
            verTambem: "Autenticação, Autenticidade"
        },
        {
            termo: "Certificado digital",
            definicao: "Registro eletrônico assinado, gerado por meio de um procedimento de certificação digital, que se destina a comprovar a relação existente entre um elemento criptográfico e uma pessoa física ou jurídica.",
            verTambem: "Assinatura digital, Chave privada, Chave pública, Criptografia assimétrica, Infraestrutura de Chaves Públicas"
        },
        {
            termo: "Chave privada",
            definicao: "Chave matemática formada por uma sequência de dígitos, usada para criptografia assimétrica e criada em conjunto com a chave pública correspondente que deve ser mantida em segredo pelo portador. Usada para assinar digitalmente documentos, bem como para decifrar aqueles criptografados com a chave pública correspondente.",
            verTambem: "Assinatura digital, Autoridade certificadora, Autoridade de registro, Certificado digital, Chave pública, Criptografia, Criptografia assimétrica, Infraestrutura de Chaves Públicas"
        },
        {
            termo: "Chave pública",
            definicao: "Chave matemática formada por uma sequência de dígitos, usada para criptografia assimétrica, criada em conjunto com a chave privada correspondente, disponibilizada publicamente por certificado digital e utilizada para verificar assinaturas digitais. Também pode ser usada para criptografar mensagens ou arquivos a serem decifrados com a chave privada correspondente.",
            verTambem: "Assinatura digital, Autoridade certificadora, Autoridade de registro, Certificado digital, Chave privada, Criptografia, Criptografia assimétrica, Infraestrutura de Chaves Públicas"
        },
        {
            termo: "Ciclo vital dos documentos",
            definicao: "Sucessivas fases por que passam os documentos arquivísticos, da sua produção à guarda permanente ou eliminação.",
            verTambem: "Gestão arquivística de documentos"
        },
        {
            termo: "Classe",
            definicao: "Primeiro nível hierárquico de um plano de classificação, normalmente seguido dos níveis subclasse, grupo e subgrupo.",
            verTambem: "Plano de classificação"
        },
        {
            termo: "Classificação arquivística",
            definicao: "Organização dos documentos de um arquivo ou coleção, de acordo com o Plano de classificação, Código de classificação ou Quadro de arranjo.",
            verTambem: "Captura, Código de classificação, Plano de classificação"
        },
        {
            termo: "Classificação de segurança",
            definicao: "Atribuição a documentos, ou às informações neles contidas, de graus de sigilo, conforme legislação específica.",
            verTambem: "Acesso, Grau de sigilo, Restrição de acesso"
        },
        {
            termo: "Código de classificação",
            definicao: "Conjunto de símbolos, normalmente letras e/ou números, derivado de um plano de classificação.",
            verTambem: "Classificação arquivística, Plano de classificação"
        },
        {
            termo: "Completeza",
            definicao: "Atributo de um documento arquivístico que se refere à presença de todos os elementos intrínsecos e extrínsecos exigidos pela organização produtora e pelo sistema jurídico-administrativo a que pertence, de maneira a ser capaz de gerar consequências.",
            verTambem: "Confiabilidade, Elemento extrínseco, Elemento intrínseco"
        },
        {
            termo: "Componente digital",
            definicao: "Objeto digital que é parte de um ou mais documentos digitais, incluindo os metadados necessários para ordenar, estruturar ou manifestar seu conteúdo e forma, que requer determinadas ações de preservação. Um documento arquivístico digital pode ser composto por um ou mais componentes digitais. Exemplo: uma fotografia digital tem apenas um componente digital, que é o arquivo com a imagem, já um documento multimídia tem diversos componentes digitais, que são os arquivos com o código executável, os textos, as imagens e os registros sonoros.",
            verTambem: "Objeto lógico, Documento digital, Preservação digital"
        },
        {
            termo: "Confiabilidade",
            definicao: "Credibilidade de um documento arquivístico enquanto uma afirmação do fato. Existe quando um documento arquivístico pode sustentar o fato ao qual se refere, e é estabelecida pelo exame da completeza, da forma do documento e do grau de controle exercido no processo de sua produção.",
            verTambem: "Completeza"
        },
        {
            termo: "Confidencialidade",
            definicao: "Propriedade de certos dados ou informações que não podem ser disponibilizadas ou divulgadas sem autorização."
        },
        {
            termo: "Conteúdo estável",
            definicao: "Característica de um documento arquivístico em que os dados e a mensagem nele contidos mantêm-se inalterados e inalteráveis, isto é, não podem ser sobrescritos, alterados, apagados ou acrescentados.",
            verTambem: "Fixidez, Forma fixa"
        },
        {
            termo: "Contexto",
            definicao: "Ambiente em que ocorre a ação registrada no documento. Na análise do contexto de um documento arquivístico, o foco deixa de ser o documento em si e passa a abranger toda a estrutura que o envolve, ou seja, seu contexto documental, jurídico-administrativo, de procedimentos, de proveniência e tecnológico.",
            verTambem: "Contexto de procedimentos, Contexto de proveniência, Contexto documental, Contexto jurídico-administrativo, Contexto tecnológico"
        },
        {
            termo: "Contexto de procedimentos",
            definicao: "Conjunto de normas internas que regulam a produção, tramitação, uso e arquivamento dos documentos da instituição.",
            verTambem: "Contexto, Contexto de proveniência, Contexto documental, Contexto jurídico-administrativo, Contexto tecnológico"
        },
        {
            termo: "Contexto de proveniência",
            definicao: "Organogramas, regimentos e regulamentos internos que identificam a instituição produtora de documentos.",
            verTambem: "Contexto, Contexto de procedimentos, Contexto documental, Contexto jurídico-administrativo, Contexto tecnológico"
        },
        {
            termo: "Contexto documental",
            definicao: "Código de classificação, guias, índices e outros instrumentos que situam o documento dentro do conjunto a que pertence, ou seja, do fundo.",
            verTambem: "Contexto, Contexto de procedimentos, Contexto de proveniência, Contexto jurídico-administrativo, Contexto tecnológico"
        },
        {
            termo: "Contexto jurídico-administrativo",
            definicao: "Conjunto de leis e normas externas à instituição produtora de documentos as quais controlam a condução das atividades dessa mesma instituição.",
            verTambem: "Contexto, Contexto de procedimentos, Contexto de proveniência, Contexto documental, Contexto tecnológico"
        },
        {
            termo: "Contexto tecnológico",
            definicao: "Ambiente tecnológico (hardware, software e padrões) que envolve o documento.",
            verTambem: "Contexto, Contexto de procedimentos, Contexto de proveniência, Contexto documental, Contexto jurídico-administrativo, Hardware, Programa de computador"
        },
        {
            termo: "Controle de versão",
            definicao: "Conjunto de operações que permite gerenciar as versões de um documento arquivístico digital.",
            verTambem: "Documento, Identificador único, Versão"
        },
        {
            termo: "Conversão de formato",
            definicao: "Modificação de um formato para outro motivada, principalmente, pela normalização de formatos e para contornar a obsolescência tecnológica.",
            verTambem: "Migração, Atualização de suporte, Exportação, Formato de arquivo, Normalização de formato, Reformatação (migração)"
        },
        {
            termo: "Cópia",
            definicao: "Resultado da reprodução de um documento, geralmente qualificada por sua função ou processo de duplicação.",
            verTambem: "Cópia de segurança"
        },
        {
            termo: "Cópia de segurança",
            definicao: "Cópia feita com vistas a restaurar as informações no caso de perda ou destruição do original.",
            verTambem: "Cópia"
        },
        {
            termo: "Correio eletrônico",
            definicao: "Sistema usado para criar, transmitir e receber mensagem eletrônica e outros documentos digitais por meio de rede de computadores.",
            verTambem: "Anexo, Endereço de correio eletrônico, Mensagem de correio eletrônico"
        },
        {
            termo: "Credencial de segurança",
            definicao: "Um ou vários atributos associados a um usuário que definem as categorias de segurança segundo as quais o acesso é concedido.",
            verTambem: "Acesso"
        },
        {
            termo: "Criptografia",
            definicao: "Método de codificação de dados segundo algoritmo específico e chave secreta, de forma que somente os usuários autorizados possam restabelecer sua forma original.",
            verTambem: "Assinatura digital, Certificação digital, Chave privada, Chave pública, Criptografia assimétrica, Criptografia simétrica"
        },
        {
            termo: "Criptografia assimétrica",
            definicao: "Tipo de criptografia que usa um par de chaves criptográficas distintas (privada e pública) e matematicamente relacionadas. A chave pública está disponível para todos que queiram cifrar informações para o dono da chave privada ou para verificação de uma assinatura digital criada com a chave privada correspondente; a chave privada é mantida em segredo pelo seu dono e pode decifrar informações ou gerar assinaturas digitais.",
            verTambem: "Certificado digital, Chave privada, Chave pública, Criptografia, Criptografia simétrica, Infraestrutura de Chaves Públicas"
        },
        {
            termo: "Criptografia simétrica",
            definicao: "Método de criptografia que utiliza uma chave simétrica, de forma que o texto seja cifrado e decifrado com esta mesma chave.",
            verTambem: "Criptografia, Criptografia assimétrica"
        },
        {
            termo: "Custódia",
            definicao: "Responsabilidade jurídica de guarda e proteção de arquivos, independentemente de vínculo de propriedade.",
            verTambem: "Recolhimento"
        },

        // =====================================================================
        // D
        // =====================================================================
        {
            termo: "Dado",
            definicao: "Representação de todo e qualquer elemento de conteúdo cognitivo, passível de ser comunicada, processada e interpretada de forma manual ou automática.",
            verTambem: "Metadados"
        },
        {
            termo: "Descrição",
            definicao: "Conjunto de procedimentos que leva em conta os elementos formais e de conteúdo dos documentos arquivísticos para elaboração de instrumentos de pesquisa."
        },
        {
            termo: "Destinação",
            definicao: "Decisão, com base na avaliação, quanto ao encaminhamento dos documentos para a guarda permanente ou eliminação.",
            verTambem: "Avaliação, Eliminação, Recolhimento"
        },
        {
            termo: "Digitalização",
            definicao: "Processo de conversão de um documento para o formato digital, por meio de dispositivo apropriado.",
            verTambem: "OCR, Reformatação (migração), Representante digital"
        },
        {
            termo: "Documento",
            definicao: "Unidade de registro de informações, qualquer que seja o formato ou o suporte.",
            verTambem: "Controle de versão, Documento arquivístico, Documento eletrônico, Dossiê, Original, Suporte"
        },
        {
            termo: "Documento arquivístico",
            definicao: "Documento produzido (elaborado ou recebido), no curso de uma atividade prática, como instrumento ou resultado de tal atividade, e retido para ação ou referência.",
            verTambem: "Anotação, Documento, Documento arquivístico armazenado, Documento arquivístico autêntico, Documento arquivístico eletrônico, Elemento extrínseco, Elemento intrínseco, Fixidez, Forma documental, Relação orgânica"
        },
        {
            termo: "Documento arquivístico autêntico",
            definicao: "Documento que é o que diz ser e está livre de alteração ou corrupção, ou seja, que teve sua identidade e integridade mantidas ao longo do tempo.",
            verTambem: "Autenticidade, Documento arquivístico, Identidade, Integridade"
        },
        {
            termo: "Documento arquivístico digital",
            definicao: "Documento digital reconhecido e tratado como um documento arquivístico.",
            verTambem: "Documento arquivístico eletrônico, Fixidez"
        },
        {
            termo: "Documento arquivístico eletrônico",
            definicao: "Documento eletrônico reconhecido e tratado como um documento arquivístico.",
            verTambem: "Documento arquivístico, Documento arquivístico digital"
        },
        {
            termo: "Documento digital",
            definicao: "Informação registrada, codificada em dígitos binários, acessível e interpretável por meio de sistema computacional.",
            verTambem: "Componente digital, Documento arquivístico digital, Documento eletrônico, Documento não digital, Documento híbrido, Dossiê híbrido, Processo híbrido"
        },
        {
            termo: "Documento eletrônico",
            definicao: "Informação registrada, codificada em forma analógica ou em dígitos binários, acessível e interpretável por meio de um equipamento eletrônico.",
            verTambem: "Documento, Documento arquivístico eletrônico, Documento digital, Documento não digital"
        },
        {
            termo: "Documento híbrido",
            definicao: "Documento constituído de partes digitais e não digitais.",
            verTambem: "Documento digital, Documento eletrônico, Documento não digital, Representante digital"
        },
        {
            termo: "Documento não digital",
            definicao: "Documento que se apresenta em suporte, formato e codificação diferente dos digitais, tais como: documentos em papel, documentos em películas e documentos eletrônicos analógicos.",
            verTambem: "Documento digital, Documento eletrônico, Documento híbrido, Representante digital"
        },
        {
            termo: "DOI (Digital Object Identifier)",
            definicao: "Sistema para identificação persistente de objetos digitais em redes, bem como para o intercâmbio de informações sobre propriedade intelectual desses objetos."
        },
        {
            termo: "Dossiê",
            definicao: "Conjunto de documentos, relacionados entre si por ação, evento, pessoa, lugar e/ou projeto, que constitui uma unidade.",
            verTambem: "Documento, Dossiê híbrido, Item documental, Processo"
        },
        {
            termo: "Dossiê híbrido",
            definicao: "Dossiê constituído por documentos digitais e não digitais. Exemplo: projetos arquitetônicos que apresentam a descrição em papel e as plantas, em disco óptico.",
            verTambem: "Documento digital, Dossiê, Processo híbrido"
        },

        // =====================================================================
        // E
        // =====================================================================
        {
            termo: "ECM",
            sigla: "ECM",
            definicao: "Ver Entreprise Content Management",
            verTambem: "Enterprise Content Management"
        },
        {
            termo: "Elemento extrínseco",
            definicao: "Parte integrante do documento arquivístico que constitui sua forma externa. Exemplo: tipo, cor e tamanho da letra; apresentação (textual, gráfica, sonora ou multimídia); selo, logomarca; assinatura digital; links; e outros.",
            verTambem: "Completeza, Documento arquivístico, Elemento intrínseco, Forma documental, Marca d'água digital"
        },
        {
            termo: "Elemento intrínseco",
            definicao: "Parte integrante do documento arquivístico que constitui sua forma interna e que transmite a ação da qual o documento participa, bem como seu contexto imediato. Exemplo: autor, destinatário, data, local, assinatura autógrafa, assunto e outros.",
            verTambem: "Completeza, Documento arquivístico, Elemento extrínseco, Forma documental"
        },
        {
            termo: "Eliminação",
            definicao: "Destruição de documentos que, na avaliação, foram considerados sem valor para a guarda permanente, impedindo qualquer possibilidade de reconstrução.",
            verTambem: "Destinação"
        },
        {
            termo: "Emulação",
            definicao: "Estratégia de preservação digital que se baseia na utilização de recursos computacionais para fazer uma tecnologia atual funcionar com as características de uma obsoleta, aceitando as mesmas entradas e produzindo as mesmas saídas.",
            verTambem: "Preservação digital"
        },
        {
            termo: "Endereço de correio eletrônico",
            definicao: "Nome único de uma caixa postal eletrônica, de uma pessoa, grupo ou organização, associado a um serviço de correio eletrônico. É formado por um identificador (nome, apelido, sigla ou código), um sinal '@' e o domínio do provedor do serviço.",
            verTambem: "Correio eletrônico, Mensagem de correio eletrônico"
        },
        {
            termo: "Enterprise Content Management (ECM)",
            definicao: "Termo amplo para tecnologia digital, estratégias e métodos utilizados para capturar, gerir, acessar, integrar, medir e armazenar informação. Pode incluir módulos específicos para documentos que apoiam as atividades das organizações e ajudam no processo de tomada de decisão.",
            verTambem: "Gerenciamento eletrônico de documentos"
        },
        {
            termo: "Esquema de codificação de metadados",
            definicao: "Definição dos valores ou da sintaxe de um elemento de metadados. Exemplo: pode ser uma lista controlada dos valores aceitos para um elemento de metadados em linguagem natural, um vocabulário controlado ou uma tabela de classificação. Pode também ser um esquema de codificação que define a estrutura ou sintaxe dos valores, como por exemplo, o formato DDMMAAAA para data e o formato hh:mm:ss±hh para hora.",
            verTambem: "Esquema de metadados, Metadados"
        },
        {
            termo: "Esquema de metadados",
            definicao: "Plano lógico que mostra as relações entre os elementos de metadados, através do estabelecimento de regras para a utilização e gestão de metadados, especificamente no que diz respeito à semântica, à sintaxe e à obrigatoriedade do uso.",
            verTambem: "Esquema de codificação de metadados, Metadados"
        },
        {
            termo: "Exportação",
            definicao: "Processo de transferência de dados de um sistema informatizado para outro, podendo haver uma conversão.",
            verTambem: "Conversão de formato"
        },

        // =====================================================================
        // F
        // =====================================================================
        {
            termo: "Fixidade",
            definicao: "Integridade da cadeia de bits que constituem um componente digital.",
            verTambem: "Fixidez, Forma fixa"
        },
        {
            termo: "Fixidez",
            definicao: "Qualidade de um documento que assegura a forma fixa e o conteúdo estável.",
            verTambem: "Conteúdo estável, Documento arquivístico, Documento arquivístico digital, Fixidade, Forma fixa, Forma documental"
        },
        {
            termo: "Forma documental",
            definicao: "Regras de representação de acordo com as quais o conteúdo de um documento arquivístico, seu contexto administrativo e documental, e sua autoridade são comunicados. A forma documental possui elementos intrínsecos e extrínsecos.",
            verTambem: "Documento arquivístico, Elemento extrínseco, Elemento intrínseco, Fixidez"
        },
        {
            termo: "Forma fixa",
            definicao: "Característica de um documento arquivístico que assegura que sua aparência ou apresentação documental permanece a mesma cada vez que o documento é manifestado.",
            verTambem: "Conteúdo estável, Fixidade, Fixidez"
        },
        {
            termo: "Formato aberto de arquivo",
            definicao: "Quando as especificações do formato de arquivo são públicas. Exemplo: XML, HTML, ODF, RTF, TXT e PNG.",
            verTambem: "Formato fechado de arquivo, Formato de arquivo, Formato não proprietário de arquivo, Formato padronizado de arquivo, Formato proprietário de arquivo"
        },
        {
            termo: "Formato de arquivo",
            definicao: "Especificação de regras e padrões descritos formalmente para a interpretação dos bits constituintes de um arquivo digital. Pode ser: aberto, fechado, proprietário, não proprietário e/ou padronizado.",
            verTambem: "Conversão de formato, Formato aberto de arquivo, Formato fechado de arquivo, Formato não proprietário de arquivo, Formato padronizado de arquivo, Formato proprietário de arquivo, Normalização de formato"
        },
        {
            termo: "Formato fechado de arquivo",
            definicao: "Quando as especificações não são divulgadas pelo proprietário. Exemplo: DOC.",
            verTambem: "Formato aberto de arquivo, Formato de arquivo, Formato não proprietário de arquivo, Formato padronizado de arquivo, Formato proprietário de arquivo"
        },
        {
            termo: "Formato não proprietário de arquivo",
            definicao: "Quando o uso das especificações não tem restrição de licença.",
            verTambem: "Formato aberto de arquivo, Formato de arquivo, Formato fechado de arquivo, Formato padronizado de arquivo, Formato proprietário de arquivo"
        },
        {
            termo: "Formato padronizado de arquivo",
            definicao: "Quando as especificações são produzidas por um organismo de normalização, sendo os formatos abertos. Exemplo: XML, PDF/A.",
            verTambem: "Formato aberto de arquivo, Formato de arquivo, Formato fechado de arquivo, Formato não proprietário de arquivo, Formato proprietário de arquivo"
        },
        {
            termo: "Formato proprietário de arquivo",
            definicao: "Quando as especificações são definidas por uma empresa que mantém seus direitos, sendo seu uso vinculado a uma licença. Exemplo: PDF, JPEG, DOC e GIF.",
            verTambem: "Formato aberto de arquivo, Formato de arquivo, Formato fechado de arquivo, Formato não proprietário de arquivo, Formato padronizado de arquivo"
        },

        // =====================================================================
        // G
        // =====================================================================
        {
            termo: "GED",
            sigla: "GED",
            definicao: "Ver Gerenciamento eletrônico de documentos",
            verTambem: "Gerenciamento Eletrônico de Documentos"
        },
        {
            termo: "Gerenciamento Eletrônico de Documentos",
            definicao: "Conjunto de tecnologias utilizadas para organização da informação não estruturada de um órgão ou entidade, que pode ser dividido nas seguintes funcionalidades: captura, gerenciamento, armazenamento e distribuição. Entende-se por informação não estruturada aquela que não está armazenada em banco de dados, como mensagem de correio eletrônico, arquivo de texto, imagem ou som, planilhas etc.",
            verTambem: "Enterprise Content Management, Gestão arquivística de documentos"
        },
        {
            termo: "Gestão arquivística de documentos",
            definicao: "Conjunto de procedimentos e operações técnicas referentes a produção, tramitação, uso, avaliação e arquivamento de documentos arquivísticos em idades corrente e intermediária, visando a sua eliminação ou recolhimento para guarda permanente.",
            verTambem: "Ciclo vital dos documentos, Gerenciamento eletrônico de documentos, Sistema de gestão arquivística de documentos, Sistema Informatizado de Gestão Arquivística de Documentos"
        },
        {
            termo: "Grau de sigilo",
            definicao: "Gradação de sigilo atribuída a um documento ou parte dele, em razão da natureza de seu conteúdo e com o objetivo de limitar sua divulgação a quem tem necessidade de conhecê-lo.",
            verTambem: "Classificação de segurança"
        },

        // =====================================================================
        // H
        // =====================================================================
        {
            termo: "Handle System",
            definicao: "Sistema distribuído de computadores concebido para assinalar, armazenar, administrar e resolver identificadores ou nomes persistentes de objetos digitais conhecidos como handles.",
            verTambem: "Identificador persistente"
        },
        {
            termo: "Hardware",
            definicao: "Conjunto dos componentes físicos necessários à operação de um sistema computacional.",
            verTambem: "Contexto tecnológico"
        },
        {
            termo: "Hipermídia",
            definicao: "Ampliação do conceito de hipertexto segundo a qual vários meios e armazenamento e transmissão de informação são integrados através de enlaces (hyperlinks), permitindo a utilização simultânea de sons, imagens estáticas e em movimento, e textos.",
            verTambem: "Hipertexto"
        },
        {
            termo: "Hipertexto",
            definicao: "Forma de estruturação de documentos que permite a leitura por meio de enlaces (hyperlinks) que possibilitam a conexão direta entre os diversos itens de um documento e/ou deste para outros.",
            verTambem: "Hipermídia"
        },

        // =====================================================================
        // I
        // =====================================================================
        {
            termo: "ICP",
            sigla: "ICP",
            definicao: "Ver Infraestrutura de Chaves Públicas",
            verTambem: "Infraestrutura de Chaves Públicas"
        },
        {
            termo: "Identidade",
            definicao: "Conjunto dos atributos de um documento arquivístico que o caracterizam como único e o diferenciam de outros documentos arquivísticos. Exemplo: data, autor, destinatário, assunto, número identificador e número de protocolo.",
            verTambem: "Autenticidade, Documento arquivístico autêntico, Integridade"
        },
        {
            termo: "Identificador persistente",
            definicao: "Identificador de longa duração de um recurso na internet que se mantém válido mesmo que a tecnologia de acesso ou a localização física do recurso identificado se modifique no tempo.",
            verTambem: "Handle System, URN"
        },
        {
            termo: "Identificador único",
            definicao: "Código gerado automaticamente que identifica o dossiê, o processo ou o item documental de maneira a distingui-los dos demais.",
            verTambem: "Controle de versão, Registro"
        },
        {
            termo: "Indexação",
            definicao: "Processo pelo qual documentos ou informações são representados por termos, palavras-chave ou descritores, propiciando a recuperação da informação."
        },
        {
            termo: "Informação",
            definicao: "Elemento referencial, noção, ideia ou mensagem contidos num documento."
        },
        {
            termo: "Infraestrutura de Chaves Públicas (ICP)",
            definicao: "Conjunto de técnicas, práticas e procedimentos que estabelecem os fundamentos técnicos e metodológicos de um sistema de certificação digital baseado em chave pública. Normalmente, é composto por uma cadeia de autoridades certificadoras formada pela autoridade certificadora raiz – AC Raiz, pelas demais autoridades certificadoras – AC e pelas autoridades de registro – AR.",
            verTambem: "Autoridade certificadora, Autoridade de Carimbo do Tempo, Autoridade de registro, Carimbo digital do tempo, Certificado digital, Chave privada, Chave pública, Criptografia assimétrica"
        },
        {
            termo: "Integridade",
            definicao: "Estado dos documentos que se encontram completos e que não sofreram nenhum tipo de corrupção ou alteração não autorizada nem documentada.",
            verTambem: "Autenticidade, Documento arquivístico autêntico, Identidade"
        },
        {
            termo: "Item documental",
            definicao: "Menor unidade arquivística intelectualmente indivisível.",
            verTambem: "Dossiê"
        },

        // =====================================================================
        // M
        // =====================================================================
        {
            termo: "Marca d'água digital",
            definicao: "Marcas d'água servem para marcar uma imagem digital com informação sobre a sua proveniência e características e são utilizadas para proteger a propriedade intelectual. As marcas d'água sobrepõem, no mapa de bits de uma imagem, um desenho complexo, visível ou invisível, o qual só pode ser suprimido mediante a utilização de um algoritmo e uma chave protegida.",
            verTambem: "Elemento extrínseco"
        },
        {
            termo: "Mensagem de correio eletrônico",
            definicao: "Documento digital produzido ou recebido via um sistema de correio eletrônico, incluindo anexos que possam ser transmitidos com a mensagem.",
            verTambem: "Anexo, Correio eletrônico, Endereço de correio eletrônico"
        },
        {
            termo: "Metadados",
            definicao: "Dados estruturados que descrevem e permitem encontrar, gerenciar, compreender e/ou preservar documentos arquivísticos ao longo do tempo.",
            verTambem: "Dado, Esquema de codificação de metadados, Esquema de metadados"
        },
        {
            termo: "Migração",
            definicao: "Conjunto de procedimentos e técnicas para assegurar a capacidade de os objetos digitais serem acessados frente às mudanças tecnológicas. A migração consiste na transferência de um objeto digital: a) de um suporte que está se tornando obsoleto, fisicamente deteriorado ou instável para um suporte mais novo; b) de um formato obsoleto para um formato mais atual ou padronizado; c) de uma plataforma computacional em vias de descontinuidade para uma outra mais moderna.",
            verTambem: "Atualização de suporte, Conversão de formato, Objeto digital, Preservação digital, Reformatação (migração)"
        },
        {
            termo: "Minuta",
            definicao: "Redação preliminar de documento sujeita à aprovação.",
            verTambem: "Original"
        },

        // =====================================================================
        // N
        // =====================================================================
        {
            termo: "Normalização de formato",
            definicao: "Conversão de formatos de arquivo para um elenco gerenciável de formatos apropriados para preservação e acesso.",
            verTambem: "Conversão de formato, Formato de arquivo"
        },

        // =====================================================================
        // O
        // =====================================================================
        {
            termo: "Objeto digital",
            definicao: "Unidade de informação em formato digital composta de uma ou mais cadeias de bits e de metadados que a identificam e descrevem suas propriedades.",
            verTambem: "Arquivo digital, Componente digital, Migração"
        },
        {
            termo: "OCR (Optical Character Recognition)",
            definicao: "Técnica de conversão de um objeto digital do formato de imagem para o formato textual, de forma a permitir, por exemplo, edição e pesquisa no conteúdo do texto.",
            verTambem: "Digitalização"
        },
        {
            termo: "Organicidade",
            definicao: "Atributo do conjunto de documentos arquivísticos que mantêm relação orgânica entre si. Essencial para que um determinado conjunto de documentos seja considerado um arquivo.",
            verTambem: "Arquivo (Fundo), Relação orgânica"
        },
        {
            termo: "Original",
            definicao: "Primeiro documento completo e efetivo.",
            verTambem: "Documento, Minuta"
        },

        // =====================================================================
        // P
        // =====================================================================
        {
            termo: "Plano de classificação",
            definicao: "Esquema de distribuição de documentos em classes, de acordo com métodos de arquivamento específicos, elaborado a partir do estudo das estruturas e funções de uma instituição e da análise do arquivo por ela produzido. Expressão geralmente adotada em arquivos correntes.",
            verTambem: "Classe, Classificação arquivística, Código de classificação"
        },
        {
            termo: "Preservação digital",
            definicao: "Conjunto de ações gerenciais e técnicas exigidas para superar as mudanças tecnológicas e a fragilidade dos suportes, garantindo o acesso e a interpretação de documentos digitais pelo tempo que for necessário.",
            verTambem: "Atualização de suporte, Componente digital, Emulação, Migração"
        },
        {
            termo: "Presunção de autenticidade",
            definicao: "Inferência da autenticidade de um documento arquivístico feita a partir de fatos conhecidos sobre a maneira como aquele documento foi produzido e mantido.",
            verTambem: "Autenticidade"
        },
        {
            termo: "Processo",
            definicao: "Conjunto de documentos oficialmente reunidos no decurso de uma ação administrativa ou judicial, que constitui uma unidade.",
            verTambem: "Dossiê, Processo híbrido"
        },
        {
            termo: "Processo híbrido",
            definicao: "Processo constituído de documentos digitais e não digitais de natureza diversa, oficialmente reunidos no decurso de uma ação administrativa ou judicial, formando um conjunto conceitualmente indivisível.",
            verTambem: "Documento digital, Dossiê híbrido"
        },
        {
            termo: "Produtor",
            definicao: "Pessoa física ou jurídica que produz, recebe ou acumula documentos arquivísticos em função de seu mandato/missão, funções ou atividades.",
            verTambem: "Arquivo (Fundo), Relação orgânica"
        },
        {
            termo: "Programa de computador",
            definicao: "Sequência lógica de instruções que o computador é capaz de executar para obter um resultado específico.",
            verTambem: "Contexto tecnológico, Hardware, Sistema Gerenciador de Banco de Dados"
        },

        // =====================================================================
        // R
        // =====================================================================
        {
            termo: "Recolhimento",
            definicao: "Uma das formas de entrada de documentos em arquivos permanentes, refere-se à etapa final do processo de gestão documental.",
            verTambem: "Custódia, Destinação, Transferência"
        },
        {
            termo: "Recuperação da informação",
            definicao: "Processo de pesquisa, localização e apresentação do documento em sistemas de informação. A pesquisa é feita por intermédio da formulação de estratégias de busca para identificação e localização de documentos e/ou seus metadados. A apresentação pode ser feita por meio de visualização em tela, impressão, leitura de dados de áudio e/ou vídeo.",
            verTambem: "Sistema de informação"
        },
        {
            termo: "Reformatação (migração)",
            definicao: "Técnica de migração que consiste na mudança da forma de apresentação de um documento para fins de acesso ou manutenção dos dados. Exemplo: impressão ou transformação de documentos digitais em microfilme (tecnologia COM), ou ainda, a captura de um documento para o meio digital por intermédio da digitalização.",
            verTambem: "Atualização de suporte, Conversão de formato, Digitalização, Migração"
        },
        {
            termo: "Registro",
            definicao: "Procedimento que formaliza a captura do documento arquivístico no sistema de gestão arquivística por meio da atribuição de um identificador único e de outros metadados (data, classificação, título etc.) que descrevem o documento.",
            verTambem: "Captura, Identificador único"
        },
        {
            termo: "Relação orgânica",
            definicao: "Conjunto dos vínculos que os documentos arquivísticos mantêm entre si, na medida em que representam e refletem as atividades e funções da entidade produtora. Os documentos arquivísticos não são coletados artificialmente, mas estão ligados uns aos outros por um elo que se materializa por meio do registro ou do plano de classificação ou do arquivamento, que os contextualiza no conjunto ao qual pertencem. Os documentos arquivísticos apresentam um conjunto de relações que devem ser mantidas.",
            verTambem: "Documento arquivístico, Organicidade"
        },
        {
            termo: "Repositório arquivístico digital",
            definicao: "Repositório digital que armazena e gerencia documentos arquivísticos, seja nas fases corrente e intermediária, seja na fase permanente.",
            verTambem: "Repositório digital"
        },
        {
            termo: "Repositório digital",
            definicao: "Plataforma tecnológica que apoia o gerenciamento dos materiais digitais, pelo tempo que for necessário, e é formado por elementos de hardware, software e metadados, bem como por uma infraestrutura organizacional e procedimentos normativos e técnicos.",
            verTambem: "Repositório arquivístico digital"
        },
        {
            termo: "Representante digital",
            definicao: "Representação em formato digital de um documento originalmente não digital. É uma forma de diferenciá-lo do documento de arquivo nato digital.",
            verTambem: "Digitalização, Documento não digital"
        },
        {
            termo: "Requisito funcional",
            definicao: "Requisito que especifica uma função que o sistema deve ser capaz de realizar sob o ponto de vista do usuário final. Exemplo: no e-ARQ Brasil, os requisitos funcionais tratam de organização de documentos (incluindo o plano de classificação), captura, avaliação (incluindo a destinação), recuperação da informação, elaboração de documentos, tramitação, segurança e preservação.",
            verTambem: "Requisito não funcional"
        },
        {
            termo: "Requisito não funcional",
            definicao: "Requisito que não está diretamente relacionado à funcionalidade do sistema, mas que são relevantes para a sua implementação. Exemplo: no e-ARQ Brasil, os requisitos não funcionais tratam de armazenamento, funções administrativas, conformidade com a legislação e regulamentações, usabilidade, interoperabilidade, disponibilidade, desempenho e escalabilidade.",
            verTambem: "Requisito funcional"
        },
        {
            termo: "Restrição de acesso",
            definicao: "Denominação genérica para as diversas possibilidades de categorização de restrição de acesso às quais pode estar vinculado um documento.",
            verTambem: "Acesso, Classificação de segurança"
        },

        // =====================================================================
        // S
        // =====================================================================
        {
            termo: "SIGAD",
            sigla: "SIGAD",
            definicao: "Ver Sistema Informatizado de Gestão Arquivística de Documentos",
            verTambem: "Sistema Informatizado de Gestão Arquivística de Documentos"
        },
        {
            termo: "Sistema de armazenamento",
            definicao: "Solução tecnológica de hardware e software utilizada para armazenar dados.",
            verTambem: "Armazenamento (Documento digital)"
        },
        {
            termo: "Sistema de gestão arquivística de documentos",
            definicao: "Conjunto de procedimentos e operações técnicas cuja interação permite a eficiência e a eficácia da gestão arquivística de documentos.",
            verTambem: "Gestão arquivística de documentos, Sistema de informação, Sistema Informatizado de Gestão Arquivística de Documentos"
        },
        {
            termo: "Sistema de informação",
            definicao: "Conjunto organizado, não necessariamente informatizado, de políticas, procedimentos, pessoas, equipamentos e programas computacionais que produzem, processam, armazenam e provêm acesso à informação.",
            verTambem: "Recuperação da informação, Sistema de negócio, Sistema de gestão arquivística de documentos"
        },
        {
            termo: "Sistema de negócio",
            definicao: "É um sistema informatizado projetado e construído para atender a processo específico da organização. Exemplo: sistemas de recursos humanos, atividades financeiras, acadêmicos, prontuários e informação geográfica.",
            verTambem: "Sistema de informação, Sistema informatizado"
        },
        {
            termo: "Sistema Gerenciador de Banco de Dados (SGBD)",
            definicao: "Software que implementa o banco de dados e permite a realização de operações de manipulação de dados (inclusão, alteração, exclusão, consulta) e administrativas (gestão de usuários, cópia e restauração de dados, alterações no modelo de dados).",
            verTambem: "Banco de dados (ambiente computacional), Base de dados, Programa de computador"
        },
        {
            termo: "Sistema informatizado",
            definicao: "Sistema que apoia o acesso e a gestão de dados, informação e/ou documentos em um sistema computacional.",
            verTambem: "Sistema de negócio, Sistema Informatizado de Gestão Arquivística de Documentos"
        },
        {
            termo: "Sistema Informatizado de Gestão Arquivística de Documentos (SIGAD)",
            definicao: "Conjunto de procedimentos e operações técnicas característico do sistema de gestão arquivística de documentos, processado eletronicamente e aplicável em ambientes digitais ou em ambientes híbridos, isto é, em que existem documentos digitais e não digitais ao mesmo tempo.",
            verTambem: "Gestão arquivística de documentos, Sistema de gestão arquivística de documentos, Trilha de auditoria"
        },
        {
            termo: "Suporte",
            definicao: "Base física sobre a qual a informação é registrada.",
            verTambem: "Documento"
        },

        // =====================================================================
        // T
        // =====================================================================
        {
            termo: "Tramitação",
            definicao: "Curso do documento desde a sua produção ou recepção até o cumprimento de sua função administrativa. Também denominado de trâmite ou movimentação."
        },
        {
            termo: "Transferência",
            definicao: "Passagem de documentos do arquivo corrente para o arquivo intermediário.",
            verTambem: "Recolhimento"
        },
        {
            termo: "Trilha de auditoria",
            definicao: "Conjunto de informações registradas que permite o rastreamento de intervenções ou tentativas de intervenções feitas no documento arquivístico digital ou no sistema computacional.",
            verTambem: "Sistema Informatizado de Gestão Arquivística de Documentos"
        },

        // =====================================================================
        // U
        // =====================================================================
        {
            termo: "URN (Uniform Resource Name)",
            definicao: "Nome atribuído a um recurso informacional na internet que tem por objetivo sua identificação única, de forma persistente e independente da sua localização, de modo que seja possível encontrá-lo."
        },

        // =====================================================================
        // V
        // =====================================================================
        {
            termo: "Valor primário",
            definicao: "Valor atribuído a documento em função do interesse que possa ter para a entidade produtora, levando-se em conta a sua utilidade para fins administrativos, legais e fiscais.",
            verTambem: "Avaliação, Valor secundário"
        },
        {
            termo: "Valor secundário",
            definicao: "Valor atribuído a um documento em função do interesse que possa ter para a entidade produtora e outros usuários, tendo em vista a sua utilidade para fins diferentes daqueles para os quais foi originalmente produzido.",
            verTambem: "Avaliação, Valor primário"
        },
        {
            termo: "Versão",
            definicao: "Uma ou mais variantes de um mesmo documento. Uma versão geralmente é uma instância de um documento feita durante seu processo de elaboração. No entanto, uma versão também pode indicar uma forma diferente do documento, tal como uma versão resumida, uma tradução ou uma adaptação.",
            verTambem: "Controle de versão"
        }
    ]
};