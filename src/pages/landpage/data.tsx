import IllustrationRoadmap from "../../assets/landingPage/illustrations/study-illustration.svg";
import IllustrationChallenge from "../../assets/landingPage/illustrations/challenges-illustration.svg";
import IllustrationNews from "../../assets/landingPage/illustrations/news-illustration.svg";

export const sections = [
    {
      layout: "left",
      title: "NÃO SABE POR ONDE COMEÇAR?",
      description:
      (
          <>
          Não se limite, acesse nossos <span className="highlight">Roadmaps</span> com trilhas de aprendizado prontas para guiá-lo ao seu objetivo de ser um Dev.
          </>
      ),
      image: IllustrationRoadmap,
      textButton: "Roadmaps",
      backgroundImage: "black",
      colorButton: "white",
      route: "roadmaps"
    },
    {
      layout: "right",
      title: "NÃO FIQUE DE FORA DAS NOVIDADES DO MUNDO DEV!",
      description:
      (
          <>
          Acesse a nossa aba de <span className="highlight">Notícias</span> para ficar por dentro das notícias do mundo dev, além de ficar atualizado sobre as tecnologias do momento!
          </>
      ),
      image: IllustrationNews,
      textButton: "Notícias",
      backgroundImage: "white",
      colorButton: "white",
      route: "noticias"
    },
    {
      layout: "left",
      title: "COLOQUE A MÃO NA MASSA E CRIE PROJETOS!",
      description:
      (
          <>
          Vá para a página de <span className="highlight">Desafios</span> e se aventure nos desafios que a plataforma te disponibiliza.
          </>
      ),
      image: IllustrationChallenge,
      textButton: "Desafios",
      backgroundImage: "black",
      colorButton: "white",
      route: "desafios"
    },
  ];