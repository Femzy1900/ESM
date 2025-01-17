import User from "./model/User"
import bcrypt from 'bcrypt'
import connectToDatabase from "./db/db"

const userRegister = async () => {
    connectToDatabase()
    try {
        const hashPassword = await bcrypt.hash("admin", 10)
        const newUser = new User({
            name: 'Admin',
            email: 'adedokunfemi14@gmail.com',
            password: hashPassword,
            role: admin
        })
        await newUser.save()
    } catch (error) {
        console.log(error)
    }
}

userRegister()