import React from 'react'

export default function Contact() {
  return (
    <div id="contact">
        <h1>Book Your Table</h1>
        <form>
            <input type="text" name="" placeholder='Full Name'/>
            <input type="email" name="" placeholder="Type Your E-Mail"/>
            <textarea name="" id="" cols="30" rows="10" placeholder='Write Here...'></textarea>
            <input type="submit" value="BOOK" />
        </form>
    </div>
  )
}
