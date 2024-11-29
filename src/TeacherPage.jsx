const days = ['mon', 'tue', 'wed', 'thu', 'fri'];

const TeacherPage = ({ children }) => {
  console.log({ children })
  return (
    <div className="container mx-auto p-4">

      <h1 className="text-2xl font-bold mb-4">Teacher's Page</h1>
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/3 px-4 py-2">Name</th>
            <th className="w-1/3 px-4 py-2">Registration Status</th>
            <th className="w-1/3 px-4 py-2">Week Indicator</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-100">
            <td className="border px-4 py-2">Name</td>
            <td className="border px-4 py-2">Registered</td>
            <td className="border px-4 py-2">
              <div className="grid grid-cols-5 gap-2">
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
              </div>
            </td>
          </tr>
          {children.map((child, index) => (
            <tr key={index} className="bg-gray-100">
              <td className="border px-4 py-2">{child.name}</td>
              <td className="border px-4 py-2">{ child.registration['mon'] ? 'Yep' : 'Nope' }</td> 
              <td className="border px-4 py-2">
                <div className="grid grid-cols-5 gap-2">
                  <div>{child.registration['mon']?.emoji}</div>
                  <div>{child.registration['tue']?.emoji}</div>
                  <div>{child.registration['wed']?.emoji}</div>
                  <div>{child.registration['thu']?.emoji}</div>
                  <div>{child.registration['fri']?.emoji}</div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TeacherPage;