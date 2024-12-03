import Minelead from "../../assets/minelead-home.png";

interface PresentationProps {
  onClose: () => void;
}

export function Presentation(props: PresentationProps) {
  const { onClose } = props;
  return (
    <div className="project-dialog fixed w-screen h-screen left-0 top-0 z-[1000] bg-black bg-opacity-15 backdrop-blur-sm">
      <div className="flex flex-col bg-secondary border border-purple-950 bg-opacity-95 lg:w-11/12 h-full lg:h-[95%] top-0 lg:top-6 lg:rounded-xl absolute left-0 right-0 mx-auto max-w-[1980px] max-h-[1080px]">
        <div className="text-right pr-6 py-2 bg-button rounded-t-xl">
          <span className="text-3xl lg:text-2xl select-none cursor-pointer hover:opacity-70 active:opacity-50" onClick={onClose}>
            x
          </span>
        </div>
        <div className="flex flex-col lg:flex-row h-full overflow-hidden">
          <div className="p-4 border-r border-purple-950 flex flex-col gap-8">
            <img src={Minelead} className="h-full w-full object-cover rounded-lg" alt="" />
            <div className="h-8">
              <div className="flex justify-center items-center gap-2">
                <span className="block h-2 w-2 bg-purple-500 rounded-full duration-200 ease-in"></span>
                <span className="block h-2 w-2 bg-purple-900 rounded-full duration-200 ease-in"></span>
                <span className="block h-2 w-2 bg-purple-900 rounded-full duration-200 ease-in"></span>
              </div>
            </div>
          </div>
          <div className="h-full overflow-hidden lg:w-3/4 p-4 lg:p-8 flex flex-col ">
            <div className="space-y-8 h-full overflow-auto pr-6 pb-16">
              <section className="space-y-4">
                <h3 className="text-text text-3xl">Context</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem numquam harum fugit assumenda nisi cumque natus dolorem vero, itaque quos voluptatibus pariatur architecto libero facere
                  voluptatum minima dignissimos! Obcaecati, deserunt!
                </p>
              </section>
              <section className="space-y-4">
                <h3 className="text-text text-3xl">My role</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem numquam harum fugit assumenda nisi cumque natus dolorem vero, itaque quos voluptatibus pariatur architecto libero facere
                  voluptatum minima dignissimos! Obcaecati, deserunt!
                </p>
              </section>
              <section className="space-y-4">
                <h3 className="text-text text-3xl">Tasks</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus minima quis mollitia esse enim cum omnis dicta eius, saepe ad atque nam voluptatibus sed quidem tenetur tempore
                  autem facilis minus!
                </p>
              </section>
              <section className="space-y-4">
                <h3 className="text-text text-3xl">Tasks</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus minima quis mollitia esse enim cum omnis dicta eius, saepe ad atque nam voluptatibus sed quidem tenetur tempore
                  autem facilis minus!
                </p>
              </section>
              <section className="space-y-4">
                <h3 className="text-text text-3xl">Tasks</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus minima quis mollitia esse enim cum omnis dicta eius, saepe ad atque nam voluptatibus sed quidem tenetur tempore
                  autem facilis minus!
                </p>
              </section>
              <section className="space-y-4">
                <h3 className="text-text text-3xl">Tasks</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus minima quis mollitia esse enim cum omnis dicta eius, saepe ad atque nam voluptatibus sed quidem tenetur tempore
                  autem facilis minus!
                </p>
              </section>
            </div>
            <div className="flex gap-4 lg:gap-8 shadow-xl border-purple-900 py-4 bg-button rounded-full justify-center items-center border ">
              <span className="text-text">Description</span>
              <span className="opacity-50 hover:opacity-100 hover:text-text duration-100 ease-in cursor-pointer select-one">Technologies</span>
              <span className="opacity-50 hover:opacity-100 hover:text-text duration-100 ease-in cursor-pointer select-none">Architectures</span>
              <span className="opacity-50 hover:opacity-100 hover:text-text duration-100 ease-in cursor-pointer select-none">Conclusion</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
