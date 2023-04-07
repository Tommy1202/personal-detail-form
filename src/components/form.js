import React, { useState } from 'react'
import "../components/form.css"


const Form = () => {
  const [error, setError] = useState(false);
  const [gender, setGender] = useState({ gender: "" });
  const [user, setUser] = useState({
    name: "",
    email: "",
    num: "",
    dob: "",
    add: "",
    add2: "",
    add3: "",
    add4: "",
    sel: "",
    city: "",
    region: " ",
    pcode: "",
    sel1: "",
    city1: "",
    region1: " ",
    pcode1: "",
    iname: "",
    class: "",
    pynum: "",
    course: "",
    sub: "",
    percent: "",
    iname1: "",
    class1: "",
    pynum1: "",
    course1: "",
    sub1: "",
    percent1: "",
    skills: "",
    achievement: "",
    check: ""
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      user.name === '') {
      setError(true);
    }
    else if (
      user.email === ''
    ) { setError(true) }
    else if (
      user.num === '') {
      setError(true);
    }
    else if (
      user.gender === '') {
      setError(true);
    }
    else if (
      user.dob === '') {
      setError(true);
    }
    else if (
      user.iname === '') {
      setError(true);
    }
    else if (
      user.class === '') {
      setError(true);
    }
    else if (
      user.pynum === '') {
      setError(true);
    }
    else if (
      user.course === '') {
      setError(true);
    }
    else if (
      user.sub === '') {
      setError(true);
    }
    else if (
      user.percent === '') {
      setError(true);
    }
    else if (
      user.iname1 === '') {
      setError(true);
    }
    else if (
      user.class1 === '') {
      setError(true);
    }
    else if (
      user.pynum1 === '') {
      setError(true);
    }
    else if (
      user.course1 === '') {
      setError(true);
    }
    else if (
      user.sub1 === '') {
      setError(true);
    }
    else if (
      user.percent1 === '') {
      setError(true);
    }
    else if (
      user.skills === '') {
      setError(true);
    }
    else if (
      user.achievement === '') {
      setError(true);
    }
    else if (
      user.region === '') {
      setError(true);
    }
    else (
      alert("your form has been submitted")
    )
  }
  return (
    <>
      <section className="container">
        <header>Registration Form</header>
        <h1>Personal Details:</h1>
        <form action="post" className="form" onSubmit={onSubmit}>
          <div className="input-box">
            <label>Full Name</label>
            <input
              type="text"
              name='name'
              value={user.name}
              onChange={handleInputs}
              placeholder="Enter full name" />
            {error && user.name === '' ? (
              <label style={{ color: '#FF0033' }}>
                *name should not be empty
              </label>
            ) : (
              ''
            )}
          </div>
          <div className="input-box">
            <label >Email Address</label>
            <input type="text"
              name='email'
              value={user.email}
              onChange={handleInputs}
              placeholder="Enter email address" />
            {error && user.email === '' ? (
              <label style={{ color: '#FF0033' }}>
                *Please enter your email
              </label>
            ) : (
              ''
            )}
          </div>
          <div className="column">
            <div className="input-box">
              <label>Phone Number</label>
              <input
                type="number"
                name='num'
                value={user.num}
                onChange={handleInputs}
                placeholder="Enter phone number" />
              {error && user.num === '' ? (
                <label style={{ color: '#FF0033' }}>
                  *phone number should not be empty
                </label>
              ) : (
                ''
              )}
            </div>
            <div className="input-box">
              <label >Birth Date</label>
              <input
                type="date"
                name='dob'
                value={user.dob}
                onChange={handleInputs}
                placeholder="Enter birth date" />
              {error && user.dob === '' ? (
                <label style={{ color: '#FF0033' }}>
                  *dob should not be empty
                </label>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="gender-box">
            <label >Gender</label>
            <div className="gender-option">
              <div className="gender">
                <input
                  type="radio"
                  id="check-male"
                  name="gender"
                  value={user.gender}
                  onClick={() => setGender('Male')} />
                <label for="check-male">Male</label>
              </div>
              <div className="gender">
                <input
                  type="radio"
                  id="check-female"
                  name="gender"
                  onClick={() => setGender('Female')} />
                <label for="check-female">Female</label>
              </div>
              <div className="gender">
                <input
                  type="radio"
                  id="check-other"
                  name="gender"
                  onClick={() => setGender('Others')} />
                <label for="check-other">Others</label>
              </div>
            </div>
          </div>
          <div className="input-box address">
            <label >Address</label>
            <input
              type="text"
              placeholder="Enter street address"
              name="add"
              value={user.add}
              onChange={handleInputs} />
            {error && user.add === '' ? (
              <label style={{ color: '#FF0033' }}>
                *should not be empty
              </label>
            ) : (
              ''
            )}
            <input
              type="text"
              placeholder="Enter street address line 2"
              name="add2"
              value={user.add2}
              onChange={handleInputs} />
            {error && user.add2 === '' ? (
              <label style={{ color: '#FF0033' }}>
                *should not be empty
              </label>
            ) : (
              ''
            )}
            <div className="column">
              <div className="select-box">
                <select
                  name='sel'
                  value={user.sel}
                  onChange={handleInputs} >
                  <option hidden>Country</option>
                  <option>America</option>
                  <option>Japan</option>
                  <option>India</option>
                  <option>Nepal</option>
                </select>
                {error && user.sel === '' ? (
                  <label style={{ color: '#FF0033' }}>
                    *should not be empty
                  </label>
                ) : (
                  ''
                )}
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter your city"
                name='city'
                value={user.city}
                onChange={handleInputs} />
              {error && user.city === '' ? (
                <label style={{ color: '#FF0033' }}>
                  *should not be empty
                </label>
              ) : (
                ''
              )}
            </div>
            <div className="column">
              <input
                type="text"
                placeholder="Enter your region"
                name='region'
                value={user.region}
                onChange={handleInputs} />
              {error && user.region === '' ? (
                <label style={{ color: '#FF0033' }}>
                  *should not be empty
                </label>
              ) : (
                ''
              )}
              <input
                type="number"
                placeholder="Enter postal code"
                name='pcode'
                value={user.pcode}
                onChange={handleInputs} />
              {error && user.pcode === '' ? (
                <label style={{ color: '#FF0033' }}>
                  *should not be empty
                </label>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="input-box address">
            <label >Alternate Address</label>
            <input
              type="text"
              placeholder="Enter street address"
              name="add3"
              value={user.add3}
              onChange={handleInputs} />
            {error && user.add3 === '' ? (
              <label style={{ color: '#FF0033' }}>
                *should not be empty
              </label>
            ) : (
              ''
            )}
            <input
              type="text"
              placeholder="Enter street address line 2"
              name="add4"
              value={user.add4}
              onChange={handleInputs} />
            {error && user.add4 === '' ? (
              <label style={{ color: '#FF0033' }}>
                *should not be empty
              </label>
            ) : (
              ''
            )}
            <div className="column">
              <div className="select-box">
                <select
                  name='sel1'
                  value={user.sel1}
                  onChange={handleInputs} >
                  <option hidden>Country</option>
                  <option>America</option>
                  <option>Japan</option>
                  <option>India</option>
                  <option>Nepal</option>
                </select>
                {error && user.sel1 === '' ? (
                  <label style={{ color: '#FF0033' }}>
                    *should not be empty
                  </label>
                ) : (
                  ''
                )}
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter your city"
                name='city1'
                value={user.city1}
                onChange={handleInputs} />
              {error && user.city1 === '' ? (
                <label style={{ color: '#FF0033' }}>
                  *should not be empty
                </label>
              ) : (
                ''
              )}
            </div>
            <div className="column">
              <input
                type="text"
                placeholder="Enter your region"
                name='region1'
                value={user.region1}
                onChange={handleInputs} />
              {error && user.region1 === '' ? (
                <label style={{ color: '#FF0033' }}>
                  *should not be empty
                </label>
              ) : (
                ''
              )}
              <input
                type="number"
                placeholder="Enter postal code"
                name='pcode1'
                value={user.pcode1}
                onChange={handleInputs} />
              {error && user.pcode1 === '' ? (
                <label style={{ color: '#FF0033' }}>
                  *should not be empty
                </label>
              ) : (
                ''
              )}
            </div>
          </div>
          <label htmlFor='input'>Education Details:</label>
          <div className="input-box">
            <label >Institution</label>
            <input
              type="text"
              name='iname'
              value={user.iname}
              onChange={handleInputs}
              placeholder="Institution name" />
            {error && user.iname === '' ? (
              <label style={{ color: '#FF0033' }}>
                *should not be empty
              </label>
            ) : (
              ''
            )}
          </div>
          <div className="column">
            <div className="input-box">
              <label>Class/Year</label>
              <input
                type="number"
                name='class'
                value={user.class}
                onChange={handleInputs}
                placeholder="Enter class/year" />
              {error && user.class === '' ? (
                <label style={{ color: '#FF0033' }}>
                  *should not be empty
                </label>
              ) : (
                ''
              )}
            </div>
            <div className="input-box">
              <label >Passing year</label>
              <input
                type="date"
                name='pynum'
                value={user.pynum}
                onChange={handleInputs}
                placeholder="Enter passing year" />
              {error && user.pynum === '' ? (
                <label style={{ color: '#FF0033' }}>
                  *should not be empty
                </label>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="input-box">
            <label >Course/Board</label>
            <input
              type="text"
              name='course'
              value={user.course}
              onChange={handleInputs}
              placeholder="Course/Board" />
            {error && user.course === '' ? (
              <label style={{ color: '#FF0033' }}>
                *should not be empty
              </label>
            ) : (
              ''
            )}
          </div>
          <div className="input-box">
            <label>Subject/Branch</label>
            <input
              type="text"
              name='sub'
              value={user.sub}
              onChange={handleInputs}
              placeholder="Course/Board" />
            {error && user.sub === '' ? (
              <label style={{ color: '#FF0033' }}>
                *should not be empty
              </label>
            ) : (
              ''
            )}
          </div>
          <div className="input-box">
            <label>Percentage/SGPA</label>
            <input
              type="text"
              name='percent'
              value={user.percent}
              onChange={handleInputs}
              placeholder="Percentage/SGPA" />
            {error && user.percent === '' ? (
              <label style={{ color: '#FF0033' }}>
                *should not be empty
              </label>
            ) : (
              ''
            )}
          </div>
          <div className="input-box">
            <label >Institution</label>
            <input
              type="text"
              name='iname1'
              value={user.iname1}
              onChange={handleInputs}
              placeholder="Institution name" />
            {error && user.iname1 === '' ? (
              <label style={{ color: '#FF0033' }}>
                *should not be empty
              </label>
            ) : (
              ''
            )}
          </div>
          <div className="column">
            <div className="input-box">
              <label >Class/Year</label>
              <input
                type="number"
                name='class1'
                value={user.class1}
                onChange={handleInputs}
                placeholder="Enter class/year" />
              {error && user.class1 === '' ? (
                <label style={{ color: '#FF0033' }}>
                  *should not be empty
                </label>
              ) : (
                ''
              )}
            </div>
            <div className="input-box">
              <label>Passing year</label>
              <input
                type="date"
                name='pynum1'
                value={user.pynum1}
                onChange={handleInputs}
                placeholder="Enter passing year" />
              {error && user.pynum1 === '' ? (
                <label style={{ color: '#FF0033' }}>
                  *should not be empty
                </label>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="input-box">
            <label>Course/Board</label>
            <input
              type="text"
              name='course1'
              value={user.course1}
              onChange={handleInputs}
              placeholder="Course/Board" />
            {error && user.course1 === '' ? (
              <label style={{ color: '#FF0033' }}>
                *should not be empty
              </label>
            ) : (
              ''
            )}
          </div>
          <div className="input-box">
            <label>Subject/Branch</label>
            <input
              type="text"
              name='sub1'
              value={user.sub1}
              onChange={handleInputs}
              placeholder="Course/Board" />
            {error && user.sub1 === '' ? (
              <label style={{ color: '#FF0033' }}>
                *should not be empty
              </label>
            ) : (
              ''
            )}
          </div>
          <div className="input-box">
            <label>Percentage/SGPA</label>
            <input
              type="text"
              name='percent1'
              value={user.percent1}
              onChange={handleInputs}
              placeholder="Percentage/SGPA" />
            {error && user.percent1 === '' ? (
              <label style={{ color: '#FF0033' }}>
                *should not be empty
              </label>
            ) : (
              ''
            )}
          </div>
          <div className='input-box'>
            <label >Skills</label>
            <input
              type="text"
              placeholder="Enter your skills here"
              name='skills'
              value={user.skills}
              onChange={handleInputs} />
            {error && user.skills === '' ? (
              <label style={{ color: '#FF0033' }}>
                *should not be empty
              </label>
            ) : (
              ''
            )}
          </div>
          <div className='input-box'>
            <label>Achievements</label>
            <textarea
              type="text"
              placeholder="Enter your achievements here"
              name='achievement'
              value={user.achievement}
              onChange={handleInputs} />
            {error && user.achievement === '' ? (
              <label style={{ color: '#FF0033' }}>
                *should not be empty
              </label>
            ) : (
              ''
            )}
          </div>
          <div className='input-box'>
            <label >Upload your CV here</label>
            <input
              type="file"
              id="myFile"
              name="filename"
            >
            </input>
          </div>
          <div className='input-box'>
            <label >Upload your picture</label>
            <input
              type="file"
              id="mypic"
              name="mypic"
            >
            </input>
          </div>
          <div className='gender'>
            <input
              type="checkbox"
              name='check'
              value={user.check}
              onChange={handleInputs}
              required></input>
            <label for >Check this box if you agree with <a href="#">Terms and Conditions</a>.</label>
          </div>
          <button>Submit</button>
        </form>
      </section>
    </>
  )
}

export default Form;