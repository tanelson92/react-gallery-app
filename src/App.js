import './App.css';
import React, { Component } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Search from './components/Search';
import PhotoContainer from './components/PhotoContainer';
import Nav from './components/Nav';
import NotFound from './components/NotFound';
import Loading from './components/Loading';
import apiKey from './config';
import axios from 'axios';

class App extends Component {
  state = {
    search: this.props.params.query || this.props.query,
    loading: false,
    results: [],
  };
  
  componentDidUpdate(prevProps) {
    let oldSearch = prevProps.params.query || prevProps.query;
    let newSearch = this.props.params.query || this.props.query;
    // Fetch search data query when the query changes.
    if (newSearch !== oldSearch) {
      this.setState(() => {
        return {
          search: newSearch
        }
      }, 
        this.handleSearch(newSearch)
      );
    }
  }

  componentDidMount() {
    this.handleSearch(this.state.search);
  }

  /** 
   * @desc setSearch changes the url to the given search query.
   */

  setSearch = (search) => {
    this.props.navigate(`../search/${search}`);
  }

  /**
   * @desc handleLoading updates "loading" status of the app.
   */

  handleLoading = (status) => {
    this.setState(() => {
      return {
        loading: status
      }
    });
  }

  /**
   * @desc handleText updates app "search" state.  
   */

  handleText = (search) => {
    this.setState(() => {
      return {
        search: search
      }
    });
  }

  /** 
  * @desc handleSearch fetches data based on the search provided. 
  */

  handleSearch = (search) => {
    let context = this;
    this.handleLoading(true);
    axios({
      type: 'GET',
      url: 'https://www.flickr.com/services/rest/',
      params: {
        method: 'flickr.photos.search',
        api_key: apiKey,
        text: search || context.state.search,
        per_page: 24,
        media: 'photos',
        safe_search: 1,
        content_type: 1,
        format: 'json',
        nojsoncallback: 1,
      }
    }).then(resp => {
      //Update app state once data is retrieved.
      context.setState({ results: resp.data.photos.photo }, context.handleLoading(false));
    }).catch(e => {
      //Errors
      console.log(e);
    });
  }

  render() {
    let hasResults = this.state.results && this.state.results.length > 0;
    let isLoading = this.state.loading;
    return (
      <div className="App">
        <Search search={this.state.search} setSearch={this.setSearch} handleSearch={this.handleSearch} handleText={this.handleText}/>
        <Nav/>
        {isLoading && 
          <Loading/>
        }
        {hasResults && !isLoading &&
          <PhotoContainer search={this.state.search} results={this.state.results}/>
        }
        {!hasResults && !isLoading &&
          <NotFound />
        }
      </div>
    );
  }
}

export default function AppWrapper(props) {
  const navigate = useNavigate();
  const params = useParams();
  return <App navigate={navigate} params={params} query={props.query}/>;
};
