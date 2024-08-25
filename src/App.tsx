import FileViewer from "./components/FileViewer";
import Order from "./components/Order";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <FileViewer fileUrl="./backgroundImage.pdf" fileType="application/pdf" />

      <FileViewer
        fileUrl="src/assets/images/fishRoll.jpg"
        fileType="image/jpg"
      />
    </div>
  );
}

export default App;
