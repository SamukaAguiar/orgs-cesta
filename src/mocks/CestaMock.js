
import logo     from '../../assets/logo.png';
import tomato   from '../../assets/fruits/Tomate.png';
import broccoli from '../../assets/fruits/Brocolis.png';
import potato   from '../../assets/fruits/Batata.png';
import cucumber  from '../../assets/fruits/Pepino.png';
import pumpkin  from '../../assets/fruits/Abobora.png';


const cesta = {
    topPage: {
        titleTop: "Detalhes da cesta"
    },
    details: {
        titleDetail: "Cesta de Verduras",
        logoFarm: logo, 
        nameFarm: "Janny Jack Farm",
        descriptionFarm: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
        price: "30,00",
        buttonBuy: "Comprar",        
    },
    itens: {
        titleItem: "Itens da Cesta",
        listItens:[
            {
                nameItem: "Tomate",
                imageItem: tomato,
            },
            {
                nameItem: "Brócolis",
                imageItem: broccoli,
            },
            {
                nameItem: "Batata",
                imageItem: potato,
            },
            {
                nameItem: "Pepino",
                imageItem: cucumber,
            },
            {
                nameItem: "Abóbora",
                imageItem: pumpkin,
            },
        ]
    }
}

export default cesta;
