import React, { useState } from "react"
import "/Users/punchcode/Projects/react-validation/src/styles/base.css"
import validator from "validator"
// import { Link } from "react-router-dom"

function Forms(props) {
  const [name, setName] = useState("")
  const [nameError, setNameError] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [username, setUsername] = useState("")
  const [usernameError, setUsernameError] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirmpassword, setConfirmPassword] = useState("")
  const [confirmpasswordError, setConfirmPasswordError] = useState("")
  const [website, setWebsite] = useState("")
  const [websiteError, setWebsiteError] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    let err = false

    if (name === "") {
      err = true
      setNameError(" - Cannot be blank")
    } else {
      setNameError("")
    }

    if (email !== "") {
      if (!validator.isEmail(email)) {
        err = true
        setEmailError(" - Must be a valid email")
      } else {
        err = true
        setEmailError("")
      }
    } else {
      err = true
      setEmailError(" - Must be a valid email")
    }

    if (username === "") {
      err = true
      setUsernameError(" - Cannot be blank")
    } else {
      setUsernameError("")
    }

    if (password === "") {
      err = true
      setPasswordError(" - Cannot be blank")
    } else {
      setPasswordError("")
    }

    if (confirmpassword === "") {
      err = true
      setConfirmPasswordError(" - Must match the password")
    } else {
      setConfirmPasswordError("")
    }

    if (website !== "") {
      if (!validator.isURL(website)) {
        err = true
        setWebsiteError(" - Must be a valid url")
      } else {
        setWebsiteError("")
      }
    } else {
      err = true
      setWebsiteError(" - Must be a valid url")
    }

    if (!validator)
      if (!err) {
        console.log("submitted")
      } else {
        console.log("not submitted")
      }
  }
  return (
    <div className="container">
      <h1>Profile Form - All fields required</h1>
      <form>
        <label className="error" className={nameError === "" ? "" : "err"}>
          Name{nameError}
        </label>
        <input
          className={nameError === "" ? "" : "error"}
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Shey"
        />

        <label className="error" className={emailError === "" ? "" : "err"}>
          Email{emailError}
        </label>
        <input
          className={emailError === "" ? "" : "error"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="email@test.com"
        />

        <label className="error" className={usernameError === "" ? "" : "err"}>
          Username{usernameError}
        </label>
        <input
          className={usernameError === "" ? "" : "error"}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          placeholder="myusername"
        />

        <label className="error" className={passwordError === "" ? "" : "err"}>
          Password{passwordError}
        </label>
        <input
          className={passwordError === "" ? "" : "error"}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
        />

        <label
          className="error"
          className={confirmpasswordError === "" ? "" : "err"}
        >
          Confirm Password{confirmpasswordError}
        </label>
        <input
          className={confirmpasswordError === "" ? "" : "error"}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="text"
          placeholder="Confirm Password"
        />

        <label className="error" className={websiteError === "" ? "" : "err"}>
          Website{websiteError}
        </label>
        <input
          className={websiteError === "" ? "" : "error"}
          onChange={(e) => setWebsite(e.target.value)}
          type="text"
          placeholder="Website"
        />
        {/* <Link to="/submitted"> */}
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        {/* </Link> */}
      </form>
    </div>
  )
}

export default Forms
