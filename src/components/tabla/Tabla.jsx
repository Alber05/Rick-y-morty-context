import "./tabla.css"

export function Tabla({ datos, fth, sth, tth, type}) {
 
    return (
        <table className="locations-table">
          <thead className="locations-table__thead">
            <tr className="locations-table__headers">
              <th><span>{fth}</span></th>
              <th><span>{sth}</span></th>
              <th><span>{tth}</span></th>
            </tr>
          </thead>
          <tbody className="locations-table__tbody">
           
            {datos.map((item, index) => (
              <tr key={index}>
                <td>{ item.name}</td>
                <td>{ type == "location" ? item.type : item.air_date }</td>
                <td>{ type == "location" ? item.dimension : item.episode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
}