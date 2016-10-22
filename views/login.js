import React from 'react';
import {ConnectedComponent} from 'delux-react';

export default class Login extends ConnectedComponent {
    static collections = ['user']
    state = {
        username: '',
        password: '',
        user: {

        }
    }
    login () {
        let {state: {username, password}} = this;
        this.dispatch({
            type: 'login',
            payload: {username, password}
        });
    }
    render () {
        return <div>
            <h1>Connect to GitHub</h1>
            <input type="text" placeholder="Username" onChange={e => this.setState({username: e.target.value})} value={this.state.username} />
            <input type="password" placeholder="Password" onChange={e => this.setState({password: e.target.value})} value={this.state.password} />
            <button onClick={::this.login}>Login</button>
            {this.state.user.error ? 'Can\'t login' : ''}
        </div>;
    }
}
