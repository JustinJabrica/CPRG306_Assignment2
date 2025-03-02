export default async function Search() {
  //function to fetch student data from the API
  const getProducts = async () => {
    const res = await fetch(
      "cprg-306-assignment2-git-main-justinjabricas-projects.vercel.app/?a=list&q=students"
    ); // "https://dummyjson.com/products"  https://dummyjson.com/users
    return res.json(); //convert response to JSON
  };

  const dat = await getProducts(); //fetch student data

  return (
    <>
      // Title for the student list //
      <div>
        <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-700 md:text-3xl lg:text-3xl dark:text-white">
          All Students
        </h1>
      </div>
      // Display any message from the API response //
      <div>{dat?.message}</div>
      // Table to display student data //
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                First Name
              </th>
              <th scope="col" className="px-6 py-3">
                Last Name
              </th>
              <th scope="col" className="px-6 py-3">
                Date of Birth
              </th>
              <th scope="col" className="px-6 py-3">
                Grade
              </th>
            </tr>
          </thead>
          <tbody>
            {
              // Loop through the student data and render each student as a table row //
              dat?.student.map((item, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                >
                  <td className="px-6 py-4">{item.id}</td>
                  <td className="px-6 py-4">{item.fn}</td>
                  <td className="px-6 py-4">{item.ln}</td>
                  <td className="px-6 py-4">{item.dob}</td>
                  <td className="px-6 py-4">{item.grd}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
}
