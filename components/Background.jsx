const Background = ({ children }) => {
  return (
    <div className="min-h-[100vh] bg-gengarbg bg-cover bg-fixed pb-10">
      {children}
    </div>
  );
};

export default Background;
