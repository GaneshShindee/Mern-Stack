import "./App.css"; // Ensure the file exists, or remove this line if not needed
// import Product from "./components/Product"; // Correct import
import MessageBox from "./components/Activity/messageBox";
import ProductTab from "./components/ProductTab";

function App() {
  return (
    <>
      <MessageBox username="ganesh" textColor="yellow"/>
      <MessageBox username="Ganesh" textColor="Blue"/>
      <ProductTab/>
    </>
  );
}

export default App;
