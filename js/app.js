const heroes = [
    {
        "id": "1",
        "category": "marvel",
        "about": "Peter Parker, un estudiante de secundaria, adquiere habilidades arácnidas después de ser mordido por una araña radiactiva. Usa sus habilidades para luchar contra el crimen como Spider-Man.",
        "picture": "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/09/28/15696592030335.jpg",
        "name": "Spider-Man",
        "date": "1962"
    },
    {
        "id": "2",
        "category": "marvel",
        "about": "Tony Stark, un genio multimillonario, crea un traje de alta tecnología que le otorga habilidades sobrehumanas. Utiliza su traje para proteger al mundo como Iron Man.",
        "picture": "https://dam.smashmexico.com.mx/wp-content/uploads/2018/06/27181227/ironman_portada2.jpg",
        "name": "Iron Man",
        "date": "1963"
    },
    {
        "id": "3",
        "category": "marvel",
        "about": "Dr. Bruce Banner se transforma en Hulk, una criatura gigante y poderosa, después de ser expuesto a la radiación gamma. A menudo lucha con su lado monstruoso mientras lucha contra villanos.",
        "picture": "https://bolavip.com/__export/1557252167649/sites/bolavip/img/2019/05/07/hulk_crop1557252167265.jpg_1693159006.jpg",
        "name": "Hulk",
        "date": "1962"
    },
    {
        "id": "4",
        "category": "marvel",
        "about": "Thor es el dios del trueno y un poderoso guerrero asgardiano. Después de ser desterrado de Asgard, defiende la Tierra con su martillo mágico, Mjolnir.",
        "picture": "https://img2.rtve.es/i/?w=1600&i=1585840423850.jpg",
        "name": "Thor",
        "date": "1962"
    },
    {
        "id": "5",
        "category": "marvel",
        "about": "Steve Rogers se convierte en el supersoldado conocido como Captain America durante la Segunda Guerra Mundial. Lidera a los Vengadores y lucha por la justicia y la libertad.",
        "picture": "https://img.asmedia.epimg.net/resizer/UDSz8OmVCcRGoUYJdqQc9pE778k=/1472x828/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/QODR7WPXE5MZFHULFKKLZ6IIXY.jpg",
        "name": "Captain America",
        "date": "1941"
    },
    {
        "id": "6",
        "category": "marvel",
        "about": "Natasha Romanoff, también conocida como Black Widow, es una experta en espionaje y combate cuerpo a cuerpo. Es miembro de los Vengadores y lucha contra el crimen y la injusticia.",
        "picture": "https://wipy.tv/wp-content/uploads/2019/07/filtran-el-tr%C3%A1iler-de-%E2%80%98Black-Widow%E2%80%99.jpg",
        "name": "Black Widow",
        "date": "1964"
    },
    {
        "id": "7",
        "category": "marvel",
        "about": "Wolverine, cuyo nombre real es Logan, es un mutante con garras retráctiles y un factor de curación acelerado. Es conocido por su actitud ruda y su pasado misterioso.",
        "picture": "https://lumiere-a.akamaihd.net/v1/images/the_wolverine_-_feature_71479c84.png",
        "name": "Wolverine",
        "date": "1974"
    },
    {
        "id": "8",
        "category": "marvel",
        "about": "Stephen Strange, un brillante cirujano, se convierte en el Hechicero Supremo después de un accidente automovilístico que daña sus manos. Aprende las artes místicas y protege la realidad de amenazas sobrenaturales.",
        "picture": "https://media.npr.org/assets/img/2016/10/26/cm-ss-00542_rs_20_wide-95bb985d74d2b45152d581f896ff6bb14a6e4e5a-s1400-c100.jpg",
        "name": "Doctor Strange",
        "date": "1963"
    },
    {
        "id": "9",
        "category": "marvel",
        "about": "T'Challa, el rey de Wakanda, se convierte en Black Panther después de consumir una hierba especial que le otorga habilidades sobrehumanas. Protege su país y el mundo como Black Panther.",
        "picture": "https://media.newyorker.com/photos/5a875e3f33aebd0cab9bab12/master/pass/Brody-Passionate-Politics-Black-Panther.jpg",
        "name": "Black Panther",
        "date": "1966"
    },
    {
        "id": "10",
        "category": "marvel",
        "about": "Carol Danvers adquiere poderes cósmicos después de un accidente con un dispositivo Kree. Se convierte en Captain Marvel y lucha por la justicia en todo el universo.",
        "picture": "https://img.chilango.com/2018/05/quien-es-capitan-marvel.jpg",
        "name": "Captain Marvel",
        "date": "1967"
    },
    {
        "id": "11",
        "category": "marvel",
        "about": "Dr. Hank Pym desarrolla un traje que le permite cambiar de tamaño y comunicarse con las hormigas. Se convierte en Ant-Man y lucha contra el crimen junto a su pareja, la Avispa.",
        "picture": "https://fotografias.antena3.com/clipping/cmsimages01/2019/06/13/47F047EE-2DD9-4776-BAAE-968A4165DDC2/98.jpg?crop=960,540,x0,y33&width=1900&height=1069&optimize=high&format=webply",
        "name": "Ant-Man",
        "date": "1962"
    },
    {
        "id": "12",
        "category": "marvel",
        "about": "Vision es un androide sintético creado por Ultron y Tony Stark. Tiene una variedad de habilidades sobrehumanas y se une a los Vengadores para luchar por la paz y la justicia.",
        "picture": "https://upload.wikimedia.org/wikipedia/en/f/fc/Paul_Bettany_as_Vision.jpg",
        "name": "Vision",
        "date": "1968"
    },
    {
        "id": "13",
        "category": "marvel",
        "about": "Wanda Maximoff, también conocida como Scarlet Witch, tiene habilidades de manipulación de la realidad y la probabilidad. Es miembro de los Vengadores y lucha por un mundo mejor.",
        "picture": "https://www.nacionflix.com/__export/1662746438514/sites/debate/img/2022/09/01/disexo_x2x.jpg_1758632412.jpg",
        "name": "Scarlet Witch",
        "date": "1964"
    },
    {
        "id": "14",
        "category": "marvel",
        "about": "Sam Wilson, también conocido como Falcon, es un exsoldado que tiene un traje alado que le permite volar. Se une a los Vengadores y lucha por la justicia.",
        "picture": "https://media.biobiochile.cl/wp-content/uploads/2021/03/the-falcon.jpg",
        "name": "Falcon",
        "date": "1969"
    },
    {
        "id": "15",
        "category": "marvel",
        "about": "Wade Wilson, también conocido como Deadpool, es un mercenario con habilidades de curación acelerada y un sentido del humor irreverente. Es conocido por romper la cuarta pared y por sus aventuras llenas de acción y comedia.",
        "picture": "https://i.blogs.es/185894/deadpool/840_560.jpeg",
        "name": "Deadpool",
        "date": "1991"
    },
    {
        "id": "16",
        "category": "dc",
        "about": "Clark Kent, también conocido como Superman, es un extraterrestre de Krypton que posee una variedad de habilidades sobrehumanas, incluida la fuerza, la velocidad y la capacidad de volar.",
        "picture": "https://s1.eestatic.com/2022/12/15/series/cine/726187515_229497619_1706x960.jpg",
        "name": "Superman",
        "date": "1938"
    },
    {
        "id": "17",
        "category": "dc",
        "about": "Bruce Wayne, también conocido como Batman, es un multimillonario que se convierte en un vigilante enmascarado para luchar contra el crimen en Gotham City después de presenciar el asesinato de sus padres cuando era niño.",
        "picture": "https://img2.rtve.es/i/?w=1600&i=1634549481092.jpg",
        "name": "Batman",
        "date": "1939"
    },
    {
        "id": "18",
        "category": "dc",
        "about": "Diana Prince, también conocida como Wonder Woman, es una guerrera amazona de la isla de Themyscira. Posee habilidades sobrehumanas y usa su fuerza y sabiduría para luchar por la paz y la justicia en el mundo.",
        "picture": "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/05/wonder-woman-rompera-pelicula-mala-racha-criticas.jpg?tf=3840x",
        "name": "Wonder Woman",
        "date": "1941"
    },
    {
        "id": "19",
        "category": "dc",
        "about": "Barry Allen, también conocido como The Flash, es un científico que adquiere la capacidad de moverse a velocidades sobrehumanas después de ser alcanzado por un rayo y bañado en productos químicos. Usa sus habilidades para proteger Central City como un héroe veloz.",
        "picture": "https://erikstore.com/blog/wp-content/uploads/2023/06/Estreno_pelicula_the_flash.webp",
        "name": "The Flash",
        "date": "1940"
    },
    {
        "id": "20",
        "category": "dc",
        "about": "Arthur Curry, también conocido como Aquaman, es el rey de Atlantis y tiene la capacidad de comunicarse con criaturas marinas y controlar el agua. Defiende los océanos y protege la Tierra como miembro de la Liga de la Justicia.",
        "picture": "https://i.blogs.es/12a5f3/aquaman-image2/650_1200.jpg",
        "name": "Aquaman",
        "date": "1941"
    },
    {
        "id": "21",
        "category": "dc",
        "about": "Los Green Lantern Corps son un grupo de héroes intergalácticos que protegen el universo utilizando anillos de poder que les otorgan la capacidad de crear construcciones de luz basadas en su fuerza de voluntad. Cada Green Lantern representa a un sector del universo y defiende la paz y la justicia.",
        "picture": "https://www.hollywoodreporter.com/wp-content/uploads/2016/03/greenlantern2011_18.jpg?w=3000",
        "name": "Green Lantern",
        "date": "1940"
    },
    {
        "id": "22",
        "category": "dc",
        "about": "Victor Stone, también conocido como Cyborg, es un joven atleta que sufre graves lesiones en un accidente y es reconstruido con partes cibernéticas. Posee una variedad de habilidades tecnológicas y es un miembro valioso de la Liga de la Justicia.",
        "picture": "https://media.wired.com/photos/59549a2038978176dacc64b4/master/pass/Cyborg.jpg",
        "name": "Cyborg",
        "date": "1980"
    },
    {
        "id": "23",
        "category": "dc",
        "about": "Oliver Queen, también conocido como Green Arrow, es un arquero experto y un defensor de la justicia social. Usa sus habilidades de arquería y su ingenio para luchar contra el crimen en Star City.",
        "picture": "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/05/stephen-amell-como-oliver-queen-arrow-3023318.jpg?tf=3840x",
        "name": "Green Arrow",
        "date": "1941"
    },
    {
        "id": "24",
        "category": "dc",
        "about": "Billy Batson, un joven huérfano, obtiene el poder de Shazam, un antiguo mago, y se convierte en un superhéroe adulto con una variedad de habilidades sobrehumanas. Lucha por la verdad y la justicia como Shazam.",
        "picture": "https://i.blogs.es/bbd935/shazam-2560x1600-dc-comics-2019-hd-17581/1366_2000.jpeg",
        "name": "Shazam",
        "date": "1939"
    },
    {
        "id": "25",
        "category": "dc",
        "about": "J'onn J'onzz, también conocido como Martian Manhunter, es un marciano que se convierte en un héroe en la Tierra después de ser el último sobreviviente de su planeta. Tiene una variedad de habilidades telepáticas y físicas y es un miembro clave de la Liga de la Justicia.",
        "picture": "https://i0.wp.com/www.thewrap.com/wp-content/uploads/2021/03/how-martian-manhunter-ended-up-in-zack-snyder-justice-league-snyder-cut.jpg?fit=618%2C412&ssl=1",
        "name": "Martian Manhunter",
        "date": "1955"
    },
    {
        "id": "26",
        "category": "dc",
        "about": "Carter Hall, también conocido como Hawkman, es un arqueólogo que descubre que es la reencarnación de un antiguo guerrero alado. Usa sus habilidades de vuelo y su dominio del combate para luchar contra el crimen y la injusticia.",
        "picture": "https://www.zonanegativa.com/imagenes/2019/04/HAWKMAN-1.jpg",
        "name": "Hawkman",
        "date": "1940"
    },
    {
        "id": "27",
        "category": "dc",
        "about": "Dinah Lance, también conocida como Black Canary, es una experta en artes marciales y una combatiente callejera. Posee un poderoso grito sónico, conocido como el Grito del Canario, que puede incapacitar a sus enemigos.",
        "picture": "https://www.geekmi.news/__export/1680100034153/sites/debate/img/2023/03/29/axadir_un_txtulo_x8x.jpg_1758632412.jpg",
        "name": "Black Canary",
        "date": "1947"
    },
    {
        "id": "28",
        "category": "dc",
        "about": "Kara Zor-El, también conocida como Supergirl, es la prima de Superman que huye del planeta Krypton poco antes de su destrucción. Tiene habilidades similares a las de Superman y lucha por la justicia en su identidad secreta.",
        "picture": "https://www.latercera.com/resizer/ZwXgr33fSxP-Af3VBp5DdkD9cv4=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/JV7XISG5YBFILOC7JJOIDFM6QM.jpg",
        "name": "Supergirl",
        "date": "1959"
    },
    {
        "id": "29",
        "category": "dc",
        "about": "Dick Grayson, el primer Robin y el protegido de Batman, se convierte en Nightwing después de dejar de ser el compañero de Batman y establecerse en la ciudad de Blüdhaven. Es un experto en acrobacias y artes marciales, y lucha por la justicia en su propia identidad.",
        "picture": "https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/51ce6099e4b0d911b4489b79/60d6009b6f69762c4c130e09/1624998658239/director-chris-mckay-talks-about-dcs-nightwing-movie-and-shared-new-details.jpg?format=1500w",
        "name": "Nightwing",
        "date": "1984"
    },
    {
        "id": "30",
        "category": "dc",
        "about": "Raven es una poderosa hechicera. Posee habilidades para manipular la energía oscura y el poder del alma, lo que le permite realizar hechizos y proyectar emociones en forma de energía. Su personalidad es reservada y tranquila, y se destaca por su inteligencia y sabiduría.",
        "picture": "https://i.ytimg.com/vi/BJwHetjZMQY/maxresdefault.jpg",
        "name": "Raven",
        "date": "1980"
    }
]

