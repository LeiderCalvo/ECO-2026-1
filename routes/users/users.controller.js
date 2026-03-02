export class UsersController {

    constructor(repository) {
        this.repository = repository
    }

    getAllUsers = (req, res) => {
        res.send({ 
            users : this.repository.getAllUsers()
        });
    }
    
    getUserById = (req, res)=>{
        const id = Number(req.params.id)
        const userIndividual = this.repository.getUserById(id)
    
        if(!userIndividual){
            res.send("Lo sentimos, no lo encontramos")
            return
        }
    
        res.send(userIndividual)
    }
}

