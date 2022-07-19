// import {useQuery, useMutation} from "@apollo/client"
// import {QUERY_ME} from "../utils/queries"
// import {ADD_ITEM} from "../utils/mutations"

function Admin() {
//   const [loading, data] = useQuery(QUERY_ME)
//   const adminData = data?.me
//   const [addItem, {error}] = useMutation(ADD_ITEM)

// if(loading) {
//   return <h2>
//     Retrieving Admin
//   </h2>
// }

// ^setup we need. make turnary statement that conditoinally renders button if logged in as admin. set the href for redirect to addItem page



  return (
    <div
      class="rpgui-container framed rpgui-draggable d-flex justify-content-between"
      style={{
        marginLeft: "25%",
        position: "center",
        alignItems: "center",
        fontSize: ".9rem",
        padding: "1rem",
        height: "45%",
        width: "45%",
      }}
    >
      <h1>Users</h1>
      <table>
        <tr>
          <th>Admin status</th>
        </tr>
        <td>User1</td>
        {/* {adminData.name} */}
        <td>
          <label class="switch">
            <input type="checkbox"></input>
            <span class="slider round"></span>
          </label>
        </td>
      </table>
    </div>
  );
}
export default Admin;


// 