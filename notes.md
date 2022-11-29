# Hints and Testing

I added some hints for debugging the delete functionality
and some tests to verify the add and delete todo functionality.
I had to modify a bit of the actual code in order to get tests working.

To test run `npm run test`

I modified the test script in package.json a bit
It was `react-scripts test` and now it's `cross-env RTL_SKIP_AUTO_CLEANUP=true react-scripts test --silent`
the RTL_SKIP_AUTO_CLEANUP=true makes jest, the testing library working inside react-scripts, maintain the same
rendered component throughout all the tests. This makes it easier to test adding and deleting a todo in seperate tests.
without it we'd need to add the todo again in the delete test before actually deleting it.
the [cross-env](https://www.npmjs.com/package/cross-env) bit makes the command work across different environments which
we need since I'm writing this on mac and you'll be running it on pc.
the --silent flag makes it so the console.logs in the component code don't appear in the command prompt when running tests.
You can remove that to see what it looks like without it.
