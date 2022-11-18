import { useRecoilState } from "recoil";
import "./App.css";
import { themeAtom } from "./atoms/themeAtom";
import Header from "./components/header/Header";
import Form from "./form/Form";

function App() {
  const [theme] = useRecoilState(themeAtom);

  return (
    <div className={theme}>
      <div className="dark:bg-darkBackground dark:text-white min-h-[100vh]">
        <Header />
        <div className="flex items-center justify-center h-[90vh]">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
