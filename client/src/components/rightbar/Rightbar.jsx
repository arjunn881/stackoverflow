import React from 'react'
import '../rightbar/Rightbar.css';
import { Widget } from './Widget';
import { WidgetTags } from './WidgetTags';



export const Rightbar = () => {
  return (
    <aside className='right-sidebar'>
      <Widget/>
      <WidgetTags/>
    </aside>
  )
}
