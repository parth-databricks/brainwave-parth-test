import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}

      <div className="pt-[4.75rem] lg:pt-[5.24rem] overflow-hidden">
        <Header />

        {/* <Button className="mt-10" href="#login">
          Something
        </Button> */}
      </div>
      <ButtonGradient />
    </>
  );
}
