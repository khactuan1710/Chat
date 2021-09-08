import FeedAPI from "../../services/api/home/Index";

class HomeController {
    constructor() { }
    getNewsFriendsRow() {
        return new Promise((resolve, reject) => {
            const newFeedAPI = new FeedAPI();
            newFeedAPI.getFriends()
                .then((listFriend) => {
                    resolve(listFriend)
                })
        })
    }

    getNewsFeeds() {
        return new Promise((resolve, reject) => {
            const newFeedAPI = new FeedAPI()
            newFeedAPI.getNewsFeeds()
                .then((listNewsFeeds) => {
                    resolve(listNewsFeeds)
                })
        })
    }
}

export default HomeController