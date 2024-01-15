import { useState } from "react";
import "./Sarjataulukko.css";

const LiigaSarjataulukko = () => {
  const [sarjataulukko, setSarjataulukko] = useState([
    {
      pos: 1,
      imgUrl:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS-9E4SiK6CeT_xxQIBqnKHenHbSEUlu73OEP6UFtwKWSNdo29z",
      joukkue: "Kalpa",
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
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/HIFK-J%C3%A4%C3%A4kiekko.svg/1200px-HIFK-J%C3%A4%C3%A4kiekko.svg.png",
      joukkue: "HIFK",
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
      joukkue: "Ilves",
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
        "https://upload.wikimedia.org/wikipedia/fi/thumb/a/aa/Oulun_K%C3%A4rp%C3%A4t_logo.svg/1200px-Oulun_K%C3%A4rp%C3%A4t_logo.svg.png",
      joukkue: "Kärpät",
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
      joukkue: "HIFK",
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
      joukkue: "HPK",
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
      joukkue: "Kiekko-Espoo",
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
      joukkue: "Kuortane",
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
      joukkue: "Lukko",
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
      joukkue: "RoKi",
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
      joukkue: "TPS",
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

export default LiigaSarjataulukko;
