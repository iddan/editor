import React, {Component, PropTypes} from 'react';
// import {Editor, EditorState} from 'draft-js';

class MyEditor extends React.Component {
    // state = {
    //     editorState: EditorState.createEmpty()
    // }
    // onChange (editorState) {
    //     this.setState({editorState});
    // }
    render() {
        // const {editorState} = this.state;
        // return <Editor editorState={editorState} onChange={::this.onChange} value={this.props.value} />;
        return <div contentEditable="true">{this.props.value.split('\n').map(p => <p>{p}</p>)}</div>;
    }
}

export default class Panel extends Component {
    state = {
        file: '',
        tree: []
    }
    static propTypes = {
        repo: PropTypes.object.isRequired
    }
    getFile (file) {
        file.get()
        .then(file => this.setState({file}));
    }
    componentWillMount () {
        let {props: {repo}} = this;
        repo.getMasterTree()
        .then(({tree}) => this.setState({tree}));
    }
    render () {
        let {state: {tree, file}} = this;
        return <div>
            <h1>Panel</h1>
            <ul>
                {tree.map(file => <li onClick={() => this.getFile(file)}>{file.path}</li>)}
            </ul>
            <button onClick={() => tree.commit('changed', file)}>SAVE</button>
            <MyEditor value={file} />
        </div>;
    }
}
