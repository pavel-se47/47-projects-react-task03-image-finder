import React, { Component } from 'react';
import Container from 'components/GeneralContainer/generalContainer';
import SearchBar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import imgApi from '../src/components/Api/api';
import LoadMoreButton from 'components/Button/Button';
import { ThreeDots } from 'react-loader-spinner';
import Modal from 'components/Modal/Modal';

class App extends Component {
  state = {
    searchQuery: '',
    currentPage: 1,
    img: [],
    isLoading: false,
    showModal: false,
    bigImgUrl: '',
    bigImgAlt: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImage();
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  inputValue = query => {
    this.setState({ searchQuery: query, currentPage: 1, img: [] });
  };

  fetchImage = () => {
    const { searchQuery, currentPage } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    imgApi
      .fetchImg(options)
      .then(hits => {
        this.setState(prevState => ({
          img: [...prevState.img, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => console.log(error))
      .finally(() => this.setState({ isLoading: false }));
  };

  urlBigImg = event =>
    this.setState({
      bigImgUrl: event.target.dataset.sourse,
      bigImgAlt: event.target.alt,
    });

  render() {
    const { img, isLoading, showModal, bigImgAlt, bigImgUrl } = this.state;
    return (
      <Container>
        {showModal && (
          <Modal addToggleModal={this.toggleModal}>
            <img src={bigImgUrl} alt={bigImgAlt} />
          </Modal>
        )}
        <SearchBar onSubmit={this.inputValue} />
        <ImageGallery
          images={img}
          addToggleModal={this.toggleModal}
          addUrlBigImg={this.urlBigImg}
        />
        {isLoading && (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="skyblue"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        )}
        {img.length > 0 && <LoadMoreButton onClick={this.fetchImage} />}
      </Container>
    );
  }
}

export default App;
