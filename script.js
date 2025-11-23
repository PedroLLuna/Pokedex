const img = document.getElementById("pokemon-img");
const nameEl = document.getElementById("pokemon-name");
const idEl = document.getElementById("pokemon-id");
const typeEl = document.getElementById("pokemon-type");
const search = document.getElementById("search");

let currentPokemonId = 1;

async function loadPokemon(pokemon) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (!res.ok) throw new Error("Pokémon não encontrado");

    const data = await res.json();

    img.src = data.sprites.other["official-artwork"].front_default;
    nameEl.textContent = data.name;
    idEl.textContent = "ID: " + data.id;
    typeEl.textContent =
      "Tipo: " + data.types.map((t) => t.type.name).join(", ");

    currentId = data.id;

  } catch (e) {
    alert("Pokémon não encontrado!");
  }
}

document.getElementById("searchButton").addEventListener("click", () => {
  loadPokemon(searchInput.value.toLowerCase());
});

document.getElementById("prevButton").addEventListener("click", () => {
  if (currentId > 1) loadPokemon(currentId - 1);
});

document.getElementById("nextButton").addEventListener("click", () => {
  loadPokemon(currentId + 1);
});

loadPokemon(1);

