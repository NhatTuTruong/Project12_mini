

const Widget2 = ({content,title} : {content:any, title:string}) => {
  return (
    <div>
        <h2 className="mb-4 text-sm font-semibold text-white uppercase">{title}</h2>
        <div className="tagcloud">
            {
                content && content.map((item: string,index: number) => (
                    <a key={index}  className="text-gray-a8a8a8" href="#">{item}</a>
                ))
            }
        </div>
    </div>
  )
}

export default Widget2