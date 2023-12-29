/**
 * @Owner: Rishabh Anand
 * @Desc: Types - Global - Custom @camwiegert-typical
 **/

declare module "@camwiegert/typical" {
  export function type(node: HTMLElement | null, ...args: any[]): Promise<void>;

  function edit(node: HTMLElement, text: string): Promise<void>;

  function wait(ms: number): Promise<void>;

  function perform(
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
