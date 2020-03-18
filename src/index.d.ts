type FlatArray = any[];
type NestedArray = FlatArray | NestedArray[];

declare function flatten(arr: NestedArray): FlatArray;

export default flatten;