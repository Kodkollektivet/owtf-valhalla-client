# Developer notes for OWTF-Valhalla Web Client

## Stack
This project uses the following techs:
* [Node.js](https://nodejs.org/en/docs/ "Node.js documentation") - The site is not hosted on a Node server. We only use Node as a developer tool for handling dependencies, bundling, tests etc.

* [React](https://facebook.github.io/react/docs/getting-started.html "React documentation") - React does only one thing and it does that really well: rendering views that are broken up into small self contained components.

* [Redux](http://redux.js.org/index.html "Redux documentation") - Redux does only one thing and it does that really well: handling the application state as a single immutable object tree. Redux spawns a new state with the help of [Reducers](http://redux.js.org/docs/basics/Store.html "Redux reducers") when an [Action](http://redux.js.org/docs/basics/Actions.html "Redux actions") is dispatched to the [Store](http://redux.js.org/docs/basics/Store.html "Redux store"). The new state object can then be fetched from the [Store](http://redux.js.org/docs/basics/Store.html "Redux store"). 

    *NOTE: Redux and react is two completly different modules that has no knowledge of one another. To make the react components aware of the application state and the available actions we use a module called [react-redux](http://redux.js.org/docs/basics/UsageWithReact.html "Redux: usage with react") that connects the Redux store with the React components.*
    

* [Mocha](http://mochajs.org/ "Mocha documentation") - This is the framework we use to write unit tests for the Web Clients code.

* [Babel](https://babeljs.io/ "Babel website") - We write as much JavaScript as possible using ES2015 (aka EcmaScript 2015 aka ES6 aka EcmaScript 6). Since alla modern browsers and Node itself does not fully support the latest EcmaScript features we use Babel to transpile the code into ES5.

* [WebPack](https://webpack.github.io/docs/, "Webpack documentation") - This is a powerful and highly configurable tool that is used to manage automated tasks such as bundling and transpiling code with Babel. It has a couple of awesome plugins that makes all of our lifes easier.

## General guidelines on how to implement new features
A feature can be broken down into a several steps that can help to understand how it should be implemented with the chosen stack.

 1. The user is somewhere in the application and does something. Where is the user and what is the user doing?
 2. An action creator function is called from a React component. What is the name of that action creator method?
 3. One of two things happens.
    
    a. Just one action is created and dispatched to the Redux store. What is the name of that action type and what extra data does it carry?
    
    b. An asynchronous operation is started in the event-loop. Several action types are needed to handle the lifecycle of that operation. What are the names of those action types and what extra data does each and one of them carry?
 4. A reducer handles each and every one of the action types and spawns a new state object accordingly. What part of the state object is handled and what changes should be made to it?
 5. A React component gets the new state object and passes different state properties and objects to different child components. What properties and objects from the state should be passed to what React components?
 6. One or several React components are re-rendered according to the changes in the state returned from the Redux store. How is the HTML output for the React components rendered depending on the current state?
 
Let's put this into an example where we implement a feature that makes the application fetch a list of containers and show them to the user.

1. The user enters the URL to the application and initially enters it.
2. Since we want to fetch containers by making a request to an external api we name the action creator "fetchContainersRequest".
3. Since an external HTTP call will be made this is an asynchronous operation. We will need the action creator method to return a function that runs the fetching in parallel.
    
    The action creator function will return a new function that does the following:
    1. Dispatches an action that says that a request just started.
    2. Starts the asynchronous external call.
    3. Handles the result of the asynchronous call and dispatch one action if the call is successful containing the resulting data or another action if the call is unsuccessful containing information about the error.
    
    We then have three different events that each needs an action type: when the request i started, when re request is successful and when the request is unsuccessful.
    We add the following action types: 
    ```javascript
    export const FETCH_CONTAINERS_STARTED = 'FETCH_CONTAINERS_STARTED'
    export const FETCH_CONTAINERS_SUCCESS = 'FETCH_CONTAINERS_SUCCESS'
    export const FETCH_CONTAINERS_FAILURE = 'FETCH_CONTAINERS_FAILURE'
    ```
    
    Then we add some more action creators for each and one of the action types. But theese action creators will only be dispatched by the asynchronous action creator "fetchContainersRequest": 
    ```javascript
    function fetchContainersStarted() {
      return {type: FETCH_CONTAINERS_STARTED}
    }
    
    function fetchContainersSuccess(containers) {
      return {type: FETCH_CONTAINERS_SUCCESS, containers: containers}
    }
    
    function fetchContainersFailure(error) {
      return {type: FETCH_CONTAINERS_FAILURE, error: error}
    }
    ```
    
    Then we add functionality to the "fetchContainersRequest" action creator function that dispatches the "start" action and the starts the request:
    ```javascript
    fetchContainersRequest(){
      return dispatch => { //Return a "dispatch-call function" instead of an "action object".
        dispatch(fetchContainersStarted()) //First thing, dispatch an action that says that the request is starting
        return coreApi.getContainers() //Then return the result of the asynchronous call to the HTPP API. The result of that call is in this case a Promise
              .then(containers => dispatch(fetchContainersSuccess(containers))) //Handle the successful result. Dispatch an action that means that all went alright.
              .catch(ex => dispatch(fetchContainersFailure(ex))) //Handle the unsucessful result. Dispatch an action that means that something went wrong.
    }
    ```
4. A reducer is a [pure function](https://en.wikipedia.org/wiki/Pure_function "Wikipedia on pure functions") that takes the current state object from Redux and the action being dispatched.
It then creates a new state based on that action and returns the new state object.
We have a reducer called containers-reducer.js that contains a single pure function named "containersReducer". 
The action argument in this function is NOT one of the action types (e.g *export const FETCH_CONTAINERS_STARTED = 'FETCH_CONTAINERS_STARTED'* from above)
but the actual action object returned by one of the action creators. This is why the "dispatch" method is called with the return value of an action creator function in "fetchContainersRequest".
That's right, the action argument in the reducer function is the result of an action creator function. This means that the action argument in the reducer function contains both the type of action and additional custom data. 
The reducer function is called after "dispatch" is invoked and the action being sent to the reducer function is the same that we send into the dispatch function as an argument.

    This reducer checks of actions related to containers and we need to add a check for our specific action types. We do this by adding another case-statement in the switch for each action that needs to be handled:
    ```javascript
    case FETCH_CONTAINERS_STARTED:
        //TODO: Write code to spawn new state object

    case FETCH_CONTAINERS_SUCCESS:
        //TODO: Write code to spawn new state object

    case FETCH_CONTAINERS_FAILURE:
        //TODO: Write code to spawn new state object
    ```
    
    In every case-statement where we check for a specific action type we also need to spawn a new state object and return it.
    Since we know the specific action type we also know what additional custom data we sent i the action-object returned from that specific action creator function:
    ```javascript
    case FETCH_CONTAINERS_STARTED:
        /*
        Here the action object contains only the type field 
        as returned from the "fetchContainersStarted" action creator function. 
        */

    case FETCH_CONTAINERS_SUCCESS:
        /*
        Here the action object also contains a list of containers 
        as returned from the "fetchContainersSuccess" action creator function. 
        */

    case FETCH_CONTAINERS_FAILURE:
        /*
        Here the action object contains an error 
        as returned from the "fetchContainersFailure" action creator function. 
        */
    ```
    
    Now how do we create a new state object depending on the action type dispatched?
    According to [the three principles that redux is based on](http://redux.js.org/docs/introduction/ThreePrinciples.html "Redux Three Principles documentation")
    the state object should be immutable and never change. If changes are to be made to the state then a new state object should be created with those changes.
    
    JavaScript [does not have native support for Immutable data structures](http://jlongster.com/Using-Immutable-Data-Structures-in-JavaScript "Immutable data structures and JavaScript")
    and a way to achieve this is to use one of several frameworks that simulates this. The onse that we're using here is called [Immutable.js](https://facebook.github.io/immutable-js/ "Immutable.js documentation")
    Immutable.js has its own immutable versions of lists and object types and an API that let you describe what properties you want to change and then it spawns a new object with those changes.
    A quick immutable.js example:
    ```javascript
    //First import what we want to use from the Immutable.js library
    import {fromJS} from 'immutable'
    
    //Create a simple JavaScript object
    let human = {
        name: "Robert",
        work: "Developer",
        age: 34
    }
    
    //Then create an immutable object with the help from Immutable.js function "fromJS":
    let immutableHuman = fromJS(human)
    
    //Then we can call different API functions to tell Immutable.js to spawn a new object but with changes that we declare:
    let newImmutableHuman = immutableHuman.set('work', 'Project manager')
    
    //Then we use a function in the Immutable.js API to convert the result back to a simple JavaScript object:
    let nextHumanState = newImmutableHuman.toJS()
    ```
    
    So basically we have an immutable structure and then we declare what we want to change and we get another new immutable structure with those changes thus leaving the original object intact.
    How do we use this to spawn a new state object in our reducer? That's easy, we just use the state object that is passed to the reducer function and tell what changes we want on it. 
    Because that state object is already a Immutable.js object, we can use that API to change whatever properties we want just like the example above.
    
    So, what changes do we need to do on the state object? Well, that depends on the action being handled.
    The first action says that a request just started so we should probably set a property in the state saying the application is busy with making that request.
    In the case-statement for the request start action we set a property called "fetching" to true:
    ```javascript
    case FETCH_CONTAINERS_STARTED:
        return state.set('fetching', true)
    ```
    
    The next time an action is dispatched it will probably either say that the request went well and contain the result or say that something went wrong and thus containing an error.
    First things first, lets create a new state when the "request success" action is dispatched using the provided list of containers:
    ```javascript
    case FETCH_CONTAINERS_SUCCESS:
        return state.withMutations(state => {
            state.set('fetching', false)
            state.set('ready', true)
            state.set('containers', fromJS(action.containers))
        })
    ```
    
    In the code we want to update several properties but we do not want immutable.js to spawn a new state everytime.
    That's why whe use ."withMutations(..)".
    
    And finaly we spawn a state containing a flag saying something went wrong and that the data is not ready:
    ```javascript
    case FETCH_CONTAINERS_FAILURE:
        return state.withMutations(state => {
            state.set('fetching', false)
            state.set('fail', true)
        })
    ```
    
5. We have an action creator that returns a function that firsts dispatches that the request is started then starts the actual request.
Then when the request is done either a sucess or a failure action is dispatched depending on the result.

    Every time a new state object is created it is sent to React and all the [container components](http://redux.js.org/docs/basics/UsageWithReact.html "Using redux with react") 
    connects the state to properties that are then sent down to it's presentational component children. 
    it is [react-redux](http://redux.js.org/docs/basics/UsageWithReact.html "Redux: usage with react") that enables this.
    
6. Now we want to add a react component that renders our list based on the list returned by the request. 
Also we want to tell the user that the application is busy fetching something from the internertz.
    
    Basically the render method of the container might look something like this:
    ```javascript
    //...
    render() {
        return (
          <div>
            <ContainerList
              containerList={this.props.containerList}
              />
          </div>
        )
    }
    ```
    
    Where the containerList property is the list and the fetching status from the state object.
    Above the <ContainerList /> tag is a reference to another React component called ContainerList and the <div> tag is just plain HTML.
    
    The render of the ContainerList component could look something like this:
    ```javascript
    export default function ContainerList({containerList}){
        
        let thumbnails = containerList.containers.map((container) => {
                return <ContainerThumbnail
                    key={container.container.id}
                    container={container}
                />
        })
        
        return  <div className="col-sm-12 col-md-12">
            {if (containerList.fetching) { <p>Fetching list...</p> }}
            {if (containerList.fail) { <p>Something went wrong!</p> }}
            {thumbnails}
        </div>
    }
    ```
    
    Or something like that, but somewhat prettier. You get the idea. 
    The first time this component is rendered there is no containers but the fetching property will be set to true
    since that is what the inital action does in the reducer, it sets the fetching property to true.
    
    The next time this component is rendered it either has a list of containers or the fail propert set to true.

    That's how awesome this is. \m/ >< \m/
    
    Oh, and dont forget to add unit tests for your actions or the CI gods will be upset.