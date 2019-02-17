import React from 'react'

class Stripe extends React.Component {
  componentDidMount() {
    this.div.addEventListener('mousemove', this.handleMouseOver)
    this.div.addEventListener('mouseout', this.handleMouseOut)
  }

  componentWillUnmount() {
    this.div.removeEventListener('mousemove', this.handleMouseOver)
    this.div.removeEventListener('mouseout', this.handleMouseOut)
  }

  state = {
    whichOne: ''
  }
  
  render() {
    return (
      <div
        ref={ref => this.div = ref}
        className={`stripe bg-${this.props.color} ${this.state.whichOne}`}
      >
        <div className="top" data-text={this.props.top} />
        <div className="bottom" data-text={this.props.bottom} />
      </div>
    )
  }

  handleMouseOver = e => {
    const { screenY } = e

    if (screenY <= window.innerHeight / 2) {
      this.setState({
        whichOne: 'top'
      })
    } else {
      this.setState({
        whichOne: 'bottom'
      })
    }
  }

  handleMouseOut = () => {
    this.setState({
      whichOne: ''
    })
  }
}

export default Stripe