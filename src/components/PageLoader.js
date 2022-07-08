import React from "react"

const PageLoader = ({ percent }) => {
  return (
    <div id="overlay">
      <div id="progstat">{percent}% </div>

      <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default PageLoader
