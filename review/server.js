const bcrypt = require("bcryptjs")

const passwordHash = async () => {
    try{
    let password = "13242dafs"

    const hashed = await bcrypt.hash(password, 10)
    console.log(hashed)
    }catch(errr){
        console.log(errr.message)
    }
}

passwordHash()