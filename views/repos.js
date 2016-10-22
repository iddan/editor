import React, {PropTypes} from 'react';
import SmartComponent from './smart-component';

export default class Repos extends SmartComponent {
    state = {
        repos: []
    }
    add () {
        let {context: {api}} = this;
        api.user.createRepo(this.refs.name)
        .then(api.user::api.user.getRepos)
        .then(repos => this.setState({repos}));
    }
    componentWillMount () {
        let {context: {api}} = this;
        api.user.getRepos()
        .then(repos => this.setState({repos}));
    }
    render () {
        let {props: {onSelect}, state: {repos}} = this;
        return <div>
            <h1>Repos</h1>
            <input ref={name} type="text" placeholder="blog name" />
            <button onClick={::this.add}>ADD</button>
            <ul>{repos.map(repo => <li onClick={() => onSelect(repo)}>{repo.name}</li>)}</ul>
        </div>;
    }
}
