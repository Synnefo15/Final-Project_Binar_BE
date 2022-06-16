const userService = require('../service/user.service.js');

exports.findAllUserApi = async (req,res) => {
    const users = await userService.findAllUsers()

    res.json({
        data:users
    })
}

exports.findUserByIdApi = async (req,res) => {
    const users = await userService.findUserById(req.params.id)

    if (users != null) {
        res.json({data:users})
    } else {
        res.status(404).json({
            error:`User dengan id${req.params.id} tidak ditemukan`
        })
    }
}

exports.createNewUserApi = async (req,res) => {
    const user = await userService.createNewUser(req)
    res.status(201).json({data:user})
}

exports.updateUserApi = async (req,res) => {
    const user = await userService.updateUser(req,req.params.id)
    if (user==null) {
        res.status(404).json({error:`User dengan id ${req.params.id} tidak ditemukan`})
    } else {
        res.json({message:'Update berhasil'})
    }
}

exports.deleteCar = async (req,res) => {
    const userById = await userService.findUserById(req.params.id)

    if (userById == null) {
        res.status(404).json({error : `user dengan id ${req.params.id}`})
    } else {
        userService.deleteUser(userById)
        res.json({message : 'Delete berhasil'})
    }
}