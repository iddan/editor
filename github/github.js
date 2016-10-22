class Repo {
    constructor (props) {
        Object.assign(this, props);
    }
    commit (message) {

    }
}

class User {
    constructor (props) {
        Object.assign(this, props);
    }
    getRepos () {
        return Promise.resolve(
            this.repos ||
            this.api.fetch(this.repos_url)
            .then(res => this.repos = res.map(repo => new Repo(repo)))
        );
    }
}

export default class GitHub {
    api_url = 'https://api.github.com'
    constructor (props) {
        Object.assign(this, props);
    }
    fetch (url, settings = {}) {
        let headers = settings.headers || new Headers ();
        headers.append('Authorization', `Basic ${btoa(`${this.username}:${this.password}`)}`);
        headers.append('Content-Type', 'application/json');
        return fetch(url, Object.assign(settings, {headers}))
        .then(res => {
            if (res.statusCode > 400 && res.statusCode < 500) {
                throw res;
            }
            return res;
        })
        .then(res => res.json());
    }
    login ({username, password}) {
        Object.assign(this, {username, password});
        return this.getUser()
        .catch(() => {
            delete this.username;
            delete this.password;
        });
    }
    getUser () {
        return Promise.resolve(
            this.user ||
            this.fetch(this.api_url + '/user')
            .then(res => this.user = new User(Object.assign(res, {api: this})))
        );
    }
}
