# File Structure

I usually, and i've seen this other places as well, organize the files like

/Pages  
/Components  
/Hooks
App.jsx

Each component has its own file and maybe even it's own folder so you can group stylesheets by component. Each component that represents a whole page would go in the `/Pages` folder. You can tell it's for an entire page because it is passed in as the component for a route. For example the `<Todos />` component:

```jsx
<Route path="/todos" element={<Todos />} />
```

Then components that are to be reused in one to many times accros one to many pages go in the `/Components` folder.

The `/Hooks` folder are for custom hooks that can be used in any component where it's needed. React has built in Hooks like `useState`, `useRef`, `useEffect`.

Maybe in another commit I'll go into Hooks specifically. If you're curious here are the [docs on hooks](https://reactjs.org/docs/hooks-reference.html)

Also, there's whole other subject about managing state across components using the built the built in hooks `useContext` and `useReducer`. If you're curious about that here are docs explaining context in react. It's good to take a look at this because thinking about how you organize components can help keep things simpler. The [docs here](https://reactjs.org/docs/context.html) shed some light on those kinds of considerations.

# Component Conventions

I made some changes to the App.js file just to show how conventions there work.

- Remove unused imports.
- Use [JSDoc](https://jsdoc.app/index.html) to document code.
  - I added a script in the package.json file and a couple dependencies to generate the docs. You'll have to run `npm install` again to get these packages.
- Name pages like `<PageName>Page`. For example:
  - `<TodosPage>`
  - `<AboutPage>`
  - `<ContactPage>`
- Call render (for Class components) and return (for Functional Components) at the end of the Class or Function
- I added comments on useEffect, Hooks vs Util functions, and possibly some other things.

### The dependcies for JSDoc are `jsdoc` and `better-docs`

- jsdoc gives us the `jsdoc` command which you can use right in the command line, but we'll define an npm script which we can use just like we use `npm run start` to get the project running

### The JSDoc script in package.json

It's in the `scripts` section of package.json same as other scripts like start, build, test, etc.
We can define any npm script. I added another npm script
just to show what can be done. Try running `npm run hey` in your command prompt.

```
    "docs": "docs -c jsdoc.conf.json"
```

It runs the `jsdoc` command, passes `-c` as an argument which tells it that we want to provide our own configuration via a json file. `jsdoc.conf.json` is the configuration file.

to run this script run `npm run docs` in your command prompt. This will generate a `/docs` folder at the project root.
Inside is a file `index.html` which you can open in a browser to view the documentation.

# package-lock.json

This commit also updates the package-lock.json. From the [npm docs](https://docs.npmjs.com/cli/v9/configuring-npm/package-lock-json) on package-lock.json files:

```
package-lock.json is automatically generated for any operations where npm modifies either the node_modules tree, or package.json
```
