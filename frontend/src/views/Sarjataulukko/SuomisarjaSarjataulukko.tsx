import { useState } from "react";
import "./Sarjataulukko.css";

const SuomisarjaSarjataulukko = () => {
  const [sarjataulukko, setSarjataulukko] = useState([
    {
      pos: 1,
      imgUrl:
        "https://ilvesry.fi/wp-content/uploads/2020/12/Ilves-logo-favicon_631px.png",
      joukkue: "HIFK N18",
      ott: 0,
      v: 0,
      t: 0,
      h: 0,
      tm: 0,
      pm: 0,
      p: 0,
    },
    {
      pos: 2,
      imgUrl:
        "https://ilvesry.fi/wp-content/uploads/2020/12/Ilves-logo-favicon_631px.png",
      joukkue: "Ilves Akatemia",
      ott: 0,
      v: 0,
      t: 0,
      h: 0,
      tm: 0,
      pm: 0,
      p: 0,
    },
    {
      pos: 3,
      imgUrl:
        "https://ilvesry.fi/wp-content/uploads/2020/12/Ilves-logo-favicon_631px.png",
      joukkue: "PaRa",
      ott: 0,
      v: 0,
      t: 0,
      h: 0,
      tm: 0,
      pm: 0,
      p: 0,
    },
    {
      pos: 4,
      imgUrl:
        "https://ilvesry.fi/wp-content/uploads/2020/12/Ilves-logo-favicon_631px.png",
      joukkue: "Pelicans",
      ott: 0,
      v: 0,
      t: 0,
      h: 0,
      tm: 0,
      pm: 0,
      p: 0,
    },
    {
      pos: 5,
      imgUrl:
        "https://ilvesry.fi/wp-content/uploads/2020/12/Ilves-logo-favicon_631px.png",
      joukkue: "Salo HT",
      ott: 0,
      v: 0,
      t: 0,
      h: 0,
      tm: 0,
      pm: 0,
      p: 0,
    },
    {
      pos: 6,
      imgUrl:
        "https://ilvesry.fi/wp-content/uploads/2020/12/Ilves-logo-favicon_631px.png",
      joukkue: "PS Akatemia",
      ott: 0,
      v: 0,
      t: 0,
      h: 0,
      tm: 0,
      pm: 0,
      p: 0,
    },
    {
      pos: 7,
      imgUrl:
        "https://ilvesry.fi/wp-content/uploads/2020/12/Ilves-logo-favicon_631px.png",
      joukkue: "Turku HC",
      ott: 0,
      v: 0,
      t: 0,
      h: 0,
      tm: 0,
      pm: 0,
      p: 0,
    },
    {
      pos: 8,
      imgUrl:
        "https://ilvesry.fi/wp-content/uploads/2020/12/Ilves-logo-favicon_631px.png",
      joukkue: "Lohko 2 JyKi",
      ott: 0,
      v: 0,
      t: 0,
      h: 0,
      tm: 0,
      pm: 0,
      p: 0,
    },
    {
      pos: 9,
      imgUrl:
        "https://ilvesry.fi/wp-content/uploads/2020/12/Ilves-logo-favicon_631px.png",
      joukkue: "Kiilat",
      ott: 0,
      v: 0,
      t: 0,
      h: 0,
      tm: 0,
      pm: 0,
      p: 0,
    },
    {
      pos: 10,
      imgUrl:
        "https://ilvesry.fi/wp-content/uploads/2020/12/Ilves-logo-favicon_631px.png",
      joukkue: "LL-89 Red Lights",
      ott: 0,
      v: 0,
      t: 0,
      h: 0,
      tm: 0,
      pm: 0,
      p: 0,
    },
    {
      pos: 11,
      imgUrl:
        "https://ilvesry.fi/wp-content/uploads/2020/12/Ilves-logo-favicon_631px.png",
      joukkue: "MuJK Naiset",
      ott: 0,
      v: 0,
      t: 0,
      h: 0,
      tm: 0,
      pm: 0,
      p: 0,
    },
    {
      pos: 12,
      imgUrl:
        "https://ilvesry.fi/wp-content/uploads/2020/12/Ilves-logo-favicon_631px.png",
      joukkue: "S-Kiekko",
      ott: 0,
      v: 0,
      t: 0,
      h: 0,
      tm: 0,
      pm: 0,
      p: 0,
    },
  ]);

  return (
    <div className="table-container">
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th className="joukkue-header">JOUKKUE</th>
              <th>OTT</th>
              <th>V</th>
              <th>T</th>
              <th>H</th>
              <th>TM</th>
              <th>PM</th>
              <th>P</th>
            </tr>
          </thead>
          <tbody>
            {sarjataulukko.map((joukkue) => (
              <tr key={joukkue.joukkue}>
                <td width={"5%"}>{joukkue.pos}.</td>
                <td width={"35%"}>
                  <div className="joukkue">
                    <img
                      src={joukkue.imgUrl}
                      alt={joukkue.joukkue}
                      className="shared-img"
                    />
                    <div className="joukkue-nimi">{joukkue.joukkue}</div>
                  </div>
                </td>
                <td>{joukkue.ott}</td>
                <td>{joukkue.v}</td>
                <td>{joukkue.t}</td>
                <td>{joukkue.h}</td>
                <td>{joukkue.tm}</td>
                <td>{joukkue.pm}</td>
                <td>{joukkue.p}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SuomisarjaSarjataulukko;
