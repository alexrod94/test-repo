import React, { useState } from "react";

const App = () => {
  const [flexDirection, setFlexDirection] = useState("row");
  const [justifyContent, setJustifyContent] = useState("flex-start");
  const [alignItems, setAlignItems] = useState("stretch");
  const [flexWrap, setFlexWrap] = useState("nowrap");

  const flexItems = Array(5)
    .fill(null)
    .map((_, index) => (
      <div
        key={index}
        className="bg-blue-500 text-white p-4 m-2 rounded shadow flex items-center justify-center"
        style={{ minWidth: "80px", minHeight: "80px" }}
      >
        {index + 1}
      </div>
    ));

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6">Playground de Flexbox</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Dirección (flex-direction)
              </label>
              <select
                className="w-full p-2 border rounded bg-white"
                value={flexDirection}
                onChange={(e) => setFlexDirection(e.target.value)}
              >
                <option value="row">row</option>
                <option value="row-reverse">row-reverse</option>
                <option value="column">column</option>
                <option value="column-reverse">column-reverse</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Alineación principal (justify-content)
              </label>
              <select
                className="w-full p-2 border rounded bg-white"
                value={justifyContent}
                onChange={(e) => setJustifyContent(e.target.value)}
              >
                <option value="flex-start">flex-start</option>
                <option value="flex-end">flex-end</option>
                <option value="center">center</option>
                <option value="space-between">space-between</option>
                <option value="space-around">space-around</option>
                <option value="space-evenly">space-evenly</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Alineación cruzada (align-items)
              </label>
              <select
                className="w-full p-2 border rounded bg-white"
                value={alignItems}
                onChange={(e) => setAlignItems(e.target.value)}
              >
                <option value="stretch">stretch</option>
                <option value="flex-start">flex-start</option>
                <option value="flex-end">flex-end</option>
                <option value="center">center</option>
                <option value="baseline">baseline</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Envolver elementos (flex-wrap)
              </label>
              <select
                className="w-full p-2 border rounded bg-white"
                value={flexWrap}
                onChange={(e) => setFlexWrap(e.target.value)}
              >
                <option value="nowrap">nowrap</option>
                <option value="wrap">wrap</option>
                <option value="wrap-reverse">wrap-reverse</option>
              </select>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Contenedor Flex</h3>
            <div
              className="min-h-64 bg-gray-100 rounded-lg p-4 border-2 border-dashed border-gray-300"
              style={{
                display: "flex",
                flexDirection,
                justifyContent,
                alignItems,
                flexWrap,
              }}
            >
              {flexItems}
            </div>
          </div>

          <div className="mt-6 bg-gray-50 p-4 rounded">
            <h3 className="text-lg font-semibold mb-2">CSS Actual</h3>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
              {`.contenedor-flex {
  display: flex;
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  flex-wrap: ${flexWrap};
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
