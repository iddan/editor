import Ref from './ref';
import Tree from './tree';

export default class Repo {
    trees = {}
    constructor (props) {
        Object.assign(this, props);
    }
    getRefs () {
        let {api} = this;
        return Promise.resolve(
            this.refs ||
            api.fetch(this.git_refs_url.replace('{/sha}', ''))
            .then(refs => this.refs = refs.map(ref => new Ref(Object.assign(ref, {api}))))
        );
    }
    getTree (sha, props = {}) {
        let {api} = this;
        return Promise.resolve(
            this.trees[sha] ||
            api.fetch(this.trees_url.replace('{/sha}', '/' + sha) + `?${props.recursive ? 'recursive=1' : ''}`)
            .then(tree => this.trees[sha] = new Tree(Object.assign(tree, {api})))
        );
    }
    getMasterTree () {
        return this.getRefs()
        .then(refs => refs[0].get())
        .then(ref => this.getTree(ref.object.sha, {
            recursive: true
        }))
        .catch(err => console.log(err));
    }
}
