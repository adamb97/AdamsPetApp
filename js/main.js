import fetchjsonp from 'fetch-jsonp';

const petForm = document.querySelector('#pet-form');
petForm.addEventListener('submit', fetchAnimals);



//Fetch function from API
let fetchAnimals = (e) => {
    e.preventDefault();

    let animal = document.querySelector('#animal').value;
    let zipCode = document.querySelector('#zip').value;

    //fetch animals

    fetchjsonp(`http://api.petfinder.com/pet.find?format=json&key=HMyTLOMOQJlPZPNmPohL7PBAveqtmkZ7v6rTW2knB2T3UyqED6&animal=${animal}&location=${zipCode}&callback=callback`, {
        jsonpCallbackFunction: 'callback'
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

}

let callback = (data) => {
    console.log(data);
}