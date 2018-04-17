var React = require("react") 
import footerCss from './../../css/footer.css' 

export default class Footer extends React.Component {
    render() {
        console.log(footerCss);
        return (
            <footer className = {footerCss.miniFooter}>
                <h1>这里是页脚，一般放置版权的一些信息。</h1>
            </footer>
        )
    }
}