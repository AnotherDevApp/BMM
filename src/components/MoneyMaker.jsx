import { useState, useRef, useEffect } from "react";
import { AiOutlinePauseCircle, AiOutlinePlayCircle } from "react-icons/ai";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";
import { MdOutlineRestartAlt } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";
import "./styles.css";
import Logo from "./Logo";
import { Cards } from "./Cards";
// import Video from "/src/assets/videoBMM.mp4";
import Portada from "/src/assets/portada.png";
import { About } from "./About";
import { Winners } from "./Winners";
import { PaymentButton } from "./PaymentButton";
import { Warranty } from "./Warranty";

function MoneyMaker() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasShownCover, setHasShownCover] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [lastVideoProgress, setLastVideoProgress] = useState(null);
  // const [showCardComponent, setShowCardComponent] = useState(false);
  const [viewerCount, setViewerCount] = useState(
    Math.floor(Math.random() * (850 - 621 + 1)) + 621
  );
  const videoRef = useRef(null);
  const coverImageRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const lastTime = localStorage.getItem("videoCurrentTime");
    if (lastTime !== null) {
      setLastVideoProgress(parseFloat(lastTime));
    } else {
      setLastVideoProgress(null);
    }
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setLastVideoProgress(null);
    } else {
      video.pause();
    }
    setIsPlaying(!video.paused);
  };

  const restartVideo = () => {
    localStorage.removeItem("videoCurrentTime");
    const video = videoRef.current;
    video.currentTime = 0;
    video.play();
    setIsPlaying(true);
    setLastVideoProgress(null);
  };

  const continueVideo = () => {
    const video = videoRef.current;
    if (lastVideoProgress !== null) {
      video.currentTime = lastVideoProgress;
      video.play();
      setIsPlaying(true);
      setLastVideoProgress(null);
    }
  };

  const updateProgressBar = (progressBar, video) => {
    const currentTime = video.currentTime;
    const duration = video.duration;
    let progress;

    if (currentTime < duration * 0.05) {
      progress = (currentTime / (duration * 0.05)) * 25;
    } else if (currentTime < duration * 0.2) {
      progress =
        25 + ((currentTime - duration * 0.05) / (duration * 0.15)) * 25;
    } else if (currentTime < duration * 0.5) {
      progress = 50 + ((currentTime - duration * 0.2) / (duration * 0.3)) * 25;
    } else if (currentTime < duration * 0.75) {
      progress = 75 + ((currentTime - duration * 0.5) / (duration * 0.25)) * 10;
    } else if (currentTime < duration * 0.85) {
      progress = 85 + ((currentTime - duration * 0.75) / (duration * 0.1)) * 10;
    } else {
      progress = 95 + ((currentTime - duration * 0.85) / (duration * 0.15)) * 5;
    }

    // if (currentTime > 10) {
    //   setShowCardComponent(true);
    // }

    progressBar.style.width = progress + "%";
    progressBar.style.transition = "width 0.5s linear";

    localStorage.setItem("videoCurrentTime", currentTime);
  };

  const handleFullscreenToggle = () => {
    const videoContainer = document.querySelector(".video-container");

    if (!isFullscreen) {
      if (videoContainer.requestFullscreen) {
        videoContainer.requestFullscreen();
      } else if (videoContainer.mozRequestFullScreen) {
        videoContainer.mozRequestFullScreen();
      } else if (videoContainer.webkitRequestFullscreen) {
        videoContainer.webkitRequestFullscreen();
      } else if (videoContainer.msRequestFullscreen) {
        videoContainer.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const videoContainer = document.querySelector(".video-container");
    let lastTouch = 0;

    videoContainer.addEventListener("touchend", () => {
      const now = new Date().getTime();
      const delta = now - lastTouch;
      if (delta < 300) {
        if (!document.fullscreenElement) {
          videoContainer.requestFullscreen();
        } else {
          document.exitFullscreen();
        }
      }
      lastTouch = now;
    });

    const video = videoRef.current;
    const progressBar = progressBarRef.current;
    const lastTime = localStorage.getItem("videoCurrentTime");
    if (lastTime) {
      video.currentTime = parseFloat(lastTime);
    }

    video.addEventListener("ended", () => {
      setIsPlaying(false);
    });

    video.addEventListener("timeupdate", () => {
      updateProgressBar(progressBar, video);
    });

    return () => {
      video.removeEventListener("ended", () => {
        setIsPlaying(false);
      });
      video.removeEventListener("timeupdate", () => {
        updateProgressBar(progressBar, video);
      });
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      setHasShownCover(true);
    }
  }, [isPlaying]);

  useEffect(() => {
    const intervalTime = Math.floor(Math.random() * 4) * 1000;

    const interval = setInterval(() => {
      const randomChange = Math.floor(Math.random() * 4) - 1;
      const newViewerCount = Math.max(621, viewerCount + randomChange);

      setViewerCount(newViewerCount);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [viewerCount]);

  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
    document.addEventListener("keydown", (e) => {
      e.preventDefault();
      if (e.keyCode === 123) {
        return false;
      }
    });
  }, []);

  // const cardRef = useRef(null);
  // const handleMouseMove = (e) => {
  //   const card = cardRef.current;
  //   const rect = card.getBoundingClientRect();
  //   const x = e.clientX - rect.left;
  //   const y = e.clientY - rect.top;
  //   card.style.background = `
  //   radial-gradient(farthest-side at ${x}px ${y}px, transparent 10%, rgba(255, 255, 255, 0.4) 20%, rgba(255, 255, 255, 0) 50%)
  //   `;
  // };

  // const handleMouseLeave = () => {
  //   const card = cardRef.current;
  //   card.style.background = "rgba(0, 0, 0, 0.8)";
  // };

  return (
    <>
      <div
        style={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Logo />
        <div className="titleContainer">
          <h1>
            Por tiempo limitado:
            <br />
            <span>Nueva Inteligencia Artificial</span> encuentra partidos de
            alto nivel para saques de esquina y tiene una{" "}
            <span>precisión del 83.57%</span>
          </h1>
        </div>
        <div className="video-container">
          {!isPlaying && lastVideoProgress === null && (
            <div className="playPauseContainer">
              <button
                className="control-button"
                onClick={togglePlayPause}
                title="control button"
              >
                {isPlaying ? (
                  <AiOutlinePauseCircle className="pause-play-Button" />
                ) : (
                  <FaPlayCircle className="pause-play-Button" />
                )}
              </button>
            </div>
          )}
          {!isPlaying && !hasShownCover && lastVideoProgress === null && (
            <div className="imageContainer">
              <img
                ref={coverImageRef}
                src={Portada}
                alt="Portada del video"
                onClick={togglePlayPause}
                style={{
                  display: isPlaying ? "none" : "flex",
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          )}

          {!isPlaying && lastVideoProgress !== null && (
            <div className="reanudarVideoContainer">
              <p className="reanudarTitle">
                ¿Deseas continuar desde donde lo dejaste?
              </p>
              <div className="buttonControl">
                <button onClick={continueVideo} className="buttonControlUnit">
                  <AiOutlinePlayCircle className="controlButtonIcon" />
                  Continuar
                </button>
                <button onClick={restartVideo} className="buttonControlUnit">
                  <MdOutlineRestartAlt className="controlButtonIcon" />
                  Reiniciar
                </button>
              </div>
            </div>
          )}
          <div
            className="custom-progress-bar"
            style={{ display: lastVideoProgress !== null ? "none" : "block" }}
          >
            <div ref={progressBarRef} className="progress"></div>
          </div>
          {/* <video
            ref={videoRef}
            src={Video}
            preload="metadata"
            playsInline
            onClick={togglePlayPause}
            style={{ zIndex: 0 }}
          ></video> */}
          <button
            className={`fullscreen-button ${!isPlaying && "pausedVideo"}`}
            onClick={handleFullscreenToggle}
            title="full screen button"
          >
            {isFullscreen ? <BsFullscreenExit /> : <BsFullscreen />}
          </button>
        </div>

        <div className="peopleWatchingContainer">
          <h2 className="peopleWatching">
            <span>{viewerCount}</span> personas están viendo este vídeo
          </h2>
        </div>

        <Winners />
        <PaymentButton />
      </div>
      <div className="aboutSection">
        <About />
        <PaymentButton />
      </div>

      <div
        style={{
          padding: "16px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <h2
          style={{
            fontSize: "30px",
            color: "orange",
            marginTop: "50px",
          }}
        >
          OFERTA IMPERDIBLE
        </h2>
        <h3
          style={{
            fontSize: "25px",
            color: "white",
            marginBottom: "50px",
          }}
        >
          ELIGE TU PLAN A CONTINUACIÓN
        </h3>
        <Cards />
      </div>

      <div
        style={{
          padding: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "60px",
          backgroundColor: "#040412",
        }}
      >
        <h2
          className="warrantyTitle"
          style={{
            fontSize: "35px",
            color: "orange",
            letterSpacing: "2px",
            margin: "0",
            marginTop: "40px",
          }}
        >
          GARANTÍA
        </h2>
        <h3
          className="warrantyTitle"
          style={{
            fontSize: "30px",
            color: "#040412",
            marginTop: "10px",
            marginBottom: "50px",
            backgroundColor: "orange",
            padding: "8px",
          }}
        >
          INCONDICIONAL
        </h3>
        <Warranty />
        <PaymentButton />
      </div>

      <div className="footer">
        <p>Copyright 2023 - Betplay Money Maker</p>
        <p>
          Este sitio no está afiliado a ninguna plataforma de anuncios. Todo el
          contenido es responsabilidad exclusiva nuestra. Aviso Legal: Todas las
          estrategias e inversiones conllevan un riesgo de pérdida. Ninguna
          información contenida en este producto debe interpretarse como una
          garantía de resultados
        </p>
      </div>
    </>
  );
}

export default MoneyMaker;
