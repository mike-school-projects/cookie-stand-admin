import { useAuth } from "../contexts/auth";

export default function Footer(props) {
  const { user } = useAuth();

  return (
    <footer className="p-3 bg-green-500 text-gray-50">
      {user
        ?
        <p className="text-black text-center">{props.cookieStands.length} Locations World Wide</p>
        : <br></br>
      }

    </footer>
  )
}