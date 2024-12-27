import React from 'react'
import { useAuthStore } from '../store/useAuthStore';
const ChatPage = () => {
  
  const {authUserName , authUserLastName } = useAuthStore();

  console.log(authUserName, authUserLastName);

  return <div>ChatPage</div>;
}

export default ChatPage;
