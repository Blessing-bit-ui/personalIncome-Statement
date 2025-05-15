import { useReducer } from 'react'
import { useState } from 'react'
const initialState = {
  expenses: [
    { category: "Transport", amount: 0 },
    { category: "Food", amount: 0 }
  ],
  balance: 0,
  income: 0
};

interface Action{
  type : "increment"," decrement", || "updateExpenses"
}
function reducer(state, action){
  switch(action.type){
      case"updateExpenses":
      return{
        ...state,
        [action.payload]
      }
      default: return state;
      switch(action.type){
        case"increment"
        return{
          ...state,
          [action.field]:Number(action.value),
        };
        default: return state;
      }
      
  }
}

function App() {
  const [headings, setHeadings] = useState(["Expenses", "Amount", "Balance", "Income"])

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
