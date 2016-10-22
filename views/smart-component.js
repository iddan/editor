import {Component, PropTypes} from 'react';
import GitHub from '../github';

export default class SmartComponent extends Component {
    static contextTypes = {
        api: PropTypes.instanceOf(GitHub)
    }
}
