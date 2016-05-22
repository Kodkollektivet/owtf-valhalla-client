import React, { Component } from 'react'

<<<<<<< 822dec01d91bd689c31a87e9dd692a93f8ddea0e
<<<<<<< d3ccb87ee6fce1b988615eef0c6b8cbcd74cd004
=======
>>>>>>> Added UI state for building/run/stop
const holderStyle = {
  padding:'3px',
  minHeight: '20px',
  float:'right'
}

const errorIconStyle = {
  color: '#a94442'
}

const isBuiltIconStyle = {
  color: '#3c763d'
}


export default function StatusIcons({thinking, hasError, isBuilt}){
  let spinnerTemplate, errorTemplate, isBuiltTempate
<<<<<<< 822dec01d91bd689c31a87e9dd692a93f8ddea0e
    if(thinking){
      spinnerTemplate  = <i className="fa fa-cog fa-spin fa-2x fa-fw margin-bottom" aria-hidden="true"></i>
    }
    else if(hasError){
      errorTemplate = <i style={errorIconStyle} className="fa fa-2x fa-exclamation-triangle" aria-hidden="true"></i>
    }
    else if(isBuilt){
      isBuiltTempate = <i style={isBuiltIconStyle} className="fa fa-2x fa-wrench" aria-hidden="true"></i>
    }

    return <div style={holderStyle}><p>{spinnerTemplate}{errorTemplate}{isBuiltTempate}</p></div>
=======
export default function StatusIcons({thinking, hasError}){
  let spinnerTemplate
=======
>>>>>>> Added UI state for building/run/stop
    if(thinking){
      spinnerTemplate  = <i className="fa fa-cog fa-spin fa-2x fa-fw margin-bottom" aria-hidden="true"></i>
    }
    else if(hasError){
      errorTemplate = <i style={errorIconStyle} className="fa fa-2x fa-exclamation-triangle" aria-hidden="true"></i>
    }
<<<<<<< 822dec01d91bd689c31a87e9dd692a93f8ddea0e
        
    return <div>{spinnerTemplate}</div>
>>>>>>> Added more status icons to container thumbnail component
=======
    else if(isBuilt){
      isBuiltTempate = <i style={isBuiltIconStyle} className="fa fa-2x fa-wrench" aria-hidden="true"></i>
    }

    return <div style={holderStyle}><p>{spinnerTemplate}{errorTemplate}{isBuiltTempate}</p></div>
>>>>>>> Added UI state for building/run/stop
}
