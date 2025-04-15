import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id = 'explore-menu'>
        <h1>Explore the dishes</h1>
        <p className='explore-menu-text'>Choose from our wide variety of dishes from around your city.</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src = {item.menu_image} alt="" />
                        <p><strong>{item.menu_name}</strong></p>
                    </div>
                )
            })}
        </div>
      <hr /> 
    </div>
  )
}

export default ExploreMenu
