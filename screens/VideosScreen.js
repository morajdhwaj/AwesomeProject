/* eslint-disable curly */
/* eslint-disable react/no-unstable-nested-components */
import {gql, useQuery} from '@apollo/client';
import React, {useCallback} from 'react';
import {View, Text, FlatList, StyleSheet, StatusBar, Image} from 'react-native';

const GET_VIDEOS = gql`
  query Videos {
    videos {
      payload {
        _id
        createdAt
        enable
        link
        thumbnail
        time
        title
        updatedAt
        urls {
          format
          url
        }
      }
    }
  }
`;
function VideosScreen() {
  const {loading, error, data} = useQuery(GET_VIDEOS);

  const Item = useCallback(
    ({item}) => (
      <View style={styles.main}>
        <Image
          style={styles.thumbnail}
          source={{
            uri: item.thumbnail,
          }}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'space-around',
            padding: 6,
          }}>
          <Text style={styles.subject}>Geography</Text>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
            {item.title}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.time}>{item.time} |</Text>
            <Text style={styles.time}>10M Views | </Text>
            <Text style={styles.time}>18k Likes </Text>
          </View>
        </View>
      </View>
    ),
    [],
  );

  console.log(data?.videos?.payload);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error : {error.message}</Text>;
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <Text>Videos Screen</Text>
      <FlatList
        data={data?.videos?.payload}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  main: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    borderRadius: 10,
    marginBottom: 8,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 12,

    fontWeight: '700',
  },
  time: {
    fontSize: 10,
    marginHorizontal: 2,
  },
  subject: {
    fontSize: 12,
    color: 'green',
    fontWeight: '900',
  },

  thumbnail: {
    width: 200,
    aspectRatio: 16 / 9,
    resizeMode: 'stretch',
    borderRadius: 10,
  },
});
export default VideosScreen;
