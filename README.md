# nightwatchjspractice

Run ```nightwatch```

Read [https://medium.freecodecamp.org/how-to-easily-start-automatically-testing-your-website-8629ea8df04a]

To run only the "grouptests" group:
```nightwatch --group grouptests```

To skip running the "grouptests" group:
```nightwatch --skigroup grouptests```

To skip multiple groups, add with comma-sperated:
```nightwatch --skipgroup addressbook,grouptests,chat```

To test 'Tags', use the --tag command:
```nightwatch --tag login```

To test multiple tags:
```nightwatch --tag login --tag another_tag_name```

To skip running tests with a specific tag, use the --skiptags flag:
```nightwatch --skiptags login```

To skip multiple tags, add each tag you want to skip as comma-separated:
```nightwatch --skiptags login,something_else```
