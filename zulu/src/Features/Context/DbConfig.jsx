import React, { createContext, useContext, useEffect, useState } from 'react'
import { db } from '../../FirebaseConfig'
import { deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore'
import userAuth from './AuthUser'


const DbConfig=createContext()
export const DbConfigProvider = ({children}) => {
    const {user}=useContext(userAuth)
    const [dataList,setDataList]=useState([])
    const dbCollection=doc(db,"InterestedList",`${user?.email}`)
    useEffect(()=>{
        onSnapshot(dbCollection,(snapShot)=>{
            setDataList(snapShot?.data()?.Favs)
        })
    })
    const addDocs=(ele)=>{
        let dataContainer=dataList.length>0 ? dataList :[]
        dataContainer.push(ele)
        try{

            updateDoc(dbCollection,{
                Favs : dataContainer
            })
        }catch (err){
            alert(err.message)
        }
    }
    const deleteDocs=async(ele)=>{
        try{
            let dataContainer=dataList?.filter(element=>
                
                element.id != ele.id)

            await updateDoc(dbCollection,{
                Favs : dataContainer
            })
        }catch (err){
            alert(err.message)
        }
    }
    const clearData=async()=>{
        try{
            await deleteDoc(dbCollection);
        }catch (err){
            alert(err.message)
        }
    }
  return (
    <DbConfig.Provider value={{clearData , deleteDocs , addDocs ,dataList}}>
        {children}
    </DbConfig.Provider>
  )
}

export default DbConfig