import { useEffect } from 'react'
import { RingLoader } from 'react-spinners'
import { useLocation } from 'wouter'

export default function Loader() {
    
    const [location, setLocation] = useLocation()

    useEffect( () => {
        setTimeout(() => {
            setLocation(('/home'))
        }, 5000)
    }, [])
    return (<>
        <div className="centered-box">
            <RingLoader color='lightblue' loading={true} />
        </div>
    </>)
}