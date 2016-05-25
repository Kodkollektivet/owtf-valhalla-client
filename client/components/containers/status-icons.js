import React, { Component } from 'react'

<<<<<<< HEAD
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
}
