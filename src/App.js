import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';

function App() {

  const [contacts , setContacts] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
    subject: '',
    resume: null,
    url: '',
    choice: '',
    about: ''
  });

  const formSubmit = (e) => {
    e.preventDefault();

    const newContact = { ...formData };
    setContacts([...contacts, newContact]);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      gender: '',
      subject: '',
      resume: null,
      url: '',
      choice: '',
      about: ''
    });
  }

  const handleChange = (e) => {
    const {name , value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const reset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      gender: '',
      subject: '',
      resume: null,
      url: '',
      choice: '',
      about: ''
    });
  }

  return (
    
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form onSubmit={formSubmit}>
          <h1>Form in React</h1>
          {/* First Name */}
          <div class="mb-3">
            <label htmlFor="firstName" className="form-label">First Name*</label>
            <input type="text" 
                  className='form-control'
                  name="firstName" 
                  id="firstName" 
                  placeholder="Enter First Name" 
                  value={formData.firstName} 
                  onChange={handleChange} 
                  required
            />
          </div>
          {/* Last Name */}
          <div class="mb-3">
            <label htmlFor="lastName" className="form-label">Last Name*</label>
            <input type="text" className="form-control" name="lastName" id="lastName" placeholder="Enter Last Name" 
                    value={formData.lastName} onChange={handleChange} required/>
          </div>
          {/* Email */}
          <div class="mb-3">
            <label htmlFor="email" className="form-label">Enter Email*</label>
            <input type="email" className="form-control" name="email" id="email" placeholder="Enter Email" 
                    value={formData.email} onChange={handleChange} required/>
          </div>
          {/* Phone */}
          <div class="mb-3">
            <label htmlFor="phone" className="form-label">Contact*</label>
            <input type="number" className="form-control" name="phone" id="phone" placeholder="Enter Mobile number" 
                    value={formData.phone} onChange={handleChange} required/>
          </div>
          {/* Gender */}
          <div class="mb-3">
            <label class="form-label">Gender*</label>
          </div>
          <div class="form-check form-check-inline mb-3">
            <input class="form-check-input" type="radio" name="gender" id="male" 
                   onChange={handleChange} checked={formData.gender === 'Male'} value="Male"/>
            <label class="form-check-label" htmlFor="gender">Male</label>
          </div>
          <div class="form-check form-check-inline mx-5">
            <input class="form-check-input" type="radio" name="gender" id="female" 
                   onChange={handleChange} checked={formData.gender === 'Female'} value="Female"/>
            <label class="form-check-label" htmlFor="gender">Female</label>
          </div>
          <div class="form-check form-check-inline mx-5">
            <input class="form-check-input" type="radio" name="gender" id="other" 
                   onChange={handleChange} checked={formData.gender === 'Other'} value="Other"/>
            <label class="form-check-label" htmlFor="gender">Other</label>
          </div>
          {/* Subject */}
          <div class="mb-3">
            <label class="form-label">Your best Subject*</label>
          </div>
          <div class="form-check form-check-inline mb-3">
            <input class="form-check-input" type="checkbox" name="subject" id="English" value="English"
                    onChange={handleChange} checked={formData.subject === 'English'} />
            <label class="form-check-label" for="inlineCheckbox1">English</label>
          </div>
          <div class="form-check form-check-inline mb-3">
            <input class="form-check-input" type="checkbox" name="subject" id="Maths" value="Maths"
                    onChange={handleChange} checked={formData.subject === 'Maths'} />
            <label class="form-check-label" for="Maths">Maths</label>
          </div>
          <div class="form-check form-check-inline mb-3">
            <input class="form-check-input" type="checkbox" name="subject" id="Physics" value="Physics"
                    onChange={handleChange} checked={formData.subject === 'Physics'} />
            <label class="form-check-label" for="Physics">Physics</label>
          </div>
          {/* Resume */}
          <div class="mb-3">
            <label htmlFor="resume" class="form-label">Upload Resume*</label>
            <input class="form-control" type="file" name="resume" id="resume" onChange={handleChange} required/>
          </div>
          {/* URL */}
          <div class="mb-3">
            <label for="url" class="form-label">Enter URL*</label>
            <input type="url" class="form-control" name="url" id="url" value={formData.url} required
                    onChange={handleChange} placeholder="Enter URL"/>
          </div>
          {/* Choice */}
          <div class="mb-3">
            <label for="choice" class="form-label">Select your choice</label>
              <select class="form-select" aria-label="Default select example" name="choice" id="choice" 
                      value={formData.choice} onChange={handleChange}>
                <option selected>Select your ans</option>
                <option value="One">One</option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </select>
          </div>
          {/* About */}
          <div class="mb-3">
            <label for="about" class="form-label">About</label>
            <textarea class="form-control" name="about" id="about" rows="8" placeholder="About your self" required
                      value={formData.about} onChange={handleChange}
            />
          </div>
          <label for="url" class="form-label">Submit Or Reset</label>
          <div class="justify-content-center">
          <button type="submit" className="btn btn-primary m-3 btn-lg" onClick={reset}>Reset</button>
          <button type="submit" className="btn btn-primary m-3 btn-lg">Submit</button>
          </div>

        </form>
        <h2>Contacts</h2>
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>
              <p>Contact Number {index+1} </p>
              <p>First Name: {contact.firstName}</p>
              <p>Last Name: {contact.lastName}</p>
              <p>Email: {contact.email}</p>
              <p>Phone: {contact.phone}</p>
              <p>Gender: {contact.gender}</p>
              <p>Subject: {contact.subject}</p>
              <p>Resume : {contact.resume}</p>
              <p>URL : <a href='{contact.url}'>{contact.url}</a></p>
              <p>Choice : {contact.choice}</p>
              <p>About : {contact.about}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>

  );
}

export default App;
