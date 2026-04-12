const express = require("express")

const {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
} = require("../controller/authUser");

const upload = require("../config/multer")

const router = express.Router()

router.post("/users", upload.single("photo"), createUser)
router.get("/users", getUsers)
router.get("/users/:id", getUserById)
router.put("/users/:id", upload.single("photo"), updateUser)
router.delete("/users/:id", deleteUser)                    

module.exports = router