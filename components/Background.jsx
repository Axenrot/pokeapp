const Background = ({ children }) => {
  return (
    <div className="bg-gradient-to-r from-blue-300 via-green-200 to-blue-300 min-h-[100vh]">
      {children}
    </div>
  );
};

export default Background;
