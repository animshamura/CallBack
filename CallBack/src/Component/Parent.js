import React, {useState}from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'
function Parent() {
    const [age,setAge] = useState(25)
    const [salary, setSalary] = useState(40000)

    const incrementAge = () => {
        setAge(age+1)
    }
    const incrementSalary = () => {
        setSalary(salary+1000)
    }
  return (
    <div>
   <Title/> 
   <Count text = "Age"  count = {age}/>
   <Button handleClick={incrementAge}>Increment Age</Button>
   <Count text = "Salary" count = {salary}/>
   <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}


export default Parent