const marvelTitle = document.querySelector('#marvel-title');
const dcTitle = document.querySelector('#dc-title');
const heroeMarvel = document.querySelector('.hero.marvel');
const heroeDC = document.querySelector('.hero.dc');
const heroCard = document.querySelector('.hero__card')
const dialog = document.querySelector('.dialog');

const createCard = (heroes, category, heroeHTML, color) => {
    let heroesF = heroes.filter(function(heroe) {
        return heroe.category == category;
    });
    for (heroe of heroesF) {
        heroeHTML.innerHTML += `
        <div class="hero__card">
            <img class="hero__picture" src=${heroe.picture} alt="">
            <div class="hero__body">
                <div class="hero__name">${heroe.name}</div>
                <button onclick="showDialog(${heroe.id})" class="hero__button ${color}">Ver</button>
            </div>
        </div>
        `;
    }
}

createCard(heroes, "marvel", heroeMarvel, "red");
createCard(heroes, "dc", heroeDC, "blue");

const showDialog = (id) => {
    const heroe = heroes.find(heroe => heroe.id == id);
    dialog.innerHTML = `
    <div class="dialog__title">${heroe.name}</div>
    <img class="dialog__picture" src=${heroe.picture} alt="">
    <div class="dialog__desc">${heroe.about}</div>
    <br>
    <p class="dialog__date">${heroe.date}</p>
    <br>
    <div class="dialog__close">
    <button onclick="dialog.close()" class="dialog__button">Regresar</button>
    </div>
    `;
    const dialogButton = document.querySelector('.dialog__button');
    if (heroe.category == "marvel") {
        dialogButton.classList.add('red');
    }
    else {
        dialogButton.classList.add('blue');
    }
    dialog.showModal();
};

