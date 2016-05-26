import React, { Component } from 'react'

export default function ContainerThumbnail({running, built, onBuildClick, onStartClick, onStopClick, onRemoveClick}){
    let disableBuildButton = (built === true)
    let disableStartButton = (running===true || built===false)
    let disableStopButton = (running===false || built===false)
    return <div className="btn-group" role="group">
              <button disabled={disableBuildButton} onClick={onBuildClick} type="button" className="btn btn-default"><i className="fa fa-wrench"></i> Build</button>
              <button disabled={disableStartButton} onClick={onStartClick} type="button" className="btn btn-default"><i className="fa fa-play-circle"></i> Start</button>
              <button disabled={disableStopButton} onClick={onStopClick} type="button" className="btn btn-default"><i className="fa fa-stop-circle"></i> Stop</button>
              <button onClick={onRemoveClick} type="button" className="btn btn-default"><i className="fa fa-times"></i> Remove</button>
            </div>

}
