/* eslint-disable curly */
import {View, Text, FlatList, Image} from 'react-native';
import {gql, useQuery} from '@apollo/client';
import React, {useCallback} from 'react';
import tw from 'twrnc';

const GET_VIDEOS = gql`
  query Contents($filter: ContentsFilterInput) {
    contents(filter: $filter) {
      payload {
        _id
        categories
        createdAt
        description
        enable
        exams
        highlight
        image
        index
        likes
        language
        instructors
        media {
          ... on Test {
            _id
            createdAt
            title
            thumbnail
            instructions
            duration
            totalMarks
            negativeMark
            enable
            updatedAt
          }
        }
        offer
        offerType
        paid
        price
        purchased
        purchases
        subject
        tags
        title
        type
        updatedAt
        validity
        visible
      }
    }
  }
`;
function VideoScreen() {
  const {loading, error, data} = useQuery(GET_VIDEOS, {
    variables: {
      filter: {
        type: 'Video',
      },
    },
  });
  const Item = useCallback(
    ({item}) => (
      <View style={tw`flex-row bg-white mb-3 mx-3 rounded-lg`}>
        <Image
          style={tw`w-44 rounded-lg h-24 	`}
          source={{
            uri: item.image,
          }}
        />
        <View style={tw`flex-1 justify-around p-2`}>
          <Text style={tw`text-sm font-bold text-green-700`}>
            {item.subject}
          </Text>
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

  console.log(data?.contents?.payload);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error : {error.message}</Text>;
  return (
    <View style={tw`flex-1`}>
      <Text>Videos Screen</Text>
      <FlatList
        data={data?.contents?.payload}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default VideoScreen;
