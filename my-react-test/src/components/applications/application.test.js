const { render,screen } = require("@testing-library/react")
import Application from "./applications"
describe("Aplications",()=>{
    test("render correctly",()=>{
        render(<Application/>)

        // Identify the heading
        const heading=screen.getByRole('heading',{
            level:1
        })
        expect(heading).toBeInTheDocument();

        const paragraphEle=screen.getByText('All the fields are mandatory');
        expect(paragraphEle).toBeInTheDocument()
        // Identify the section heading

        const SectionHeader =screen.getByRole('heading',{
            level:2
         })
        expect(SectionHeader).toBeInTheDocument()
        // to check the form contain the input box
        const inputEle=screen.getByRole('textbox',{
            name:"Name",
        });

        const inputEleOne=screen.getByLabelText('Name');
        expect(inputEleOne).toBeInTheDocument();

        const inputElementwo=screen.getByPlaceholderText('fullName');
        expect(inputElementwo).toBeInTheDocument();

        const inputElementThree=screen.getByDisplayValue('deekshitha');
        expect(inputElementThree).toBeInTheDocument()

        expect(inputEle).toBeInTheDocument()

        const customElement=screen.getByTestId('custom-element');
        expect(customElement).toBeInTheDocument()
        const titleEle=screen.getByTitle('close');
        expect(titleEle).toBeInTheDocument()
        const bioElement=screen.getByRole('textbox',{
            name:'Bio'
        })

        expect(bioElement).toBeInTheDocument()
        // to check the select drop down in the form
        const SelectBox=screen.getByRole('combobox');
        expect(SelectBox).toBeInTheDocument();

        // to check the checkbox
        const checkbox=screen.getByRole('checkbox');
        expect(checkbox).toBeInTheDocument();

        const checkboxOne=screen.getByLabelText('Name',{selector:"input"})
        expect(checkboxOne).toBeInTheDocument()
        // to check the submit button is present in the form
        const button=screen.getByRole('button');
        expect(button).toBeInTheDocument();
    })
})