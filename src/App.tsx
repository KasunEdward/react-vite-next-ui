import FileViewer from "./components/FileViewer";
import Order from "./components/Order";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* <Order/> */}
      <FileViewer fileUrl="backgroundImage.pdf" fileType="application/pdf"/>
    </div>
  );
}

export default App;
