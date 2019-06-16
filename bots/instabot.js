const axios = require('axios')

async function instabot(profile) {

    let state = {}

    state.profile = profile
    state.feedInformation = await getProfileFeedInformation(state)
    state.picture = extractProfilePicture(state)

    async function getProfileFeedInformation(state) {

        return new Promise((resolve, reject) => {
            axios
            .get(`https://www.instagram.com/${state.profile}/?__a=1`)
            .then(res => resolve(res.data))
            .catch(e=> reject(e))
        })

    }

    function extractProfilePicture(state) {
        return state.feedInformation.graphql.user.profile_pic_url_hd
    }

    // "!!!!"
    return state.picture
}


module.exports = instabot