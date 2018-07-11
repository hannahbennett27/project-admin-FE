// Get all users from Firebase database: 

/**/ src/firebase/db/users.js /**/

export const getUsers = () => db.ref("users").once("value");

///////////////////////////////////////////////////////////////////////////

/**/ src/components/Account.js /**/

import { dbusers } from "../firebase";

/**/

state = {
    users: null
  };

  componentDidMount() {
    dbusers.getUsers().then(snapshot => {
      console.log(snapshot.val());
      this.setState(() => ({ users: snapshot.val() }));
    });
  }