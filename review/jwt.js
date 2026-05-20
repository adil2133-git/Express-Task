const jwt = require("jsonwebtoken")

let token = "dghfdh"
let payload = "adilds"
let secret = "hkajhdfpa"
const decode = jwt.sign({token, payload}, secret)


console.log(decode)