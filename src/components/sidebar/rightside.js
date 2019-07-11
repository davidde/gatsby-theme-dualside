import React from "react"
import Sidebar from "./sidebar"


class Rightside extends React.Component {
  render() {
      return <Sidebar
                whichSide='right'
                ref={this.props.myRef}
                otherRef={this.props.otherRef}
                title={this.props.title}
                icon={this.props.icon}
              >
                {this.props.children}
              </Sidebar>
  }
}

export default Rightside;