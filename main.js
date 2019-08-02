const jumpStopRecords = []
const ChattenRecords = []
const PolarRecords = []

const createSortArtist = (name, age, genre) => ({
    "artistName": name,
    "artistAge": age,
    "artistGenre": genre,
})

const artistWithGenre = createSortArtist("Bruce Atikins", "23", "country")
console.log(artistWithGenre)

ChattenRecords.push(artistWithGenre)

// this seems DRY so I made a function above to help decrease code
// const createCountryArtist = (name, age) => {
//     return {
//         artistName: name,
//         artistAge: age,
//     }
// }

// const createPopArtist = () => {
//     return {
//         artistName: name,
//         artistAge: age,
//     }
// }

// const createFunkArtist = () => {
//     return {
//         artistName: name,
//         artistAge: age,
//     }
// }

// const createRapArtist = () => {
//     return {
//         artistName: name,
//         artistAge: age,
//     }
// }

// const createBluegrassArtist = () => {
//     return {
//         artistName: name,
//         artistAge: age,
//     }
// }

// const CountryArtist1 = createCountryArtist("Bruce Atikins", "23")
// console.log(CountryArtist1)

