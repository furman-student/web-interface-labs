import styles from '../styles/components/Form.module.scss'

export default function Form() {
  return (
    <div className="container">
      <LoginForm />
      <RegisterForm />
    </div>
  )
}

function LoginForm() {
  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.title}>Login Form</h2>
      <form name='login'>
        <fieldset>
          <legend>Enter Your Credentials</legend>

          <div className={styles.field}>
            <input type="text" name="username" id="username" required placeholder="username or email" minLength={8} />
            <label htmlFor="username">Username or email</label>
          </div>

          <div className={styles.field}>
            <input type="password" name="password" id="password" required placeholder="password" />
            <label htmlFor="password">Password</label>
          </div>
        </fieldset>

        <button className={styles.button} type="submit">Login</button>
      </form>
    </div>
  )
}

function RegisterForm() {
  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.title}>Registration Form</h2>
      <form name="register">
        <fieldset>
          <legend>General Information</legend>

          <div className={styles.field}>
            <input type="email" name="email" id="email" required placeholder="email" />
            <label htmlFor="email">Email</label>
          </div>

          <div className={styles.field}>
            <input type="text" name="username" id="username" required placeholder="username" minLength={8} />
            <label htmlFor="email">Username</label>
          </div>

          <div className={styles.field}>
            <input type="password" name="password" id="password" required placeholder="password" />
            <label htmlFor="password">Password</label>
          </div>

          <div className={styles.field}>
            <input type="password" name="passwordCheck" id="passwordCheck" required placeholder="re-type password" />
            <label htmlFor="passwordCheck">Re-type Password</label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Profile Settings</legend>

          <div className={styles.field}>
            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
            <label htmlFor="avatar">Profile Pic</label>
          </div>

          <div className={styles.field}>
            <input type="password" name="fullName" id="fullName" />
            <label htmlFor="fullName">Full Name</label>
          </div>

          <div className={styles.field}>
            <input type="tel" name="phone" id="phone" />
            <label htmlFor="phone">Phone</label>
          </div>

          <div className={styles.field}>
            <select name="position" id="position">
              <option value="pos_1">Account Manager</option>
              <option value="pos_2">Developer</option>
              <option value="pos_3">Team Leader</option>
              <option value="pos_4">HR Representative</option>
              <option value="pos_5">Office Manager</option>
            </select>
            <label htmlFor="position">Position</label>
            <span></span>
          </div>

          <div className={styles.field}>
            <textarea name="userBio" id="userBio" cols="30" rows="10"></textarea>
            <label htmlFor="userBio">Bio</label>
          </div>
        </fieldset>

        <button className={styles.button} type="submit">Register</button>
      </form>
    </div>
  )
}
