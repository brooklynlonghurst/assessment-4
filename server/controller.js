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
        console.log(database)
    },

    updateFortune: (req, res) => {
        let update = req.query.update //grabbing info from the front 
        let index = req.query.index //grabbing index from the front 
        

        //from the front end i see an entry at index[0] that i need to fix. 
        //under update fortune i need to select what input index i would like to change
        //then write in the input box what i want it to be

        //in my code, i need to find the index of create input that needs to be changed i.e. index[0]
        //update with new one fortune
       
        //if the index passed in from the front equals what is in the database
            //then push what they changed?
        database[index].create = update
        res.status(200).send(database)
        return 
        // let index 

        // for(let i = 0; i < database.length; i++){
            console.log(database[i])
            let newFortune = database[i].create

            if(newFortune === update){
                index = i
            }
        // }

        if(index === undefined){
            res.status(400).send('could not update fortune')
        } else {
            database[index].createFortune 
            res.status(200).send(database)
        }

    },

    deleteFortune: (req, res) => {
        let remove = req.params.remove
        let index = req.query.index

        database[index] = remove
        res.status(200).send(database)
    }
    //     let index 

    //     for(let i = 0; i < database.length; i++){
    //         let currentFortune = database[i].remove
    //         if(currentFortune === remove){
    //             index = i
    //         }
           
    //     } 
    //     if(index === undefined){
    //         res.status(200).send(database)
    //     } else {
    //         database.splice(index, 1)
    //         res.status(200).send(database)
    //     }
    // 
}