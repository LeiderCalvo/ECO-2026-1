import UsersRepository from "./users.repository.js"

export const getAllUsers = (req, res) => {
    res.send({ 
        users : UsersRepository.getAllUsers()
    });
}

export const getUserById = (req, res)=>{
    const id = Number(req.params.id)
    const userIndividual = UsersRepository.getUserById(id)

    if(!userIndividual){
        res.send("Lo sentimos, no lo encontramos")
        return
    }

    res.send(userIndividual)
}