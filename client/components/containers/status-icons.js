import React, { Component } from 'react'

<<<<<<< d3ccb87ee6fce1b988615eef0c6b8cbcd74cd004
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
    if(thinking){
      spinnerTemplate  += <p><i className="fa fa-cog fa-spin fa-3x fa-fw margin-bottom"></i></p>
    }
    if(hasError){
      spinnerTemplate += <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
    }
        
    return <div>{spinnerTemplate}</div>
>>>>>>> Added more status icons to container thumbnail component
}
