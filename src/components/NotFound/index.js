// Write your code here
import './index.css'

import Header from '../Header'

const failureMsg =
  'Sorry, we cannot find that page. You will find lots to explore on the home page'

const NotFound = () => (
  <div className="not-found-container">
    <Header />
    <img
      src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
      alt="not found"
      className="default-not-found-img"
    />
    <h1 className="failure-heading">Lost Your Way?</h1>
    <p className="failure-description">{failureMsg}</p>
  </div>
)

export default NotFound
