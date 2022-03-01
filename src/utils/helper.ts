export class Helper {
  static renderImage(idImage: string): string {
    return process.env.REACT_APP_API_URL + '/file/' + idImage
  }
  static isEmptyObject(object: any): Boolean {
    return Object.keys(object).length > 0 ? true : false
  }
}