import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

function Navbar() {

    const [isVisible, setIsVisible] = useState(false)

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    return (
        <nav className='flex items-center justify-between flex-wrap bg-blue-950 p-6'>
            <div className='flex items-center flex-shrink-0 text-white mr-6'>
                <Link to='/' className='font-bold text-xl tracking-tight'>Alberta Park</Link>
            </div>
            <div className='block'>
                <button onClick={dropDown} className='flex items-center px-3 py-2 text-white border rounded border-white hover:text-white hover:border-white'>
                    <i className='fas fa-bars'></i>
                </button>
            </div>
            { isVisible ? (
            <div className='w-full block flex-grow items-center'>
                <div className="text-sm lg:flex-grow">
                    <Button className='p-3 m-5 justify-center'>
                        <div>
                            <Link to='/' className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0 text-white border rounded border-transparent hover:text-white mr-4'>Home</Link>
                        </div>
                    </Button>
                    <Button className='p-3 m-5 justify-center'>
                        <div>
                            <Link to='/Gallery' className='flex place-itmes-center mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4'>Gallery</Link>
                        </div>
                    </Button>
                </div>
            </div>
            ) : (
            <></>
            ) }
        </nav>
    )  
}

export default Navbar