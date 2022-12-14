import {Routes,Route} from 'react-router-dom';


function AllRoutes(){

  return (
    <div>
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
        <Route path='/smartphones' element={<h1>smartphons</h1>} />
        <Route path='/tv' element={<h1>Tv</h1>} />
      </Routes>
    </div>
  )

}

export default AllRoutes;




