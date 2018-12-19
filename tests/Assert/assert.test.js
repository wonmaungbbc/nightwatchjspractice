// Assert
// .assert - when an assertion fails, the test ends, skipping all other assertions.
// .verify - when an assertion fails, the test logs the failure and continues with other assertions.

// eg. This will end the test

```client.assert.visible('.non_existing');```

// This will just log the failure and continue
```client.verity.visible('.non_existing')```;

// Automatically retrying failed assertions
// You can tell Nightwatch to automatically retry failed assertions until a given timeout is reached, before the test runner gives up and fails the test. This can be accomplished by setting the property retryAssertionTimeout (in milliseconds) in the globals file. 
// For example: 

```retryAssertionTimeout = 2000```

