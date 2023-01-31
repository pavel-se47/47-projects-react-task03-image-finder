import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const fetchImg = ({ searchQuery = '', currentPage = 1, perPage = 15 }) => {
  return axios
    .get(
      `/?q=${searchQuery}&page=${currentPage}&key=30307738-59afbcdeb2729193aa806c9ae&image_type=photo&orientation=horizontal&per_page=${perPage}`
    )
    .then(response => response.data.hits);
};

// eslint-disable-next-line
export default { fetchImg };
