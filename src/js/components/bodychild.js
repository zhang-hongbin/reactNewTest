var React = require('react') 

 export default class BodyChild extends React.Component {
    render() {
        return(
            <div>
                <h4>这里是BodyChild信息</h4>
                <input type="text" defaultValue="通过子组件改变age" onChange={this.props.HandlerAge} />
                <p>{this.props.username} {this.props.userid} </p>
            </div>
        )
    }
}