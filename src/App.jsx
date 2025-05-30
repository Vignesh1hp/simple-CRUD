import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import StudentTable from './components/StudentTable'
import EditStudent from './components/EditStudent'
import CreateStudent from './components/CreateStudent'
import ViewStudent from './components/ViewStudent'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StudentTable/>}></Route>
          <Route path='/student/create' element={<CreateStudent/>}></Route>
          <Route path='/student/edit/:studentid' element={<EditStudent/>}></Route>
          <Route path='/student/view/:studentid' element={<ViewStudent/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
