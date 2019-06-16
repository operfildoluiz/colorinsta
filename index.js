require('dotenv').config()

const prompts = require('prompts')

const instabot = require('./bots/instabot'),
      colorbot = require('./bots/colorbot')

async function main() {

    let profile = await askForProfileName()
    let pictureUrl = await instabot(profile)

    let colors = await colorbot(pictureUrl)
    
    console.log(colors);
    

    async function askForProfileName() {

        let response = await prompts({
            type: 'text',
            name: 'profile',
            message: 'Qual o perfil do Instagram?'
        })

        return response.profile

    }

}

main()

// CLI - interface por linha de comando

// => podtag, lhcgoncalves
// => ['#ffffff', '#000000', '#333333' ...]


// 1. Interação com o Instagram
// 1.1 Buscar as informacoes
// 1.2 Buscar a foto de perfil (imagem de perfil)
// 1.3 Devolver essa informacao


// 2. "Picker" de cores, filtrar por cores quentes
// 2.1 Receber a url
// 2.2 Identificar as cores principais
// 2.3 Filtrar em hexadecimal
// 2.4 Devolver a informação