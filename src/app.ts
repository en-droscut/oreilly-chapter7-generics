// GENERICS CHAPTER

// const names: Array<string> = ["Max", "Manuel"];

// will yeld a 'string'
// const promise: Promise<string> = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then((data) => {
// data.split(" ");
// });

////////////////////////////////////////////////////////////////////

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
  { name: "Max", hobbies: ["Sports"] },
  { age: 30 }
);
console.log(mergedObj);

////////////////////////////////////////////////////////////////////

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";

  if (element.length === 1) {
    descriptionText = "Got one element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }

  return [element, descriptionText];
}

console.log(countAndDescribe(["Sports", "Cooking"]));

////////////////////////////////////////////////////////////////////

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Max" }, "name");

////////////////////////////////////////////////////////////////////

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }

    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");

console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// const objStorage = new DataStorage<object>();
// const maxObj = { name: "Max" };
// objStorage.addItem(maxObj);
// objStorage.addItem({ name: "Manu" });
// // ...
// objStorage.removeItem(maxObj);

// console.log(objStorage.getItems());

////////////////////////////////////////////////////////////////////

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};

  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;

  // return { title: title, description: description, completeUntil: date };
}

const names: Readonly<string[]> = ["Max", "Anna"];
// names.push("Manu"); // error because it's readonly
// names.pop("Max"); // error because it's readonly

////////////////////////////////////////////////////////////////////
