var socialtags = [{
    img: "img/github.svg",
    link: "https://github.com/cclaess"
}, {
    img: "img/linkedin.svg",
    link: "https://www.linkedin.com/in/cris-claessens-04077b14b/"
}, {
    img: "img/twitter.svg",
    link: "https://x.com/cris_claessens"
}, {
    img: "img/email.svg",
    link: "mailto:c.h.b.claessens@tue.nl"
}, {
    img: "img/google-scholar.svg",
    link: "https://scholar.google.com/citations?view_op=list_works&hl=en&user=48laGBwAAAAJ"
}, {
    img: "img/orcid.svg",
    link: "https://orcid.org/0009-0006-2152-8674"
    }]

function loadSocialIcons() {
    var socialtext = ""
    for (x in socialtags) {
        var data = `<a class="center" href="${socialtags[x].link}"> <img class="social-icon center" src="${socialtags[x].img}" alt="${socialtags[x].name}"></a>`
        socialtext += data
    }
    document.getElementById("social-list").innerHTML = socialtext;
}

loadSocialIcons()

function dayNightToggle() {
    var element = document.body;
    element.classList.toggle("light-mode");
    
    var check = window.localStorage.getItem('light-mode');
    if (check == "light") {
        window.localStorage.clear();
    } else {
        window.localStorage.setItem('light-mode', 'dark');
    }
    
    updateSvgColors();

}

function checkDayNight() {
    var check = window.localStorage.getItem('light-mode');
    var element = document.body;
    if (check == "light") {
        element.classList.add("light-mode");
    } else {
        element.classList.remove("light-mode");
    }
    updateSvgColors();
}

checkDayNight()

function animateValue(id, start, end, duration) {
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let obj = document.getElementById(id);
    let timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}


function loadSocialIcons() {
    var socialtext = ""
    for (x in socialtags) {
        var data = `<a class="center" href="${socialtags[x].link}"> <img class="social-icon center" src="${socialtags[x].img}" alt="${socialtags[x].name}"></a>`
        socialtext += data
    }
    document.getElementById("social-list").innerHTML = socialtext;
}
function loadSocialIcons() {
    var socialtext = ""
    for (x in socialtags) {
        var data = `<a class="center" href="` + socialtags[x].link + `"> <img class="social-icon center" style="padding: 5px!important;width: 40px;" src="` + socialtags[x].img + `"></a>`
        socialtext += data
    }
    document.getElementById("social-list").innerHTML = socialtext;
}


customElements.define("load-file", class extends HTMLElement {
    async connectedCallback(
        src = this.getAttribute("src"),
        shadowRoot = this.shadowRoot || this.attachShadow({ mode: "open" }),
    ) {
        shadowRoot.innerHTML = await (await fetch(src)).text()
        shadowRoot.append(...this.querySelectorAll("[shadowRoot]"))
        this.hasAttribute("replaceWith") && this.replaceWith(...shadowRoot.childNodes)
    }
})

// Function to update SVG colors dynamically
function updateSvgColors() {
    const isDarkMode = document.body.classList.contains("dark-mode");
    const dots = document.querySelectorAll(".black-dot");

    dots.forEach(dot => {
        dot.setAttribute("fill", isDarkMode ? "white" : "black");
    });
}
