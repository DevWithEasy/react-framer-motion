import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import useAlphabetStore from '../../../store/alphabateStore';
import apiurl from '../../../utils/apiurl';

const Seasons = () => {
    const {addLetters,letters} = useAlphabetStore()
    const getData=async()=>{
        try {
            const res = await axios.get(`${apiurl}/api/alphabet/season`)
            addLetters(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getData()
    },[])
    
    return (
        <div
            className='grid grid-cols-8 gap-4'
        >
            {letters &&
            letters.map(l=>
                <Link
                    key={l._id}
                    to={`/season/update/${l._id}`}
                    className='p-4 bg-gray-50'
                >
                    {l.name} {l.order_no}
                </Link>
            )
                
            }
        </div>
    );
};

export default Seasons;