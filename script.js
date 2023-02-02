
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
                        <h3>: ${item.}</h3>
                        </div>
                    `
                })
                    }

                    if (value === 'vehicles') {
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

                            if (value === 'planets') {
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

                                    if (value === 'species') {
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


    results.innerHTML = output;
}

document.querySelector('#buttons').addEventListener('click', e => {
    asyncFetch(e.target.textContent.trim().toLowerCase());

});
