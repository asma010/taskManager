import { atom } from "recoil";

export const loggedInAtom = atom({
    key:'loggedIn', default:true
})
export const dataAtom = atom({
    key:'data', default:null
})
export const imgUrlAtom = atom({
    key:'imgUrl', default:null
})