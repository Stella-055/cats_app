import axios from "axios";
let numberOfFacts= document.getElementById("numberOfFacts")
let numberOfPhotos= document.getElementById("numberOfPhotos")
let factsButton = document.getElementById("factsbutton")
let photosButton = document.getElementById("photosbutton")
let resultDiv = document.getElementById("resultDiv")

factsButton.addEventListener("click", fetchFacts);
photosButton.addEventListener("click", fetchPhotos);
function fetchPhotos() {
  let number = numberOfPhotos.value;
  axios.get(`https://api.thecatapi.com/v1/images/search?limit=${number}`)
    .then(response => {
      console.log("Photos fetched successfully:", response.data);
      resultDiv.innerHTML = response.data.map(photo => `<img src="${photo.url}" alt="Cat Photo" style="width:300px; height:400px;padding:.7rem">`).join('');
    })
    .catch(error => {
      console.error("Error fetching photos:", error);
      resultDiv.innerHTML = `<p style="padding-top:2rem;">Error fetching photos. Please try again later.</p>`;
    });
}

function fetchFacts() {
  let number = numberOfFacts.value;
  axios.get(`https://meowfacts.herokuapp.com/?count=${number}`)
  
    .then(response => {
      console.log("Facts fetched successfully:", response.data);
      resultDiv.innerHTML = "<ol> "+ response.data.data.map(fact => "<li>" + fact +" </li> " )+ " </ol>";
    })
    .catch(error => {
      console.error("Error fetching facts:", error);
      resultDiv.innerHTML = "<p>Error fetching facts. Please try again later.</p>";
    });
}

