import { write } from "fs"
import { useEffect, useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")
  const [isMask, setIsMask] = useState(true)

  const maskedData = data.replace(/./g, "*")

  const getConnectSid = () => {
    chrome.cookies
      .get({ url: "https://scrapbox.io", name: "connect.sid" })
      .then((data) => {
        setData(data.value)
      })
  }

  useEffect(() => {
    getConnectSid()
  }, [])

  return (
    <div
      style={{
        padding: "8px"
      }}>
      <h1
        style={{
          fontSize: "18px"
        }}>
        Trick or Treat
      </h1>
      <div>
        <p>Scrapbox.ioのconnect.sidを表示します</p>
        <p
          style={{
            fontSize: "14px",
            width: "240px",
            overflowWrap: "anywhere",
            fontFamily: "monospace"
          }}>
          {isMask ? maskedData : data}
        </p>
      </div>
      <button
        style={{
          background: isMask ? "#0078d4" : "#b50000",
          color: "#fff",
          fontWeight: "bold",
          borderRadius: "30px",
          fontSize: "12px",
          outline: "none",
          padding: "8px 16px",
          border: "none",
          width: "100%"
        }}
        onClick={() => {
          setIsMask((prev) => !prev)
        }}>
        {isMask ? "マスク解除" : "マスクする"}
      </button>
      <div
        style={{
          marginTop: "8px",
          textAlign: "center",
        }}>
        <small
          style={{
            fontSize: "10px",
            width: "100%",
          }}>
            Contributors: 
          <a href="https://x.com/gachal29">@Gachal29</a>/
          <a href="https://x.com/_n13u_">@_n13u_</a>
        </small>
      </div>
    </div>
  )
}

export default IndexPopup
