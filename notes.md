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
