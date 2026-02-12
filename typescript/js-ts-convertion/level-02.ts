// JS Snippet 2
// const user = {
//   id: 101,
//   username: "admin_user"
//   // Note: 'email' is missing here, but logic handles it
// };

// function sendEmail(u) {
//   if (u.email) {
//     console.log(`Sending to ${u.email}`);
//   } else {
//     console.log("No email found for " + u.username);
//   }
// }

//JS -> TS
interface User1 {
  id: number;
  username: string;
  email?: string;
}

const user: User1 = {
  id: 101,
  username: "admin_user",
};

function sendEmail(u: User1): void {
  if (u.email) {
    console.log(`Sending to ${u.email}`);
  } else {
    console.log("No email found for " + u.username);
  }
}
