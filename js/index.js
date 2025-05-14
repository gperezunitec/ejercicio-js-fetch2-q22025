fetch("https://dragonball-api.com/api/characters")
.then(response => response.json())
.then(data => {
    let card="";

    data.items.forEach((dbz) => {
      card+=  `<div class="col">
            <div class="card">
                <img src="${dbz.image}" alt="" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${dbz.name}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">
                        <strong>Ki: </strong>
                        ${dbz.ki}
                    </li>
                    <li class="list-group-item">
                        <strong>Maximo Ki: </strong>
                        ${dbz.maxKi}
                    </li>
                    <li class="list-group-item">
                        <strong>Raza: </strong>
                        ${dbz.race}
                    </li>
                    <li class="list-group-item">
                        <strong>Genero: </strong>
                        ${dbz.gender}
                    </li>
                    <li class="list-group-item">
                        <strong>Descripcion: </strong>
                        ${dbz.description}
                    </li>

                </ul>
            </div>
        </div>`
    });

    document.getElementById("cardlist").innerHTML = card;



})