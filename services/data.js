
class Data {
  static getImageData() {
    return fetch("https://raw.githubusercontent.com/chochim/ProjectX/master/test.json")
    .then(response => response.json())
    .catch(error=>console.log(error)) //to catch the errors if any
  }
}

export { Data };