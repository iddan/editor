import React from 'react';
import ReactDOM from 'react-dom';
import Store from 'delux';
import {Provider} from 'delux-react';
import user from './collections/user';
import App from './views/app';
import GitHub from './github';

let store = new Store();

store.user = user;

let api = new GitHub();

store.use((action) => {
    return ({
        login () {
            return api.login(action.payload)
            .then(res => action.payload = res)
            .catch(err => {
                action.payload = err;
                action.error = true;
            });
        },
        getRepos () {
            console.log(api.user);
            return api.user.getRepos()
            .then(repos => action.payload = repos);
        }
    }[action.type] || (() => 0))();
});

ReactDOM.render(<Provider store={store}>
    <App api={new GitHub()} />
</Provider>, document.querySelector('#root'));

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
