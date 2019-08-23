class Utilities {
  public static getNestedPropertyValue = <T>(obj: any, propPath: string, returnUndefined: boolean = false): T => {
    if (!propPath || !obj) return undefined;
    let pathParts = propPath.split('.');

    return pathParts.reduce((prev, curr) => {
      if (!!prev && !!prev[curr]) return (prev[curr]);
      else return returnUndefined ? undefined : null;
    }, obj) as T;
  }
};

const GetNestedPropertyValue = Utilities.getNestedPropertyValue;

export {
  GetNestedPropertyValue
}