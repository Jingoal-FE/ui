export function ieGT9() {
    if (typeof document === 'undefined') {
        return false;
    }
    const documentMode = document.documentMode || 0;
    return documentMode > 9;
}

export function fixControlledValue(value) {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return value;
}