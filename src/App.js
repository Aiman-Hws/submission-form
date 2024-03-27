import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form>
          <h1>Form in React</h1>
          <div class="mb-3">
            <label for="firstName" class="form-label">First Name*</label>
            <input type="text" class="form-control" id="firstName" placeholder="Enter First Name"/>
          </div>
          <div class="mb-3">
            <label for="lastName" class="form-label">Last Name*</label>
            <input type="text" class="form-control" id="lastName" placeholder="Enter Last Name"/>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Enter Email*</label>
            <input type="email" class="form-control" id="email" placeholder="Enter Email"/>
          </div>
          <div class="mb-3">
            <label for="contact" class="form-label">Contact*</label>
            <input type="number" class="form-control" id="contact" placeholder="Enter Mobile number"/>
          </div>
          <div class="mb-3">
            <label class="form-label">Gender*</label>
          </div>
          <div class="form-check form-check-inline mb-3">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male"/>
            <label class="form-check-label" for="inlineRadio1">Male</label>
          </div>
          <div class="form-check form-check-inline mx-5">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female"/>
            <label class="form-check-label" for="inlineRadio2">Female</label>
          </div>
          <div class="form-check form-check-inline mx-5">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Other"/>
            <label class="form-check-label" for="inlineRadio3">Other</label>
          </div>
          <div class="mb-3">
            <label class="form-label">Your best Subject*</label>
          </div>
          <div class="form-check form-check-inline mb-3">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="English"/>
            <label class="form-check-label" for="inlineCheckbox1">English</label>
          </div>
          <div class="form-check form-check-inline mb-3">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Maths"/>
            <label class="form-check-label" for="inlineCheckbox2">Maths</label>
          </div>
          <div class="form-check form-check-inline mb-3">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="Physics"/>
            <label class="form-check-label" for="inlineCheckbox3">Physics</label>
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

        </form>
      </div>
    </div>
  </div>

  );
}

export default App;
