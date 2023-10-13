class CodersArray {
  elements;

  constructor(...elements) {
    this.elements = elements;
  }

  length() {
    let numberElements = 0;
    for (let i = 0; i < this.elements.length; i++) {
      numberElements++;
    }

    return numberElements;
  }

  push(addedValues) {
    const length = this.length();
    this.elements[length] = addedValues;
  }

  map(callBack) {
    for (
      let elementsIndex = 0;
      elementsIndex < this.length();
      elementsIndex++
    ) {
      this.elements[elementsIndex] = callBack(
        this.elements[elementsIndex],
        elementsIndex,
        this.elements,
      );
    }

    return this.elements;
  }
}

export default CodersArray;
