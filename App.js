import {Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'twrnc';

const App = () => {
  return (
    <View style={tw`flex-1 flex-col p-12 items-center justify-center`}>
      <Text
        style={tw`font-semibold text-center text-2xl text-gray-700 tracking-wider`}>
        My React-native Tailwind App
      </Text>
      <View
        style={tw`items-center justify-center mt-4 w-40 h-40 shadow-xl rounded-full bg-blue-50`}>
        <Image
          source={{
            uri: 'https://picsum.photos/200/200',
          }}
          style={tw`w-40 h-40 rounded-full border-2 border-amber-600`}
        />
      </View>
      <TouchableOpacity
        style={tw`h-10 w-full mt-2 bg-white rounded-full items-center justify-center bg-red-200 border border-blue-500`}>
        <Text style={tw`text-lg text-blue-500 font-bold`}>Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
