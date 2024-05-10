import { useCookies } from "react-cookie";
import {useState,useEffect} from 'react'

export const useCookieHook = () =>{
    const [cookie,setIntervalCookie] = useCookies(['token']);



    const setCookieL = ck =>{
        console.log("In cookie function")
        setIntervalCookie('token',ck);
    }

    return [cookie,setCookieL];
}

