import Featured from "./comonents/Featured";
import Offer from "./comonents/Offer";
import Slider from "./comonents/Slider";

export const metadata = {
  title: "Home Page",
  description: "Welcome to our Pizza Delivery App",
  authors: [
    { name: "mitali" }, 
    { name: "Co-Author" },
  ],
  keywords: ["pizza", "delivery", "food", "order", "online"],
};


const Home =() =>{
return(
  <>
  <Slider />
  <Featured />
  <Offer />
  </>
)
}
export default Home;