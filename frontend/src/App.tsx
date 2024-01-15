import { BrowserRouter, Routes, Route } from "react-router-dom";
import Uutiset from "./views/Uutiset/Uutiset";
import Naisleijonat from "./views/Maajoukkueet/Naisleijonat";
import Naisleijonatu18 from "./views/Maajoukkueet/Naisleijonatu18";
import Ulkomailla from "./views/Naiskiekkoulkomailla/Ulkomailla";
import Sanastoa from "./views/Sanastoa/Sanastoa";
import Seurajoukkueet from "./views/Sarjatoiminta/Seurajoukkueet";
import Navbar from "./components/Navbar/Navbar";
import Admin from "./views/Admin/Admin";
import NewsArticle from "./components/Homepage/NewsArticle";
import NewsByTag from "./components/Homepage/NewsByTag";
import LiigaSarjataulukko from "./views/Sarjataulukko/LiigaSarjataulukko";
import Liiganteksti from "./views/Tekstit/LiiganTeksti";
import MestisSarjataulukko from "./views/Sarjataulukko/MestisSarjataulukko";
import Mestisteksti from "./views/Tekstit/MestisTeksti";
import SuomisarjaSarjataulukko from "./views/Sarjataulukko/SuomisarjaSarjataulukko";
import Suomisarjateksti from "./views/Tekstit/SuomisarjaTeksti";
import Tyttokiekkoteksti from "./views/Tekstit/TyttokiekkoTeksti";
import Tueteksti from "./views/Tekstit/TuenaiskiekkoTeksti";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>

      <div>
        <Routes>
          <Route path="/" element={<Uutiset />}></Route>
          <Route
            path="kotimainen-sarjatoiminta/Naisten-liiga"
            element={
              <>
                <h1 style={{ textAlign: "center" }}>Naisten Liiga</h1>
                <LiigaSarjataulukko />
                <Liiganteksti />
              </>
            }
          ></Route>
          <Route
            path="kotimainen-sarjatoiminta/Naisten-mestis"
            element={
              <>
                <h1 style={{ textAlign: "center" }}>Naisten Mestis</h1>
                <MestisSarjataulukko />
                <Mestisteksti />
              </>
            }
          ></Route>
          <Route
            path="kotimainen-sarjatoiminta/Naisten-suomi-sarja"
            element={
              <>
                <h1 style={{ textAlign: "center" }}>Naisten Suomi-Sarja</h1>
                <SuomisarjaSarjataulukko />
                <Suomisarjateksti />
              </>
            }
          ></Route>
          <Route
            path="kotimainen-sarjatoiminta/Seurajoukkueet"
            element={<Seurajoukkueet />}
          ></Route>
          <Route
            path="kotimainen-sarjatoiminta/Tyttokiekko"
            element={
              <>
                <h1 style={{ textAlign: "center" }}>Tyttökiekko</h1>
                <Tyttokiekkoteksti />{" "}
              </>
            }
          ></Route>
          <Route
            path="/maajoukkueet/Naisleijonat"
            element={
              <>
                <h1 style={{ textAlign: "center" }}>Naisleijonat</h1>
                <Naisleijonat />{" "}
              </>
            }
          ></Route>

          <Route
            path="/maajoukkueet/u18-maajoukkue"
            element={
              <>
                <h1 style={{ textAlign: "center" }}>Naisleijonat U18</h1>
                <Naisleijonatu18 />{" "}
              </>
            }
          ></Route>
          <Route
            path="/naiskiekko-ulkomailla/"
            element={
              <>
                <h1 style={{ textAlign: "center" }}>Naiskiekko ulkomailla</h1>
                <Ulkomailla />{" "}
              </>
            }
          ></Route>
          <Route
            path="/jaakiekon-sanastoa"
            element={
              <>
                <h1 style={{ textAlign: "center" }}>Jääkiekon sanastoa</h1>
                <Sanastoa />{" "}
              </>
            }
          ></Route>
          <Route
            path="/tue-naisten-jaakiekkoa"
            element={
              <>
                <h1 style={{ textAlign: "center" }}>Tue naisten jääkiekkoa</h1>
                <Tueteksti />{" "}
              </>
            }
          ></Route>

          <Route path="/uutiset/:id" element={<NewsArticle />} />
          <Route path="/uutiset/kategoria/:tag" element={<NewsByTag />} />

          <Route path="/pajunkissa" element={<Admin />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
