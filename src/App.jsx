import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [position,setPosition] = useState(window.location.hash)
  window.addEventListener("hashchange",()=>{
    setPosition(window.location.hash)
  })

  return (
    <>
      <header>
        <nav>
          <a href="#" id="main" className={position =="" ?"active":""}>
            Ana Sayfa
          </a>
          <a href="#portfolyo" id="portfolio" className={position =="#portfolyo" ?"active":""}>
            Portfolyo
          </a>
          <a href="#uygulamalar" id="skills" className={position =="#uygulamalar" ?"active":""}>
            Uygulamalar
          </a>
          <a href="#iletisim" id="connettion" className={position =="#iletisim" ?"active":""}>
            İletişim
          </a>
        </nav>
      </header>

      
      <section className="full main_page">
        <div>
          <img src="/images/profil.jpg" alt="profilFoto" class="profilFoto" />
        </div>
        <div>
          <h1>HAKKIMDA</h1>
          <hr />
          <p className="hakkımda">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            quibusdam cupiditate veniam fugit sapiente. Repellat aperiam autem
            voluptates est cumque ratione accusamus, nobis ut fuga ipsa? Illum
            dolorem assumenda iusto?
          </p>
        </div>
        <div>
          <button class="contactMe"> İletişime Geç</button>
        </div>
      </section>

      
      <section className="full container" id="portfolyo">
        <div id="photoshop">
          <p>Photoshop</p>
          <img src="/images/photoshop.jpg" alt="photoshop" />
        </div>
        <div id="illistrasyon">
          <p>İllustrasyon</p>
          <img src="/images/illistrator.png" alt="illistrasyon" />
        </div>
        <div id="cizim">
          <p>Çizim</p>
          <img src="/images/çizim.jpg" alt="çizim" />
        </div>
        <div id="hentai">
          <p>Hentai Çeviri</p>
          <img src="/images/HÇeviri.jpg" alt="HentaiÇeviri" />
        </div>
      </section>

      
      <section className="full skills" id="uygulamalar">
        <h1 className="skills-text">Kullandığım Uygulamalar</h1>
        <div className="skills-img">
          <div>
            <img src="/images/figma_icon.png" alt="figma_icon.png" />
            <p>Figma</p>
          </div>
          <div>
            <img src="/images/indesign_icon.png" alt="indesign_icon.png" />
            <p>InDesign</p>
          </div>
          <div>
            <img src="/images/photoshop_icon.png" alt="photoshop_icon.png" />
            <p>Photoshop</p>
          </div>
          <div>
            <img src="/images/illustrator_icon.png" alt="illustrator_icon.png"/>
            <p>Illustrator</p>
          </div>
          <div>
            <img src="/images/react.png" alt="react" />
            <p>React</p>
          </div>
          <div>
            <img src="/images/vscode_icon.png" alt="VS Code" />
            <p>VS Code</p>
          </div>
        </div>
      </section>

      
      <section className="full contact" id="iletisim">

           {/* Sosyal medya */}
          <div className="icons">
            <a
              href="https://www.instagram.com/devrimbiceroglu/"
              target="_blank"
            >
              <img
                src="https://img.icons8.com/?size=100&id=32309&format=png&color=DA4343"
                alt="İnstagram"
              />
            </a>
            <a href="https://www.behance.net/devrimali1" target="_blank">
              <img
                src="https://img.icons8.com/?size=100&id=12485&format=png&color=DA4343"
                alt="Behance"
              />
            </a>
            <a href="https://x.com/Devrimali2000" target="_blank">
              <img
                src="https://img.icons8.com/?size=100&id=rQfEoE6vlrLk&format=png&color=DA4343"
                alt="Twitter"
              />
            </a>
            <a href="https://github.com/Dabdee" target="_blank"><img src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=DA4343" alt="Github" /></a>
          </div>
      </section>
    </>
  );
}

export default App;
