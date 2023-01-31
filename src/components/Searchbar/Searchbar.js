import React, { Component } from 'react';
import styles from './Searchbar.module.css';

class SearchBar extends Component {
  state = { query: '' };

  inputChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  formSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.query);

    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={styles.searchBar}>
        <form className={styles.searchForm} onSubmit={this.formSubmit}>
          <button type="submit" className={styles.button}>
            <span className={styles.label}>Search</span>
          </button>

          <input
            className={styles.input}
            type="text"
            value={this.state.query}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.inputChange}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
