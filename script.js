
const results = document.querySelector("#output");

async function asyncFetch(value) {
    const res = await fetch(`https://swapi.dev/api/${value}/`);
    const data = await res.json();
    showOutput(data, value);
}

function showOutput(data, value) {
    let output = "";
    console.log(data.results);

    if (value === 'films') {
data.results.forEach(item => {
    output += `
        <div class="item-card">

        <h2 class="item-title">${item.title}</h2>
        <h3>Release date: ${item.release_date}</h3>
        <h3>Producer: ${item.producer}</h3>
        </div>
    `
})
    }

    if (value === 'people') {
        data.results.forEach(item => {
            output += `
                <div class="item-card">
        
                <h2 class="item-title">${item.name}</h2>
                <h3>Height: ${item.height}</h3>
                <h3>Skin color: ${item.skin_color}</h3>
                </div>
            `
        })
            }

            if (value === 'spaceships') {
                data.results.forEach(item => {
                    output += `
                        <div class="item-card">
                
                        <h2 class="item-title">${item.name}</h2>
                        <h3>Release date: ${item.release_date}</h3>
                        <h3>: ${item.model}</h3>
                        </div>
                    `
                })
                    }

                    if (value === 'vehicles') {
                        data.results.forEach(item => {
                            output += `
                                <div class="item-card">
                        
                                <h2 class="item-title">${item.name}</h2>
                                <h3>Model: ${item.model}</h3>
                                <h3>Manufacturer: ${item.manufacturer}</h3>
                                <h4>Cost in credits: ${item.cost_in_credits}</h4>
                                <h4>Length: ${item.length}</h4>
                                </div>
                            `
                        })
                            }

                            if (value === 'planets') {
                                data.results.forEach(item => {
                                    output += `
                                        <div class="item-card">
                                
                                        <h2 class="item-title">${item.name}</h2>
                                        <h3>Rotation period: ${item.rotation_period}</h3>
                                        <h3>Orbital period: ${item.orbital_period}</h3>
                                        <h4>Diameter: ${item.diameter}</h4>
                                        <button id="films__button">Films</button>
                                        <button>Residents</button>
                                        </div>
                                    `
                                })
                                    }

                                    if (value === 'species') {
                                        data.results.forEach(item => {
                                            output += `
                                                <div class="item-card">
                                        
                                                <h2 class="item-title">Species: ${item.name}</h2>
                                                <h3>Classification: ${item.classification}</h3>
                                                <h3>Designation: ${item.designation}</h3>
                                                </div>
                                            `
                                        })
                                            }


    results.innerHTML = output;
}

document.querySelector('#buttons').addEventListener('click', e => {
    asyncFetch(e.target.textContent.trim().toLowerCase());

});
