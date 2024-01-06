import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import useAlphabetStore from '../../../store/alphabateStore';
import apiurl from '../../../utils/apiurl';

const Number = () => {
    const { addLetters, letters } = useAlphabetStore()
    const getData = async () => {
        try {
            const res = await axios.get(`${apiurl}/api/admin/number/en`)
            addLetters(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div
            className='space-y-3'
        >
            <h2
                className=' py-2 text-2xl font-bold border-b-2'
            >
                ইংরেজি নাম্বার
            </h2>
            <div
                className='grid grid-cols-8 gap-4'
            >
                {letters &&
                    letters.map(l =>
                        <Link
                            key={l._id}
                            to={`/numbers/update/${l._id}`}
                            className='p-4 bg-gray-50 text-center'
                        >
                            {l.letter}
                        </Link>
                    )

                }
            </div>
        </div>
    );
};

export default Number;