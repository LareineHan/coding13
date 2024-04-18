import React from "react";
import "./Transportation.style.css";
import { Container, Table } from "react-bootstrap";

const Transportation = ({ transits }) => {
  return (
    <Container>
      <h2>Transportation</h2>
      {transits.map((transitType, index) => (
        <div key={index}>
          <Table hover responsive className="transport-table">
            <thead>
              <tr>
                <th width="60%">{transitType.type}</th>
                <th width="10%">Walk</th>
                <th width="10%">Drive</th>
                <th width="20">Distance</th>
              </tr>
            </thead>
            <tbody>
              {transitType.stops.map((stop, idx) => (
                <tr key={idx}>
                  <td>{stop.name}</td>
                  {stop.walk ? (
                    <td>{stop.walk}</td>
                  ) : (
                    <td className="empty-cell">-</td>
                  )}
                  {stop.drive ? <td>{stop.drive}</td> : <td>-</td>}
                  {stop.dist ? <td>{stop.dist}</td> : <td>-</td>}
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ))}
    </Container>
  );
};

export default Transportation;
