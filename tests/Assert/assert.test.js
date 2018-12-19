module.exports = {
  "@disabled": true,
  "There must be a function": browser => {
    // Assert
    // .assert - when an assertion fails, the test ends, skipping all other assertions.
    // .verify - when an assertion fails, the test logs the failure and continues with other assertions.

    // eg. This will end the test

    ```client.assert.visible('.non_existing');``````client.verity.visible('.non_existing')```// You can tell Nightwatch to automatically retry failed assertions until a given timeout is reached, before the test runner gives up and fails the test. This can be accomplished by setting the property retryAssertionTimeout (in milliseconds) in the globals file. // This will just log the failure and continue // Automatically retrying failed assertions
    // For example:

    ```retryAssertionTimeout = 2000```;
  }
};
