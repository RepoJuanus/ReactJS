import { Button } from "../Button/Button";

const Card = ({data}) => {
  console.log(data)
  return (
    <div className="card">
      <img src={data.pic} alt={data.title}/>
      <div className="card-body ">
        <p className='card-title '>{data.title}</p>
        <p className='card-text'>{data.description}</p>
      </div>
        <Button text="Comprar" cb={()=> console.log("cb")} color="cyan"/>
    </div>
  )
};

/* 
const Card = ({ title, description, img }) => {
    return (
      <div className="card">
        <img src={img} alt={title}/>
        <div className="card-body ">
          <p className='card-title '>{title}</p>
          <p className='card-text'>{description}</p>
        </div>
          <Button text="Comprar" cb={()=> console.log("cb")} color="cyan"/>
      </div>
    )
}; */

export default Card