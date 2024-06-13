// containing an initial set of nodes for the flowchart
import { MarkerType } from "reactflow";
export const initialNodes = [
  {
    id: "1",
    type: "customNode",
    data: { label: "text message 1" },
    position: { x: 200, y: 200 },
    markerEnd: {
      type: MarkerType.Arrow,
    },
  },
];

// representing the initial set of edges (connections) between nodes in the flowchart.
export const initialEdges = [];

// This is an object containing different types of draggable items that can be used in the flowchart
export const ItemTypes = {
  NODE: "node",
};
