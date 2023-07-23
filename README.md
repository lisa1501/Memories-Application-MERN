## Installation

- `git clone <this_url> && cd <repo_name>`
- install npm on client and server. do the cd on 2 separate terminals
  - `cd client`
  - `nvm use 18.13.0`
  - `npm install`
  - `cd server`
  - `nvm use 18.13.0`
  - `npm install`
 - in your server terminal, run npm start
 - in your client terminal, run npm start
- This project uses mongoose. Please install mongoose to your computer if you don't have it.

- Next create a .env file in server. It should contain the following information.
```bash
MONGO_URL = " "

```
- Next create a .env file in client. It should contain the following information.
```bash
REACT_APP_GOOGLE_CLIENT_ID=
REACT_APP_SERVER_URL=http://localhost:8080
```
## 
