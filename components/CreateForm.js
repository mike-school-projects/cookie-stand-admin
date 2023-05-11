export default function CreateForm(props) {
  return (
    <form onSubmit={props.formHandler} className="flex flex-col">
      <h2 className="text-3xl text-center rounded-t-md">Create Cookie Stand</h2>

      <div className="flex p-2">
        <label className="pr-2 pl-2">Location </label>
        <input name="location" className="grow" />
      </div>

      <div className="flex flex-row p-2">

        <div className="p-2 m-2 flex flex-col w-1/4 bg-green-200 rounded-md">
          <label>Minimum Customers per Hour</label>
          <input name="minCust" className="flex-auto pl-1" />
        </div>

        <div className="p-2 m-2 flex flex-col w-1/4 bg-green-200 rounded-md">
          <label>Maximum Customers per Hour</label>
          <input name="maxCust" className="flex-auto pl-1" />
        </div>

        <div className="p-2 m-2 flex flex-col w-1/4 bg-green-200 rounded-md">
          <label>Average Cookies per Sale</label>
          <input name="avgCookies" className="flex-auto pl-1" />
        </div>

        <button className="p-2 bg-green-600 text-black w-1/4 grow">Create</button>

      </div>

    </form>
  )
}