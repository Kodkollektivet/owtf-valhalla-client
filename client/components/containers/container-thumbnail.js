import React, { Component } from 'react'
import ContainerActionButtons from './container-action-buttons'

export default function ContainerThumbnail({container}){
    return  <div className="col-sm-4 col-md-4">
    <div className="thumbnail">
      <div className="caption">
        <h3>{container.name}</h3>
        <p>{container.ip}</p>
        <p>{container.tag}</p> 
        <p>
            <ContainerActionButtons running={container.running} built={container.built} />
        </p>
      </div>
    </div>
    </div>
}