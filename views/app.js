import React, {Component, PropTypes} from 'react';
import Login from './login';
import Repos from './repos';
import Panel from './panel';
import GitHub from '../github';

export default class App extends Component {
    state = {}
    static propTypes = {
        api: PropTypes.instanceOf(GitHub).isRequired
    }
    static childContextTypes = {
        api: PropTypes.instanceOf(GitHub).isRequired
    }
    getChildContext () {
        return {
            api: this.props.api
        };
    }
    render () {
        let {state: {user, repo}} = this;
        if (!user) {
            return <Login onLogin={user => this.setState({user})} />;
        }
        if (!repo) {
            return <Repos onSelect={repo => this.setState({repo})} />;
        }
        return <Panel user={user} repo={repo} />;
    }
}
