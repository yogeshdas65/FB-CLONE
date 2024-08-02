import { View, Text, Image ,StyleSheet} from 'react-native'
import React from 'react'
import { Colors } from '../utils/color';
import { PostData } from '../data/PostData';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';

const Post = () => {
  return (
   <View style={styles.postContainer}>
      {PostData.map(item => (
        <View key={item.id}>
          <PostHeader data={item} />
          <Image source={item.postImg} style={styles.postImg} />
          <PostFooter data={item} />
        </View>
      ))}
    </View>
  )
}


const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: Colors.white,
    marginTop: 8,
  },
  postImg: {
    width: '100%',
    height: 250,
  },
});
export default Post
