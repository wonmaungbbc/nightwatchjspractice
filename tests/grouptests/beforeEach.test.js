// module.exports = {


//     before: function (browser) {
//         console.log('Visit to the Secondary')
//         browser
//             .url('https://www.bbc.com/bitesize')
//             .click('div[class=promoted-navigation]')
//     },

//     'Go to GCSE': browser => {
//         browser
//         .click('a[class="nation-level-list__list-item "]')
//         // .click('div[class=nation-level-list__list-item bitesize__nation-level-list__list-item]')
//     },

//     after: function (browser) {
//         console.log('Closing down...');
//     },

//     beforeEach: function (browser) {

//     },

//     afterEach: function (browser) {

//     },

//     'step one': function (browser) {
//         browser
//         // ...
//     },

//     'step two': function (browser) {
//         browser
//             // ...
//             .end();
//     }
// };