/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, FlatList} from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {

  renderItem(library) {
    return <ListItem library={library} />;
  }

  render() {
    const { Libraries } = this.props;
    return (
      <View>
        <FlatList
          data={Libraries}
          renderItem={this.renderItem}
          keyExtractor={(library) => library.id}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {Libraries: state.Libraries};
};

export default connect(mapStateToProps)(LibraryList);
