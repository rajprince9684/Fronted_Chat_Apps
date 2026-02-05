import { Attachment, Group } from "@mui/icons-material";


export const sampleChats = [
  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "jone Done",
    _id: "1",
    groupChat: false,
    members: ["1", "2"],
  },

  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],

    name: "jone boi",
    _id: "2",
    groupChat: false,
    members: ["1", "2"],
  },



];


export const sampleUsers = [

  {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "jone Done",
    _id: "15",

  },
  {

    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "jone boi",
    _id: "16",

  },
];

export const sampleNotifications = [
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "Raj",
    },
    _id: "17",

  },
  {
    sender: {
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "Raj",
    },
    _id: "18",
  },



];

export const sampleMessage = [
  {
    Attachments: [

    ],
    content: "hello",
    _id: "ggrr",
    sender: {
      _id: "usef",
      name: "Prince",

    },
    chat: "chatId",
    createdAt: '2025-07-08T00:00:00.000Z',
  },


  {
    Attachments: [
      {
        public_id: "asd2",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "bahut badash hpo be",
    _id: "grr",
    sender: {
      _id: "wefwef",
      name: "proncr1",

    },
    chat: "chatId2",
    createdAt: '2025-07-08T00:00:00.000Z',
  },


];



export const doshbordData = {
  users: [
    {

      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "jone Done",
      _id: "1",
      username: "jon_don",
      friends: 2,
      Groups: 5,
    },
    {

      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      name: "jone Done",
      _id: "2",
      username: "jon_don",
      friends: 2,
      Groups: 5,
    },
  ],





  chats: [
    {
      name: "School Group",
      _id: "1",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      username: "jon_don",
      friends: 2,
    groupChat: false,
   members:[
      {_id:"1",avatar:"https://www.w3schools.com/howto/img_avatar.png"  },
      {
        _id:"2",avatar :"https://www.w3schools.com/howto/img_avatar.png"
      },

    ],
totalMembers:"2",
totalMassages:20,
creator:{
  name:"Jon don",
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],

},
    },

 {
      name: "Boys Groups",
      _id: "2",
      avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
      username: "jon_don",
      friends: 2,
    groupChat: true,
    members:[
      {_id:"1",avatar:"https://www.w3schools.com/howto/img_avatar.png"  },
      {
        _id:"2",avatar :"https://www.w3schools.com/howto/img_avatar.png"
      },

    ],
totalMembers:"2",
totalMassages:"20",
creator:{
  name:"Jon don",
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],

},
    },
  ],


  massages:[
 {
  Attachment:[],
 content: "bahut badash hpo be",
    _id: "grr",
     groupchats:false,
 sender: {
      _id: "wefwef",
      name: "proncr1",

    },
   chat: "chatId2",
    createdAt: '2025-07-08T00:00:00.000Z',
 },


  {
    Attachments: [
      {
        public_id: "asd2",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      },
    ],
    content: "bahut badash hpo be",
    _id: "grr",
    groupchats:true,
    sender: {
      avatar: "https://www.w3schools.com/howto/img_avatar.png",
      name: "proncr1",

    },
    chat: "chatId2",
    createdAt: '2025-07-08T00:00:00.000Z',
  },



  ],
}


