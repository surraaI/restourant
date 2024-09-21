// menu.js

const menu = {
    appetizers: [
        { name: 'Bruschetta', price: 6.00 },
        { name: 'Stuffed Mushrooms', price: 8.00 },
        { name: 'Garlic Bread', price: 5.00 }
    ],
    mainCourses: [
        { name: 'Margherita Pizza', price: 12.00 },
        { name: 'Spaghetti Carbonara', price: 14.00 },
        { name: 'Grilled Salmon', price: 18.00 }
    ],
    desserts: [
        { name: 'Tiramisu', price: 7.00 },
        { name: 'Panna Cotta', price: 6.00 },
        { name: 'Gelato', price: 5.00 }
    ],
    beverages: [
        { name: 'Coca Cola', price: 3.00 },
        { name: 'Lemonade', price: 4.00 },
        { name: 'Espresso', price: 2.50 }
    ]
};

function displayMenu() {
    const menuCard = document.createElement('div');
    menuCard.classList.add('menu-card');

    // Helper function to create a section for each menu category
    function createMenuSection(title, items) {
        const section = document.createElement('div');
        section.classList.add('menu-section');

        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = title;
        section.appendChild(sectionTitle);

        // Create a list of items for the section
        const itemList = document.createElement('ul');
        items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            itemList.appendChild(listItem);
        });

        section.appendChild(itemList);
        return section;
    }

    // Append all sections to the menu card
    menuCard.appendChild(createMenuSection('Appetizers', menu.appetizers));
    menuCard.appendChild(createMenuSection('Main Courses', menu.mainCourses));
    menuCard.appendChild(createMenuSection('Desserts', menu.desserts));
    menuCard.appendChild(createMenuSection('Beverages', menu.beverages));

    // Return the complete menu card
    return menuCard;
}

export default displayMenu;