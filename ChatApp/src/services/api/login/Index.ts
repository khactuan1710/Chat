import { API_LOGIN } from "../../../constants/api/feedsAPI/FeedsAPI";
import LoginApiEndponts from "./LoginAPIEndpont";


class LoginAPI {
    constructor() { }
    getAccount() {
        return new Promise((resolve, reject) => {
            fetch(`${API_LOGIN}${LoginApiEndponts.v1.login}`)
                .then(response => response.json())
                .then(json => {
                    resolve(json.data)
                })
                .catch(err => console.log('goi api account  bi loi')
                )
        })
    }
}

export default LoginAPI