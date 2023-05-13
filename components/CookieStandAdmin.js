import CreateForm from '../components/CreateForm'
import ReportTable from '../components/ReportTable';

export default function Main(props) {

  return (
    <main className="w-3/4 mx-auto">

      <div className="m-4 bg-green-300 rounded-md">

        <CreateForm
          createTable={props.createTable}
        />

      </div>

      <ReportTable
        cookieStands={props.cookieStands}
        grandTotal={props.grandTotal}
      />

    </main>
  )
}