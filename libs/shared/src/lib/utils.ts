export function clone(value: object): object {
  return JSON.parse(JSON.stringify(value));
}

export function compare(value1: object, value2: object): boolean {
  return JSON.stringify(value1) === JSON.stringify(value2);
}

export function toLongNumber(value: number|string, characterBetween: string = ','): string {
  if (typeof value === 'number') {
    value = value.toFixed();
  }

  return String(value).replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, characterBetween);
}

export function toPrice(value: string|number): string {
  return `CHF ${toLongNumber(value)}`;
}

export function getUrlSearchParams(): URLSearchParams {
  return new URLSearchParams(window.location.search);
}

export function getUrlParameter(name: string): string {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export function checkFocus(element: HTMLElement): boolean {
  return document.activeElement === element;
}

export function searchFilterCheck(value: string, searchValue: string): boolean {
  return value.toLowerCase().trim().includes(searchValue.toLowerCase().trim());
}

export function getSearchHTML(value: string, searchValue: string): string {
  if (searchValue.trim()) {
    return value.replace(new RegExp(searchValue.trim(), 'ig'), (match) => `<mark>${match}</mark>`);
  } else {
    return value;
  }
}

export function repeatFilterCheck(value: object, values: Array<object>): boolean {
  return !values.some(v => JSON.stringify(v) === JSON.stringify(value));
}

export function searchFilter(values: Array<string>, searchValue: string): Array<string> {
  if (searchValue) {
    return values.filter((value) => searchFilterCheck(value, searchValue));
  } else {
    return values;
  }
}

export function isDefined(value: undefined|null|string|number|boolean|object): boolean {
  return value !== undefined && value !== null;
}
