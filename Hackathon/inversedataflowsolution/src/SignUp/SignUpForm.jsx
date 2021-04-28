import React, {useState} from 'react';

const titleOptions = [
    {value: `Ms`, display: `Ms`},
    {value: `Miss`, display: `Miss`},
    {value: `Mrs`, display: `Mrs`},
    {value: `Mr`, display: `Mr`},
    {value: `Dr`, display: `Dr`},
];

const SignUpForm = () => {

    // Form data needs to be held in state so that it can be 
    // updated and validated each time it changes
    const [title, setTitle] = useState({value: ``, valid: false});
    const [firstName, setFirstName] = useState({value: ``, valid: false, touched: false});
    const [lastName, setLastName] = useState({value: ``, valid: false, touched: false});
    const [email, setEmail] = useState({value: ``, valid: false, touched: false});
    const [phoneNumber, setPhoneNumber] = useState({value: ``, valid: true, touched: false});
    const [dob, setDob] = useState(``);
    const [gender, setGender] = useState(``);

    // The following functions are validation functions, they
    // need to be declared before they are used in the handler
    // function handleChange below
    const validateString = (name, input) => {
        const result = /^([A-Za-z'-]{2,})$/.test(input);
        switch (name) {
            case `firstName`:
                result ? setFirstName({value: input, valid: true, touched: true}) : setFirstName({
                    value: input,
                    valid: false,
                    touched: true
                });
                break;
            case `lastName`:
                result ? setLastName({value: input, valid: true, touched: true}) : setLastName({
                    value: input,
                    valid: false,
                    touched: true
                });
                break;
            default:
                break;
        }
    }

    const validateEmail = input => {
        const result = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(input);
        result ? setEmail({value: input, valid: true, touched: true}) : setEmail({
            value: input,
            valid: false,
            touched: true
        });
    }

    const validatePhoneNumber = input => {
        let result;
        if (input) {
            result = /^((\(?0\d{4}\)?\s?\d{3}\s?\d{3})|(\(?0\d{3}\)?\s?\d{3}\s?\d{4})|(\(?0\d{2}\)?\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/.test(input);
            result ? setPhoneNumber({value: input, valid: true, touched: true}) : setPhoneNumber({
                value: input,
                valid: false,
                touched: true
            });
        } else {
            setPhoneNumber({value: input, valid: true, touched: true});
        }
    }

    // The following function looks at which field has raised
    // the change event and updates the value in state if it 
    // all of the validation that is require of it

    const handleChange = event => {
        switch (event.target.type) {
            case `text`:
                validateString(event.target.name, event.target.value);
                break;
            case `email`:
                validateEmail(event.target.value);
                break;
            case `tel`:
                validatePhoneNumber(event.target.value);
                break;
            default:
                break;
        }
        switch (event.target.name) {
            case `title`:
                setTitle({value: event.target.value, valid: true});
                break;
            case `dob`:
                const dobForSubmit = new Date(event.target.value).toISOString();
                setDob(dobForSubmit);
                break;
            case `gender`:
                setGender(event.target.value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        alert(`The following data has been submitted: \n
        Title: ${title.value} \n
        First Name: ${firstName.value} \n
        Last Name: ${lastName.value} \n
        Email: ${email.value} \n
        Phone Number: ${phoneNumber.value} \n
        Date Of Birth: ${dob} \n
        Gender: ${gender}`);
    }

    return (
        <div className="container">
            <form className="needs-validation" onSubmit={handleSubmit} noValidate>
                <div className="form-group row">
                    <label htmlFor="title" className="col-sm-2 col-form-label">
                        Title: *
                    </label>
                    <div className="col-sm-8">
                        <select
                            name="title"
                            className="form-control"
                            defaultValue="nochoice"
                            required
                            onChange={handleChange}
                        >
                            <option value="nochoice" disabled
                            >
                                -- Select an option --
                            </option>
                            {titleOptions.map(titleOption =>
                                <option
                                    key={titleOption.value}
                                    value={titleOption.value}
                                >
                                    {titleOption.display}
                                </option>)}
                        </select>
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="firstName"
                        className="col-sm-2 col-form-label"
                    >
                        First Name: *
                    </label>
                    <div className="col-sm-8">
                        <input
                            className={`form-control ${firstName.valid || !firstName.touched ? '' : 'errorInput'}`}
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={firstName.value}
                            onChange={handleChange}
                            required
                        />
                        <div className="errorInput error" hidden={firstName.valid || !firstName.touched}>
                            Please enter your first name (at least 2 characters)
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="lastName"
                        className="col-sm-2 col-form-label"
                    >
                        Last Name: *
                    </label>
                    <div className="col-sm-8">
                        <input
                            className={`form-control ${lastName.valid || !lastName.touched ? '' : 'errorInput'}`}
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={lastName.value}
                            onChange={handleChange}
                            required
                        />
                        <div className="errorInput error" hidden={lastName.valid || !lastName.touched}>
                            Please enter your last name (at least 2 characters)
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="email"
                        className="col-sm-2 col-form-label"
                    >
                        Email: *
                    </label>
                    <div className="col-sm-8">
                        <input
                            className={`form-control ${email.valid || !email.touched ? '' : 'errorInput'}`}
                            type="email"
                            name="email"
                            placeholder="yourname@yourdomain.com"
                            value={email.value}
                            onChange={handleChange}
                            required
                        />
                        <div className="errorInput error" hidden={email.valid || !email.touched}>
                            Please enter a valid email address
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="phone"
                        className="col-sm-2 col-form-label"
                    >
                        Phone:
                    </label>
                    <div className="col-sm-8">
                        <input
                            className={`form-control ${phoneNumber.valid || !phoneNumber.touched ? '' : 'errorInput'}`}
                            type="tel"
                            name="phoneNumber"
                            placeholder="0123 456 7890"
                            value={phoneNumber.value}
                            onChange={handleChange}
                        />
                        <div className="errorInput error" hidden={phoneNumber.valid || !phoneNumber.touched}>
                            You phone number must have 11 digits
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="dob"
                        className="col-sm-2 col-form-label"
                    >
                        Date of Birth:
                    </label>
                    <div className="col-sm-8">
                        <input
                            className="form-control" type="date"
                            name="dob"
                            value={dob.value}
                            placeholder="DD/MM/YYYY"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label
                        htmlFor="gender"
                        className="col-sm-2 col-form-label"
                    >
                        Gender:
                    </label>
                    <div className="col-sm-8">
                        <div className="form-check">
                            <input
                                id="femaleRadio"
                                type="radio"
                                name="gender" className="form-check-input"
                                value="female" checked={gender === "female"}
                                onChange={handleChange}
                            />
                            <label htmlFor="femaleRadio" className="form-check-label">
                                Female
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                id="maleRadio"
                                type="radio"
                                name="gender" className="form-check-input"
                                value="male"
                                checked={gender === "male"}
                                onChange={handleChange}
                            />
                            <label htmlFor="maleRadio" className="form-check-label">
                                Male
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="submit" className="col-sm-2"></label>
                    <div className="col-sm-8">
                        <button
                            type="submit"
                            className="btn btn-primary mb-2"
                            disabled={!title.valid || !firstName.valid || !lastName.valid || !email.valid}
                        >
                            Sign Me Up!
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm;
