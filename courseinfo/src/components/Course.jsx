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
  const total = props.parts.reduce((s,part) => s + part.exercises, 0);
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