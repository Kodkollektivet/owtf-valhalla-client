import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../redux/actions/action-creators'
import ContainerList from './containers/container-list'

class App extends Component {
    
    errorOnClick () {
      this.props.actions.logError("I am erorr")
    }
    
    componentWillMount() {
        this.props.actions.fetchContainers();
    }
    render() {
        return (
          <div>
            <button onClick={this.errorOnClick.bind(this)}>Error</button>
            <ContainerList containerList={this.props.containerList} actions={this.props.actions} />
          </div>
        )
    }
}

function mapStateToProps(state) {
  return state.toJS()
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)