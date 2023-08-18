import './App.css'
import Navbar from './components/Navbar/Navbar';
import ContactUs from './components/ContactUs/ContactUs';
import Form from './components/Form/Form';

function App() {

  return (
    <>
      <Navbar />
      <main className='main_container'>
        <ContactUs />
        <Form />
      </main>
    </>
  )
}

export default App
