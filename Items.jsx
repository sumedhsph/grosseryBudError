import React from 'react'
import SingleItem from "./SingleItem";
export default function Items({items, removeItem}) {
  console.log(items)
  return (
    <div className='items'>
      {items.map((item)=>{
        return <SingleItem key={items.id} removeItem={removeItem}/>
      })}
          
    </div>
  )
}
