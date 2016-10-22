import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/app';
import GitHub from './github';

let api = new GitHub();

ReactDOM.render(<App api={api} />, document.querySelector('#root'));

// let github = new GitHub({
//     username: 'aniddan',
//     password: 'iPhone5S'
// });
//
// github.getUser()
// .then(user => user.getRepos())
// .then(repos => {
//     for (let repo of repos) {
//         document.body.innerHTML += repo.name + ', ';
//     }
// });
