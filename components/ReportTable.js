import useResource from "@/hooks/useResource"

export default function ReportTable(props) {
  const { deleteResource } = useResource();

  return (
    <>
      {props.cookieStands.length == 0
        ? <h2 className="m-4 text-center">No Cookie Stands Available</h2>
        :

        <table className='table-fixed mx-auto m-4'>
          <thead>
            <tr className="bg-green-500">
              <th className="pr-1 pl-1 border-2 border-green-600 text-left">Location</th>
              <th className="pr-1 pl-1 border-2 border-green-600">6am</th>
              <th className="pr-1 pl-1 border-2 border-green-600">7am</th>
              <th className="pr-1 pl-1 border-2 border-green-600">8am</th>
              <th className="pr-1 pl-1 border-2 border-green-600">9am</th>
              <th className="pr-1 pl-1 border-2 border-green-600">10am</th>
              <th className="pr-1 pl-1 border-2 border-green-600">11am</th>
              <th className="pr-1 pl-1 border-2 border-green-600">12pm</th>
              <th className="pr-1 pl-1 border-2 border-green-600">1pm</th>
              <th className="pr-1 pl-1 border-2 border-green-600">2pm</th>
              <th className="pr-1 pl-1 border-2 border-green-600">3pm</th>
              <th className="pr-1 pl-1 border-2 border-green-600">4pm</th>
              <th className="pr-1 pl-1 border-2 border-green-600">5pm</th>
              <th className="pr-1 pl-1 border-2 border-green-600">6pm</th>
              <th className="pr-1 pl-1 border-2 border-green-600">7pm</th>
              <th className="pr-1 pl-1 border-2 border-green-600 text-left">Totals</th>
            </tr>
          </thead>
          <tbody>

            {props.cookieStands.map((store, idx) => {
              return (
                <tr key={store.id} className="odd:bg-green-300 even:bg-green-200">
                  <td className="flex text-left border-2 border-green-600 font-bold pl-3 w-full">{store.location}
                  
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 ml-5 mr-0"
                      onClick={() => (deleteResource(store.id))}
                    >
                      <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd"
                      />
                    </svg></td>


                  <td className="text-center border-2 border-green-600">{store.salesArray[0]}</td>
                  <td className="text-center border-2 border-green-600">{store.salesArray[1]}</td>
                  <td className="text-center border-2 border-green-600">{store.salesArray[2]}</td>
                  <td className="text-center border-2 border-green-600">{store.salesArray[3]}</td>
                  <td className="text-center border-2 border-green-600">{store.salesArray[4]}</td>
                  <td className="text-center border-2 border-green-600">{store.salesArray[5]}</td>
                  <td className="text-center border-2 border-green-600">{store.salesArray[6]}</td>
                  <td className="text-center border-2 border-green-600">{store.salesArray[7]}</td>
                  <td className="text-center border-2 border-green-600">{store.salesArray[8]}</td>
                  <td className="text-center border-2 border-green-600">{store.salesArray[9]}</td>
                  <td className="text-center border-2 border-green-600">{store.salesArray[10]}</td>
                  <td className="text-center border-2 border-green-600">{store.salesArray[11]}</td>
                  <td className="text-center border-2 border-green-600">{store.salesArray[12]}</td>
                  <td className="text-center border-2 border-green-600">{store.salesArray[13]}</td>
                  <td className="text-center border-2 border-green-600">{store.salesArray[14]}</td>

                </tr>
              )
            })}



            <tr className="bg-green-500">
              <th className="text-left border-2 border-green-600">Totals</th>
              {props.grandTotal.map((hour, idx) => {
                return (
                  <th key={idx} className="text-center border-2 border-green-600">{hour}</th>
                )
              })}
            </tr>



          </tbody>

        </table>





      }

    </>
  )
}