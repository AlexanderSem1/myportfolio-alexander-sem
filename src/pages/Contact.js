
import React, { useState } from 'react';

export default function Contact() {
    //eslint-disable-next-line
    const [name, setName] = useState(true);
    const [firstnameerror, setFirstnameerror] = useState(true);
    const [surnameerror, setSurnameerror] = useState(true);
    const [emailerror, setEmailerror] = useState(true);
    const [phonenumbererror, setPhonenumbererror] = useState(true);


    const handleChange = (input) => {
        let name = input.target.name;
        let value = input.target.value;
        let emailPatter = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/;
        let phonePattern = /^[0-9]{8}$/;

        switch (name) {
            case 'firstname':
                value !== '' ? setFirstnameerror(false) : setFirstnameerror(true)
                break;
            case 'surname':
                value !== '' ? setSurnameerror(false) : setSurnameerror(true)
                break;
            case 'email':
                emailPatter.test(value) ? setEmailerror(false) : setEmailerror(true)
                break;
            case 'phonenumber':
                phonePattern.test(value) ? setPhonenumbererror(false) : setPhonenumbererror(true)
                break;
            default:
                break;
        }
        setName(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Thank you for contacting us, we will get back to you shortly!")
    }

    return (
        <div className="[ container ]">
            <div className="[ row ] [ myCard ]">
                <div className="[ col-sm-8 offset-sm-2 ] [ myCard__contactbox ]">
                    <h5 className="[ myCard__contactbox ]">Contact Form</h5>
                    <p className="[ myCard__contactbox--text ]">Please fill the form below to recieve my CV or if you have any questions about my portfolio.</p>
                <form onSubmit={handleSubmit} className="[ myCard__contactbox ]">
                    <p className="[ myCard__contactbox ]">Enter your firstname</p>
                    <input type="text"
                        name='firstname'
                        onChange={handleChange}
                        className="[ form-control ]"
                    />
                    <p className={(firstnameerror) ? 'error' : 'error__hide'}>Please enter valid firstname.</p>
                    <br />
                    <p className="[ myCard__contactbox ]">Enter your lastname</p>
                    <input type="text"
                        name='surname'
                        onChange={handleChange}
                        className="[ form-control ]"
                    />
                    <p className={(surnameerror) ? 'error' : 'error__hide'}>Please enter valid lastname.</p>
                    <br />
                    <p className="[ myCard__contactbox ]">Enter your email</p>
                    <input type="text"
                        name='email'
                        onChange={handleChange}
                        className="[ form-control ]"
                    />
                    <p className={(emailerror) ? 'error' : 'error__hide'}>Please enter valid email address.</p>
                    <br />
                    <p className="[ myCard__contactbox ]">Phone number</p>
                    <input type="number"
                        name='phonenumber'
                        onChange={handleChange}
                        className="[ form-control ]"
                    />
                    <p className={(phonenumbererror) ? 'error' : 'error__hide'}>Please enter valid number.</p>
                        <br />
                        <p className="[ myCard__contactbox ]">Message (Optional)</p>
                        <textarea type="text"
                            name="message"
                            className="[ form-control ]"
                            rows="5"
                        />
                        <br />
                    <input type="submit" disabled={firstnameerror || surnameerror || emailerror || phonenumbererror} className="[ btn ] [ myCard__contactbox--button ]" />
                </form>
            </div>
            </div>
        </div>
    )
}



