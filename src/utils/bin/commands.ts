// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
let audio: HTMLAudioElement;

let radioOn: boolean = false;
let currTrack = -1;
let index = 0;



function validSearchTerm(array: string[]) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.match(/^[0-9a-zA-Z]+$/)) {
            return true;
        }
    }
    return false;
}

// Help
export const help = async (args: string[]): Promise<string> => {
    const commands = Object.keys(bin).sort().join(', ');
    var c = '';
    for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
        if (i % 7 === 0) {
            c += Object.keys(bin).sort()[i - 1] + '\n';
        } else {
            c += Object.keys(bin).sort()[i - 1] + ' ';
        }
    }
    return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'neofetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
    setTimeout(() => {
        window.open(`${config.repo}`);
    }, 1);
    return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
    return `Hi, I am ${config.name}. 
Welcome to this website!
More about me:
'github' - my coding repository
'neofetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
    setTimeout(() => {
        window.open(`${config.resume_url}`);
    }, 1);
    return 'Opening resume...';
};

// Donate
// export const donate = async (args: string[]): Promise<string> => {
//   return `thank you for your interest. 
// here are the ways you can support my work:
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
// - <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.patreon}" target="_blank">patreon</a></u>
// `;
// };

// Contact
export const email = async (args: string[]): Promise<string> => {
    setTimeout(() => {
        window.open(`mailto:${config.email}`);
    }, 1);
    return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
    setTimeout(() => {
        window.open(`https://github.com/${config.social.github}/`);
    }, 1);
    return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
    setTimeout(() => {
        window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);
    }, 1);
    return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {

    if (args.length == 0 || !validSearchTerm(args)) {
        return `Usage: google [query]`;
    }

    setTimeout(() => {
        window.open(`https://google.com/search?q=${args.join(' ')}`);
    }, 1);
    return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {

    if (args.length == 0 || !validSearchTerm(args)) {
        return `Usage: duckduckgo [query]`;
    }

    setTimeout(() => {
        window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
    }, 1);

    return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {

    if (args.length == 0 || !validSearchTerm(args)) {
        return `Usage: bing [query]`;
    }

    setTimeout(() => {
        window.open(`https://bing.com/search?q=${args.join(' ')}`);

    }, 1);
    return `Wow, really? Are you really using bing for ${args.join(' ')}?`;
};

// export const reddit = async (args: string[]): Promise<string> => {
//   window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
//   return `Searching reddit for ${args.join(' ')}...`;
// };

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
    return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
    return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
    return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
    return `unfortunately, i cannot afford more directories.`;
};

export const date = async (args: string[]): Promise<string> => {
    return 'Sure!... Oh, I mean - yes, of course:\n' + new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
    return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
    return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
    return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
    return `you know what? just use vscode.`;
};

// export const sudo = async (args?: string[]): Promise<string> => {
//   window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
//   return `Permission denied: with little power comes... no responsibility? `;
// };

// export const clear = async(args: string[]): Promise<string> => {
//     return;
// };

export const website = async (args: string[]): Promise<string> => {
    setTimeout(() => {
        window.open(`https://lohchness.github.io/`);
    }, 1);
    return 'Opening other website...';
}

export const spotify = async (args: string[]): Promise<string> => {
    setTimeout(() => {
        window.open(`https://open.spotify.com/playlist/41jP5SGBU7RScwKA8cZIQa?si=5d0a5f7c43454dab/`);
    }, 1);
    return 'Opening my playlist!';
}

// Banner
export const banner = (args?: string[]): string => {
    return `

     ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░                                ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░
      ▓██████████████████▒          B A N N E R             ▓███████████████████▒
       ▒██▓▓▓▓▓▓▓▓▓▓▓▓██                                    ▒██▓▓▓▓▓▓▓▓▓▓▓▓▓██
        ▓██▓▓▓▓▓▓▓▓▓▓██░                                      ▓██▓▓▓▓▓▓▓▓▓▓▓██░
        ▒▓▓███▓██▓███▓▓                                       ▒▓▓███▓██▓███▓▓
           ██▓ ██ ▓██▓                                           ██▓ ██ ▓██
           ██▓ ██ ▓██▓       ██▓     ▒█████   ██ ▄█▀ ██▓         ██▓ ██ ▓██
           ██▓ ██ ▓██▓      ▓██▒    ▒██▒  ██▒ ██▄█▒ ▓██▒         ██▓ ██ ▓██
           ██▓ ██ ▓██▓      ▒██░    ▒██░  ██▒▓███▄░ ▒██▒         ██▓ ██ ▓██
           ██▓ ██ ▓██▓      ▒██░    ▒██   ██░▓██ █▄ ░██░         ██▓ ██ ▓██
           ██▓ ██ ▓██▓      ░██████▒░ ████▓▒░▒██▒ █▄░██░         ██▓ ██ ▓██
           ██▓ ██ ▓██▓      ░ ▒░▓  ░░ ▒░▒░▒░ ▒ ▒▒ ▓▒░▓           ██▓ ██ ▓██
           ██▓ ██ ▓██▓      ░ ░ ▒  ░  ░ ▒ ▒░ ░ ░▒ ▒░ ▒ ░         ██▓ ██ ▓██
           ██▓ ██ ▓██▓          ░ ░   ░ ░ ░ ▒  ░ ░░ ░  ▒ ░       ██▓ ██ ▓██
           ██▓ ██ ▓██▓          ░  ░    ░ ░  ░  ░    ░           ██▓ ██ ▓██
           ██▓ ██ ▓██▓        ░         ░           ░            ██▓ ██ ▓██
           ██▓ ██ ▓██▓                 ░              ░          ██▓ ██ ▓██
      ████████████████████      ░      ░                    ████████████████████
      █████▓████▓███▓█████                                  █████▓███▓████▓█████
      ██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██                                  ██▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██
    ████████████████████████                              ████████████████████████

Type 'help' to see the list of available commands.
Type 'github' to see my coding repository.
Type 'neofetch' to display summary.
Type 'website' to open my other website.
Type 'readme' for a short introduction.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};

export const glyph = (args?: string[]): string => {

    return `
                   @                                        (*                  
                ,@%                                           @@                
              *@@                                               @@              
            ,@@*                                                 @@@            
           @@@/                                                   @@@/          
          @@@@                                                    ,@@@#         
    @@*  @@@@#                                                    ,@@@@,  @@(   
  @@@@  &@@@@(                                                     @@@@@  .@@@( 
 @@@@/  &@@@@                                                      @@@@@.  @@@@#
%@@@@/  @@@@@                                                      @@@@@@  @@@@@
@@@@@/  @@@@@#                                                    ,@@@@@@  @@@@@
@@@@@/  @@@@@@/        *@@@@@,                     @@@@@@,        @@@@@@@  @@@@@
@@@@@/  &@@@@@@@# ##@@@@@@/                          ,@@@@@@&# (@@@@@@@@.  @@@@@
@@@@@/   @@@@@@@@@@@& @@/                               @@  @@@@@@@@@@@,   @@@@@
@@@@@/     @@@@&    /@@/                                 @@@    %@@@@&    .@@@@@
@@@@@@*            @@@@(@@@@@@@@,               #@@@@@@@@#@@@*            @@@@@@
@@@@@@@,          @@@@@@@@@@@@@@@@@           @@@@@@@@@@@@@@@@,          @@@@@@@
 @@@@@@@          @@@@    %@@@@@@@@@        &@@@@@@@@@    ,@@@@         &@@@@@@*
 .@@@@@@@        /@/  ,%@@/  @@@@@@@        &@@@@@@%  @@@&   &@        %@@@@@@% 
  ,@@@@@@@          @@@@@@@@@ /@@@@@        .@@@@@./@@@@@@@@&         #@@@@@@@  
   *@@@@@@@      &@&@@@@@@@@@@ @@@@.  ,@@@/  @@@@((@@@@@@@@@@@@.     (@@@@@@@   
    ,@@@@@@@& ,@%       @@@@@@%*@@, @@&   @@. @@@ @@@@@@(       @@ .@@@@@@@@    
     .@@@@@@@@/          @@@@@@*@.(@@  %@* ,@@ @%*@@@@@@ %%*      @@@@@@@@@     
       %@@@@#     @@@@@@*%@@@@@  @@  @@@@@@*  @& *@@@@@ @@@@@@,     @@@@@       
         @@    ,@@@@@@@@*%@@@@@@&  ,@@@@@@@@/  .@@@@@@@ @@@@@@@@@     @.        
             ,@@@  @@@@@  @@@@,     *@@@@@@@     .@@@@@ .@@@@@@@@@@             
            @@@@@. @@@    @@  @@@@@@  @@@@  @@@@@@( %@@   *@@@@@@@@@            
           ,@@@@@@@%       ,@@@@@@@@@      %@@@@@@@@@        @@@@@@@(           
            @@@@@@@@@@&@@@@   #@@@@@@       @@@@@@,  *@@@(#@@@@@@@@@(           
             @@@@@@@@@@@.    &@@@@@@        &@@@@@@     @@@@@@@@@@@#            
                &&&&      .@@@@@@@@@        .@@@@@@@@@      /&&&&               
                        %@( (@@@@@@@/       @@@@@@@%. (@                        
                      *#     @@@@@@@@      %@@@@@@@/     .                      
                           @@  @@@@@@      #@@@@@  (@,                          
                         &@    *@@@@@       @@@@@    &@*                        
                       &@(     *@@@@        &@@@@      @@                       
                     ,@@@      @@@@@        &@@@@       @@@                     
                    @@@@@      @@@@@         @@@@#      @@@@/                   
                   @@@@@@@    ,@@@@@         @@@@#     @@@@@@                   
                   @@@#       ,@@@@@  @   @  @@@@@@      #@@@@                   
                              ,@@@@@@@    @@@@@@@@                              
                                @@@@        /@@@            
                               
                                      You
                               Always about dreams
                                 My soul weeps
                                    Farewell
                                  weeping soul
                             My dreams about, always
                                      You
`

};

export const cat = async (args?: string[]): Promise<string> => {
    return `meow :3`;
};

const songs = [
    { name: 'julie - lochness ', file: 'music6.mp3' },
    { name: 'mflo - Cosmic Night Run ', file: 'music1.mp3' },
    { name: 'The Birthday Massacre - One ', file: 'music2.mp3' },
    { name: 'GUNSHIP - Thrasher ', file: 'music5.mp3' }

    // add more songs here
];

export const radiolist = async (args: string[]): Promise<string> => {
    const songNames = songs.map(song => song.name);
    const result = songNames.join('\n');
    return result;
}

export const radio = async (args: string[]): Promise<string> => {

    if (!radioOn || (audio && audio.ended)) {
        // const index = Math.floor(Math.random() * songs.length);
        currTrack = index % songs.length;
        index++;
        const song = songs[currTrack];
        audio = new Audio(song.file);
        audio.play();
        radioOn = true;
        return `Now playing: ${song.name} ...
- 'radionext' to play next track
- 'radiopause' to play/pause the music
- 'radiolist' to see list`;
    }

    return `Radio is initialized, use 'radionext' or 'radiopause'`;
};

export const radionext = async (args: string[]): Promise<string> => {

    // remove radio here
    if (audio) {
        audio.pause();
        audio.src = '';
        audio.load();
        audio.parentNode?.removeChild(audio);
        audio = null;
        radioOn = false;
    }

    currTrack = index % songs.length;
    index++;
    const song = songs[currTrack];
    audio = new Audio(song.file);
    audio.play();
    radioOn = true;
    return `Now playing: ${song.name} ...
- 'radionext' to play next track
- 'radiopause' to play/pause the music
- 'radiolist' to see list`;
};

export const radiopause = async (args: string[]): Promise<string> => {
    if (audio) {
        if (audio.paused) {
            audio.play();
            return `Radio playing.`;
        }
        else {
            audio.pause();
            return `Radio paused.`;
        }
    }
    return;
}

// export const radiostop = async (args: string[]): Promise<string> => {
//     const index = Math.floor(Math.random() * songs.length);
//     const song = songs[index];
//     if (audio && !audio.paused) {
//       audio.pause();
//       audio.src = '';
//       audio.load();
//       audio.parentNode?.removeChild(audio);
//       audio = null;
//       audio = new Audio(song.file);
//       return `Music stopped.`;
//     } else {
//       return `Music is not currently playing.`;
//     }
// };

//   export const radioremove = async (args: string[]): Promise<string> => {
//     if (audio) {
//       audio.pause();
//       audio.src = '';
//       audio.load();
//       audio.parentNode?.removeChild(audio);
//       audio = null;
//       radioOn = false;
//       return `Music element removed.`;
//     } else {
//       return `Music is not currently playing.`;
//     }
// };


// export const font = (args?: string[]): Promise<string> => {

//     let el:HTMLElement = document.getElementById('@fontface');

//     // el = 'Comic-Sans';/
//     // el.font-family
//     // el?.style.setProperty()
//     // el?.style.setProperty('font-family', 'Comic-Sans');

//     return;
// }