import LoginAPI from "../../services/api/login/Index";

class LoginController {
    constructor() { }
    getAccount() {
        return new Promise((resolve, reject) => {
            const loginAPI = new LoginAPI();
            loginAPI.getAccount()
                .then((account) => {
                    resolve(account)
                })
        })
    }

}

export default LoginController