"use client";

import React, { useState } from 'react'
import "./timeline.css";

interface LineItems {
  id: number;
  content: string;
  altText: string;
  period: string;
  title: string;
  desc: string;
}

const Timeline = () => {
  const [activeItem, setActiveItem] = useState<number>(3);
  const lineItems: LineItems[] = [
    { id: 3, content: "Prodapt", altText: "Prodapt Logo", period: "2024-Present", title: "Software Engineer", desc: "A software engineer working with ServiceNow" },
    { id: 2, content: "RIT", altText: "RIT Logo", period: "2019-2023", title: "Under Graduation", desc: "Passed out with 8.36 CGPA in Electronics and Communication Engineering." },
    { id: 1, content: "DAV", altText: "DAV Logo", period: "2018-2019", title: "HSC", desc: "Completed HSC with 72.83% in Computer science specialization." }
  ]

  return (
    <section className='w-11/12 md:w-3/4 mx-auto mb-24' id='timeline'>
      <h2 className='text-3xl font-bold mb-2'>Timeline</h2>
      <div className="line-container">
        <div className="line">
          {
            lineItems.map(item => (
              <div className={`line-items ${activeItem == item.id ? 'active-item' : ''} ${activeItem == item.id - 1 ? 'next-item' : ''} ${activeItem == item.id + 1 ? 'previous-item' : ''} ${activeItem > item.id + 1 ? 'item-left' : ''} ${activeItem < item.id - 1 ? 'item-right' : ''}`} onClick={() => setActiveItem(item.id)} key={item.id}>
                <div className="circle"></div>
                <h2 className='text-xl font-bold my-4'>{item.content}</h2>
              </div>
            ))
          }
        </div>
      </div>
      <div className="content-container">
          {
            lineItems.map(item => (
              <div className={`content-item w-full md:3/5 lg:w-fit  ${activeItem == item.id ? 'active-item' : ''} ${activeItem == item.id - 1 ? 'next-item' : ''} ${activeItem == item.id + 1 ? 'previous-item' : ''} ${activeItem > item.id + 1 ? 'item-left' : ''} ${activeItem < item.id - 1 ? 'item-right' : ''}`} key={item.id}>
                <div className="joining-line"></div>
                <span className="period">{item.period}</span>
                <span className="title">{item.title}</span>
                <span className="description">
                  {item.desc}
                </span>
              </div>
            ))
          }
        </div>
    </section>
  )
}

export default Timeline