module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["Bide your time, for success is near.", "Do not let ambitions overshadow small success.", "Do not underestimate yourself. Human beings have unlimited potentials.", "Allow compassion to guide your decisions.", "Happiness begins with facing life with a smile and a wink."]

        let randomSpot = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomSpot]

        res.status(200).send(randomFortune)
    },
    getFavTapir: (req, res) => {

     if (input === document.getElementById(`Bairds`)) {
        res.status(200).send()
     }


    },
    getNewsLetter: (req, res) => {
        console.log(req.body) 
        let email = req.body.email
        let firstName = req.body.firstName

        res.status(200).send(`Welcome, ${email}! Thank you for signing up ${firstName}!`)
    }
}