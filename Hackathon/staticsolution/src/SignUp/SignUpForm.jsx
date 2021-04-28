import React from 'react';

const titleOptions = [
    {value: `Ms`, display: `Ms`},
    {value: `Miss`, display: `Miss`},
    {value: `Mrs`, display: `Mrs`},
    {value: `Mr`, display: `Mr`},
    {value: `Dr`, display: `Dr`},
];

const SignUpForm = () => {
    return (
        <div className="container">
            <form className="needs-validation" noValidate>
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
                        >
                            <option value="nochoice" disabled
                            >
                                -- Select an option --
                            </option>
                            {titleOptions.map(title =>
                                <option
                                    key="title.value"
                                    value={title.value}
                                >
                                    {title.display}
                                </option>)}
                        </select>
                        <div className="invalid-feedback">
                            Please choose an option from the list
                        </div>
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
                            className="form-control" type="text"
                            name="firstName"
                            placeholder="First Name"
                            required
                        />
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
                            className="form-control" type="text"
                            name="lastName"
                            placeholder="Last Name"
                            required
                        />
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
                            className="form-control" type="email"
                            name="email"
                            placeholder="yourname@yourdomain.com"
                            required
                        />
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
                            className="form-control" type="tel"
                            name="phone"
                            placeholder="0123 456 7890"
                        />
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
                            placeholder="DD/MM/YYYY"
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
                                value="female"
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
                        <button type="submit" className="btn btn-primary mb-2">Sign Me Up!</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm;
