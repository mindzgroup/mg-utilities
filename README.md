# Productivity Utility Functions for JavaScript / TypeScript
A collection of commonly used utility function.

## List of Functions
### GetNestedPropertyValue
**_Signature_**
```TS
GetNestedPropertyValue: <T>(obj: any, propPath: string, returnUndefined?: boolean) => T;
```
**_Sample Usage:_ TypeScript**
```TS
import { GetNestedPropertyValue } from '@mindzgroup/utilities';

let dataObject = { ... };

let value = GetNestedPropertyValue(dataObject, 'path.to.property');
```
### SetNestedPropertyValue
_Note: this function modifies the target object and overwrites the existing value at the given path by default. In case your requirement want the values to be merged at destination please use `mergeValue = true` as the function parameter._

**_Signature_**
```TS
SetNestedPropertyValue: (target: any, path: string, value: any, mergeValue?: boolean): boolean;
```
**_Sample Usage:_ TypeScript**
```TS
import { SetNestedPropertyValue } from '@mindzgroup/utilities';

let dataObject = { ... };
let value: string = 'value';

// without merge
SetNestedPropertyValue(dataObject, 'path.to.property', value);

// with merge
SetNestedPropertyValue(dataObject, 'path.to.property', value, true);
```