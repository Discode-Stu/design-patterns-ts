type ObjectType = {
  key1: 1
  key2: 2
}

// type result = keyof ObjectType
// const test: result = 'key1'
//=================
// type Obj = {
//     0: 'I am 0';
//     1: 'I am 1';
//     p0: 'c';
//     p1: 'd';
// }

// type test1 = Obj['p1']
// type test0 = Obj[0]

// const test0Const: test0 = "I am 0"
//____________________
// type Obj = {
//     a: 'A'
//     b: 'B';
//     c: number;
// }

// type res = Obj[keyof Obj]

// --------------
// type set1 = 'a' |'b'|'c'
// type set2 = 'b' | 'c' | 'd'

// type UnionType = set1 | set2

// type intersections = set1 & set2

// -------------------------------------------------------------------
// --- If you want to control what props a component takes -----------
// -------------------------------------------------------------------
// type CanAcceptProp<ComponentProps, Prop> = Prop extends keyof ComponentProps ? true : false

// type ButtonProps = {
//     size: 'small' | 'medium' | 'large';
//     color: 'red' |'blue'| 'green'

// }

// type CanButtonAcceptColor = CanAcceptProp<ButtonProps, 'color'>

// type CanButtonAccceptIcon = CanAcceptProp<ButtonProps, 'icon'>

// //output true
// type Result1 = CanButtonAcceptColor;

// //output false
// type Result2 = CanButtonAccceptIcon;

// -------------------------------------------------------------------
// --- How to do type for a key -----------
// -------------------------------------------------------------------

// type Obj = {a: string}

// type ObjWithStringKeys = {[key: string]: number}

// -------------------------------------------------------------------
// --- How to do iteration over object -----------
// -------------------------------------------------------------------
// type Obj = {
//     "a": number,
//     "b": number
//     "c": number
// }

// type Obj = {
//     [K in 'a' |'b'|'c']: number;
// }

// type mask = {
//     [K in keyof Obj]: boolean;
// }

// ____________________
type Obj = {
  one: 1
  two: 2
  three: 3
  four: 4
}

type newType = Pick<Obj, "one" | "three">

type newType2 = Omit<Obj, "one" | "three">
