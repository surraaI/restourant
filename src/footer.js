import './css/styles.css';

function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const p = document.createElement('p');
    p.textContent = '© 2024 Adoye Restaurant. All rights reserved.';

    const socialMediaDiv = document.createElement('div');
    socialMediaDiv.classList.add('social-media');

    const facebook = document.createElement('a');
    facebook.href = 'https://facebook.com';
    facebook.textContent = 'Facebook';

    const twitter = document.createElement('a');
    twitter.href = 'https://twitter.com';
    twitter.textContent = 'Twitter';

    const instagram = document.createElement('a');
    instagram.href = 'https://instagram.com';
    instagram.textContent = 'Instagram';

    socialMediaDiv.appendChild(facebook);
    socialMediaDiv.appendChild(twitter);
    socialMediaDiv.appendChild(instagram);

    footer.appendChild(p);
    footer.appendChild(socialMediaDiv);

    return footer;
}

export default createFooter;