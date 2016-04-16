import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../redux/actions/action-creators'
import ContainerList from './containers/container-list'

class App extends Component {
    componentWillMount() {
        this.props.actions.fetchContainers();
    }
    render() {
        return (
          <div>
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
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)