import Nav from "./Nav";
import Products from './Apidata'
import { useState } from "react";

const HomePage = () => {
   const [MenuData, setMenuData] = useState(Products);
console.log(MenuData);
    return (
    <>
    <section className="main-card--cointainer"> 
  {
    MenuData.map((elem)=>{
        return(
        <>
        <div className='card-container' >
        <div className='card'>
            <div className='card-body'>
                <span className='card-number card-circle subtle'>{elem.id}</span>
                <span className='card-author subtle'>{elem.category}</span>
                <h4 className='card-title'>{elem.name}</h4>
                <span className='card-description  subtle'>
                    {elem.type}
                </span>
                <div className='card-read'>Read</div>
            </div>
            <img src={elem.img} alt="" className='card-media' />
            <span className='card-tag'>Add To Wishlist</span>
        </div>
    </div>
    </>
   ) 
})}
</section>
    </>
)}

export default HomePage