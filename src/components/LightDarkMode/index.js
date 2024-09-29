// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: false}

  changeMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const backGroundMode = isDarkMode ? 'light-mode' : 'dark-mode'
    const buttonText = isDarkMode ? 'Dark Mode' : 'Light Mode'
    const containerClass = `container ${backGroundMode}`
    return (
      <div className="lightdarkmode-app-container">
        <div className={containerClass}>
          <h1 className="heading">Click To Change Mode</h1>
          <button onClick={this.changeMode} className="button" type="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
