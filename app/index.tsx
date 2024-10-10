import { Text, View, TouchableOpacity , SafeAreaView, FlatList} from "react-native";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import Chathead from "../components/Chathead"
import tw from "twrnc"
import { LogBox } from "react-native";


LogBox.ignoreLogs(['Warning: ...', "Warning:"]);; // Log to see if it works


export default function Index() {


  const [contact, setContact] = useState([
    {first:"Ram", last: "Thapa"},
    {first:"Krishna", last: "Thapa"},
    {first:"SHyam", last: "Thapa"},
    {first:"govinda", last: "Thapa"},
    {first:"Ram", last: "Thapa"},
    {first:"Krishna", last: "Thapa"},
    {first:"SHyam", last: "Thapa"},
    {first:"govinda", last: "Thapa"},
    {first:"Ram", last: "Thapa"},
    {first:"Krishna", last: "Thapa"},
    {first:"SHyam", last: "Thapa"},
    {first:"govinda", last: "Thapa"},
    {first:"Ram", last: "Thapa"},
    {first:"Krishna", last: "Thapa"},
    {first:"SHyam", last: "Thapa"},
    {first:"govinda", last: "Thapa"},
    
  ])
  const [selected, setSelected] = useState({})
  


  return (
    <View
      style={tw`flex flex-col bg-green-100 h-full mt-6`}
    >
      <View style={tw`rounded`}>
        <Text style={tw`bg-[#004000] w-full  text-3xl p-4 text-white uppercase text-center`}>NDG Mobile Chat</Text>
      </View>
      <SafeAreaView style={tw`flex flex-col px-2 py-4 gap-10`}>

      <FlatList data={contact} renderItem={({item})=><Chathead item={item}></Chathead>} >

      {/* <Chathead></Chathead>a
      <Chathead></Chathead>
      <Chathead></Chathead>
      <Chathead></Chathead>
      <Chathead></Chathead>
      <Chathead></Chathead>
      <Chathead></Chathead>
      <Chathead></Chathead>
      <Chathead></Chathead>
      <Chathead></Chathead> */}
      </FlatList>
      </SafeAreaView>

    </View>
  );
}
