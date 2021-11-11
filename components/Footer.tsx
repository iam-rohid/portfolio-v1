import axios from "axios";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [githubProfile, setGithubProfile] = useState(null);

  const fetchGithubProfile = async () => {
    const res = await axios.get("https://api.github.com/users/rohid-hub");

    console.log(res);
    setGithubProfile(res.data);
  };

  useEffect(() => {
    fetchGithubProfile();
  }, []);

  if (!githubProfile) return null;

  return (
    <footer>
      <div className="container flex flex-col items-center justify-center py-14">
        <a href={`https://github.com/${githubProfile.login}`} target="_blank">
          <p>
            Designed and Developed by{" "}
            <span className="font-semibold">{githubProfile.name}</span>
          </p>
        </a>
        <div className="flex flex-row items-center justify-center gap-2 flex-wrap">
          <a
            href="https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Frohid-hub"
            target="_blank"
          >
            <p>Followers {githubProfile.followers}</p>
          </a>
          <a
            href={`https://github.com/${githubProfile.login}?tab=repositories`}
            target="_blank"
          >
            <p>Repositories {githubProfile.public_repos}</p>
          </a>
          <a
            href={`https://gist.github.com/${githubProfile.login}`}
            target="_blank"
          >
            <p>Gists {githubProfile.public_gists}</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
