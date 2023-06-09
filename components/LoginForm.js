export default function LoginForm(props) {
  return (
    <form onSubmit={props.loginFormHandler} className="flex flex-col  bg-green-300 m-4 rounded-md border-2 border-green-400 w-3/4 mx-auto">

      <div className="flex flex-col p-4">
        <label className="mt-2 text-center font-bold">USER NAME</label>
        <input name="userName" className="grow" />
      </div>

      <div className="flex flex-col p-4">
        <label className="mt-2 text-center font-bold">PASSWORD</label>
        <input name="password" className="grow" />
      </div>

      <div className="flex flex-col p-4">
        <button className="mt-2 p-2 bg-green-500 font-bold">SIGN IN</button>
      </div>

    </form>
  )
}
