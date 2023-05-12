export default function CreateForm(props) {
  return (
    <form onSubmit={props.formHandler} className="flex flex-col">

      <div className="flex m-4">

        <div className="flex flex-col p-2 w-3/4">
          <label className="pr-2 pl-2 text-center font-bold">Add Location </label>
          <input name="location" className="px-2 grow" placeholder="Cookie Stand Location"/>
        </div>

        <button className="p-2 bg-green-600 text-black grow rounded-md">Create</button>

      </div>


      <div className="flex flex-row m-4">

        <div className="p-2 m-2 bg-green-200 font-bold rounded-md">
          <label>MINIMUM CUSTOMERS PER HOUR</label>
          <input name="minCust" className="pl-1" />
        </div>

        <div className="p-2 m-2 bg-green-200 font-bold rounded-md">
          <label>MAXIMUM CUSTOMERS PER HOUR</label>
          <input name="maxCust" className="pl-1" />
        </div>

        <div className="p-2 m-2 bg-green-200 font-bold rounded-md">
          <label>AVERAGE COOKIES PER SALE</label>
          <input name="avgCookies" className="pl-1" />
        </div>

      </div>

    </form>
  )
}