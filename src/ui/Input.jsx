import styled from "styled-components";

const Input = styled.input`
border: 1px solid black;
border-radius: 5px;
padding: 10px 20px;
`
export default Input;

// import styled from "styled-components"
// import GlobalStyles from "./styles/GlobalStyles"
// import Button from "./ui/Button"
// import Input from "./ui/Input"
// import Heading from "./ui/Heading"
// import Row from "./ui/Row"




// const SyledApp = styled.div`
//   padding: 20px;

// `
// const App = () => {
//     return (
//         <>
//             <GlobalStyles />
//             <SyledApp>
//                 <Row>
//                     <Row type="horizontal">
//                         <Heading as='h1'>Dubia Premier Hotel</Heading>
//                         <div>
//                             <Heading as='h2'>Check in and out</Heading>
//                             <Button onClick={() => alert("Check in")}>Check in</Button>
//                             <Button variation="secondary" size="samll" onClick={() => alert("Check out")}>Check out</Button>
//                         </div>
//                     </Row>

//                     <Row>
//                         <Heading as='h3'>Form</Heading>
//                         <form action="">
//                             <Input type="number" placeholder="Number of guests" />
//                             <Input type="number" placeholder="Number of guests" />
//                         </form>
//                     </Row>
//                 </Row>
//             </SyledApp>
//         </>
//     )
// }

// export default App