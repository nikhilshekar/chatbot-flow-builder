import { useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../Constants/Constants";
import { useReactFlow, useNodesState } from "reactflow";
import { initialNodes } from "../Constants/Constants";
let nodeCount = 2;
const useDropNode = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);

  // allowing the component to utilize functionality related to managing the flowchart
  const { project } = useReactFlow();

  // function that handles the dropping of an item onto the canvas. It calculates the canvas position, creates a new node with a unique id and labe
  const handleDrop = useCallback(
    (item, monitor) => {
      const clientOffset = monitor?.getClientOffset();
      if (!clientOffset) return;
      const canvasPosition = project({
        x: clientOffset.x,
        y: clientOffset.y,
      });
      const id = uuidv4();
      const label = `text message ${nodeCount}`;
      setNodes((nds) => [
        ...nds,
        {
          id: id,
          type: item?.type,
          data: { label: label },
          position: { x: canvasPosition.x - 100, y: canvasPosition.y - 100 },
        },
      ]);
      nodeCount++;
    },
    [project, setNodes]
  );

  // make an element a drop target, allowing it to accept draggable items
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes?.NODE,
    drop: handleDrop,
    collect: (monitor) => ({
      isOver: !!monitor?.isOver(),
    }),
  }));
  return { nodeCount, isOver, drop, nodes, onNodesChange, setNodes };
};

export default useDropNode;
