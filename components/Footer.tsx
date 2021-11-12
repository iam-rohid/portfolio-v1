import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const Footer = () => {
  const [githubProfile, setGithubProfile] = useState(null);

  const fetchGithubProfile = async () => {
    const res = await axios.get("https://api.github.com/users/rohid-hub");
    setGithubProfile(res.data);
  };

  useEffect(() => {
    fetchGithubProfile();
  }, []);

  if (!githubProfile) return null;

  return (
    <footer>
      <div className="container flex flex-col items-center justify-center py-14 gap-2">
        <p>
          Designed & Developed by{" "}
          <Link href={`https://github.com/${githubProfile.login}`} passHref>
            <a target="_blank" className="font-bold">
              {githubProfile.name}
            </a>
          </Link>
        </p>
        <div className="flex flex-row flex-wrap gap-8">
          <p>
            <span className="inline-block">Followers</span>
            <span className="font-bold pl-2">{githubProfile.followers}</span>
          </p>
          <p>
            <span className="inline-block">Repositories</span>
            <span className="font-bold pl-2">{githubProfile.public_repos}</span>
          </p>
          <p>
            <span>Gists</span>
            <span className="font-bold pl-2">{githubProfile.public_gists}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
