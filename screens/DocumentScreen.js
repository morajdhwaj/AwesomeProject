/* eslint-disable curly */
import React, {useCallback} from 'react';
import {View, Text, Image, FlatList, Dimensions} from 'react-native';
import tw from 'twrnc';

import {gql, useQuery} from '@apollo/client';

const GET_Documents = gql`
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

function DocumentScreen() {
  const {loading, error, data} = useQuery(GET_Documents, {
    variables: {
      filter: {
        type: 'Document',
      },
    },
  });
  console.log(data?.contents?.payload);
  const Item = useCallback(
    ({item}) => (
      <View style={tw.style(` rounded-lg bg-gray-200`, {width: width / 2 - 8})}>
        <Image
          style={tw`rounded-lg h-60`}
          source={{
            uri: item.image,
          }}
        />
        <View style={tw.style(`flex-1 justify-between h-28   p-2`)}>
          <Text style={tw`text-[10px] text-teal-700`}>{item.subject}</Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={tw`text-[12px] font-bold`}>
            {item.title}
          </Text>
          <View style={tw`text flex-row `}>
            <Text style={tw`text-[10px]`}>{item.likes} |</Text>
            <Text style={tw`text-[10px]`}> 131 Reads</Text>
          </View>
          <View style={tw`flex-row justify-between`}>
            <Text
              style={tw`text-xs  bg-yellow-300 w-min  rounded-[5px] shadow p-[5px] text-teal-600 bg-teal-200 `}>
              Read Free ⇝
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

export default DocumentScreen;
