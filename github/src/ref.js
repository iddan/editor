export default class Ref {
    constructor (props) {
        Object.assign(this, props);
    }
    get () {
        return this.api.fetch(this.url)
        .then(ref => Object.assign(this, ref));
    }
}
