export class UsersController {

    constructor(repository) {
        this.repository = repository
    }

    getAllUsers = async (req, res) => {
        res.send({ 
            users : await this.repository.getAllUsers()
        });
    }
    
    getUserById = async (req, res)=>{
        const id = Number(req.params.id)
        const userIndividual = await this.repository.getUserById(id)
    
        if(!userIndividual){
            res.send("Lo sentimos, no lo encontramos")
            return
        }
    
        res.send(userIndividual)
    }
}

