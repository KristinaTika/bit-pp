export const root = document.querySelector(".root");

export const createHeader = () => {

    const header = document.createElement("header");

    header.innerHTML = `
    <header class="header">
    <nav class="hamburger">     
        <button class="hamburger-btn">
            <span class="hamburger-btn-bar"></span>
            <span class="hamburger-btn-bar"></span>
            <span class="hamburger-btn-bar"></span>
        </button>
    </nav>
    <nav class="desktop">
        <div class="desktop-nav">
            <div>Feed</div>
            <div>People</div>  
            <div>Profile</div>  
        </div>
    </nav>
</header>
<nav class="mobile">
    <ul class="mobile-items">
        <li class="mobile-item">Feed</li>
        <li class="mobile-item">People</li>
        <li class="mobile-item">Profile</li>
    </ul>
</nav>

    `
    root.appendChild(header);
    
    const openMobile = () => {
        mobileNav.classList.add('open');
    }
    
    const closeMobile = () => {
        mobileNav.classList.remove('open');
    }

    const hamburgerButton = document.querySelector('.hamburger-btn');
    const mobileNav = document.querySelector('.mobile');
 
    hamburgerButton.addEventListener('click', openMobile);
    mobileNav.addEventListener('click', closeMobile);
}    

