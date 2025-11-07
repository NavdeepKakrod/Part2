const Header = (props) => <h1>{props.name}</h1>

const Content = (props) => (
  
  <div>
     
    {props.parts.map(part =>  
      <Part key = {part.id} part={part}/> 
      )
    } 
     
  </div>
)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)


const TotalExer = (props) => {
  let total = 0 ; 
  props.parts.forEach(part => {total+=part.exercises});
  return(<p>
    Total of {total} Exercises
  </p>)
}


const Course = (props) => (
  <>
    <Header name = {props.course.name}/>
    <Content parts = {props.course.parts}/>
    <TotalExer parts = {props.course.parts}/>
  </>
  
)
export default Course;