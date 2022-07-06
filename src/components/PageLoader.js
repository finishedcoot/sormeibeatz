import React from "react"

const PageLoader = ({ percent }) => {
  return (
    <div id="overlay">
      <div id="progstat">{percent}% </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div class="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default PageLoader
