const ResumeButton = () : JSX.Element => {
  const downloadFile = () : void => {
    const link = document.createElement('a');
    link.href = '/ALVIN-HARUNA.pdf';
    link.download = 'ALVIN-HARUNA.pdf';
    document.body.appendChild(link);
    link.click();
  };

  return (
    <button type="button" className="border-4 border-primary px-4 py-2 text-xl text-primary rounded font-semibold leading-6 text-gray-900" onClick={downloadFile}>
      Resume
    </button>
  );
}

export default ResumeButton;
