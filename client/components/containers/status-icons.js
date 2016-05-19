import React, { Component } from 'react'

export default function StatusIcons({thinking, hasError}){
  let spinnerTemplate
    if(thinking){
      spinnerTemplate  += <p><i className="fa fa-cog fa-spin fa-3x fa-fw margin-bottom"></i></p>
    }
    if(hasError){
      spinnerTemplate += <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
    }
        
    return <div>{spinnerTemplate}</div>
}
