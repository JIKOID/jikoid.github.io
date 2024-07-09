import * as React from "react"
import * as Styels from "./utterances.module.scss"

class Utterances extends React.Component {
    constructor(props) {
        super(props)
        this.rootElm = React.createRef()
        this.state = { status: "pending" }
    }

    componentDidMount() {
        const script = document.createElement("script")
        script.src = "https://utteranc.es/client.js"
        script.async = true
        script.setAttribute("repo", "JIKOID/blog-comments")
        script.setAttribute("issue-term", "pathname")
        script.setAttribute("theme", "github-light")
        script.setAttribute("crossorigin", "anonymous")
        script.setAttribute("label", "comment :speech_balloon:")
        script.onload = () => this.setState({ status: "success" })
        script.onerror = () => this.setState({ status: "failed" })
        this.rootElm.current.appendChild(script)
    }

    render() {
        const { status } = this.state

        return (
            <div className={Styels.comments_wrapper}>
                {status === "pending" && <p>Loading Comments...</p>}
                {status === "failed" && <p>Failed to load comments</p>}
                <div ref={this.rootElm} />
            </div>
        )
    }
}

export default Utterances;