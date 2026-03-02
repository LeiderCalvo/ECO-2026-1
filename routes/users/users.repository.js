const users = [{ id: 2 }, { id: 7 }];

class UsersRepository {
    getAllUsers = () => {
        return users
    }
    
    getUserById = (id) => {
        return users.find( (user) =>user.id === id)
    }
}


export default new UsersRepository()