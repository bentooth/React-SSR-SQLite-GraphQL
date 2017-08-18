import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAlbums } from '../ducks';
import AlbumList from './AlbumList';

class Albums extends Component {
  static initialAction() {
    return fetchAlbums();
  }

  componentDidMount() {
    if (!this.props.albums) {
      this.props.dispatch(Albums.initialAction());
    }
  }

  render() {
    const { albums } = this.props;
    return <AlbumList albums={albums} />;
  }
}

const mapStateToProps = state => ({
  albums: state.albums
});

export default withRouter(connect(mapStateToProps)(Albums));
