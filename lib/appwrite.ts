import { Account, Avatars, Client, ID } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.skshoyeb.aora",
    projectId: "66e8459b0022391f95bd",
    databaseId: "66e846e0001569a451e7",
    userCollectionId: "66e84700002ebdcca21e",
    videoCollectionId: "66e847260023caac55cd",
    storageId: "66e848120018d59efb58"
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.


const account = new Account(client);
const avatars = new Avatars(client);
export const createUser = async (email: string, password: string, username: string) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        );

        if (!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username);

        // await signIn(email, password);

        // const newUser = await databases.createDocument(
        //   appwriteConfig.databaseId,
        //   appwriteConfig.userCollectionId,
        //   ID.unique(),
        //   {
        //     accountId: newAccount.$id,
        //     email: email,
        //     username: username,
        //     avatar: avatarUrl,
        //   }
        // );

        // return newUser;
    } catch (error: any) {
        throw new Error(error);
    }
}