import React, { Component } from 'react'

export default function ContainerThumbnail({running, built}){
    return <div className="btn-group" role="group">
              <button type="button" className="btn btn-default"><i className="fa fa-wrench"></i> Build</button>
              <button type="button" className="btn btn-default"><i className="fa fa-play-circle"></i> Start</button>
              <button type="button" className="btn btn-default"><i className="fa fa-stop-circle"></i> Stop</button>
            </div>

}