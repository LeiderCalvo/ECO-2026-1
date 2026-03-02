const users = [{ id: 2 }, { id: 7 }];

const getAllUsers = () => {
    return users
}

const getUserById = (id) => {
    return users.find( (user) =>user.id === id)
}

export default {
    getAllUsers,
    getUserById
}