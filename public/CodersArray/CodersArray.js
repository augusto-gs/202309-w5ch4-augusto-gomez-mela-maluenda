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

    return addedValues;
  }

  map(callBack) {
    const arrayVacio = new CodersArray();
    for (
      let elementsIndex = 0;
      elementsIndex < this.length();
      elementsIndex++
    ) {
      arrayVacio.push(
        callBack(this.elements[elementsIndex], elementsIndex, this.elements),
      );
    }

    return arrayVacio.elements;
  }

  filter(callBack) {
    const arrayVacio = new CodersArray();
    for (
      let elementsIndex = 0;
      elementsIndex < this.length();
      elementsIndex++
    ) {
      if (
        callBack(this.elements[elementsIndex], elementsIndex, this.elements)
      ) {
        arrayVacio.push(this.elements[elementsIndex]);
      }
    }

    return arrayVacio.elements;
  }
}

export default CodersArray;
