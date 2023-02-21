/* eslint-disable curly */
import {View, Text, FlatList, Image} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import React, {useCallback} from 'react';
import tw from 'twrnc';

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
function VideoScreen() {
  const {loading, error, data} = useQuery(GET_VIDEOS);

  const Item = useCallback(
    ({item}) => (
      <View style={tw`flex-row bg-white mb-3 mx-3 rounded-lg`}>
        <Image
          style={tw`w-44 rounded-lg h-24 	`}
          source={{
            uri: item.thumbnail,
          }}
        />
        <View style={tw`flex-1 justify-around p-2`}>
          <Text style={tw`text-sm font-bold text-green-700`}>Geography</Text>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={tw`text-sm font-bold`}>
            {item.title}
          </Text>
          <View style={tw`text flex-row `}>
            <Text style={tw`text-[10px]`}>{item.time} |</Text>
            <Text style={tw`text-[10px]`}>10M Views | </Text>
            <Text style={tw`text-[10px]`}>18k Likes </Text>
          </View>
        </View>
      </View>
    ),
    [],
  );

  // console.log(data?.videos?.payload);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error : {error.message}</Text>;
  return (
    <View style={tw`flex-1`}>
      <Text>Videos Screen</Text>
      <FlatList
        data={data?.videos?.payload}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default VideoScreen;
