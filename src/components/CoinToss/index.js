import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    HeadsCount: 0,
    TailsCount: 0,
    TotalCount: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClicktossButton = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        HeadsCount: prevState.HeadsCount + 1,
        TotalCount: prevState.TotalCount + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      ;<img
        src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
        className="image-style"
        alt="Tails"
      />
      this.setState(prevState => ({
        TailsCount: prevState.TailsCount + 1,
        TotalCount: prevState.TotalCount + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {HeadsCount, TailsCount, TotalCount, imageUrl} = this.state

    return (
      <div className="background-color">
        <div className="white-background">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={imageUrl} className="image-style" alt="toss result" />
          <button
            className="button"
            type="button"
            onClick={this.onClicktossButton}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="para2">Total: {TotalCount}</p>
            <p className="para2">Heads: {HeadsCount}</p>
            <p className="para2">Tails: {TailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
