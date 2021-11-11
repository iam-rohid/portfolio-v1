import { IOptions, RecursivePartial } from "react-tsparticles";

const particlesConfig = (props: {
  particlesColor: string;
}): RecursivePartial<IOptions> => {
  return {
    fpsLimit: 60,
    interactivity: {
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.5,
          size: 40,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: props.particlesColor,
      },
      links: {
        color: props.particlesColor,
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 800,
        },
        value: 20,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        random: true,
        value: 3,
      },
    },
    detectRetina: true,
  };
};

export default particlesConfig;
