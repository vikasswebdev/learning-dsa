/* Sets */

class MySet {
  // the var collection will hold the set
  collection = ["a", "b"];

  // this method will check for the presence of an element and return true or false
  has = (element) => {
    return this.collection.indexOf(element) !== -1;
  };

  // this method will return all the values in the set
  values = () => {
    return this.collection;
  };

  // this method will add an element to the set
  add = (element) => {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  };

  // this method will remove an element from a set
  remove = (element) => {
    if (this.has(element)) {
      let index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  };

  // this method will return the size of the collection

  size = () => {
    return this.collection.length;
  };

  // this method will return the union of two sets
  union = (otherSet) => {
    var unionSet = new MySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();

    firstSet.forEach((ele) => {
      unionSet.add(ele);
    });

    secondSet.forEach((ele) => {
      unionSet.add(ele);
    });

    return unionSet;
  };

  // this method will return the difference of two sets as a new set

  intersection = (otherSet) => {
    var intersectionSet = new MySet();
    var firstSet = this.values();

    firstSet.forEach((ele) => {
      intersectionSet.add(ele);
    });
    return intersectionSet;
  };

  // this method will return the difference of two sets as a new set

  difference = (otherSet) => {
    var differenceSet = new MySet();
    var firstSet = this.values();

    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };

  subset = (otherSet) => {
    var firstSet = this.values();

    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}

const set = new MySet();

const SetA = new MySet();
SetA.add("setA");
console.log("setA", SetA.values());

const SetB = new MySet();
SetB.add("setB");
console.log("setB", SetB.values());

const unionSet = SetA.union(SetB);
console.log("union set", unionSet.values());

const intersectionSet = SetA.intersection(SetB);
console.log("intersectionSet", intersectionSet.values());

const differenceSet = SetA.difference(SetB);
console.log("differenceSet", differenceSet.values());

const subSet = SetA.subset(SetB);

// console.log(set.add("b"));

// console.log(set.remove("a"));

// console.log(set.values());
