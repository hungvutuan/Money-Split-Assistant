import React from 'react'
import './styles.css'

const Title = () => {
//   window.onscroll = function() {myFunction()};
//
// // Get the header
//   let header = document.getElementById('header-container');
//
// // Get the offset position of the navbar
//   let sticky = header.offsetTop;
//
// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
//   function myFunction() {
//     if (window.pageYOffset > sticky) {
//       header.classList.add("sticky");
//     } else {
//       header.classList.remove("sticky");
//     }
//   }

  return (
    <div className={'title-container'} id={'header-container'}>
      <h1>Money Split Assistant v0.1</h1>
      <h3 className={'right-header'}>by VTH</h3>
    </div>
  )
}

export default Title

