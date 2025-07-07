import First from '../Trash/01.avif';
import Second from '../Trash/02.avif';

const mockCategories = [
    {
        name: "Carbide Insert",
        image: `${First}`,
        products: [
            { name: "Curning Inserts", image: `${First}` },
            { name: "Cng Inserts", image: `${Second}` },
            { name: "Curning Inserts", image: `${First}` },
            { name: "Cng Inserts", image: `${Second}` }
        ]
    },
    {
        name: "Carbide Irt",
        image: `${Second}`,
        products: [
            { name: "Durning Inserts", image: `${First}` },
            { name: "Durning Its", image: `${Second}` }
        ]
    },
    {
        name: "Cide Insert",
        image: `${First}`,
        products: [
            { name: "Lurning Inserts", image: `${First}` },
            { name: "Lurning Inserts", image: `${Second}` }
        ]
    }
];

export default mockCategories;