const sightengine = require('sightengine')(process.env.SIGHT_KEY, process.env.SIGHT_SECRET)

async function colorbot(imageUrl) {

    let state = {}

    state.url = imageUrl
    state.allColors =  await fetchAllColors(state)
    state.colors = pickDominantColors(state)

    async function fetchAllColors(state) {
        
        return new Promise((resolve, reject) => {
            
            sightengine
                .check(['properties'])
                .set_url(state.url)
                .then(res => resolve(res.colors))
                .catch(e => reject(e))
        })

    }

    function pickDominantColors(state) {

        let colors = [
            state.allColors.dominant, 
            ... state.allColors.accent ]

        return colors.map(({ hex }) => hex)
    }

    return state.colors


}

module.exports = colorbot