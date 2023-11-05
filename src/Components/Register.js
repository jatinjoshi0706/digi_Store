import React from 'react'

const Register = () => {
  return (
    <div class="container text-dark d-flex flex-column justify-content-center align-items-center my-5">
        <h2 >Registration</h2>
        <form class="my-3 w-25" method="POST">
            <div class="mb-3">
                <label for="exampleInputName1" class="form-label">Name</label>
                <input type="text" class="form-control" name="name" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" name="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" class="btn btn-primary d-block my-2">Submit</button>
            <span>Already a member? <a href="/login">login</a></span>
          </form>
    </div>
  )
}

export default Register
