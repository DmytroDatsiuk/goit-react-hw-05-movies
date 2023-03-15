import React, { useState } from 'react';
import {
  Form,
  SearchFormButton,
  SearchFormButtonLabel,
  Field,
} from './SearchMovie.styled';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

export const SearchMovie = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQueryChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      toast.warn('Input search query');
      return;
    }
    onSearch(searchQuery);
  };

  return (
    <Formik initialValues={{ search: '' }}>
      <Form onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <FcSearch />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>
        <Field
          type="text"
          name="search"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handleSearchQueryChange}
        />
      </Form>
    </Formik>
  );
};

SearchMovie.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
