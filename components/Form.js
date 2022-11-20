import styles from '../styles/components/Form.module.scss'

export default function () {
  return <>
    <LoginForm />
    <RegisterForm />
  </>
}

function LoginForm() {
  return <>
    <h2>Login Form</h2>
    <form name='login'>
      <fieldset>
        <legend>Enter Your Credentials</legend>

        <div>
          <label htmlFor="username">Username or email</label>
          <input type="text" name="username" id="username" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
      </fieldset>

      <button type="submit">Login</button>
    </form>
  </>
}

function RegisterForm() {
  return <>
    <h2>Registration Form</h2>
    <form name='register'>
      <fieldset>
        <legend>General Information</legend>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="email">Username</label>
          <input type="text" name="username" id="username" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <div>
          <label htmlFor="passwordCheck">Re-type Password</label>
          <input type="password" name="passwordCheck" id="passwordCheck" />
        </div>
      </fieldset>

      <fieldset>
        <legend>Profile Settings</legend>

        <div>
          <label htmlFor="avatar">Profile Pic</label>
          <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
        </div>

        <div>
          <label htmlFor="fullName">Full Name</label>
          <input type="password" name="fullName" id="fullName" />
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input type="tel" name="phone" id="phone" />
        </div>

        <div>
          <label htmlFor="position">Position</label>
          <select name="position" id="position">
            <option value="pos_1">Account Manager</option>
            <option value="pos_2">Developer</option>
            <option value="pos_3">Team Leader</option>
            <option value="pos_4">HR Representative</option>
            <option value="pos_5">Office Manager</option>
          </select>
        </div>

        <div>
          <label htmlFor="userBio">Bio</label>
          <textarea name="userBio" id="userBio" cols="30" rows="10"></textarea>
        </div>
      </fieldset>

      <button type="submit">Register</button>
    </form>
  </>
}
