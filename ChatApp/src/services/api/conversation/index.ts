import { BASE_API1 } from "../../../constants/api/feedsAPI/FeedsAPI";
import FeedsApiEndpontsConversation from "./FeedsAPIEndponts";


class FeedsAPIConversations {
    constructor() { }
    getConversations() {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_API1}${FeedsApiEndpontsConversation.v1.conversations}`)
                .then(response => response.json())
                .then(json => {
                    resolve(json)
                })
                .catch(err => console.log('goi api conversatins bi loi')
                )
        })
    }


}

export default FeedsAPIConversations