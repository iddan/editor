import React from 'react';
import SmartComponent from './smart-component';

export default class Login extends SmartComponent {
    state = {
        username: '',
        password: '',
        error: undefined
    }
    login () {
        let {props: {onLogin}, state, context: {api}} = this;
        api.login(state)
        .then(onLogin)
        .catch(error => this.setState({error}));
    }
    render () {
        return <div>
            <h1>Connect to GitHub</h1>
            <input type="text" placeholder="Username" onChange={e => this.setState({username: e.target.value})} value={this.state.username} />
            <input type="password" placeholder="Password" onChange={e => this.setState({password: e.target.value})} value={this.state.password} />
            <button onClick={::this.login}>Login</button>
            {this.state.error ? 'Can\'t login' : ''}
        </div>;
    }
}
