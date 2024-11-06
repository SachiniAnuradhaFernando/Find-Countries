function searchCountry(){
    console.log("Search!!");
    let txtSearch = document.getElementById("txtSearch").value;

    fetch(`https://restcountries.com/v3.1/name/${txtSearch}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        let body="";
        data.forEach(element => {
            body+=`
           <div class="col">
                <div class="card shadow-sm">
                  <img src=${element.flags.png} alt="">
                  <div class="card-body">
                  <h2>${element.name.common}</h2>
                    <p class="card-text">Capital:${element.capital}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <p class="p-4 fw-bold">Region:${element.region}</p>
                        <br>
                        <a href="${element.maps.googleMaps}" class="btn" role="button" data-bs-toggle="button">View On Google Maps</a>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>   `
        });

        document.getElementById("row").innerHTML=body;
        
    })
    
}
loadCountries();

async function loadCountries() {
    
    let res = await fetch("https://restcountries.com/v3.1/all");
    let items = await res.json();
    let body = "";
    items.forEach(element => {
        console.log(element);
        body+=`
         <div class="col">
                <div class="card shadow-sm">
                  <img src=${element.flags.png} alt="">
                  <div class="card-body">
                  <h2>${element.name.common}</h2>
                    <p class="card-text">Capital:${element.capital}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <p class="p-4 fw-bold">Region:${element.region}</p>
                        <br>
                        <a href="${element.maps.googleMaps}" class="btn" role="button" data-bs-toggle="button"><button>View On Google Maps</button></a>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            
        `;

        
        
    });

    console.log(body);

    document.getElementById("row").innerHTML=body;
    
}
