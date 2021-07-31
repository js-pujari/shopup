import React from 'react'

export const Sidebar = ({items, selectedItem, onSelect}) => {
  console.log(selectedItem);
  return (
    <div>
      {items && items.length > 0 && items.map((item, index) => {
        return (
          <div 
          key={index} 
          className={'sidebar-item ' + (item == selectedItem ? 'active' : '') }
          onClick={() => onSelect(item)}
          >{item}</div>
        )
      })}
    </div>
  )
}
