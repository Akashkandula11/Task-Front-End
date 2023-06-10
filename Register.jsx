import React,{useState} from 'react'

export const Register = (props) => {
    const [email, setEmail]=useState('');
    const [pass, setPass]=useState('');
    const [name,setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    return(
        <>
             <form onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input value={name} name='name' id="name" placeholder="full name "/>
                <label htmlFor="email">email</label>
                <input value={name} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail"/>
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="********"/>
                <button type="submit"> Login </button> 
            </form>
            <button onClick={() => props.onFormSwitch('login')}>Already have  an account? Login Here</button>
        </>
    )
    }
}


       