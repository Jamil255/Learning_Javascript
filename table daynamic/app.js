// let userTable = document.getElementById("userTable")
// let stdArr = [
//     {
//         name: "jamil afzal",
//         cousre: "CSE",
//         gender: "male",
//         email: "jamil.afzal@gmail.com",
//         id:100
//     },
//     {
//         name: "adeel afzal",
//         cousre: "CSE",
//         gender: "male",
//         email: "adeel.afzal@gmail.com",
//         id:101
//     },
//     {
//         name: "ali afzal",
//         cousre: "CSE",
//         gender: "male",
//         email: "ali.afzal@gmail.com",
//         id:102
//     },
//     {
//               name: 'Afghanistan',
//               capital: 'Kabul',
//               languages: ['Pashto', 'Uzbek', 'Turkmen'],
//               population: 27657145,
//               flag: 'https://restcountries.eu/data/afg.svg',
//               currency: 'Afghan afghani'
//             },
//             {
//               name: 'Åland Islands',
//               capital: 'Mariehamn',
//               languages: ['Swedish'],
//               population: 28875,
//               flag: 'https://restcountries.eu/data/ala.svg',
//               currency: 'Euro'
//             },
//         //     {
//         //       name: 'Albania',
//         //       capital: 'Tirana',
//         //       languages: ['Albanian'],
//         //       population: 2886026,
//         //       flag: 'https://restcountries.eu/data/alb.svg',
//         //       currency: 'Albanian lek'
//         //     },
//         //     {
//         //       name: 'Algeria',
//         //       capital: 'Algiers',
//         //       languages: ['Arabic'],
//         //       population: 40400000,
//         //       flag: 'https://restcountries.eu/data/dza.svg',
//         //       currency: 'Algerian dinar'
//         //     },
//         //     {
//         //       name: 'American Samoa',
//         //       capital: 'Pago Pago',
//         //       languages: ['English', 'Samoan'],
//         //       population: 57100,
//         //       flag: 'https://restcountries.eu/data/asm.svg',
//         //       currency: 'United State Dollar'
//         //     },
//         //     {
//         //       name: 'Andorra',
//         //       capital: 'Andorra la Vella',
//         //       languages: ['Catalan'],
//         //       population: 78014,
//         //       flag: 'https://restcountries.eu/data/and.svg',
//         //       currency: 'Euro'
//         //     },
//         //     {
//         //       name: 'Angola',
//         //       capital: 'Luanda',
//         //       languages: ['Portuguese'],
//         //       population: 25868000,
//         //       flag: 'https://restcountries.eu/data/ago.svg',
//         //       currency: 'Angolan kwanza'
//         //     },
//         //     {
//         //       name: 'Anguilla',
//         //       capital: 'The Valley',
//         //       languages: ['English'],
//         //       population: 13452,
//         //       flag: 'https://restcountries.eu/data/aia.svg',
//         //       currency: 'East Caribbean dollar'
//         //     },
//         //     {
//         //       name: 'Antarctica',
//         //       capital: '',
//         //       languages: ['English', 'Russian'],
//         //       population: 1000,
//         //       flag: 'https://restcountries.eu/data/ata.svg',
//         //       currency: 'Australian dollar'
//         //     },
//         //     {
//         //       name: 'Antigua and Barbuda',
//         //       capital: "Saint John's",
//         //       languages: ['English'],
//         //       population: 86295,
//         //       flag: 'https://restcountries.eu/data/atg.svg',
//         //       currency: 'East Caribbean dollar'
//         //     },
//         //     {
//         //       name: 'Argentina',
//         //       capital: 'Buenos Aires',
//         //       languages: ['Spanish', 'Guaraní'],
//         //       population: 43590400,
//         //       flag: 'https://restcountries.eu/data/arg.svg',
//         //       currency: 'Argentine peso'
//         //     },
//         //     {
//         //       name: 'Armenia',
//         //       capital: 'Yerevan',
//         //       languages: ['Armenian', 'Russian'],
//         //       population: 2994400,
//         //       flag: 'https://restcountries.eu/data/arm.svg',
//         //       currency: 'Armenian dram'
//         //     },
//         //     {
//         //       name: 'Aruba',
//         //       capital: 'Oranjestad',
//         //       languages: ['Dutch', '(Eastern) Punjabi'],
//         //       population: 107394,
//         //       flag: 'https://restcountries.eu/data/abw.svg',
//         //       currency: 'Aruban florin'
//         //     },
//         //     {
//         //       name: 'Australia',
//         //       capital: 'Canberra',
//         //       languages: ['English'],
//         //       population: 24117360,
//         //       flag: 'https://restcountries.eu/data/aus.svg',
//         //       currency: 'Australian dollar'
//         //     }

// ]
// for (i = 0; i < stdArr.length; i++) { 
//     let name = stdArr[i].name
//     let cousre = stdArr[i].cousre
//     let gender = stdArr[i].gender
//     let email = stdArr[i].email
//     let id = stdArr[i].id
// let row="<tr><td>"+name+ "<br>"+ "</td><td>cousre</td><td>"+gender+"</td><td>"+email+"</td><td>"+id+"</td></tr>"
//     userTable.innerHTML += row
// }