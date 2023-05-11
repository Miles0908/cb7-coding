const capCities = [
  {
    id: 1,
    state: "Italia",
    Capital: "Roma",
    population: 2774031,
  },
  {
    id: 2,
    state: "Belgio",
    Capital: "Bruxelles",
    population: 2708766,
  },
  {
    id: 3,
    state: "Francia",
    Capital: "Parigi",
    population: 2146000,
  },
  {
    id: 4,
    state: "Germania",
    Capital: "Berlino",
    population: 3677000,
  },
  {
    id: 5,
    state: "Spagna",
    Capital: "Madrid",
    population: 3277000,
  },
  {
    id: 6,
    state: "Russia",
    Capital: "Mosca",
    population: 13010000,
  },
  {
    id: 7,
    state: "Irlanda",
    Capital: "Dublino",
    population: 580000,
  },
];

//creo l'elemento ul e lo inserisco nel body
let ul = document.createElement("ul");
document.body.appendChild(ul);

for(let capCity of capCities) {
    let li = document.createElement("li");
    ul.appendChild(li);
    let text = `-ID: ${capCity.id}| -State: ${capCity.state}| -Capital: ${capCity.Capital}| -Population: ${capCity.population} ab.`;
     li.textContent = text;
}