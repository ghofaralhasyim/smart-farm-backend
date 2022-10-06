const { authJwt } = require("../middleware");
const auth = require('../controller/auth.controller')
const user = require('../controller/user.controller')

module.exports = (app) => {
    app.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        )
        next();
    })

    app.get("/api/user/all", [authJwt.verifyToken], user.getAllUser)
    app.post("/api/user/signin", auth.signin);
}