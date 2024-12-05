import React from 'react'
import { Footer } from '../components/common/Footer'
import { Outlet } from 'react-router-dom';

export const PublicLayout = () => {
  return (
    <>

      <Outlet /> {/* 👉 Renderiza las rutas hijas (Login, Register, etc)*/}

     
      <Footer />
    </>
  )
}

