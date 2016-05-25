import React, { Component } from 'react'
import ContainerActionButtons from './container-action-buttons'
import CogSpinner from './cog-spinner'

class ContainerThumbnail extends Component {
    
    render() {
        let imageId = this.props.container.image.id;
        return (<div className="col-sm-4 col-md-4">
        <div className="thumbnail">
          <CogSpinner showSpinner={this.props.container.thinking} />
          <div className="caption">
            <h3>{this.props.container.container.name}</h3>
            <p>{this.props.container.container.ip}</p>
            <p>{this.props.container.container.tag}</p> 
            <p>
                <ContainerActionButtons 
                running={this.props.container.running} 
                built={this.props.container.built} 
                onBuildClick={() => {this.props.handleBuild(imageId)}} 
                onStartClick={() => {this.props.handleStart(imageId)}} 
                onStopClick={() => {this.props.handleStop(imageId)}}
                onRemoveClick={() => {this.props.handleRemove(imageId)}} 
                />
            </p>
          </div>
        </div>
        </div>
        )
    }
}

export default ContainerThumbnail
