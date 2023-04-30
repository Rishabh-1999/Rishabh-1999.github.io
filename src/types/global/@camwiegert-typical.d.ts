/*
 * Owner: Rishabh Anand
 * Desc: Custom @camwiegert-typical global types
 */

declare module "@camwiegert/typical" {
  export function type(node: HTMLElement | null, ...args: any[]): Promise<void>;

  declare function edit(node: HTMLElement, text: string): Promise<void>;

  declare function wait(ms: number): Promise<void>;

  declare function perform(
    node: HTMLElement,
    edits: any,
    speed?: number
  ): Promise<void>;

  export function editor(
    edits: any
  ): Generator<(node: any) => number, void, unknown>;

  export function writer(
    [...text]: Iterable<any>,
    startIndex?: number,
    endIndex?: number
  ): Generator<string, void, unknown>;

  export function deleter(
    [...text]: Iterable<any>,
    startIndex?: number,
    endIndex?: number
  ): Generator<string, void, unknown>;

  export function getOverlap(start: any, [...end]: Iterable<any>): number;
}
