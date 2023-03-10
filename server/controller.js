let database = []

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A hunch is creavity trying to tell you something.", "Do not look back.", "A light heart carries you through all the hard times.", "Adventure can be real happiness.", "All your hard work will soon pay off."];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    createFortune: (req, res) => {
        database.push(req.body)
        res.status(200).send(database)
    },

    updateFortune: (req, res) => {
        let update = req.query.update

        let index

        for(let i = 0; i < database.length; i++){
            let newFortune = database[i].update

            if(newFortune === update){
                index = i
            }
        }

        if(index === undefined){
            res.status(400).send('could not update fortune')
        } else {
            res.status(200).send(database)
        }

    },

    deleteFortune: (req, res) => {
        let {remove} = req.params

        let index 

        for(let i = 0; i , database.length; i++){
            let currentFortune = database[i].remove
            if(currentFortune === remove){
                index = i
            }
           
        } 
        if(index === undefined){
            res.status(200).send(database)
        } else {
            database.splice(index, 1)
            res.status(200).send(database)
        }
    }
}