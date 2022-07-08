import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PageLoader from "../components/PageLoader"
import { useState, useEffect } from "react"
import loadable from "@loadable/component"

const AnimationCanvas = loadable(
  () => import("../components/Threejs/AnimationCanvas"),
  {
    fallback: (
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    ),
  }
)

const IndexPage = () => {
  const [percent, setPercent] = useState(0)
  const [isLoading, setIsLoding] = useState(true)
  useEffect(() => {
    const interval = setInterval(() => {
      setPercent(prev => {
        const newPercent = prev + 1

        if (newPercent === 100) {
          clearInterval(interval)
          setIsLoding(false)
        }
        return newPercent
      })
    }, 100)
  }, [])

  useEffect(() => {
    if (isLoading === true) {
      document.querySelector("body").classList.add("no-scroll")
    } else {
      document.querySelector("body").classList.remove("no-scroll")
    }
  }, [isLoading])

  return (
    <Layout>
      <Seo title=" " />
      {isLoading && <PageLoader percent={percent} />}
      <div className="animField">
        <AnimationCanvas />
      </div>
    </Layout>
  )
}

export default IndexPage
