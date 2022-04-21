import React from 'react'
import { increment, decrement } from '../../redux/features/counter/counterSlice'
import { useAppSelector, useAppDispatch } from '../../redux/hooks/hooks'
export default function Home() {
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()
    return (
        <>
            <div>
                <div>
                    <button
                        className='w-12 h-12 text-3xl text-white mt-8 ml-8  bg-green-500 rounded-md '
                        aria-label="+"
                        onClick={() => dispatch(increment())}
                    >
                        +
                    </button>
                    <span className='text-3xl ml-4 mr-4'>{count}</span>
                    <button
                        className='w-12 h-12 text-3xl text-white mt-8   bg-red-600 rounded-md '
                        aria-label="Decrement value"
                        onClick={() => dispatch(decrement())}
                    >
                        -
                    </button>
                </div>
            </div></>

    )
}
