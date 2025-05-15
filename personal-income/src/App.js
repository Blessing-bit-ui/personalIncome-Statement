import { useReducer } from 'react'
import { useState } from 'react'

function App() {
  const [headings, setHeadings] = useState(["Expenses", "Amount", "Balance"])
   const [data, setData] = useState([{Expenses:"Transportation",Amount:"hhhh", Balance:"gggg"}])
return(
  <div>
    <table>
      <thead>
        <tr>
          {headings.map((heading, index)=>(
            <th key={index}>{heading}</th>
          ))}
          </tr>
          </thead>
          <tbody>
            {data.map((expense, index)=>(
              <tr key={index}>
                <td>{expense.Expenses}</td>
                <td>{expense.Amount}</td>
                <td> {expense.Balance}</td>
                <></>
              </tr>
            ))}
          </tbody>
    </table>
  </div>
)

}
export default App;
