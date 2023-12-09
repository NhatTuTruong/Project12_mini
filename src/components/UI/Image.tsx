
import defaultData from '../../data/default'
const Image = ({style,src} : {style:string, src:string}) => {

  const placeholderImage = defaultData.img_product

  const onImageError = (e:any) => {
    e.target.src = placeholderImage
  }
  return (
    <img className={` ${style}`} src={src} alt={src} onError={onImageError}/>
  )
}

export default Image