import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
// import { isImage } from './utils'; // Utility function to determine if the file is an image

// Set the workerSrc for pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

interface FileViewerProps {
  fileUrl: string;
  fileType: string;
}

export const isImage = (fileType: string): boolean => {
    return fileType.startsWith('image/');
  };

const FileViewer: React.FC<FileViewerProps> = ({ fileUrl, fileType }) => {
  if (isImage(fileType)) {
    return <img src={fileUrl} alt="File" style={{ maxWidth: '100%' }} />;
  } else if (fileType === 'application/pdf') {
    return (
      <div>
        <Document file={fileUrl}>
          <Page pageNumber={1} />
        </Document>
      </div>
    );
  } else if (
    fileType === 'application/msword' || 
    fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ) {
    return (
      <div>
        <a href={fileUrl} download>
          Download Word Document
        </a>
      </div>
    );
  } else {
    return <div>Unsupported file type</div>;
  }
};

export default FileViewer;
