let city = 'Montpellier';
const key = '1aca56067275a6de2661f4ccb80db6b7';
getTempCity(city);

let changeCity = document.querySelector('#changer');
changeCity.addEventListener('click', () => {
  city = prompt('Quelle ville souhaitez-vous voir ?');
  getTempCity(city);
})

function getTempCity(ville) {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville +'&appid=' + key + '&units=metric';
  let requete = new XMLHttpRequest();
  requete.open('GET', url);
  requete.responseType = 'json';

  //onload signifie que les données ont été chargées et analysées
  //Return true si chargement réussi else false
  requete.onload = function(){ 
    if(requete.readyState === XMLHttpRequest.DONE) {
      if(requete.status === 200){
        let reponse = requete.response;
        let temp = reponse.main.temp;
        let ville = reponse.name;
        document.querySelector('#temperature_label').textContent = temp;
        document.querySelector('#ville').textContent = ville;
      }
    } else {
      alert('Un problème est survenu');
    }
  }
  requete.send();
}
