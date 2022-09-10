
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import ApiContext from '../context/api/ApiContext'
function Item(props) {
    const context = useContext(ApiContext)
    const { fetchid} = context
    const handleClick=(event)=> {
        const id = event.target.id;
        fetchid(id);
    }
    return (
        <>
                <div className='flex space-x-5'>
                    <img className='h-32' src={props.image} alt="" />
                    <div>
                        <h1 className='font-bold font-serif text-base'>{props.name}</h1>
                        <h3 className='mt-3'>{(props.premiered).substring(0,4)}</h3>
                    </div>
                </div>
                <div>
                    <h3 className='mt-4 font-medium font-serif text-base'>{props.days} | {props.time} ({props.runtime} mins) </h3>
                    <h3 className='mt-3 font-medium font-serif text-base'>{(props.genres).toString()}</h3>
                </div>
                <div className='mt-4'>
                    <Link to={`/details`} onClick={handleClick} id={props.id} className='bg-blue-500 hover:bg-blue-700 text-white textxs font-bold p-2 rounded' href="">Show Details</Link>
                </div>
    
        </>
    )
}

export default Item