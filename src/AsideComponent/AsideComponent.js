import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dellister } from '../redux/reducer/list.slice'

export const AsideComponent = () => {
  let list = useSelector(state => state.list.value)
let [dellist, setDellist] = useState(list)
  let dispach = useDispatch()
  

  const del = (e) => {
    
    console.log(dellist)
    // setDellist(...dellist,list.filter(item => item.id !== e))
    // dispach(dellister(dellist))
  }
  return (
    <div className='asideDiv'>

      <table>
        <tbody>
          {list?.map((item, index) => <tr key={index}>
            <td><img className='asideImg' src={item.img} alt='sdc' /></td>
            <td><p>{item.name}</p></td>
            <td><p>- {item.price} Azn</p></td>
            <td><button onClick={() => del(item.id)} className='delBtn'>x</button></td>
          </tr>)}
        </tbody>
      </table>


    </div>
  )
}
