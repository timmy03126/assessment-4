const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const favTapirBairds = document.getElementById("Bairds")
const favTapirLowland = document.getElementById("Lowland")
const favTapirMountain = document.getElementById("Mountain")
const favTapirMalayan = document.getElementById("Malayan")
const newsLetterBtn = document.getElementById("newsletter")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data
            alert(data)
        })

}

const getFavTapir = () => {
    axios.get("http://localhost:4000/api/favorite/")
        .then(res => {
            const data = res.data
            alert(data)
        })
}

const getNewsLetter = () => {
    axios.post("http://localhost:4000/api/newsletter/")
        .then(res => {
            const data = res.data
            alert(data)
        })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener(`click`, getFortune)
favTapirBairds.addEventListener(`click`, getFavTapir)
favTapirLowland.addEventListener(`click`, getFavTapir)
favTapirMountain.addEventListener(`click`, getFavTapir)
favTapirMalayan.addEventListener(`click`, getFavTapir)
newsLetterBtn.addEventListener(`click`, getNewsLetter)
