import { useEffect, useState } from "react"
import parse from 'html-react-parser'

const Widget1 = ({content} : {content:any}) => {
    const [html, setHtml] = useState<string>("")

    useEffect(() => {
      setHtml(content.content)
    }, [html])
  return (
    <>
        <div>
            <h2 className="mb-4 text-sm font-semibold text-white uppercase">{content.title}</h2>
            {parse(html)}
        </div>
    </>
  )
}

export default Widget1