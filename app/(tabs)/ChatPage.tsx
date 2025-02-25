import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList,Image, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import { ScaledSheet, vs } from 'react-native-size-matters';
import { useRouter } from 'expo-router';




const messages = [
  { id: '1', text: 'Hello!', user: 'other' },
  { id: '2', text: 'Hi, how are you?', user: 'me' },
  { id: '1', text: 'Hello!', user: 'other' },
  { id: '2', text: 'Hi, how are you?', user: 'me' },
  { id: '1', text: 'Hello!', user: 'other' },
  { id: '2', text: 'Hi, how are you?', user: 'me' },
  { id: '1', text: 'Hello!', user: 'other' },
  { id: '2', text: 'Hi, how are you?', user: 'me' },
  { id: '1', text: 'Hello!', user: 'other' },
  { id: '2', text: 'Hi, how are you?', user: 'me' },
  { id: '1', text: 'Hello!', user: 'other' },
  { id: '2', text: 'Hi, how are you?', user: 'me' },
  { id: '1', text: 'Hello!', user: 'other' },
  { id: '2', text: 'Hi, how are you?', user: 'me' },
  { id: '1', text: 'Hello!', user: 'other' },
  { id: '2', text: 'Hi, how are you?', user: 'me' },
  { id: '1', text: 'Hello!', user: 'other' },
  { id: '2', text: 'Hi, how are you?', user: 'me' },
  { id: '1', text: 'Hello!', user: 'other' },
  { id: '2', text: 'Hi, how are you?', user: 'me' },
  { id: '1', text: 'Hello!', user: 'other' },
  { id: '2', text: 'Hi, how are you?', user: 'me' },
  { id: '1', text: 'Hello!', user: 'other' },
  { id: '2', text: 'Hi, how are you?', user: 'me' },
  { id: '1', text: 'Hello!', user: 'other' },
  { id: '2', text: 'Hi, how are you?', user: 'me' },
  { id: '1', text: 'Hello!', user: 'other' },
  { id: '2', text: 'Hi, how are you?', user: 'me' },
  { id: '1', text: 'Hello!', user: 'other' },
  { id: '2', text: 'Hi, how are you?', user: 'me' },
  { id: '1', text: 'Hello!', user: 'other' },
  { id: '2', text: 'Hi, how are you?', user: 'me' },
  { id: '1', text: 'Hello!', user: 'other' },
  { id: '2', text: 'Hi, how are you?', user: 'me' },

  // Add more messages here
];

type Message = {
    text: string;
    user: string;
  };

const MessageBubble: React.FC<{ message: Message}> = ({ message }) => (
  <View style={[styles.messageBubble, message.user === 'me' ? styles.myMessage : styles.otherMessage]}>
    <Text style={styles.messageText}>{message.text}</Text>
  </View>
);

const ChatPage = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
        <View style={styles.TopBar}>
            <Image source={require("../../assets/images/Profile8.png")} style={styles.Image} />
            <View style={styles.Icons}>
            <Pressable>
            <Image source={require("../../assets/images/VoiceCall.png")} style={styles.Images}/>
            </Pressable>
            <Pressable>
                <Image source={require("../../assets/images/VideoCall.png")} style={styles.Images}/>
            </Pressable>
            </View>
        </View>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MessageBubble message={item}  />}
        showsVerticalScrollIndicator={false}
      />
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}  keyboardVerticalOffset={10}
      >
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Type a message" />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '10@s',
    
    
  },
  TopBar:{
    display: 'flex',
    flexDirection: "row",
    justifyContent:"space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#c4c4c4",
    alignItems: "center",
    marginTop: "30@vs"
  },
  Icons:{
    display: "flex",
    flexDirection: 'row',
    gap: "2@s"
  },
  Image:{
    height: "50@vs",
    width: "50@s",
    resizeMode: "contain"
  },
  Images:{
    height: "30@vs",
    width: "30@s",
    resizeMode: "contain"
  },
  messageBubble: {
    maxWidth: '70%',
    padding: '10@s',
    borderRadius: '10@vs',
    marginVertical: '5@vs',
  },
  myMessage: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
  },
  otherMessage: {
    backgroundColor: '#ECECEC',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: '16@vs',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#eee',
    padding: '10@s',

 
  },
  input: {
    flex: 1,
    height: '40@vs',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: '20@vs',
    paddingLeft: '15@s',
    marginTop: "0@vs",
  },
  sendButton: {
    marginLeft: '10@s',
    padding: '10@s',
    backgroundColor: '#800000',
    borderRadius: '20@vs',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: '16@vs',
  },
});

export default ChatPage;
