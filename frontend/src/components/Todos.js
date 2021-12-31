import Todo from './Todo';
import { Card } from 'react-bootstrap';

const Todos = ({ todos, removeTodo, markTodo }) => {
  return (
    <div>
          {todos.map(todo => (
            <Card key={todo.id}>
              <Card.Body>
                <Todo                
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                />
              </Card.Body>
            </Card>
          ))}
          <br></br>
          <ol>
            <li>MongoDB Connected with atlas cluster</li>
            <li>REST API End Points
              <ul>
                <li>GET <a href='/api/v1/task/random'>/api/v1/task/random</a></li>
                <li>GET <a href='/api/v1/task/list/get'>api/v1/task/list/get</a> </li>
                <li>GET <a href='/api/v1/task/list/get/:tid'>api/v1/task/list/get/:tid</a></li>
                <li>POST <a href='/api/v1/task/list/post'>api/v1/task/list/post</a></li>
                <li>DELETE <a href='/api/v1/task/list/delete/:tid'>api/v1/task/list/delete/:tid</a></li>
                <li>GET <a href='/api/v1/task/list'>api/v1/task/list</a></li>
                <li>GET <a href='/emojis'>/emojis</a></li>
                <li>GET <a href='/api'>/api</a></li>
              </ul>
            </li>
          </ol>
        </div>
  )
}

export default Todos
