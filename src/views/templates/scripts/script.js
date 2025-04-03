document.addEventListener('DOMContentLoaded', function() {
    // Materias minificadas:
    {json-blog:latest}

    document.querySelector('.linkAncor')?.addEventListener('click', function() {
        document.querySelector('.viewAncor').scrollIntoView({
            block: "start", 
            behavior: "smooth"
        });
    });

    // Função para sortear elementos aleatórios de um array
    function getRandomElements(arr, num) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num);
    }

    // Função para injetar HTML na página
    function injectHTML(materias) {
        const viewAncorElement = document.querySelector('.viewAncor');
        let htmlContent = '<h2 class="titleDestaques">Mais artigos para você</h2><div class="flexMaterias">';
        materias.forEach(materia => {
            htmlContent += `
                <a class="materia" href="${materia.link}">
                    <img src="${materia.img}" alt="${materia.titulo}">
                    <h3 class="titleMateria">${materia.titulo}</h3>
                </a>
            `;
        });
        htmlContent += '</div>';
        viewAncorElement?.insertAdjacentHTML('beforebegin', htmlContent);
    }

    // Sorteia 3 matérias e injeta o HTML
    const randomMaterias = getRandomElements(materias, 3);
    injectHTML(randomMaterias);

    // Função para retornar todos os elementos de um array
    function getAllElements(arr) {
        return arr;
    }

    // Função para injetar todas as matérias no HTML na página
    function injectHTMLs(materias) {
        const viewAncorElement = document.querySelector('.viewContenidos');
        let htmlContent = '<h2 class="titleDestaques">Todas Materiais</h2><div class="flexTdsMaterias">';
        
        materias.forEach(materia => {
            htmlContent += `
                <a class="materia" href="${materia.link}">
                    <img src="${materia.img}" alt="${materia.titulo}">
                    <h3 class="titleMateria">${materia.titulo}</h3>
                </a>
            `;
        });
        
        htmlContent += '</div>';
        viewAncorElement?.insertAdjacentHTML('beforebegin', htmlContent);
    }

    // Obtém todas as matérias e injeta o HTML
    const allMaterias = getAllElements(materias);
    injectHTMLs(allMaterias);

    // Adiciona tabindex aos elementos filhos da classe .dafitiStructureBlog
    const elements = document.querySelectorAll('.dafitiStructureBlog h1, .dafitiStructureBlog h2, .dafitiStructureBlog h3, .dafitiStructureBlog h4, .dafitiStructureBlog h5, .dafitiStructureBlog p, .dafitiStructureBlog button, .dafitiStructureBlog a, .dafitiStructureBlog img[alt], .dafitiStructureBlog video, .dafitiStructureBlog table td, .dafitiStructureBlog ul li, .dafitiStructureBlog ol li, .dafitiStructureBlog .sr-only, .dafitiStructureBlog .viewAncor');
    let currentIndex = 1;

    elements.forEach((element) => {
        // Verifica se o elemento já tem tabindex
        if (element.hasAttribute('tabindex')) {
            return;
        }

        if (element.tagName === 'IMG') {
            if (element.getAttribute('alt').trim() !== '') {
                element.setAttribute('tabindex', currentIndex);
                currentIndex++;
            }
        } else if (element.tagName === 'BUTTON' || element.tagName === 'VIDEO') {
            element.setAttribute('tabindex', currentIndex);
            currentIndex++;
        } else if (element.tagName === 'A') {
            element.setAttribute('tabindex', currentIndex);
            element.setAttribute('aria-label', 'Esse link enviará você para outra página.');
            currentIndex++;
        } else if (element.tagName === 'TD') {
            // Verifica se o <td> não está vazio
            if (element.textContent.trim() !== '') {
                element.setAttribute('tabindex', currentIndex);
                currentIndex++;
            }
        } else if (element.tagName !== 'P' || (element.parentElement.tagName !== 'BUTTON' && element.parentElement.tagName !== 'A')) {
            element.setAttribute('tabindex', currentIndex);
            currentIndex++;
        }
    });

    // Seleciona todos os links com a classe .materia
    const linksMateria = document.querySelectorAll('.dafitiStructureBlog .materia');
    const ignoreItens = document.querySelectorAll('.dafitiStructureBlog .linkAncor, .dafitiStructureBlog .materia img, .dafitiStructureBlog .materia .titleMateria');
    // Seleciona todas as tags <a> que não possuem a classe .materia
    const links = document.querySelectorAll('.dafitiStructureBlog a:not(.materia)');

    // ignoreItens.getAttribute('tabindex', 0)
    ignoreItens.forEach((element) => {
        element.setAttribute('tabindex', -1)
    });

    // Itera sobre cada link selecionado
    linksMateria.forEach((link) => {
        // Encontra o elemento filho com a classe .titleMateria dentro do link
        const titleElement = link.querySelector('.titleMateria');

        // Se o elemento filho existir, obtenha o texto do título
        if (titleElement) {
            const titleText = titleElement.textContent.trim();

            // Define o atributo aria-label do link com o texto do título
            link.setAttribute('aria-label', titleText + '. Esse link enviará você para outra página.');
        }
    });

    // Itera sobre cada link selecionado
    links.forEach(link => {
        // Obtém o texto atual do link
        const linkText = link.textContent.trim();
        
        // Define o novo valor do aria-label
        const ariaLabel = `${linkText}. Esse link enviará você para outra página.`;
        
        // Adiciona o aria-label ao link
        link.setAttribute('aria-label', ariaLabel);
    });

    // Seleciona a div com a classe 'viewAncor'
    const viewAncorDiv = document.querySelector('.viewAncor');

    // Verifica se a div foi encontrada
    if (viewAncorDiv) {
        // Define o atributo 'aria-label' com o novo texto
        viewAncorDiv.setAttribute('aria-label', 'Você chegou ao fim da matéria. Obrigado por visitar!');
    }

    new window.VLibras.Widget('https://vlibras.gov.br/app');
});