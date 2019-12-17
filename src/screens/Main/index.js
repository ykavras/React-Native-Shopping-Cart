import React, {Component} from 'react';
import {
  Container,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Header,
  Title,
} from 'native-base';
import {FlatList, RefreshControl} from 'react-native';
import {connect} from 'react-redux';
import {Movies} from '../../store/Actions/Movie/Movies';
import moment from 'moment';

class Main extends Component {
  state = {refreshing: false};
  componentDidMount = async () => {
    await this.getMovies();
  };

  getMovies = () => {
    this.props.Movies();
  };

  render() {
    const {data} = this.props.MoviesReducer;
    const {navigate} = this.props.navigation;
    const {refreshing} = this.state;
    return (
      <Container>
        <Header>
          <Body>
            <Title>Movies</Title>
          </Body>
        </Header>
        {data && (
          <FlatList
            keyExtractor={item => item._id}
            data={data}
            contentContainerStyle={{paddingHorizontal: 10}}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={this.getMovies}
              />
            }
            renderItem={({item}) => (
              <Card key={item._id}>
                <CardItem
                  button
                  onPress={() => navigate('MainDetail', {id: item._id})}>
                  <Left>
                    <Thumbnail source={{uri: item.coverURL}} />
                    <Body>
                      <Text>{item.name}</Text>
                      <Text note>
                        Create At: {moment(item.createdAt).format('MMM Do YY')}
                      </Text>
                    </Body>
                  </Left>
                </CardItem>
              </Card>
            )}
          />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    MoviesReducer: state.MoviesReducer,
  };
};

const mapStateToDispatch = {
  Movies,
};

export default connect(
  mapStateToProps,
  mapStateToDispatch,
)(Main);
