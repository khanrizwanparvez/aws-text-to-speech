# TEXT-TO-SPEECH using AWS POLLY

**1. Create a React app**

```
npx create-react-app app-name
```

**2. Setup AWS Polly**

- Install aws-sdk to use AWS POLLY

```
npm i aws-sdk
```

- Login to AWS
- Create a IAM user and Open it
- Goto User > Create user
- In Create user select Attach policies directly in Permissions options
- Search polly and Select AmazomPllyFullAccess
- Goto Users and Open the IM user from root User
- Goto Security Credentials > Create Access Keys > Local code
- Goto POLLY and see the Region

- When you declare any Environment variable in react app, start with "REACT*APP*"

**3.Setup AWS.config.update({})**

```
AWS.config.update({
  accessKeyId: process.env.REACT_APP_CLIENTID,
  secretAccessKey: process.env.REACT_APP_SECRETKEY,
  region: process.env.REACT_APP_REGION,
});
```

**4.Initialize Polly**

```
const polly = new AWS.Polly();
```

**5.Make convertToSpeech() functionality**

**Note: When you change anything in .env, you must restart the project again**

**6.Create an Audio Player**

- We will convert the generated ByteStream audio to Blob
- "ref" used for fetch dom element, it point the virtual dom

- Create a progress bar for audio
