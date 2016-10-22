export default class GitFile {
    constructor (props) {
        Object.assign(this, props);
    }
    get () {
        return this.api.fetch(this.url)
        .then(file => {
            if (file.encoding === 'base64') {
                return this.content = atob(file.content);
            }
        });
    }
}
