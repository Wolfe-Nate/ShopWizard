function Admin() {
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
        {/* {user.name} */}
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
