export const treeChartConfig = {
    container: "#family-tree",
    levelSeparation: 50,
    nodeAlign: 'BOTTOM',
    rootOrientation: 'NORTH',
    connectors: {
        type: "step",
        style: {
            "arrow-end": "open-wide-medium",
            "stroke": "#998B70",
            "stroke-dasharray": "-", //"", "-", ".", "-.", "-..", ". ", "- ", "--", "- .", "--.", "--.."
            "stroke-width": "2.5",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
        },
    },
    node: { HTMLclass: "node" },
}