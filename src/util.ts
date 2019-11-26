import { MarkdownDataNode } from './types/index';

/**@func findMostRecentlyPastIndex
 * Finds index of most recently past Markdown post. Implemented via a modified binary search.
 * @param {MarkdownDataNode[]} edges Array of Markdown nodes. Assumes dates are sorted in ASC order!
 * @return {number} The index of the most recently past Markdown post. Returns -1 if current date is the earliest date.
 * @throws Error if edges size is 0.
 */
export const findMostRecentlyPastIndex = (
    edges: MarkdownDataNode[]
): number => {
    if (edges.length === 0) {
        throw Error('Error: There are no Markdown nodes for searching!');
    }

    const currDate = Date.now();

    // Case: Returns latest post if today is latest date
    // Case: Returns -1 if today is earliest date
    if (Date.parse(edges[edges.length - 1].node.frontmatter.date) < currDate) {
        return edges.length - 1;
    } else if (Date.parse(edges[0].node.frontmatter.date) > currDate) {
        return -1;
    }

    // Case: Return index of most recently past post
    const dates = edges.map((edge: MarkdownDataNode) =>
        Date.parse(edge.node.frontmatter.date)
    );

    return lowestNeighborIndexBinarySearch(dates, currDate);
};

/**@func lowestNeighborIndexBinarySearch
 * Finds via binary search: the index of the query value, of the nearest lower array value, or of the lowest array value if query value is the lowest.
 * @param {number[]} arr Array of numbers. Assumes dates are sorted in ASC order!
 * @param {number} val Value whose index to search for.
 * @return {number} The index of the query value. Otherwise, the index of the lowest neighbor.
 * @throws Error if array size is 0.
 */
export const lowestNeighborIndexBinarySearch = (
    arr: number[],
    val: number
): number => {
    if (arr.length === 0) {
        throw Error('Error: Array has size less than 1!');
    }

    let currIndex = Math.floor(arr.length / 2);
    let finalStep = Math.floor(Math.log2(arr.length)) - 1;
    let indexModifier = 0;

    for (let i = 0; i < Math.floor(Math.log2(arr.length)); i++) {
        if (arr[currIndex] === val) {
            return currIndex;
        }

        indexModifier = Math.max(
            Math.floor(Math.floor(arr.length / (2 * (i + 1))) / 2),
            1
        );

        if (arr[currIndex] < val) {
            //Look into upper half
            if (
                i < finalStep ||
                (arr.length % 2 === 0 && val >= arr[currIndex + indexModifier])
            ) {
                currIndex += indexModifier;
            }

            // Corner Case for two-off odd-sized arrays
            if (
                i === finalStep &&
                (arr.length % 2 === 1 && val >= arr[currIndex + indexModifier])
            ) {
                currIndex += indexModifier;
                // Inner Corner Case for one-off odd-sized arrays
                if (
                    currIndex !== arr.length &&
                    val >= arr[currIndex + indexModifier]
                ) {
                    currIndex += indexModifier;
                }
            }
        } else if (arr[currIndex] > val) {
            //Look into lower half
            currIndex -= indexModifier;
            // Corner Case due to one-off
            if (i === finalStep && (currIndex != 0 && val < arr[currIndex])) {
                currIndex -= indexModifier;
            }
        }
    }
    return currIndex;
};
