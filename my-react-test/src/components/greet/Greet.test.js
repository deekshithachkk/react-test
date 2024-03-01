import { Greet } from "./Greet"
import { render,screen } from "@testing-library/react"

describe('Greet',()=>{
    
    test("greet render correctly",()=>{
        render(<Greet />)
        const text=screen.getByText(/hello/);
        expect(text).toBeInTheDocument;
    })
    
   
})