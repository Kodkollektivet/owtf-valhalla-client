import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreator from '../redux/actions/action-creator'
import ContainerList from './containers/container-list'
import OwaspCodeList from './commands/owasp-code-list'

class App extends Component {
    constructor(props) {
      super(props)
      this.handleBuildContainer = this.handleBuildContainer.bind(this)
      this.handleStartContainer = this.handleStartContainer.bind(this)
      this.handleStopContainer = this.handleStopContainer.bind(this)
      this.handleRemoveContainer = this.handleRemoveContainer.bind(this)
    }

    componentWillMount() {
        this.props.actions.fetchCommandsRequest()
        this.props.actions.fetchContainersRequest()
    }

    handleBuildContainer (id){
      this.props.actions.buildContainerRequest(id)
    }

    handleRemoveContainer (id){
      this.props.actions.removeContainerRequest(id)
    }

    handleStartContainer (id){
      this.props.actions.startContainerRequest(id)
    }

    handleStopContainer (id){
      this.props.actions.stopContainerRequest(id)
    }

    render() {
        return (
          <div className="full-height row">
            <div className="full-height col-sm-2 well well-sm">
              <nav className="navbar navbar-default">
                <OwaspCodeList commandList={this.props.commandList} />
              </nav>
            </div>
            <div className="col-sm-10">
              <ContainerList
                containerList={this.props.containerList}
                handleBuildContainer={this.handleBuildContainer}
                handleStartContainer={this.handleStartContainer}
                handleStopContainer={this.handleStopContainer}
                handleRemoveContainer={this.handleRemoveContainer}
                />
            </div>
          </div>
        )
    }
}

function mapStateToProps(state) {
  return state.toJS()
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreator.create(), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
