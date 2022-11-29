# VSCode setup: eslint, prettier, etc

I added a .vscode folder which has some project level `settings.json` to setup auto formatting for this repo
and the accompanying `extensions.json` recommendations.

To see the recommendations in vscode do ctrl+shift+x or open the extensions menu in the sidebar.
below the installed section will be a recommended section. If you hover over the extension,
at the bottom of the popup it tells you what recommended the extension.

The prettier extension is for formatting.
The panda theme is just so you can try out a vscode theme.
The gitlens extension is just something I think is cool. It let's you see who last modified each line of code right in the editor.
The ESLint extension helps you see issues right in the code, you can also configure this to enforce styles that may conflict with prettier.

There are some new dependencies in package.json so you'll need to run `npm install` again.
There are some new config files to configure eslint and prettier.

Also added some new npm scripts to make use of eslint and prettier.
`npm run prettier-format`
`npm run lint`

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