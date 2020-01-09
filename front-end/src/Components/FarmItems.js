import React, {useEffect} from 'react'

const FarmItem = () => {

    useEffect(() => {
        axiosWithAuth()
        return () => {
            cleanup
        };
    }, [input])
    return (
        <div></div>
    )

}


// I need to have a way to show farm produce here