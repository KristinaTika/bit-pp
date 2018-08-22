const container = document.querySelector(".root");

export const renderHomePage = () => {

    container.innerHTML = "";
    const home = document.createElement("div");
    home.innerHTML = `
    <section class="slogan">
    <div class="background-image" style="background-image: url(assets/images/main.jpg);"></div>
    <div class="slogan-content-area">
        <p>Salon nameštaja</p>
        <h1>Comfort MG</h1>
        <p>Izrada elemenata po želji i meri!</p>
    </div>
</section>

<section class="contact">
    <ul class="grid">
        <li>
            <h3>Radno vreme</h3>
        </li>
        <li>Leti:</li>
        <li>Ponedeljak - petak: 8:00 - 20:00h</li>
        <li>Subota: 8:00 - 17:00h</li>
        <li>Zimi:</li>
        <li>Ponedeljak - petak: 8:00 - 19:00h</li>
        <li>Subota: 8:00 - 16:00h</li>
    </ul>

    <ul>
        <li>
            <h3>Adresa</h3>
        </li>
        <li>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.9625749349807!2d19.681688715955318!3d44.76117797909896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475bcaf878441d99%3A0x87ae94c11fe80ce1!2zTWHEjXZhbnNrYSA3NywgxaBhYmFjIDE1MDAw!5e0!3m2!1sen!2srs!4v1534759055307"
                width="220" height="220" frameborder="0" style="border:0" allowfullscreen></iframe>
        </li>
    </ul>

    <div class="grid" id="info">
        <h3 class="contact">Kontakt</h3>
        <ul class="telefon">
            <li>Tel: 065/ 5255 - 864</li>
            <li>Tel: 065/ 2032 - 026</li>

            <li>Email: comfortmg@outlook.com</li>
            <li>
                <p>Pronađite nas na društvenim mrežama</p>
                <a href="https://www.facebook.com/namestajcomfortmg/"<i class="fab fa-facebook fa-2x"></i></a>
                <a href="https://www.instagram.com/explore/locations/1043848782426524/comfort-mg-namestaj/"<i class="fab fa-instagram fa-2x"></i> </a>
            </li>
        </ul>
    </div>
    </div>
</section>
    `;
    container.appendChild(home);
}

export const renderAction = () => {

    container.innerHTML = "";
    const action = document.createElement("div");
    action.setAttribute("class", "action-btn");
    action.innerHTML = `
    <h5>Proizvodi na akciji:</h5>   
    <div class="carousel">
        <a class="carousel-item sale-photo" href="#one!"><img src="../assets/images/action1.jpg" class="a1" dimenzije="500x400" cena="19999 din" opis-proizvoda="fdsfdsfdssfdsdfsfdfds"></a>
        <a class="carousel-item sale-photo" href="#two!"><img src="../assets/images/action2.jpg"></a>
        <a class="carousel-item sale-photo" href="#three!"><img src="../assets/images/action3.jpg"></a>
        <a class="carousel-item sale-photo" href="#four!"><img src="../assets/images/action4.jpg"></a>
        <a class="carousel-item sale-photo" href="#five!"><img src="../assets/images/action5.jpg"></a>
    </div>
    `;
    container.appendChild(action);

    const elems = document.querySelectorAll('.carousel');
    const instances = M.Carousel.init(elems); 
} 

export const renderActionPhoto = (event) => {

    const a = event.target;
    const dimenzije = a.getAttribute("dimenzije");
    const cena = a.getAttribute("cena");
    const opis = a.getAttribute("opis-proizvoda");
    const url = a.getAttribute("src");
    
    const product = {
        photoUrl: url,
        dimensions: dimenzije,
        price: cena,
        summary: opis
    }

    container.innerHTML = "";

    const singlePhoto = document.createElement("div");
    singlePhoto.innerHTML= `
    <a href="#" class="back-to-action"><i class="fas fa-angle-double-left "></i>Nazad na akciju</a>
    <div>
        <img src="${product.photoUrl}" alt="Slika proizvoda">
    </div>
    <p>
        Dimenzije: ${product.dimensions}
    </p>
    <p>
        Cena: ${product.price}
    </p>
    <p>
        ${product.summary}
    </p>

    `;
    container.appendChild(singlePhoto);
}

export const renderAbout = () => {

    container.innerHTML = "";
    const about = document.createElement("div");
    about.innerHTML = `
    <h2>Salon nameštaja Comfort MG</h2>
    <p>
        Nakon dugogodišnjeg iskustva i rada odlučili smo da 11.3.2017. pokrenemo nešto novo u gradu, tada je zvanično otvoren salon nameštaja Comfort MG. 
        Bavimo se izradom pločastog nameštaja od iverice i medijapana po meri i želji kupaca. U našoj ponudi možete pronaći kuhinje, ormare, predsoblja, dnevne sobe, regale i još mnogo toga. Kod nas ćete dobiti 3D prikaz i idejno rešenje za Vaš dom. Od projektovanja do izrade i montaže elemenata, sve to Vam nudimo potpuno besplatno ukoliko odlučite da sarađujete sa nama. 
        U saradnji sa drugim proizvođačima nudimo Vam i tapacirani nameštaj po pristupačnim cenama.
        Ukoliko Vam je potrebna popravka, prepravka ili montaža pločastog nameštaja od iverice i medijapana možete nas kontaktirati. 
        S poštovanjem, 
        Vaš Comfort MG
    </p>
    `;
    container.appendChild(about);
}

export const renderContact = () => {

    container.innerHTML = "";
    const contact = document.createElement("div");
    contact.setAttribute("class", "container contact-div");
    contact.innerHTML = `
    <div class="contact-container">
        <div class="contact-info">
            <h3>Kontakt</h3>
            <p><i class="fas fa-mobile-alt"></i> 065/ 5255 - 864</p>
            <p><i class="fas fa-mobile-alt"></i> 065/ 2032 - 026</p>
            <p><i class="far fa-envelope"></i>comfortmg@outlook.com</p>
            <p> 
            <a href="https://www.facebook.com/namestajcomfortmg/"<i class="fab fa-facebook fa-2x"></i></a>
            <a href="https://www.instagram.com/explore/locations/1043848782426524/comfort-mg-namestaj/"<i class="fab fa-instagram fa-2x"></i> </a>
            </p>
        </div>
        <div class="contact-map">
            <p>
            <i class="fas fa-map-marker-alt"></i> Mačvanska 77, Šabac
            </p>
        <p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.9625749349807!2d19.681688715955318!3d44.76117797909896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475bcaf878441d99%3A0x87ae94c11fe80ce1!2zTWHEjXZhbnNrYSA3NywgxaBhYmFjIDE1MDAw!5e0!3m2!1sen!2srs!4v1534759055307"
            width="220" height="220" frameborder="0" style="border:0" allowfullscreen></iframe>
        </p>
        </div>
    </div>
    <form class="contact-form">
        <p>Ime i prezime</p>
        <input type = "text" placeholder = "Ime i prezime" class="full-name" required/> 
        <p>Email</p> 
        <input type="email" placeholder = "mail@gmail.com" class="email" name="emailaddress" required/> 
        <p>Poruka</p> 
        <textarea cols="20" rows="10" class="message" required>
        </textarea>
        <input type="button" value="POŠALJI" class="contact-button"/>
    </form>
    `;
    container.appendChild(contact);
}