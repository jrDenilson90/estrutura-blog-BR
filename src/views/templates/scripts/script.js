// document.addEventListener('DOMContentLoaded', function () {
//     // Definindo o JSON diretamente no script
//     const materias = [
//         {
//             "titulo": "Tênis Para Trabalhar: Modelos Resistentes e Confortáveis | Dafiti",
//             "img": "https://dafitistatic.dafiti.com.br/cms/2025_03_11_14_55_22_tenis-para-trabalhar.png",
//             "link": "https://www.dafiti.com.br/moda/tenis-para-trabalhar/"
//         },
//         {
//             "titulo": "Vestido Vermelho: Como Combinar com a Cor do Sapato | Dafiti",
//             "img": "https://dafitistatic.dafiti.com.br/cms/2025_03_11_15_07_54_vestido-vermelho-combina-com-qual-cor-de-sapato-topo.jpg",
//             "link": "https://www.dafiti.com.br/moda/vestido-vermelho-combina-com-qual-cor-de-sapato/"
//         },
//         {
//             "titulo": "Como Limpar Tênis Branco: Passo a Passo e Dicas | Dafiti",
//             "img": "https://dafitistatic.dafiti.com.br/cms/2025_03_11_15_16_28_bannon-morrissy-FiPXar82v1w-unsplash-scaled-e1685644315531.jpg",
//             "link": "https://www.dafiti.com.br/moda/como-limpar-tenis-branco/"
//         }
//         // Adicione mais matérias conforme necessário
//     ];

//     // Função para sortear elementos aleatórios de um array
//     function getRandomElements(arr, num) {
//         const shuffled = arr.sort(() => 0.5 - Math.random());
//         return shuffled.slice(0, num);
//     }

//     // Função para injetar HTML na página
//     function injectHTML(materias) {
//         const viewAncorElement = document.querySelector('.viewAncor');
//         let htmlContent = '<h2 class="titleDestaques">Materias Destacadas</h2><div class="flexMaterias">';
//         materias.forEach(materia => {
//             htmlContent += `
//                 <a class="materia" href="${materia.link}">
//                     <img src="${materia.img}" alt="${materia.titulo}">
//                     <h3 class="titleMateria">${materia.titulo}</h3>
//                 </a>
//             `;
//         });
//         htmlContent += '</div>';
//         viewAncorElement.insertAdjacentHTML('beforebegin', htmlContent);
//     }

//     // Sorteia 3 matérias e injeta o HTML
//     const randomMaterias = getRandomElements(materias, 3);
//     injectHTML(randomMaterias);
// });
