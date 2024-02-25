const {account,client, ID}  = useAppwrite()

// async function CreateAccount(email: string, password: string, name : string, data:Object): Promise<any> {
//   try {
//     const result = await account.create(ID.unique(), email, password, name)
//     //ajouter les autre information qui vienne de data dans la base de donnée en prénant en compte 
//     //• si result est succès  tu ajoute les data dans la base de de donnée dans la collection user que tu vas créer 
//     //• et afficher un toast pour dire que incription effectué ou pas !
//     return result;
//   } catch (error) {
//     throw new Error(`desolé nous avons recontrer une erreur: ${error}`);
//   }
// }

async function CreateAccount(email: string, password: string, name: string, data: Object): Promise<any> {
  try {
    const result = await account.create(ID.unique(), email, password, name);
    if (result) {
      const userCollection = await database.collection("users");
      await userCollection.doc(result.$id).set({
        ...data,
      });
      return result;
    } else {
      throw new Error(`Échec de la création du compte: ${result}`);
    } 
  } catch (error) {
    throw new Error(`Désolé, nous avons rencontré une erreur: ${error}`);
  }
}

async function ReinitialiseCompte(email: string): Promise<any> {
  try {
    const result = await account.createRecovery("email", "");
    return result;
  } catch (error) {
    throw new Error(`desolé nous avons recontrer une erreur de modification: ${error}`);
  }
}

async function Login(email: string, password: string): Promise<any> {
  try {
    const result = await account.createSession("email", "password");
    return result;
  } catch (error) {
    throw new Error(`desolé nous ne pouvons pas: ${error}`);
  }
}