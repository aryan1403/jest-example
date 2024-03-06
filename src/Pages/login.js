import { useState } from "react"

export default function Login() {
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    return <>
        <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" value={pass} onChange={(e) => setpass(e.target.value)} className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" onClick={() => alert(email + pass)} className="btn btn-primary">Submit</button>
        </form>
    </>
}