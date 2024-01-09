import React, { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import DragNumber from './DragNumber';

const AdditionHelper = ({ image, array_1, setArray_1, array_2, setArray_2, dummyArray_1, dummyArray_2, addArray, setAddArray }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'number',
        drop: (item) => addItem(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const addItem = (item) => {
        if (item.array === 'array_1') {
            setAddArray(prev=> {
                return [...prev,item]
            })
            setArray_1(prev=>{
                return prev.filter(i=> i._id != item._id)
            })
        } else if (item.array === 'array_2'){
            setAddArray(prev=> {
                return [...prev,item]
            })
            setArray_2(prev=>{
                return prev.filter(i=> i._id != item._id)
            })
        }
    }
    return (
        <div
            className='flex flex-col md:flex-row justify-between bg-white  border rounded-md'
        >
            <div
                ref={drop}
                className={`md:w-1/2 p-5 flex flex-wrap ${isOver ? 'bg-gray-50' : ''} border-b md:border-b-none md:border-r`}
            >
                {addArray.length === 0 ?
                    <p
                        className='w-full animate-pulse space-y-2'
                    >
                        <img
                            src={image}
                            className='w-10 mx-auto h-10 grayscale opacity-50'
                        />
                        <p
                            className='text-sm font-kalpurush text-center text-gray-500'
                        >
                            নিচের কলার সারি থেকে শেষ দিকে থেকে কলা গুলো টেনে এনে রাখ
                        </p>
                    </p>
                    :
                    addArray.map((item, i) =>
                        <img
                            key={i}
                            src={item?.image}
                            className='w-10 h-10'
                        />
                    )
                }
            </div>
            <div
                className='md:w-1/2 space-y-2'
            >
                <div
                    className='relative p-5 border-b'
                >
                    <div
                        className='flex items-center'
                    >
                        {
                            dummyArray_1.map(i =>
                                <img
                                    key={i}
                                    src={image}
                                    className='w-10 h-10 grayscale opacity-50'
                                />
                            )
                        }
                    </div>
                    <div
                        className='absolute top-5 flex items-center z-50 '
                    >
                        {array_1.map((item, i) =>
                            <DragNumber key={i} {...{ item, image }} />
                        )}
                    </div>
                </div>
                <div
                    className='relative p-5 flex items-center'
                >
                    <div
                        className='flex items-center'
                    >
                        {
                            dummyArray_2.map(i =>
                                <img
                                    key={i}
                                    src={image}
                                    className='w-10 h-10 grayscale opacity-50'
                                />
                            )
                        }
                    </div>
                    <div
                        className='absolute top-5 flex items-center z-50'
                    >
                        {array_2.map((item, i) =>
                            <DragNumber key={i} {...{ item, image }} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdditionHelper;