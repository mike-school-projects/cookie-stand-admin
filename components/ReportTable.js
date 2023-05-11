export default function ReportTable(props) {

  return (
    <>
      {props.cookieStands.length == 0
        ? <h2 className="m-4 text-center">No Cookie Stands Available</h2>
        :

        <table className='table-fixed mx-auto m-4'>
          <thead>
            <tr className="bg-green-500">
              <th className="pr-1 pl-1">Location</th>
              <th className="pr-1 pl-1">6am</th>
              <th className="pr-1 pl-1">7am</th>
              <th className="pr-1 pl-1">8am</th>
              <th className="pr-1 pl-1">9am</th>
              <th className="pr-1 pl-1">10am</th>
              <th className="pr-1 pl-1">11am</th>
              <th className="pr-1 pl-1">12pm</th>
              <th className="pr-1 pl-1">1pm</th>
              <th className="pr-1 pl-1">2pm</th>
              <th className="pr-1 pl-1">3pm</th>
              <th className="pr-1 pl-1">4pm</th>
              <th className="pr-1 pl-1">5pm</th>
              <th className="pr-1 pl-1">6pm</th>
              <th className="pr-1 pl-1">7pm</th>
              <th className="pr-1 pl-1">Totals</th>
            </tr>
          </thead>
          <tbody>

            {props.cookieStands.map((store, idx) => {
              return (
                <tr key={idx} className="odd:bg-green-300 even:bg-green-200">
                  <td className="text-center border-2 border-black/50">{store.location}</td>
                  <td className="text-center border-2 border-black/50">{store.salesArray[0]}</td>
                  <td className="text-center border-2 border-black/50">{store.salesArray[1]}</td>
                  <td className="text-center border-2 border-black/50">{store.salesArray[2]}</td>
                  <td className="text-center border-2 border-black/50">{store.salesArray[3]}</td>
                  <td className="text-center border-2 border-black/50">{store.salesArray[4]}</td>
                  <td className="text-center border-2 border-black/50">{store.salesArray[5]}</td>
                  <td className="text-center border-2 border-black/50">{store.salesArray[6]}</td>
                  <td className="text-center border-2 border-black/50">{store.salesArray[7]}</td>
                  <td className="text-center border-2 border-black/50">{store.salesArray[8]}</td>
                  <td className="text-center border-2 border-black/50">{store.salesArray[9]}</td>
                  <td className="text-center border-2 border-black/50">{store.salesArray[10]}</td>
                  <td className="text-center border-2 border-black/50">{store.salesArray[11]}</td>
                  <td className="text-center border-2 border-black/50">{store.salesArray[12]}</td>
                  <td className="text-center border-2 border-black/50">{store.salesArray[13]}</td>
                  <td className="text-center border-2 border-black/50">{store.salesArray[14]}</td>

                </tr>
              )
            })}



            <tr className="bg-green-500">
              <th className="text-center border-2 border-black/50">Totals</th>
              {props.grandTotal.map((hour, idx) => {
                return (
                  <th key={idx} className="text-center border-2 border-black/50">{hour}</th>
                )
              })}
            </tr>



          </tbody>

        </table>





      }

    </>
  )
}