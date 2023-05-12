import CreateForm from '../components/CreateForm'
import ReportTable from '../components/ReportTable';
import useResource from "@/hooks/useResource"

export default function Main(props) {
  const { deleteResource } = useResource();

  return (
    <main className="w-3/4 mx-auto">

      <div className="m-4 bg-green-300 rounded-md">

        <CreateForm
          formHandler={props.formHandler}
        />

      </div>

      <ReportTable
        cookieStands={props.cookieStands}
        grandTotal={props.grandTotal}
        onDelete={deleteResource}

      />

    </main>
  )
}