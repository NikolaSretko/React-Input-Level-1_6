import { useState } from "react";


const From = () => {
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [age,setAge] = useState(null);
console.log(firstname);
console.log(lastname);
console.log(age);

    return ( 
        <>
        <h2>Form:</h2>
        <form className="form">
            <input 
            type="text" 
            placeholder="Vorname"
            onChange={(e)=>setFirstname(e.target.value)}
            value={firstname}
            />
            <input 
            type="text" 
            placeholder="Nachname"
            onChange={(e)=>setLastname(e.target.value)}
            value={lastname}
            />
            <input 
            type="number" 
            placeholder="Ater"
            onChange={(e)=>setAge(e.target.value)}
            value={age}
            />
        <div>
            <p>{firstname}</p>
            <p>{lastname}</p>
            <p>{age}</p>
        </div>
        </form>
        </>
     );
}
 
export default From;