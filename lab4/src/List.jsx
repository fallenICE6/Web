import { data } from "./data";
import { Link } from "react-router-dom";
export function List() {
  return (
    <div className='title'>
      <h1>Новости</h1>
    <div className='box'>
      {data.map((item) => (
        <div className='elem' key={item.id}>
          <img className='img' src={item.img} alt="item.id" />
          <div className='news'>
            
            <Link to={`/${item.id}`}>{item.title}</Link>
            <p>{item.shortDesc}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}