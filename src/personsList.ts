export interface personObj {
  Name: string;
  "Favorite Food": string;
  "Favorite Movie": string;
  Status: "Active" | "Inactive";
  lastTimeRun?: Date;
}

export type fieldTypes = "Name" | "Favorite Food" | "Favorite Movie" | "Status";

let rockyObj: personObj = {
  Name: "Rocky",
  "Favorite Food": "Sushi",
  "Favorite Movie": "Back to The Future",
  Status: "Inactive",
};
let miroslavObj: personObj = {
  Name: "Miroslav",
  "Favorite Food": "Steak",
  "Favorite Movie": "American Psycho",
  Status: "Active",
};
let donnyObj: personObj = {
  Name: "Donny",
  "Favorite Food": "Singapore chow mei fun",
  "Favorite Movie": "The Princess Bride",
  Status: "Inactive",
};
let mattObj: personObj = {
  Name: "Matt",
  "Favorite Food": "Brisket Tacos",
  "Favorite Movie": "The Princess Bride",
  Status: "Active",
};

let reneObj: personObj = {
  Name: "Rene",
  "Favorite Food": "Pizza",
  "Favorite Movie": "Shrek",
  Status: "Active",
};

let personsList: personObj[] = [
  rockyObj,
  miroslavObj,
  donnyObj,
  mattObj,
  reneObj,
];

export default personsList;
