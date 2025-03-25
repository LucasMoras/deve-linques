import { api } from "./services/Api";
import {
  Sun,
  MoonStars,
  GithubLogo,
  InstagramLogo,
  YoutubeLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { ButtonLink } from "./components/button-link";
import { useEffect, useState } from "react";
import { useTheme } from "./context/ThemeContext";

export function App() {
  const [user, setUser] = useState([]);
  const {theme, toggleTheme} = useTheme()
  
  useEffect(() => {
    async function getUserData() {
      try {
        const response = await api.get("/users/LucasMoras");
        setUser(response.data);
      } catch (error) {
        console.log("Erro ao buscar os dados do usuário", error);
      }
    }
    getUserData();
  }, []);

  return (
    <div className={`container ${theme}`}>
      <div className="profile">
        <img
          src={user.avatar_url}
          alt={`Imagem do ${user.name}`}
          className="img-profile"
        />
        <p>@{user.login}</p>
      </div>

      <div className="toggle-container" onClick={toggleTheme}>
        <div className="toggle-switch">
          {theme === "dark" ? <Sun size = {16} /> : <MoonStars size = {16} />}
        </div>
      </div>

      <div className="links">
        <ButtonLink
          name="Inscreva-se no NLW"
          link="https://www.rocketseat.com.br"
        />
        <ButtonLink
          name="Baixar meu e-book"
          link="https://www.rocketseat.com.br"
        />
        <ButtonLink
          name="Veja meu portfólio"
          link="https://www.rocketseat.com.br"
        />
        <ButtonLink
          name="Conheça o Explorer"
          link="https://www.rocketseat.com.br"
        />
      </div>

      <div className="social-media">
        <a href="github.com" target="_blank">
          <GithubLogo size={24} />
        </a>
        <a href="instagram.com" target="_blank">
          <InstagramLogo size={24} />
        </a>
        <a href="youtube.com" target="_blank">
          <YoutubeLogo size={24} />
        </a>
        <a href="linkedin.com" target="_blank">
          <LinkedinLogo size={24} />
        </a>
      </div>
    </div>
  );
}
