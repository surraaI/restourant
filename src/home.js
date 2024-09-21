const home = () => {
    const homeDiv = document.createElement('div');

    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to Adoye Restaurant';
    homeDiv.appendChild(h1);

    const p = document.createElement('h2');
    p.textContent = 'We have the best food in town!';
    homeDiv.appendChild(p);

    const section = document.createElement('section');
    section.classList.add('foods');

    const foodDiv = document.createElement('div');
    foodDiv.textContent = 'Delicious food items coming soon!';
    section.appendChild(foodDiv);

    homeDiv.appendChild(section);
    const cards = document.createElement('div');
    cards.classList.add('cards');

    const ourStoryDiv = document.createElement('div')
    ourStoryDiv.classList.add('card')
    const story = document.createElement('h1');
    story.textContent = 'Our Story';
    const sp = document.createElement('p');
    sp.textContent = 'At Addis Hot Chicken, we’re all about bringing the heart of Ethiopia vibrant street food culture to you! Inspired by the bold flavors of Korean fried chicken and the fiery spice of, our crispy, flavorful wings and sides are made to fire up your taste buds.'
    ourStoryDiv.appendChild(story);
    ourStoryDiv.appendChild(sp);
    cards.appendChild(ourStoryDiv);

    const ourStoryDiv2 = document.createElement('div')
    ourStoryDiv2.classList.add('card')
    const story2 = document.createElement('h1');
    story2.textContent = 'What makes us different';
    const sp2 = document.createElement('p');
    sp2.textContent = 'At Addis Hot Chicken, we’re all about bringing the heart of Ethiopia vibrant street food culture to you! Inspired by the bold flavors of Korean fried chicken and the fiery spice of, our crispy, flavorful wings and sides are made to fire up your taste buds.'
    ourStoryDiv2.appendChild(story2);
    ourStoryDiv2.appendChild(sp2);
    cards.appendChild(ourStoryDiv2);

    const ourStoryDiv3 = document.createElement('div')
    ourStoryDiv3.classList.add('card')
    const story3 = document.createElement('h1');
    story3.textContent = 'What makes us different';
    const sp3 = document.createElement('p');
    sp3.textContent = 'At Addis Hot Chicken, we’re all about bringing the heart of Ethiopia vibrant street food culture to you! Inspired by the bold flavors of Korean fried chicken and the fiery spice of, our crispy, flavorful wings and sides are made to fire up your taste buds.'
    ourStoryDiv3.appendChild(story3);
    ourStoryDiv3.appendChild(sp3);
    cards.appendChild(ourStoryDiv3);

    homeDiv.appendChild(cards)



    return homeDiv;
};

export default home;