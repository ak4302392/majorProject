import Club from "./Club";

const Clubs = () => {
  return (
    <div className="px-40 grid grid-cols-3 gap-1 content-start">
      <Club
        image={require("../../images/manit_logo.jpg")}
        title="Maulana Azad National Institute of Technology, Bhopal"
        details="Maulana Azad National Institute of Technology Bhopal is a public technical university located in Bhopal, Madhya Pradesh, India."
      />
      <Club
        image={require("../../images/manit_logo.jpg")}
        title="Maulana Azad National Institute of Technology, Bhopal"
        details="Maulana Azad National Institute of Technology Bhopal is a public technical university located in Bhopal, Madhya Pradesh, India."
      />
      <Club
        image={require("../../images/manit_logo.jpg")}
        title="Maulana Azad National Institute of Technology, Bhopal"
        details="Maulana Azad National Institute of Technology Bhopal is a public technical university located in Bhopal, Madhya Pradesh, India."
      />
    </div>
  );
};

export default Clubs;
