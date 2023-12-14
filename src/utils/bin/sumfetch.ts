import config from '../../../config.json';
let s:boolean = true;

const neofetch = async (args: string[]): Promise<string> => {

//   if (config.ascii === 'cveinnt') {
    if (s) {
    s = false;
    return `                                                  
             @@@@@@@@@@@@@                   Loki
        @@@@               @@@@             -----------
      @@                       @@            ABOUT
    @@                           @@          ${config.name}
  @@                               @@       ﰩ ${config.ps1_hostname}
 @@                         @@@     @@       <u><a href="${config.resume_url}" target="_blank">resume</a></u>
@@        @@@                        @@     爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
@@                                   @@     -----------
@@                                   @@      CONTACT 
 @@         @@     @@     @@        @@       <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
  @@         @@   @@ @@  @@        @@        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   @@          @@@     @@         @@         <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
     @@@                        @@@         -----------
        @@@                  @@@ @@         OTHERS 
         @|  @@@@@@@@@@@@@@@@   @@          <u><a href="${config.other_urls.spotify}" target="_blank">playlist</a></u>
         @|                      @@         <u><a href="${config.other_urls.strava}" target="_blank">strava</a></u>

`;
  } else {
    s = true;
    return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  Loki
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ABOUT
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            ${config.name}
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           <u><a href="${config.resume_url}" target="_blank">resume</a></u>
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
▐▓                                 ▐▓       -----------
▐▓      > L O H C H N E S S        ▐▓        CONTACT 
▐▓                                 ▐▓        <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           -----------
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀            OTHERS 
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀               <u><a href="${config.other_urls.spotify}" target="_blank">playlist</a></u>
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                  <u><a href="${config.other_urls.strava}" target="_blank">strava</a></u>

`;
  }
};

export default neofetch;
