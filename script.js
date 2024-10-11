const countries = [
    { name: "Magyarország", capital: "Budapest" },
    { name: "Németország", capital: "Berlin" },
    { name: "Franciaország", capital: "Párizs" },
    { name: "Olaszország", capital: "Róma" },
    { name: "Spanyolország", capital: "Madrid" },
    { name: "Britannia", capital: "London" },
];

const cardContainer = document.getElementById("card-container");

countries.forEach(country => {

    const box = document.createElement("div");
    box.classList.add("box");

    const countryName = document.createElement("h3");
    countryName.textContent = country.name;

    const button = document.createElement("button");
    button.textContent = "mutat/elrejt valasz";
    button.onclick = () => toggleCapital(capitalDiv.id);

    const capitalDiv = document.createElement("div");
    capitalDiv.id = country.name.toLowerCase();
    capitalDiv.classList.add("capital");
    capitalDiv.textContent = country.capital;

    box.appendChild(countryName);
    box.appendChild(button);
    box.appendChild(capitalDiv);
    cardContainer.appendChild(box);
});

function toggleCapital(id) {
    const capitalDiv = document.getElementById(id);
    if (capitalDiv.style.display === "none" || capitalDiv.style.display === "") {
        capitalDiv.style.display = "block";
    } else {
        capitalDiv.style.display = "none";
    }
}
