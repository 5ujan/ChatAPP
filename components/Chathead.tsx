import { View, TouchableOpacity, Text } from "react-native"
import { Link } from "expo-router";
import tw from "twrnc"


export interface Item {
  first: string, 
  last: string,
}

const Chathead = ({ item }: { item: Item }) => {
  return (
    <View style={tw`border-b-[#009000] border-b-2 py-2 px-4  relative`}>
      <TouchableOpacity>
        <Link
          href={`/ChatScreen?first=${item.first}&last=${item.last}`} // Pass parameters in query string
        >
          {" "}
          <View style={tw`flex flex-row gap-4`}>
            <View style={tw`rounded-full  bg-black`}>
              <Text style={tw`text-white text-2xl p-4 tracking-wide`}>
                {item.first[0] + item.last[0]}
              </Text>
            </View>
            <View style={tw`absolute top-[16px] left-[80px]`}>
              <Text style={tw` text-green-800 text-3xl gap-2`}>
                {item.first + " " + item.last}
              </Text>
            </View>
          </View>
        </Link>
      </TouchableOpacity>
    </View>
  );
}

export default Chathead