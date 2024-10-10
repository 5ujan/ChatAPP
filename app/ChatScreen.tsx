import { View, Text,TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import React, { useState, useCallback, useEffect } from 'react';
import tw from "twrnc";

import Messages from "../components/Messages"

export interface IMessage {
  _id: string | number;
  text: string;
  createdAt: Date | number;
  user: {
    _id: string | number;
    name: string;
    avatar?: string;
  };
}

const ChatScreen = () => {
  const router = useRouter();
  const { first, last } = { first: "Ram", last: "Thapa" };

  return (
    <View style={tw`flex flex-col bg-green-100 h-[97%] my-auto mt-6 `}>
        
      <View style={tw`bg-[#004000]  w-full p-4 rounded-b-lg flex flex-row gap-[4rem]`}>
        <TouchableOpacity  onPress={()=>router.back()}><Text style={tw`text-3xl text-white border border-white rounded-full  px-[2px]`}>{" < "}</Text></TouchableOpacity>
        <Text style={tw`text-3xl text-white uppercase text-center`}>{`${first} ${last}`}</Text>
      </View>
      <Messages />
    </View>
  );
};



export default ChatScreen;
