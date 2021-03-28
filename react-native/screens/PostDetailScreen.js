import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import PostDetailHeader from '../components/PostDetailHeader';
import ImageCard from '../components/ImageCard';

const PostDetailScreen = ({route, navigation}) => {
  const {post} = route.params;
  return (
    // <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <PostDetailHeader user={post.user} />
      <ImageCard
        uri={post.pic}
        cardStyle={styles.imageContainer}
        resizeMode="cover"
      />
    </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // safeArea: {
  //   alignItems: 'center',
  //   flex: 1,
  // },
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  imageContainer: {
    height: '65%',
    paddingTop: 10,
  },
});

export default PostDetailScreen;
