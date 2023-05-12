import { useAuth } from "../contexts/auth";

export default function Header(props) {
  const { user, login, logout } = useAuth();

  return (
    <header className="flex justify-center p-4 bg-green-500 text-gray-50">


      <div className="flex justify-between w-3/4">

        <h1 className="text-4xl text-black">Cookie Stand Admin</h1>
        {user
          ?
          <>

            <div>
              <button className="bg-white rounded-md text-black px-2 py-0.5 m-1">User: {user.username}</button>
              <button className="bg-green-700 rounded-md px-2 py-0.5 m-1" onClick={logout}>Logout</button>
              <button className="bg-white rounded-md text-black px-2 py-0.5 m-1">Overview</button>
            </div>
          </>
          :
          <div>
            <p className="bg-white rounded-md text-black px-2 py-0.5 m-1">Logged Out</p>
          </div>
        }

      </div>

    </header>
  )
}