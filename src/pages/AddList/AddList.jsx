import React,{useEffect} from 'react'
import Navbar1 from '../../components/Navbar/Navbar1'
import Footer from '../../components/Footer/Footer'
import Add from '../../components/Add/Add'

export default function AddList() {
  useEffect(() => {
      document.title = 'Espace | New-Listing';
    }, []);
  return (
    <>
    <Navbar1/>
    <Add/>
    <Footer/>
    </>
  )
}
