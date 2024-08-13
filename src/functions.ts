/* Instructions: If you get stuck write the portion out you can't complete in 
   pseudo code (try to still be specific about what you would do). Include a 
   question worded how you would ask another member of the development team 
   to gain the information needed to be able to complete the task. Code 
   should be commented. Include a commented section at the top with your name,
   date of development, and purpose of script.

   Add an object for yourself following a similar format. Put each object in 
   an array so you have an array of objects (your choice how to do that). 
   Iterate through the array of objects adding the date the script was run 
   to each object as favorite things may change in the future. Console.log 
   only active records with the Name, date, Favorite movie of each person. 
   Add a function that can sort the output by object property. There may 
   be a time where no Active records are found. Include code that provides 
   a message when that occurs.
*/

/*
    Name: Rene Martinez
    Date of development: August 12th, 2024
    Purpose of script: To show a list of persons with their interests in movies and food. In addition, the list can be sorted by different fields.
*/

import personsList, { fieldTypes } from "./personsList";

const showActives = () => {
  // check if list is not empty
  if (personsList.length) {
    //Iterate through the list
    for (let person of personsList) {
      person.lastTimeRun = new Date();
      if (person.Status === "Active")
        console.log(
          `Name: ${person.Name}\nDate: ${
            person.lastTimeRun.toISOString().split("T")[0]
          }\nFavorite Movie: ${person["Favorite Movie"]}\n`
        );
    }
  } else console.log("Error, no records found in the list.");
};

const sort = (
  field: fieldTypes, //Making sure that only accepts these values
  isAscendent: boolean
) => {
  let sortedList = personsList;
  //check if list is not empty
  if (sortedList.length) {
    if (isAscendent)
      sortedList.sort((a: any, b: any) => a[field].localeCompare(b[field]));
    else sortedList.sort((a: any, b: any) => b[field].localeCompare(a[field]));
    return sortedList;
  } else {
    console.log("Error: no records found in the list.");
    return sortedList;
  }
};

showActives();

export default sort;
