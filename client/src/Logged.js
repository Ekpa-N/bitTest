import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getRepos } from './Toolkit/Slice/repoSlice'

export default function Logged() {
    const code = new URLSearchParams(location.search).get('code')
    const {repos, isLoading} = useSelector((state) => state.repo)
    const dispatch = useDispatch()
    // useEffect(()=> {
    //     dispatch(getRepos(code))
    // },[])
    
    return(
        <>
        <h1>
           "Sigh"
        </h1>
        </>
    )
}