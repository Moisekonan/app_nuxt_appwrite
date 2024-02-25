import { Account, Client, ID } from "appwrite";

export function useAppwrite() {
  const client = new Client()
    .setEndpoint(process.env.PROJECT_ID || "")
    .setProject(process.env.APPWRITE_URL || "");

  const account = new Account(client);
  return {
    ID,
    client,
    account,
  };
}

// iD_database = 65da03c0f1db1282e5c1
// apiKey = 71372fd0a783c2e243dce2c16a8089584e46e028cadc39f991ffcfba47411ac636d7da6fa7e5ba5d428ce538c4f9ef3454f011d11c8f0054516b6b477d465b4c7c952a4854297175418c5ea35e0f45a617b2d47eab27f33790545426aa870e3fa41a24c0f52272aff0941415c090dee4518d28dc06782132b0895d79a35ce198