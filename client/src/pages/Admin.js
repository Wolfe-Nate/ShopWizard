import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";

function Admin() {
  const { loading, data } = useQuery(QUERY_USERS);
  console.log(data);
  const players = data?.users || [];

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
      {loading ? (
        <h1>Loading data</h1>
      ) : (
        <div>
          <h1>Users</h1>
          <table>
            <thead>
              <tr>
                <th>Admin status</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player) => (
                <tr>{player.username}</tr>
              ))}
            </tbody>
          </table>
          <ul>
            <li>csmith</li>
            <li>natew</li>
            <li>Luke</li>
            <li>Dylan</li>
            <li>Jason</li>
            <li>test1</li>
            <li>Jim</li>
          </ul>
        </div>
      )}
    </div>
  );
}
export default Admin;
