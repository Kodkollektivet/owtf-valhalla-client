import React, { Component } from 'react'

export default function CogSpinner({showSpinner}){
  let spinnerTemplate
    if(showSpinner){
      spinnerTemplate  = <p><i className="fa fa-cog fa-spin fa-3x fa-fw margin-bottom"></i></p>
    }
        
    return <div>{spinnerTemplate}</div>
}
