import React from 'react';
import {useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap';
import data from '../data.json';

const SearchBar = ({history}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

  
  useEffect(() => {
    if(searchResults.length) {
      redirect()
    }
  }, [searchResults])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let results =[]
        if(searchTerm.length)
        results = data.data.filter(item => (
          JSON.stringify(item.name).toLowerCase().includes(searchTerm.trim()) ||
          JSON.stringify(item.year).toLowerCase().includes(searchTerm.trim()) ||
          JSON.stringify(item.category).toLowerCase().includes(searchTerm.trim()) ||
          JSON.stringify(item.sn).toLowerCase().includes(searchTerm.trim())
        ))
        if(results!= undefined) {
          setSearchResults(results);
          redirect();
        }
        history.push('/wines')
        e.target.reset();
      }


      const redirect = () => {
        if(searchResults.length) {
           history.push({
            pathname : `/search/${searchTerm}`,
            state :{
            data : searchResults
              }
            } 
          )
        } else {
          history.push('/wines');
        }
      }

    return (
        <div>
        <Form onSubmit = {handleSubmit} inline>
            <Form.Control
              type = "string"
              name = ""
              onChange = {(e) => setSearchTerm(e.target.value)}
              placeholder = "Search Wine..."
              className = 'mr-sm-2 ml-sm-5'
              > 
            </Form.Control>
            <Button type = "submit" id="search-custom" variant = "outline" className="search-text">Search</Button>
        </Form>
        </div>
    )
}

export default SearchBar;
