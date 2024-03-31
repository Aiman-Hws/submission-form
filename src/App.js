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
    subject: ''
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
      subject: ''
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

  }

  return (
    
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form onSubmit={formSubmit}>
          <h1>Form in React</h1>
          <div class="mb-3">
            <label htmlFor="firstName" className="form-label">First Name*</label>
            <input type="text" className="form-control" name="firstName" id="firstName" placeholder="Enter First Name" 
                    value={formData.firstName} onChange={handleChange} required/>
          </div>
          <div class="mb-3">
            <label htmlFor="lastName" className="form-label">Last Name*</label>
            <input type="text" className="form-control" name="lastName" id="lastName" placeholder="Enter Last Name" 
                    value={formData.lastName} onChange={handleChange} required/>
          </div>
          <div class="mb-3">
            <label htmlFor="email" className="form-label">Enter Email*</label>
            <input type="email" className="form-control" name="email" id="email" placeholder="Enter Email" 
                    value={formData.email} onChange={handleChange} required/>
          </div>
          <div class="mb-3">
            <label htmlFor="phone" className="form-label">Contact*</label>
            <input type="number" className="form-control" name="phone" id="phone" placeholder="Enter Mobile number" 
                    value={formData.phone} onChange={handleChange} required/>
          </div>
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
          <div class="mb-3">
            <label class="form-label">Your best Subject*</label>
          </div>
          <div class="form-check form-check-inline mb-3">
            <input class="form-check-input" type="checkbox" name="subject" id="English" value="English"
                    onChange={handleChange} checked={formData.subject === 'English'}
            />
            <label class="form-check-label" for="inlineCheckbox1">English</label>
          </div>
          <div class="form-check form-check-inline mb-3">
            <input class="form-check-input" type="checkbox" name="subject" id="Maths" value="Maths"
                    onChange={handleChange} checked={formData.subject === 'Maths'}
            />
            <label class="form-check-label" for="Maths">Maths</label>
          </div>
          <div class="form-check form-check-inline mb-3">
            <input class="form-check-input" type="checkbox" name="subject" id="Physics" value="Physics"
                    onChange={handleChange} checked={formData.subject === 'Physics'}
            />
            <label class="form-check-label" for="Physics">Physics</label>
          </div>
          <div class="mb-3">
            <label for="formFile" class="form-label">Upload Resume*</label>
            <input class="form-control" type="file" id="formFile"/>
          </div>
          <div class="mb-3">
            <label for="url" class="form-label">Enter URL*</label>
            <input type="text" class="form-control" id="url" placeholder="Enter URL"/>
          </div>
          <div class="mb-3">
            <label for="url" class="form-label">Select your choice</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Select your ans</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
          </div>
          <div class="mb-3">
            <label for="url" class="form-label">About</label>
            <textarea class="form-control" name="" id="" rows="8" placeholder="About your self"></textarea>
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
              {contact.firstName} - {contact.lastName} - {contact.email} - {contact.phone} - {contact.gender} - {contact.subject}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>

  );
}

export default App;
