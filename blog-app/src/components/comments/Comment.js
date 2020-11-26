import React from 'react'

export default function Comment({ comment, index}) {
    return (
        <li className="li" key={index}>
            <div><span>"{comment.comment}"</span></div>
            <div><span>{comment.name}</span></div>
        </li>
    )
}
