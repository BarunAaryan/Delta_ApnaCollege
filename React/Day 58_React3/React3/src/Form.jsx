function handleFormSubmit(event){
    event.preventDefault();
    console.log("Form was submitted");
}

export default function Form() {
    return (<form onSubmit={handleFormSubmit}>
        <input placeholer="write something" />
        <button>Submit</button>
    </form>)
}