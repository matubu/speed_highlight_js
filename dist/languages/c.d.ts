declare const _default: ({
    match: RegExp;
    sub: string;
    expand?: undefined;
    type?: undefined;
} | {
    expand: string;
    match?: undefined;
    sub?: undefined;
    type?: undefined;
} | {
    type: string;
    match: RegExp;
    sub: {
        type: string;
        match: RegExp;
    }[];
    expand?: undefined;
} | {
    match: RegExp;
    sub: ({
        type: string;
        match: RegExp;
        sub?: undefined;
    } | {
        match: RegExp;
        sub: string;
        type?: undefined;
    })[];
    expand?: undefined;
    type?: undefined;
} | {
    type: string;
    match: RegExp;
    sub?: undefined;
    expand?: undefined;
})[];
export default _default;
//# sourceMappingURL=c.d.ts.map