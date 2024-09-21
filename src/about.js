function about() {
    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('about');

    const h1 = document.createElement('h1');
    h1.textContent = 'About Adoye Restaurant';
    aboutDiv.appendChild(h1);

    const p1 = document.createElement('p');
    p1.textContent = 'At Adoye Restaurant, we pride ourselves on offering the finest dining experience inspired by the rich culinary traditions of Ethiopia. Our dishes are crafted from fresh, locally sourced ingredients, ensuring each bite is full of flavor.';
    aboutDiv.appendChild(p1);

    const p2 = document.createElement('p');
    p2.textContent = 'Whether you’re craving traditional favorites or innovative new dishes, our menu reflects the vibrant culture and diverse flavors of Ethiopian cuisine. Join us for a meal that celebrates the heart and soul of our culinary heritage.';
    aboutDiv.appendChild(p2);

    return aboutDiv;
}

export default about;