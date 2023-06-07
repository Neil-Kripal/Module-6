/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'
import MyNewComponent from './MyNewComponent'
import PropsDisplayer from './PropsDisplayer'
import Greeting from './Exercise1/Exercise1'
import ComplexComment from './Classwork/ComplexComment'
import { ProductList } from './Classwork/ProductList'
import Welcome from './Classwork/Welcome'
import React from 'react'
import BigCats from './Exercise2/BigCats'
import Emoji from './Exercise3/Emoji'
import BigCats1 from './Exercise4/BigCats1'
import AddCatForm from './Exercise5/AddCatForm'
import NewCats from './Exercise5/NewCats'



function MySecondComponent() {
  return (
    <>
    <h2>My Second component developed by me</h2>
    <p>My new paragraph</p>
    </>
  )
}

function ExampleComponent() {
  return (
    <div className="ExampleComponent componentBox">
      <h2>My Example Component</h2>
      <p>My First React Component</p>
    </div>
  )
}

const comment = {
  date: new Date(),
  text: 'I hope you are enjoying learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  }
}

function App() {
  //const [count, setCount] = useState(0)
  const spiderman = {name: 'Spiderman', alterEgo: 'Peter Parker', catchPhrase: 'With great power comes great responsibility'};
  const spideyJSX =(<div>
    <h3>{spiderman.name}</h3>
    <blockquote>{spiderman.catchPhrase}</blockquote><cite>{spiderman.alterEgo}</cite>
  </div>);

return (
  <>
  <h2>Exercise 1</h2>
  <Greeting name='Neil'>
      <span>Welcome to My Website!</span>
    </Greeting>
  <div>
    <h2>Exercise 2</h2>
    <BigCats/>
    </div>
    <h2>Exercise 3</h2>
    <Emoji/>
    <h2>Exercise 4</h2>
    <BigCats1></BigCats1>
    <h2>Exercise 5</h2>
    <NewCats></NewCats>
    {/*
    {spideyJSX}
    <MyNewComponent />
    <MySecondComponent />
    <PropsDisplayer />
    <ExampleComponent />
    
    <ComplexComment author={comment.author} date={comment.date} text={comment.text} />
    <ProductList></ProductList>
    <Welcome></Welcome>
*/}
  </>
);

}
export default App;
