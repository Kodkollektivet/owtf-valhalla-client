import React, { Component } from 'react'
import ContainerActionButtons from './container-action-buttons'
import StatusIcons from './status-icons'

const thumbnailStyle = {
  minHeight: '200px'
}

const imageInfoStyle = {
  fontSize: '11px'
}

const actionButtonsHolderStyle = {
  paddingBottom:'2px'
}

class ContainerThumbnail extends Component {
    render() {
        let image = this.props;
        return (<div className="col-sm-12 col-md-12">
        <div style={thumbnailStyle} className="thumbnail">
        <div style={actionButtonsHolderStyle}>
            <ContainerActionButtons
              running={this.props.container.running}
              built={this.props.container.container.built}
              onBuildClick={() => {this.props.handleBuild(image)}}
              onStartClick={() => {this.props.handleStart(image)}}
              onStopClick={() => {this.props.handleStop(image)}}
            />
              <StatusIcons
                thinking={this.props.container.thinking}
                hasError={this.props.container.hasError}
                isBuilt={this.props.container.container.built}
                running={this.props.container.running}
              />
        </div>
          <div className="caption">
            <h3>{this.props.container.container.name}</h3>
            <p>{this.props.container.container.ip}</p>
            <p>{this.props.container.container.tag}</p>
            <p>
                <ContainerActionButtons
                running={this.props.container.running}
                built={this.props.container.built}
                onBuildClick={() => {this.props.handleBuild(image)}}
                onStartClick={() => {this.props.handleStart(image)}}
                onStopClick={() => {this.props.handleStop(image)}}
                onRemoveClick={() => {this.props.handleRemove(image)}}
                />
            </p>
            <p style={imageInfoStyle}>Image: {this.props.container.image.name} - v. {this.props.container.image.version}</p>
          </div>
        </div>
        </div>
        )
    }
}

export default ContainerThumbnail