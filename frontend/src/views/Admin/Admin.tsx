import { useState } from "react";
import { Button } from "@mui/material";
import PlayerAddForm from "../../components/PlayerCreateForm/PlayerCreateForm";
import PlayersList from "../../components/PlayersList/PlayersList";
import PostsList from "../../components/posts/PostsList";
import PostAddForm from "../../components/posts/PostAddForm";
// this is for the Authenticator's texts
import { Authenticator, translations } from "@aws-amplify/ui-react";
import { I18n } from "aws-amplify";
I18n.putVocabularies(translations);
I18n.setLanguage("en");
I18n.putVocabulariesForLanguage("en", {
  "Sign in": "Kirjaudu sisään",
  Email: "Sähköposti",
  "Enter your Email": "Syötä sähköposti",
  Password: "Salasana",
  "Enter your Password": "Syötä salasana",
  "Forgot your password?": "Unohditko salasanasi?",
  "Reset Password": "Uusi salasana",
  "Send code": "Lähetä koodi",
  "Back to Sign In": "Takaisin kirjautumiseen",
});

function Admin() {
  const [refreshPlayers, setRefreshPlayers] = useState(false);
  const [refreshPosts, setRefreshPosts] = useState(false);

  function handleRefreshPlayers() {
    setRefreshPlayers(!refreshPlayers);
  }

  function handleRefreshPosts() {
    setRefreshPosts(!refreshPosts);
  }

  return (
    <Authenticator hideSignUp={true}>
      {({ signOut, user }) => (
        <div>
          <h1>Admin</h1>
          <Button onClick={signOut}>Kirjaudu ulos</Button>
          <h2>Uutiset</h2>
          <PostAddForm onAddPost={handleRefreshPosts} />
          <br></br>
          <PostsList
            key={refreshPosts ? "refreshedPosts" : "not-refreshedPosts"}
            onEditPost={handleRefreshPosts}
            onDeletePost={handleRefreshPosts}
          />
          <br></br>
          <h2>Pelaajat</h2>
          {/* forces refresh to the PlayersList component,
          this was just easier than to change the code to use hooks properly for refresh in PlayersList */}
          <PlayerAddForm onAddPlayer={handleRefreshPlayers} />
          <br></br>
          <PlayersList
            key={refreshPlayers ? "refreshedPlayers" : "not-refreshedPlayers"}
            onDeletePlayer={handleRefreshPlayers}
            onEditPlayer={handleRefreshPlayers}
          />
        </div>
      )}
    </Authenticator>
  );
}

export default Admin;
