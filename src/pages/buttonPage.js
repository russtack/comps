import { GoBell, GoDatabase, GoCloudDownload } from "react-icons/go";

import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("buton presed");
  };
  return (
    <div>
      <div>
        <Button success rounded outline className="mb-5">
          <GoBell /> Clicke mich!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoDatabase />
          Heyyyy
        </Button>
      </div>
      <div>
        <Button warning outline>
          <GoCloudDownload /> Supppp
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Blah
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Brut
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
