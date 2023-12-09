

const Button = ({className,icon,value} : {className:string, icon?:any, value:string}) => {
  return (
    <button type='submit' className={`${className} flex items-center justify-between`}>{icon}<span>{value}</span></button>
  )
}

export default Button