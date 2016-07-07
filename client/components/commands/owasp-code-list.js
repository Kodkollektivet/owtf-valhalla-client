import React, { Component } from 'react'
import OwaspCodeListItem from './owasp-code-list-item'
export default function OwaspCodeList({commandList}){
    let listItems
    if(commandList.fetching)
      listItems = <li><p>Fetching list...</p></li>
    else if(commandList.ready)
      listItems = commandList.commands.map((command) => {
        return <OwaspCodeListItem key={command.code} code={command.code} />
      })
    return  <ul className="nav nav-tabs nav-stacked">{listItems}</ul>
}
