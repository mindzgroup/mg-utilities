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