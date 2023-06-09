let stampa = document.getElementById('stampa');

//ARRAY OGGETTI
let informazioneTeam = [
    {
        'name' : 'Wayne Barnett',
        'role' : 'Founder & CEO',
        'image' : 'wayne-barnett-founder-ceo.jpg'
    },  
    {
        'name' : 'Angela Caroll',
        'role' : 'Chief Editor',
        'image' : 'angela-caroll-chief-editor.jpg'
    },
    {
        'name' : 'Walter Gordon',
        'role' : 'Office Manager',
        'image' : 'walter-gordon-office-manager.jpg'
    },
    {
        'name' : 'Angela Lopez',
        'role' : 'Social Media Manager',
        'image' : 'angela-lopez-social-media-manager.jpg'
    },
    {
        'name' : 'Scott Estrada',
        'role' : 'Developer',
        'image' : 'scott-estrada-developer.jpg'
    },
    {
        'name' : 'Barbara Ramos',
        'role' : 'Graphic Designer',
        'image' : 'barbara-ramos-graphic-designer.jpg'
    }
];

//CICLO FOR IN
for(let index in informazioneTeam){
    let persona = informazioneTeam[index];
    stampa.innerHTML += `
    <div class="border">
    <img src="./img/${persona.image}"> 
    <p><strong>${persona.name}</strong></p> 
    <p>${persona.role}</p>
    </div> <br>`;
}