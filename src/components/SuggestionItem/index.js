// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {searchInfo, updateSearchInput} = props
  const {suggestion} = searchInfo

  const updateSuggestionList = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="searchContent">
      <p className="para">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrowLogo"
        onClick={updateSuggestionList}
      />
    </li>
  )
}

export default SuggestionItem
