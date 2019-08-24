import { merge } from 'lodash';
class Utilities {
  public static getNestedPropertyValue = <T>(obj: any, propPath: string, returnUndefined: boolean = false): T => {
    if (!propPath || !obj) return undefined;
    let pathParts = propPath.split('.');

    return pathParts.reduce((prev, curr) => {
      if (!!prev && prev.hasOwnProperty(curr)) return (prev[curr]);
      else return returnUndefined ? undefined : null;
    }, obj) as T;
  }

  public static setNestedPropertyValue(target: any, path: string, value: any, mergeValue: boolean = false): boolean {
    if (typeof target !== 'object' || !path || typeof path !== 'string') {
      return false;
    }

    if (!!mergeValue && typeof value !== 'object') {
      return false
    }

    let pathParts: Array<any> = path.split('.');
    let pathNode: any = pathParts.shift();
    if (pathParts.length >= 1) {
      !target[pathNode] ? (isNaN(pathParts[0]) ? target[pathNode] = {} : target[pathNode] = []) : '';
      Utilities.setNestedPropertyValue(target[pathNode], pathParts.join('.'), value, mergeValue);
    } else {
      if (mergeValue) {
        merge(target[pathNode], value);
      }
      else {
        target[pathNode] = value;
      }
    }
    return true;
  }
}

const GetNestedPropertyValue = Utilities.getNestedPropertyValue;
const SetNestedPropertyValue = Utilities.setNestedPropertyValue;

export {
  GetNestedPropertyValue,
  SetNestedPropertyValue,
}