const filterList = () => {
    heroeMarvel.innerHTML = ``;
    heroeDC.innerHTML = ``;
    createCard(heroes, "marvel", heroeMarvel, "red");
    createCard(heroes, "dc", heroeDC, "blue");
    let result = [];
    let filterSelect = document.getElementById('filter').value;
    filterInput = document.querySelector('.filter__input').value.toLowerCase();
    result = heroes.filter(function(hero) {
        if (filterSelect === 'all' || filterSelect === hero.category) {
            return hero.name.toLowerCase().includes(filterInput);
        }
        return false;
    });
    resultMarvel = result.filter(function(heroMarvel) {
        return heroMarvel.category == 'marvel';
    });
    resultDC = result.filter(function(heroDC) {
        return heroDC.category == 'dc';
    });
    showResults(filterSelect, filterInput, result, resultMarvel, resultDC);
};

document.querySelector('.filter__select').addEventListener('change', filterList);
document.querySelector('.filter__button').addEventListener('click', filterList);

const createFilteredCards = (htmlElement, array, color) => {
    htmlElement.innerHTML = ``;
    for (element of array) {
        htmlElement.innerHTML += `
        <div class="hero__card">
            <img class="hero__picture" src=${element.picture} alt="">
            <div class="hero__body">
                <div class="hero__name">${element.name}</div>
                <button onclick="showDialog(${element.id})" class="hero__button ${color}">Ver</button>
            </div>
        </div>
        `;
    }
};

