var React = require('react')

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            isMiniStyle: false
        }        
    }
    changeStyle() {
        this.setState({
            isMiniStyle:!this.state.isMiniStyle}
        )
    }
    render() {
        const componentHeadStyle = {
            header : {
                backgroundColor:"#333333",
                color:"#FFFFFF",
                paddingTop:(this.state.isMiniStyle)?'3px':'15px',
                paddingBottom:(this.state.isMiniStyle)?'3px':'15px'
            } ,
        }
        return (
            <header style={componentHeadStyle.header} className="smallFontSize" onClick={this.changeStyle.bind(this)}>
                <h2>这是首部</h2>
            </header>
        )
    }
}