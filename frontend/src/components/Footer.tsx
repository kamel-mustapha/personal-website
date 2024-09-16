export function Footer() {
  return (
    <>
      <div className="border-t border-gray-800 mt-32 text-center py-8 flex flex-col justify-center items-center gap-6">
        <h3 className="text-2xl">Kamel Dine</h3>
        <p className="max-w-[500px] text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem cumque dolor incidunt itaque! Ut, nihil.</p>
        <div className="flex gap-6 my-4">
          <i className="fa-brands fa-facebook-f fa-lg"></i>
          <i className="fa-brands fa-linkedin-in fa-lg"></i>
          <i className="fa-brands fa-github fa-lg"></i>
        </div>
      </div>
      <div className="bg-secondary text-text opacity-90 text-center py-4">Copyright ©2024 Kamel Dine.</div>
    </>
  );
}
