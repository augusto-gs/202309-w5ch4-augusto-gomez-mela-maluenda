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
}

export default CodersArray;
