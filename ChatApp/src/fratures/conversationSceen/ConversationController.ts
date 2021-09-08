import FeedsAPIConversations from "../../services/api/conversation";

class ConversationsController {
    constructor() { }
    getConversations() {
        return new Promise((resolve, reject) => {
            const feedsAPIConversations = new FeedsAPIConversations();
            feedsAPIConversations.getConversations()
                .then((listFriend) => {
                    resolve(listFriend)
                })
        })
    }

}

export default ConversationsController