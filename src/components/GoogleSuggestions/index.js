// Write your code here
import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  updateSearchInput = suggestion => {
    this.setState({searchInput: suggestion})
  }

  onChangeInputSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResult = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="googleLogo"
        />
        <div className="searchContainer">
          <div className="searchCard">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="searchLogo"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="inputBox"
              value={searchInput}
              onChange={this.onChangeInputSearch}
            />
          </div>

          <ul className="allContent">
            {searchResult.map(eachSearch => (
              <SuggestionItem
                key={eachSearch.id}
                searchInfo={eachSearch}
                updateSearchInput={this.updateSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
