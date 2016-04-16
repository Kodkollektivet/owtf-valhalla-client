import React, { Component } from 'react'
import ContainerThumbnail from './container-thumbnail'

export default function ContainerList({containerList}){
    
    let thumbnails = containerList.containers.map((container) => {
            return <ContainerThumbnail key={container.id} container={container} />
          })
    
    return  <div className="col-sm-4 col-md-4">
        {thumbnails}
    </div>
}