import { create } from 'zustand'

import { UserType } from '../interfaces'




const usersGlobalstore = create((set) => ({

    currentUser : null,
setCurrentUser : (user:UserType) => set({currentUser: user}),

}))

export default usersGlobalstore;

export interface UsersStoreType {
    currentUser: UserType | null;
    setCurrentUser: (user: UserType) => void;
  }