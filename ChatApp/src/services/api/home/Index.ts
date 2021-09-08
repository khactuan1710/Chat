import { BASE_API, BASE_API1 } from '../../../constants/api/feedsAPI/FeedsAPI'
import FeedsApiEndponts from './FeedsAPIEndponts'

class FeedAPI {
    constructor() { }
    getFriends() {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_API1}${FeedsApiEndponts.v1.friends}`)
                .then(response => response.json())
                .then(json => {
                    resolve(json)
                })
                .catch(err => console.log('goi api friends cuon ngang bi loi')
                )
        })
    }

    getNewsFeeds() {
        return new Promise((resolve, reject) => {
            fetch(`${BASE_API1}${FeedsApiEndponts.v1.newsfeed}`)
                .then(response => response.json())
                .then(newFeeds => {
                    resolve(newFeeds)
                })
        })
    }

}

export default FeedAPI