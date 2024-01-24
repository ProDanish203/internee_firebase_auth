import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className='text-white bg-black py-2 flex items-center justify-center w-full'>
        <p className='text-md'>Made with <span className='text-red-600'>❤</span> By <Link to='https://danish-siddiqui.vercel.app' target="_blank" className='text-red-600'>Danish Siddiqui</Link></p>
    </footer>
  )
}
