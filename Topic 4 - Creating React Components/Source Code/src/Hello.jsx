function Hello(){
    let fullName = () =>{
        return "Mr John"
    }
    var age = 19
    return <div>
        <h3>Hello this is the future speaking.</h3>
        <p>I am your master <b>{fullName()}</b> {age} years old</p>
    </div>
}

export default Hello;


