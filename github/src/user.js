import Repo from './repo';

export default class User {
    constructor (props) {
        Object.assign(this, props);
    }
    getRepos () {
        let {api} = this;
        return Promise.resolve(
            this.repos ||
            api.fetch(this.repos_url)
            .then(res => this.repos = res.map(repo => new Repo(Object.assign(repo, {api}))))
        );
    }
}
