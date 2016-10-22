import GitFile from './file';

export default class Tree {
    constructor (props) {
        let {api} = props;
        props.tree = props.tree.map(file => new GitFile(Object.assign(file, {api})));
        Object.assign(this, props);
    }
    commit (message, files) {
        console.log(this);
    }
}
