import "./Works.css"
import img1 from '../assets/Screenshot 2023-09-09 111518.png'
import img2 from '../assets/Screenshot 2023-09-24 124636.png'
import img3 from '../assets/Screenshot 2023-09-24 125652.png'
import img4 from '../assets/Screenshot 2023-10-17 225328.png'
import img5 from '../assets/portfolio-5.png'
import img6 from '../assets/portfolio-6.png'

export default function Works(){
  return(
    <section id='works'>
      <h2 className='worktitle'>My Projects</h2>
      <span className='workdesc'>I take a pride in paying the attention to the smallest details and making sure thet my work is pixel perfect. i am excited to bring m skills and experience to help buisnesses achieve their goals and create a strong online presence</span>
      <div className='workimgs'>
         <a className="text" href="https://github.com/vikassharma011/Netflix-Clone">Netflix-clone</a>
         <a className="text" href="https://github.com/vikassharma011/Alumni_area">Alumni</a>
         <a className="text" href="https://github.com/vikassharma011/File-System-Emulator">File system Emulator</a>
         <a className="text" href="https://github.com/vikassharma011/food-order">Food Order App</a>
      </div>
      <button className='workbtn'>See more</button>
    </section>
  )
}