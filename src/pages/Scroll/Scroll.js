import React from 'react';


export class ScrollTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolled: 0
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollProgress);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollProgress);
    }

    scrollProgress = () => {
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const scrolled = `${scrollPx / winHeightPx * 100}%`;

        // console.log(scrolled);

        this.setState({
            scrolled: scrolled
        });
    };

    render() {
        const progressContainerStyle = {
            background: "blue",

            height: "4px",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            zIndex: 99
        };

        const progressBarStyle = {
            height: "4px",
            background: "#e91e63",
            width: this.state.scrolled
        };

        return (
            <div>
                <div className="progress-container" style={progressContainerStyle}>
                    <div className="progress-bar" style={progressBarStyle} />
                </div>
                <div className="content">

                </div>
            </div>
        );
    }
}