import React from 'react'
import Header from '../components/Header'
import { useAuthStore } from '../store/useAuthStore'
import { useState } from 'react'

const ProfilePage = () => {

  const{ authUser } = useAuthStore();
  const [name , setName] = useState(authUser.name || "");
  const [bio , setbio] = useState(authUser.bio || "");
  const [age , setAge] = useState(authUser.age || "");
  const [gender , setGender] = useState(authUser.gender || "");
  const [genderPref , setGenderPref] = useState(authUser.genderPref || "");
  const [image , setImage] = useState(authUser.image || "");

  
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
      <Header />
      Profile Page
      

    </div>
  )
}

export default ProfilePage
