

import { useState } from 'react'
import { useDispatch} from 'react-redux'
import { pizzas } from '../data'

import { addlist } from '../redux/reducer/list.slice'

const Pizza = () => {
  const [search, setSearch] = useState([...pizzas])

  const dispach = useDispatch()

  
 

  const searchFun = (e) => {
    setSearch(pizzas.filter(pizza => pizza.name.includes(e)))
  }

  return (
    <div className='pizzaDiv'>
      <input  onChange={(e) => searchFun(e.target.value)} className='searchİnput' placeholder='Search...' />
      {
        search?.map(pizza => <div className='pizzaDiv2' key={pizza.id}>
          <img className='pizzaİMG'alt='dc' src={pizza.img} />
          <p>{pizza.name}</p>
          <p>{pizza.dsc}</p>
          <p> Price: {pizza.price} AZN</p><a href='##' onClick={() => dispach(addlist(pizza))}   className='btn'>+add</a>
        </div>)
      }

    </div>
  )
}

export default Pizza