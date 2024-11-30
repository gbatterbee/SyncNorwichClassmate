import { GreyDot } from "./svg/Dot";


const TeacherPage = ({ children, viewKid }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Teacher's Page</h1>
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/3 px-4 py-2">Today</th>
            <th className="w-2/3 px-4 py-2">This week</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>  <div className="grid grid-cols-5 gap-2">
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
            </div></td>
          </tr>
          {children.map((child, index) => (
            <tr key={index} className="bg-gray-100">
              <td className="border px-4 py-2">
                <a href="#" onClick={()=>viewKid(child)}>
                <div className="grid grid-cols-2 gap-2">
                  <div>{child.name}</div>
                  <div>{child.registration?.['wed']?.indicator ?? <GreyDot />}</div>
                </div>
                </a></td>
              <td className="border px-4 py-2">
                <div className="grid grid-cols-5 gap-2">
                  <div>{child.registration['mon']?.indicator}</div>
                  <div>{child.registration['tue']?.indicator}</div>
                  <div>{child.registration['wed']?.indicator}</div>
                  <div>{child.registration['thu']?.indicator}</div>
                  <div>{child.registration['fri']?.indicator}</div>
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