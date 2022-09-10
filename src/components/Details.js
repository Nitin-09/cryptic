import React from 'react'
import { useContext } from 'react'
import ApiContext from '../context/api/ApiContext'
function Details(props) {
  const context = useContext(ApiContext)
  const { value } = context
  console.log(value.show.id);
  console.log(value.show.runtime);
  return (
    <>
    <div className='lg:flex'>
      <div className='m-10 p-4 rounded overflow-hidden shadow-lg basis-2/3'>
        <h1 className='font-extrabold font-serif underline text-center'>{value.show.name}</h1>
        <div className='flex space-x-5 mt-6'>
          <img className='h-32' src={value.show.image.original} alt="" />
          <div className='text-xs font-medium font-sans lg:text-sm'>
            {(value.show.summary).replace('<p>', ' ').replace('<b>', ' ').replace('</b>', '').replace('</p>', '')}
          </div>
        </div>
      </div>
      <div className='m-10 p-4 rounded overflow-hidden bg-gray-500 bg-opacity-20 shadow-lg'>
        <h1 className='font-extrabold font-serif underline text-center'>Show Info</h1>
        <div className='m-7 text-xs'>
          <ul>
            <li className='font-bold font-serif'>Network : <span className='font-normal'><a className='text-blue-400 hover:underline' href={(value.show.officialSite)?value.show.officialSite:""}>{(value.show.network)?value.show.network.name:""} </a>({(value.show.premiered)?(value.show.premiered).substring(0, 4):""}{(value.show.status) === "Running" ? "- Now" : " "})</span></li>
            <li className='font-bold font-serif'>Schedule : <span className='font-normal'>{(value.show.schedule.days)?value.show.schedule.days:""} at {(value.show.schedule.time)?value.show.schedule.time:""} ({(value.show.runtime)?value.show.runtime:""} mins) </span></li>
            <li className='font-bold font-serif'>Status : <span className='font-normal'>{(value.show.status)?value.show.status:""} </span></li>
            <li className='font-bold font-serif'>Show Type :<span className='font-normal'> {(value.show.type)?value.show.type:""} </span></li>
            <li className='font-bold font-serif'>Genres : <span className='font-normal'>{(value.show.genres)?(value.show.genres).toString():""} </span></li>
            <li className='font-bold font-serif'>Official Site :<a className='font-normal text-blue-400 hover:underline' href={(value.show.officialSite)?value.show.officialSite:""}> {value.show.officialSite?value.show.officialSite:""} </a></li>
          </ul>
        </div>
      </div>
      </div>
    </>
  )
}

export default Details