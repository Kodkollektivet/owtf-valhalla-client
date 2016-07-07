export default class ApiBadResponseError extends Error {
    constructor(url, code, message){
        super("Calling "+url+" responded with "+code+": "+message)
    }
}