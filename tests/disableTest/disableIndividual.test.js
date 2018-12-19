module.exports = {
    'This is simple test': browser => {
        console.log(
            `This is a simple test`
        )
    },

    // Disabled test for individual test case
    // Won't be able to use arrow function for disabling individual test case 
    'Other sample test': ''+ function (browser) {
        console.log(
            `This is a disabled test case sample`
        )
    }
}