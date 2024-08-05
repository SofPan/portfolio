import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Socials = () => {
  return(
    <aside className="socials flex flex-column">
      <h3>Follow Me: </h3>
      <ul className="flex socials-list">
        <li><a href="#LinkedIn"><LinkedInIcon /></a></li>
        <li><a href="#GitHub"><GitHubIcon /></a></li>
        <li><a href="#Instagram"><InstagramIcon /></a></li>
        <li><a href="#TikTok">X</a></li>
      </ul>
    </aside>
  );
}

export default Socials;