import React, { useState, useEffect, useCallback } from 'react';
import { GiftedChat, Bubble, InputToolbar } from 'react-native-gifted-chat';
import { db } from '../api/firebaseConfig';
import { collection, query, onSnapshot, addDoc, orderBy } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Message {
  _id: string | number;
  text: string;
  createdAt: Date | number;
  user: {
    _id: string | number;
    name: string;
    avatar?: string;
  };
}

export default function Messages() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [myUuid, setMyUuid] = useState<string>("");

  const identifier = async () => {
    try {
      const uuid = await AsyncStorage.getItem("uuid");
      if (uuid === null) {
        const uniqueId = uuidv4();
        setMyUuid(uniqueId);
        await AsyncStorage.setItem("uuid", uniqueId);
      } else {
        setMyUuid(uuid);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    identifier();
  }, [identifier]);

  useEffect(() => {
    if (!myUuid) return;

    const messagesCollection = collection(db, 'messages');
    const q = query(messagesCollection, orderBy('sent_date', 'desc'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedMessages: Message[] = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          _id: doc.id,
          text: data.message_text,
          createdAt: new Date(data.sent_date),
          user: {
            _id: data.uuid === myUuid ? 1 : 2,
            name: data.sent_by,
            avatar: data.uuid !== myUuid ? 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' : undefined,
          },
        };
      });

      setMessages(fetchedMessages);
    });

    return () => unsubscribe();
  }, [myUuid]);

  const onSend = useCallback((newMessages: Message[] = []) => {
    const { text } = newMessages[0];

    addDoc(collection(db, 'messages'), {
      uuid: myUuid,
      message_text: text,
      sent_date: new Date().toISOString(),
      sent_by: "User",
      is_read: false,
    });
    // We don't need to update local state here, as the Firestore listener will handle it
  }, [myUuid]);

  return (
    <GiftedChat
      messages={messages}
      onSend={onSend}
      user={{
        _id: 1,
      }}
      renderBubble={(props) => (
        <Bubble
          {...props}
          wrapperStyle={{
            right: { backgroundColor: '#234522' },
            left: { backgroundColor: '#E1FFC7' },
          }}
        />
      )}
      renderInputToolbar={(props) => (
        <InputToolbar
          {...props}
          containerStyle={{
            backgroundColor: '#fff',
            borderTopColor: '#E1E1E1',
            borderTopWidth: 1,
          }}
        />
      )}
    />
  );
}