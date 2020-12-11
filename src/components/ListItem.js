/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text,StyleSheet,TouchableWithoutFeedback,View, LayoutAnimation} from 'react-native';
import CardSection from './common/CardSection';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderInfo() {
    const {library, expanded} = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={{flex:1}}> {library.description} </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { title, id } = this.props.library;
    const {selectedLibrary} = this.props;
    return (
      <TouchableWithoutFeedback onPress={() => selectedLibrary(id)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}> {title} </Text>
          </CardSection>
          {this.renderInfo()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize:18,
    paddingLeft:15,
  },
});

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return {expanded};
};

export default connect(mapStateToProps, actions)(ListItem);
