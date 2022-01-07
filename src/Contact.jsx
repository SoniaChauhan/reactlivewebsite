import React, { useState } from "react";

const Contact = () =>{
    const[details, setDetails]=useState({
        fname:'',
        phone:'',
        email:'',
        msg:''
    })

    const [udetails,setuDetails] = useState([]);

    const InputEvent = (event) =>{
        const {name, value} = event.target;
        setDetails((preVal)=>{
            return {
                ...preVal, [name]:value
            }
        })
    }

    const onSubmits = (event) =>{
        event.preventDefault();
        setuDetails(details);
        setDetails({
            fname:'',
            phone:'',
            email:'',
            msg:''
        });
    }

    return(
        <>
            <div className="my-5">
                <h1 className="text-center">Contact us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={onSubmits}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1"
                                name="fname" value={details.fname} onChange={InputEvent}
                                placeholder="Enter Your Name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput2" className="form-label">Phone</label>
                                <input type="number" className="form-control" id="exampleFormControlInput2"
                                name="phone" value={details.phone} onChange={InputEvent}
                                placeholder="Mobile Number" />
                            </div>
                            <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput3" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput3"
                                    name="email" value={details.email} onChange={InputEvent}
                                    placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea4" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea4" rows="3"
                                name="msg" value={details.msg} onChange={InputEvent}></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                        <p>{udetails.fname}</p>
                        <p>{udetails.phone}</p>
                        <p>{udetails.email}</p>
                        <p>{udetails.msg}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;