const showBody = () => {
    marvelTitle.style.display = 'grid';
    heroeMarvel.style.display = 'grid';
    dcTitle.style.display = 'grid';
    heroeDC.style.display = 'grid';
};

const showResults = (valueSelect, valueInput, filteredArray, filteredArrayM, filteredArrayD) => {
    if (valueSelect == 'all') {
        if (valueInput == '') {
            showBody();
        } else {
            createFilteredCards(heroeMarvel, filteredArrayM, "red");
            createFilteredCards(heroeDC, filteredArrayD, "blue");
            showBody();
        }
    }
    else if (valueSelect == 'marvel') {
        if (valueInput == '') {
            showBody();
        } else {
            createFilteredCards(heroeMarvel, filteredArray, "red");
            marvelTitle.style.display = 'grid';
            heroeMarvel.style.display = 'grid';
        }
        dcTitle.style.display = 'none';
        heroeDC.style.display = 'none';
    }
    else if (valueSelect == 'dc') {
        if (valueInput == '') {
            showBody();
        } else {
            createFilteredCards(heroeDC, filteredArray, "blue");
            dcTitle.style.display = 'grid';
            heroeDC.style.display = 'grid';
        }
        marvelTitle.style.display = 'none';
        heroeMarvel.style.display = 'none';
    }
}