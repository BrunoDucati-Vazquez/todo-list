import Text from "./components/text";

export default function App() {
 
  return (
    <div className="flex flex-col gap- 2">
      <Text as="p" variant="body-sm-bold" className="text-pink-dark">Hello world!</Text>
      <Text as="p" className="text-green-dark">Hello world!</Text>
      <Text as="p" variant="body-md-bold">Hello world!</Text>
    </div>
    
  )
}

App;