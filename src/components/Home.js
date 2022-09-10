import React from 'react'
import Item from './Item';
import { useContext } from 'react'
import ApiContext from '../context/api/ApiContext'

function Home() {
  const context = useContext(ApiContext)
  const { data } = context
  return (
    <>
      <div className='grid grid-cols-3 m-10'>
        {data.map((element) => {
          return <div className='m-3 p-4 rounded overflow-hidden shadow-lg' key={element.show.id}>
            <Item className="" id={element.show.id} image={element.show.image.medium} premiered={element.show.premiered} name={element.show.name} url={element.show.url} summary={element.show.summary} days={element.show.schedule.days} time={element.show.schedule.time} runtime={element.show.runtime} genres={element.show.genres} />

          </div>
        })}
      </div>
    </>
  )
}

export default Home