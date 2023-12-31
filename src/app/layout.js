"use client";
import './globals.css'
import { Inter } from 'next/font/google'
import { BrowserRouter } from 'react-router-dom'

const inter = Inter({ subsets: [ 'latin' ] })


export default function RootLayout({ children }) {
  return (
    <BrowserRouter>
      <html lang="en">
        <body className={ inter.className }>{ children }</body>
      </html></BrowserRouter>
  )
}
