<div id="top"></div>

---

# Ubuntu in WSL - Quickstart

My personal guide to install Ubuntu and configure basic tools in WSL.

## Getting Started

This is an example of how you install Ubuntu in Windows Subsystem for Linux.

### Install WSL

- You can install everything you need to run Windows Subsystem for Linux (WSL) by entering this command in an **administrator** PowerShell or Windows Command Prompt and then restarting your machine.
  ```
  wsl --install
  ```
- Try running `wsl --list --online` to see a list of available distros and run `wsl --install -d <DistroName>` to install a distro. Example installing Ubuntu:
  ```
  wsl --install -d Ubuntu
  ```

### Set up your Linux username and password

Once the process of installing your Linux distribution with WSL is complete, open the distribution (Ubuntu by default) using the Start menu. You will be asked to create a **User Name** and **Password** for your Linux distribution.

- This **User Name** and **Password** is specific to each separate Linux distribution that you install and has no bearing on your Windows user name.
- Once you create a **User Name** and **Password**, the account will be your default user for the distribution and automatically sign-in on launch.
- This account will be considered the Linux administrator, with the ability to run `sudo` (Super User Do) administrative commands.
- Each Linux distribution running on WSL has its own Linux user accounts and passwords. You will have to configure a Linux user account every time you add a distribution, reinstall, or reset.

### Update and upgrade packages

I recommend that you regularly update and upgrade your packages using the preferred package manager for the distribution. For Ubuntu or Debian, use the command:

```
sudo apt update && sudo apt upgrade
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Setup basic tools in Ubuntu

### Update Git

- To check your Git version, run `git --version` from your command-line.
- Add git-core PPA `sudo add-apt-repository ppa:git-core/ppa`.
- Install a new version of Git `sudo apt update && sudo apt install git`.

### Install ZSH and Oh my ZSH

- Run `zsh --version` to check if you have it.
- If you see `command 'zsh' not found` you don't have zsh installed. To install run `sudo apt install zsh`.
- Verify installation by running `zsh --version`.
- Once you have zsh, you can install Oh My Zsh by simply running one of these commands:

  | Method      | Command                                                                                           |
  | ----------- | ------------------------------------------------------------------------------------------------- |
  | curl (used) | `sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"` |
  | wget        | `sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"`   |
  | fetch       | `sh -c "$(fetch -o - https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"` |

### Personalize your theme

- Use this guide to get my ZSH theme: https://github.com/refpx/refpx-zsh-theme.

### Install Node and Yarn with NVM

- To check your NVM version, run `nvm --version` from your command-line.
- If you see `command 'nvm' not found` you don't have zsh installed. To install run `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash`.
- Restart your terminal.
- Install the current release of Node.js (for testing latest Node.js features and improvements, but more likely to have issues): `nvm install node` or LTS version `nvm install --lts`
- NPM is installed with Node, after that install yarn: `npm install --global yarn`

<p align="right">(<a href="#top">back to top</a>)</p>

## Configure accounts

- Docker: docker login
- NPM: npm login
  - npm config set init-author-name "Fredy Romero"
  - npm config set init-author-email "romeroespinoza.fp@gmail.com"
  - npm config set init-licsense "MIT"
- GIT:
  - Create a SSH KEY
  - git config --global user.name "Fredy Romero"
  - git config --global user.email "romeroespinoza.fp@gmail.com"
  - git config --global init.defaultBranch main

<p align="right">(<a href="#top">back to top</a>)</p>
