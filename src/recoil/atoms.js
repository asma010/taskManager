import { atom } from "recoil";

export const loggedInAtom = atom({
    key:'loggedIn', default:true
})
export const dataAtom = atom({
    key:'data', default:null
})
export const userInfoAtom = atom({
    key:'userInfo', default:null
})
/*export const userNameAtom = atom({
    key:'name',
    default:'user'
})
export const emailAtom = atom({
    key:'email',
    default:null
})
export const imgAtom = atom({
    key:'img',
    default:null
})*/