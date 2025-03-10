# NOME DO PROJETO

[Descrição]
Este projeto foi desenvolvido inicialmente para atender a um projeto de templetização. A ideia é evoluir para uma arquitetura baseada em componentes e otimizar o desenvolvimento de páginas responsivas.

[Pré-requisitos]
Para rodar este projeto, você deve ter o Node.js instalado e atualizado em sua máquina. Além disso, você precisará das seguintes ferramentas:

Node.js: Certifique-se de ter a versão mais recente instalada.
Pug: Motor de templates para gerar HTML.
Gulp: Ferramenta de automação de tarefas.

[Comandos Disponíveis]
npm install: Instala as dependências do projeto.
npm run prod: Compila os arquivos e gera a pasta dist.
npm run dev: Inicia o modo de desenvolvimento com observação de mudanças e compilação automática.

prompt chat: Transforme o seguinte HTML em PUG simples eliminando todas classes com as seguintes regras:

- Todos os elementos a exceção das imagens e vídeos deverão estar abaixo de um <section> e sempre que uma imagem ou vídeo aparecer, deve-se fechar a tag <section> e após o elemento abrir uma nova.
- Todas as imagens devem conter uma classe .imgSmall, com exceção da primeira imagem da página. E lembre que elas não podem estar dentro de uma <section>.
- Mantenha os links externos e peso da fonte que estejam em tags como <b> e <strong>.
