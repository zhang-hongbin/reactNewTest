var React = require("react")
var ReactDOM = require("react-dom")
import BodyChild from './bodychild'
import PropTypes from 'prop-types'
import Mixins from 'react-mixin'

import MixinLog from './mixin'

export default class BodyIndex extends React.Component {
    constructor() {
        super();
        this.state= {
            username : "zhanghongbin",
            userid : "474572465",
            userage:50
        }
    }
    onChangeAge() {
        this.setState({userage:20});
        //第一种方式
        // var myButton = document.getElementById('button');
        // ReactDOM.findDOMNode(myButton).style.color = 'red';
        console.log(this.refs.button)
        this.refs.button.style.color = 'red'
        MixinLog.log();
    }
    HandlerAge(event) {
        this.setState({
            userage:event.target.value
        })
    }

    render() {
        // setTimeout(() => {this.setState({username:"第二个用户名"})},4000
        // );
        return (
            <div>
                <h2>这是内容部分</h2>
                <h3>用户名为{this.state.username}</h3>
                <p>接受父组件信息：username:{this.props.username},userid:{this.props.userid}</p>
                <br />
                {this.state.userage}
                <input id="button" ref="button" type="button" value="更改年龄" onClick={this.onChangeAge.bind(this)}/>
                <BodyChild HandlerAge={this.HandlerAge.bind(this)} {...this.props} />
            </div>
        )
    }
}
BodyIndex.propTypes = {
    userid: PropTypes.number.isRequired
}

// BodyIndex.defaultProps = {
//     userid: 456
// }
Mixins(BodyIndex.prototype,MixinLog)