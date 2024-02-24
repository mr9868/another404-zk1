import { GenericProvableExtended } from './generic.js';
export { ProvableFromLayout, GenericLayout };
declare type GenericTypeMap<Field, Bool, UInt32, UInt64, Sign, PublicKey, AuthRequired, AuthorizationKind, TokenId> = {
    Field: Field;
    Bool: Bool;
    UInt32: UInt32;
    UInt64: UInt64;
    Sign: Sign;
    PublicKey: PublicKey;
    AuthRequired: AuthRequired;
    AuthorizationKind: AuthorizationKind;
    TokenId: TokenId;
};
declare type AnyTypeMap = GenericTypeMap<any, any, any, any, any, any, any, any, any>;
declare type TypeMapValues<TypeMap extends AnyTypeMap, JsonMap extends AnyTypeMap> = {
    [K in keyof TypeMap & keyof JsonMap]: GenericProvableExtended<TypeMap[K], JsonMap[K], TypeMap['Field']>;
};
declare function ProvableFromLayout<TypeMap extends AnyTypeMap, JsonMap extends AnyTypeMap>(TypeMap: TypeMapValues<TypeMap, JsonMap>, customTypes: Record<string, GenericProvableExtended<any, any, TypeMap['Field']>>): {
    provableFromLayout: <T, TJson>(typeData: GenericLayout<TypeMap>) => {
        sizeInFields(): number;
        toFields(value: T): TypeMap["Field"][];
        toAuxiliary(value?: T | undefined): any[];
        fromFields(fields: TypeMap["Field"][], aux: any[]): T;
        toJSON(value: T): TJson;
        fromJSON(json: TJson): T;
        check(value: T): void;
        toInput(value: T): {
            fields?: TypeMap["Field"][] | undefined;
            packed?: [TypeMap["Field"], number][] | undefined;
        };
        emptyValue(): T;
    };
    toJSONEssential: (typeData: GenericLayout<TypeMap>, value: any) => any;
};
declare type WithChecked<TypeMap extends AnyTypeMap> = {
    checkedType?: GenericLayout<TypeMap>;
    checkedTypeName?: string;
};
declare type BaseLayout<TypeMap extends AnyTypeMap> = {
    type: keyof TypeMap;
} & WithChecked<TypeMap>;
declare type RangeLayout<TypeMap extends AnyTypeMap, T = BaseLayout<TypeMap>> = {
    type: 'object';
    name: string;
    keys: ['lower', 'upper'];
    entries: {
        lower: T;
        upper: T;
    };
} & WithChecked<TypeMap>;
declare type OptionLayout<TypeMap extends AnyTypeMap, T = BaseLayout<AnyTypeMap>> = {
    type: 'option';
} & ({
    optionType: 'closedInterval';
    rangeMin: any;
    rangeMax: any;
    inner: RangeLayout<TypeMap, T>;
} | {
    optionType: 'flaggedOption';
    inner: T;
} | {
    optionType: 'orUndefined';
    inner: T;
}) & WithChecked<TypeMap>;
declare type ArrayLayout<TypeMap extends AnyTypeMap> = {
    type: 'array';
    inner: GenericLayout<TypeMap>;
    staticLength: number | null;
} & WithChecked<TypeMap>;
declare type ObjectLayout<TypeMap extends AnyTypeMap> = {
    type: 'object';
    name: string;
    keys: string[];
    entries: Record<string, GenericLayout<TypeMap>>;
} & WithChecked<TypeMap>;
declare type GenericLayout<TypeMap extends AnyTypeMap> = OptionLayout<TypeMap> | BaseLayout<TypeMap> | ObjectLayout<TypeMap> | ArrayLayout<TypeMap>;
