function ResumeButton() {
  const downloadFile = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
  };

  return (
    <button className="border-4 border-primary px-4 py-2 text-xl text-primary rounded font-semibold leading-6 text-gray-900" onClick={downloadFile}>
      Resume
    </button>
  );
}

export default ResumeButton;
