import { useReducer } from 'react'
import { useState } from 'react'

function App() {
  const [headings, setHeadings] = useState(["Expenses", "Amount", "Balance"])

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
    </table>
  </div>
)

}
export default App;
