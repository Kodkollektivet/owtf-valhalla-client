import React, { Component } from 'react'

export default function ContainerThumbnail({running, built, onBuildClick, onStartClick, onStopClick}){
    return <div className="btn-group" role="group">
              <button onClick={onBuildClick} type="button" className="btn btn-default"><i className="fa fa-wrench"></i> Build</button>
              <button onCLick={onStartClick} type="button" className="btn btn-default"><i className="fa fa-play-circle"></i> Start</button>
              <button onClick={onStopClick} type="button" className="btn btn-default"><i className="fa fa-stop-circle"></i> Stop</button>
            </div>

}