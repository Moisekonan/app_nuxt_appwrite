import { Client, Databases, ID } from "appwrite";

type userType = {
  name: string;
  password: string;
  email: string;
};
const client = new Client();
const databases = new Databases(client);

const runtimeConfig = useRuntimeConfig();

console.log(runtimeConfig.public.DATABASE_ID);
client
  .setEndpoint(runtimeConfig.public.APPWRITE_URL as string) // Cast the argument to string
  .setProject(runtimeConfig.public.PROJECT_ID as string); // Cast the argument to string

export const createUser = async (data: userType) =>
  await databases.createDocument(
    runtimeConfig.public.DATABASE_ID as string, // Cast the argument to string
    runtimeConfig.public.COLLECTION_ID as string, // Cast the argument to string
    ID.unique(),
    data
  );

export const getAllUser = async () => {
  await databases.listDocuments(
    runtimeConfig.public.DATABASE_ID as string,
    runtimeConfig.public.COLLECTION_ID as string
  );
};

// const updateUser = async (database_id, collection_id, document_id, data) =>{

//     databases.updateDocument(database_id, collection_id, document_id, data);

// }
