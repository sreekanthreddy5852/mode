import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: 'On'}
  render() {
    const {isDarkMode} = this.state
    return (
      <div className="container">
        {isDarkMode ? (
          <div className="card">
            <h1 class="heading">Click to Change Mode</h1>
            <button className="button">Light Mode</button>
          </div>
        ) : (
          <div className="card1">
            <h1 class="heading1">Click to Change Mode</h1>
            <button className="button1">Light Mode</button>
          </div>
        )}
      </div>
    )
  }
}

export default LightDarkMode
