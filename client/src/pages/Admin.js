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
        <tr>
          <td>User1</td>
          <div
            class="btn-group btn-group-toggle  d-flex justify-content-between"
            data-toggle="buttons"
          >
            <label class="btn btn-secondary active">
              <input
                type="radio"
                name="options"
                id="option1"
                autocomplete="off"
                checked
              ></input>
              {"ON"}
            </label>
            <label class="btn btn-secondary">
              <input
                type="radio"
                name="options"
                id="option2"
                autocomplete="off"
              ></input>
              {"OFF"}
            </label>
          </div>
        </tr>
      </table>
    </div>
  );
}
export default Admin;
