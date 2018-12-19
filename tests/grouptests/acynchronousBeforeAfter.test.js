module.exports = {
    beforeEach: (browser, done) => {
        // performing an async operation
        setTimeout(() => {
            // finished async duties
            done();
        }, 100);
    },

    afterEach: (browser, done) => {
        // performing an async operation
        setTimeout(() => {
            // finished async duties
            done();
        }, 200);
    }
};

// Explicitly failing the test
module.exports = {
    afterEach: function (browser, done) {
        // performing an async operation
        performAsync(function (err) {
            if (err) {
                done(err);
                return;
            }
            // ...
        });
    }
};
