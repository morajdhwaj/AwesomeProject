/* eslint-disable curly */
import React, {useCallback} from 'react';
import {View, Text, Image, FlatList, Dimensions} from 'react-native';
import tw from 'twrnc';

import {gql, useQuery} from '@apollo/client';

const GET_TESTS = gql`
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

const width = Dimensions.get('window').width;
console.log(width);

function TestScreen() {
  const {loading, error, data} = useQuery(GET_TESTS, {
    variables: {
      filter: {
        type: 'Test',
      },
    },
  });
  console.log(data?.contents?.payload);
  const Item = useCallback(
    ({item}) => (
      <View style={tw.style(`bg-white rounded-lg`, {width: width / 2 - 8})}>
        <Image
          style={tw`rounded-lg h-44`}
          source={{
            uri: item.image,
          }}
        />
        <View
          style={tw.style(
            `flex-1 justify-between h-28 bg-gray-200 rounded-lg p-2`,
          )}>
          <Text style={tw`text-[10px] text-red-700`}>Geography</Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={tw`text-[12px] font-bold`}>
            {item.title}
          </Text>
          <View style={tw`text flex-row `}>
            <Text style={tw`text-[10px]`}>{item.likes} |</Text>
            <Text style={tw`text-[10px]`}> 50 Attempts</Text>
          </View>
          <View style={tw`flex-row justify-between`}>
            <Text
              style={tw`text-xs font-bold bg-yellow-300 w-12  rounded-[5px] shadow p-[2px]  `}>
              ₹ {item.price}
            </Text>
            <Text style={tw`text-[10px] text-red-500 font-medium   w-12   `}>
              {item.offer}% off
            </Text>
          </View>
        </View>
      </View>
    ),
    [],
  );

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error : {error.message}</Text>;

  return (
    <View style={tw`flex-1`}>
      <FlatList
        data={data?.contents?.payload}
        numColumns={2}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item._id}
        columnWrapperStyle={tw`justify-between`}
        contentContainerStyle={tw`p-1`}
        ItemSeparatorComponent={() => <View style={tw`h-2`} />}
      />
    </View>
  );
}

export default TestScreen;
