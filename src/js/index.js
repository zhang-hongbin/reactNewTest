import React from 'react'
import {render} from "react-dom"
import Header from"./components/header"
import BodyIndex from "./components/bodyindex"
import Footer from "./components/footer.js"

class Index extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <BodyIndex username="通过props传递的Name" userid={123} />
                <Footer />
            </div>
        )
    }  
}

render(
    <Index />,
    document.getElementById("example")
);