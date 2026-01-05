import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Components/Card'
import 'remixicon/fonts/remixicon.css'


const App = () => {
  const [page, setPage] = useState(1)
  const [api, setApi] = useState([])
  const fetchData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=20`)
    setApi(response.data)
    console.log(response.data);
    

  }

  let printingScreen = "Loading..."

  if (api.length > 0) {
    printingScreen = api.map((elem, idx) => {
      return (
        <Card key={idx} img={elem.download_url} author={elem.author} url={elem.url} />
      )
    })

  }
  useEffect(function() {
    fetchData()
  }, [page])

  return (
    <div className='max-w-screen min-h-screen '>
      <div className='w-full h-full flex gap-2 flex-wrap justify-center mt-8 items-center'>
        {printingScreen}
      </div>
      <div className=' py-5  mb-8 w-full h-10 flex gap-6 justify-center'>
        <button className='w-10 h-10 bg-amber-300 rounded-full text-black
         active:bg-white active:border-2'
          onClick={() => {
            if (page > 1) {
              setPage(page - 1)
            }
          }} >
          <i className="ri-arrow-left-s-line text-2xl"></i>
        </button>
        <h1 className='text-xl'>{`Page ${page}`}</h1>
        <button className='w-10 h-10 bg-amber-300 rounded-full text-black
         active:bg-white active:border-2'
          onClick={() => {
            setPage(page + 1)
          }}>
          <i className="ri-arrow-right-s-line text-2xl"></i>
        </button>
      </div>
    </div>
  )
}

export default App
