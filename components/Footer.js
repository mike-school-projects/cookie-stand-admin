export default function Footer(props) {
  return (
    <footer className="p-3 bg-green-500 text-gray-50">
      <p className="text-black">{props.cookieStands.length} Locations World Wide</p>
    </footer>
  )
}