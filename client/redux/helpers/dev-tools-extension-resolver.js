export default function (){
    if (window /* TODO Resolve only when in dev-mode */){
        return window.devToolsExtension ? window.devToolsExtension() : f => f
    }
    
    return f => f //Redux expects function when composing reducers and middleware
}