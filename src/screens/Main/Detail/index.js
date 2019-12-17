import React, {Component} from 'react';
import {ImageBackground, View, Text, StatusBar} from 'react-native';
import styles from './styles';
import {MovieDetail} from '../../../store/Actions/Movie/MovieDetail';
import {connect} from 'react-redux';

class MainDetail extends Component {
  componentDidMount = async () => {
    await this.props.MovieDetail(this.props.navigation.getParam('id'));
  };

  render() {
    const {data} = this.props.MovieDetailReducer;
    const {navigate} = this.props.navigation;
    return (
      data && (
        <ImageBackground style={styles.wrapper} source={{uri: data.coverURL}}>
          <StatusBar hidden />
          <Text style={styles.backBtn} onPress={() => navigate('Main')}>
            Back
          </Text>
          <View style={styles.nameWrapper}>
            <Text style={styles.name}>{data.name}</Text>
          </View>
        </ImageBackground>
      )
    );
  }
}

const mapStateToProps = state => {
  return {
    MovieDetailReducer: state.MovieDetailReducer,
  };
};

const mapStateToDispatch = {
  MovieDetail,
};

export default connect(
  mapStateToProps,
  mapStateToDispatch,
)(MainDetail);
