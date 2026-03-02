const users = [{ id: 2 }, { id: 7 }];

export class UsersRepository {
    getAllUsers = () => {
        return users
    }
    
    getUserById = (id) => {
        return users.find( (user) =>user.id === id)
    }
}